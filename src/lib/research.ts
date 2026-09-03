import { getCollection } from 'astro:content';
import { legacyQualityScores } from './quality-scores';

export const QUALITY_MAX = {
  handsOnAuthenticity: 20,
  merchantUsefulness: 20,
  researchDepth: 15,
  evidenceScreenshots: 10,
  balancedCriticism: 10,
  originalFindings: 10,
  decisionClarity: 10,
  editorialQuality: 5,
} as const;

export const QUALITY_LABELS: Record<keyof typeof QUALITY_MAX, string> = {
  handsOnAuthenticity: 'Hands-on authenticity',
  merchantUsefulness: 'Merchant usefulness',
  researchDepth: 'Research depth',
  evidenceScreenshots: 'Evidence / screenshots',
  balancedCriticism: 'Balanced criticism',
  originalFindings: 'Original findings',
  decisionClarity: 'Decision clarity',
  editorialQuality: 'Writing / editorial quality',
};

export type QualityKey = keyof typeof QUALITY_MAX;
export type QualityScore = Partial<Record<QualityKey, number>>;
export type QualityNotes = Partial<Record<QualityKey, string>>;

export type ResearchRecord = {
  id: string;
  title: string;
  summary: string | null;
  app: string | null;
  category: string | null;
  reviewer: string | null;
  testingLevel: string | null;
  researchDate: string | null;
  clickupUrl: string | null;
  appStoreUrl: string | null;
  qualityScore: QualityScore | null;
  qualityNotes: QualityNotes;
  qualityTotal: number | null;
  qualityStatus: string;
};

const FIELDS = {
  app: ['app'],
  category: ['category'],
  reviewer: ['human reviewer', 'human reviewer / assignee', 'reviewer', 'assignee'],
  testingLevel: ['testing level'],
  researchDate: ['research/testing date', 'research date', 'testing date'],
  clickupUrl: ['clickup task', 'clickup'],
  appStoreUrl: ['shopify app store', 'app store'],
} as const;

const stripMarkdown = (value: string) =>
  value
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '$1')
    .replace(/[*_`]/g, '')
    .trim();

const firstUrl = (value: string) => value.match(/https?:\/\/[^\s)>\]]+/)?.[0] ?? null;

const readFields = (body: string) => {
  const found = new Map<string, string>();
  for (const line of body.split('\n')) {
    const match = line.match(/^\s*[-*]\s+\*\*(.+?):?\*\*:?\s*(.+?)\s*$/);
    if (!match) continue;
    const label = match[1].replace(/:$/, '').trim().toLowerCase();
    if (!found.has(label)) found.set(label, match[2].trim());
  }
  return found;
};

const pick = (fields: Map<string, string>, labels: readonly string[]) => {
  for (const label of labels) {
    const value = fields.get(label);
    if (value) return value;
  }
  return null;
};

export const getQualityStatus = (total: number | null) => {
  if (total === null) return 'Not scored';
  if (total >= 90) return 'Blinto Standard';
  if (total >= 80) return 'Publishable';
  if (total >= 70) return 'Revision required';
  return 'Not publishable';
};

export const getQualityTotal = (score: QualityScore | null) => {
  if (!score) return null;
  const keys = Object.keys(QUALITY_MAX) as QualityKey[];
  if (!keys.some((key) => typeof score[key] === 'number')) return null;
  return keys.reduce((total, key) => total + Math.max(0, Math.min(QUALITY_MAX[key], Number(score[key] ?? 0))), 0);
};

export const toResearchRecord = (entry: { id: string; body?: string; data?: Record<string, any> }): ResearchRecord => {
  const body = entry.body ?? '';
  const fields = readFields(body);
  const raw = (key: keyof typeof FIELDS) => pick(fields, FIELDS[key]);
  const text = (key: keyof typeof FIELDS) => {
    const value = raw(key);
    return value ? stripMarkdown(value) : null;
  };
  const url = (key: keyof typeof FIELDS) => {
    const value = raw(key);
    return value ? firstUrl(value) : null;
  };
  const heading = body.match(/^#\s+(.+)$/m)?.[1];
  const quote = body.match(/^>\s*(.+)$/m)?.[1];
  const legacy = legacyQualityScores[entry.id];
  const qualityScore = entry.data?.qualityScore && typeof entry.data.qualityScore === 'object'
    ? entry.data.qualityScore as QualityScore
    : legacy?.score ?? null;
  const qualityNotes = entry.data?.qualityNotes && typeof entry.data.qualityNotes === 'object'
    ? entry.data.qualityNotes as QualityNotes
    : legacy?.notes ?? {};
  const qualityTotal = getQualityTotal(qualityScore);

  return {
    id: entry.id,
    title: entry.data?.title ?? (heading ? stripMarkdown(heading) : entry.id.replaceAll('-', ' ')),
    summary: quote ? stripMarkdown(quote) : null,
    app: entry.data?.app ?? text('app'),
    category: entry.data?.category ?? text('category'),
    reviewer: entry.data?.reviewer ?? text('reviewer'),
    testingLevel: entry.data?.testingLevel ?? text('testingLevel'),
    researchDate: entry.data?.researchDate ?? text('researchDate'),
    clickupUrl: entry.data?.clickupUrl ?? url('clickupUrl'),
    appStoreUrl: entry.data?.appStoreUrl ?? url('appStoreUrl'),
    qualityScore,
    qualityNotes,
    qualityTotal,
    qualityStatus: getQualityStatus(qualityTotal),
  };
};

export const getResearchRecords = async (): Promise<ResearchRecord[]> => {
  const entries = await getCollection('research');
  return entries.map(toResearchRecord).sort((a, b) => a.title.localeCompare(b.title));
};

export const getResearchIds = async (): Promise<Set<string>> => {
  const entries = await getCollection('research');
  return new Set(entries.map((entry) => entry.id));
};
