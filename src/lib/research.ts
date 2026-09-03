import { getCollection } from 'astro:content';

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
};

const FIELDS: Record<keyof Omit<ResearchRecord, 'id' | 'title' | 'summary'>, string[]> = {
  app: ['app'],
  category: ['category'],
  reviewer: ['human reviewer', 'human reviewer / assignee', 'reviewer', 'assignee'],
  testingLevel: ['testing level'],
  researchDate: ['research/testing date', 'research date', 'testing date'],
  clickupUrl: ['clickup task', 'clickup'],
  appStoreUrl: ['shopify app store', 'app store'],
};

// Research files are internal working records without frontmatter, so their
// metadata is read from the leading heading and the "Review Record" bullets.
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

const pick = (fields: Map<string, string>, labels: string[]) => {
  for (const label of labels) {
    const value = fields.get(label);
    if (value) return value;
  }
  return null;
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

  return {
    id: entry.id,
    title: entry.data?.title ?? (heading ? stripMarkdown(heading) : entry.id.replaceAll('-', ' ')),
    summary: quote ? stripMarkdown(quote) : null,
    app: text('app'),
    category: text('category'),
    reviewer: text('reviewer'),
    testingLevel: text('testingLevel'),
    researchDate: text('researchDate'),
    clickupUrl: url('clickupUrl'),
    appStoreUrl: url('appStoreUrl'),
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
