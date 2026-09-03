import type { QualityNotes, QualityScore } from './research';

export type LegacyQualityScore = {
  score: QualityScore;
  notes: QualityNotes;
};

// Retrospective scores for reviews completed before the structured scorecard
// was added to research files. New reviews should store qualityScore and
// qualityNotes directly in their research frontmatter.
export const legacyQualityScores: Record<string, LegacyQualityScore> = {
  'judge-me-reviews': {
    score: {
      handsOnAuthenticity: 14,
      merchantUsefulness: 18,
      researchDepth: 14,
      evidenceScreenshots: 6,
      balancedCriticism: 9,
      originalFindings: 8,
      decisionClarity: 10,
      editorialQuality: 5,
    },
    notes: {
      handsOnAuthenticity: 'Strong configuration-level hands-on test, but no live storefront rendering, submitted review, review-request email, import, or real-data analytics were completed.',
      merchantUsefulness: 'Clearly answers the practical Free-versus-Awesome decision and identifies the branding threshold that matters to merchants.',
      researchDepth: 'Strong official-source research, developer-claim verification table, negative-review pattern analysis, and explicit unsupported-claim boundaries.',
      evidenceScreenshots: 'A detailed 24-page screenshot evidence set exists, but publication screenshots had not yet been exported into the article asset set when scored.',
      balancedCriticism: 'Strengths and limitations are clearly separated, with careful qualification of workflows that were only inspected rather than completed.',
      originalFindings: 'The email-branding paywall and two-step theme-embed experience are useful hands-on findings; depth is capped because the core live review lifecycle was not completed.',
      decisionClarity: 'The article gives a very clear recommendation: start Free for core review functionality and budget for Awesome when brand control becomes important.',
      editorialQuality: 'Well structured, readable, merchant-focused, and disciplined about evidence limitations.',
    },
  },
  pagefly: {
    score: {
      handsOnAuthenticity: 18,
      merchantUsefulness: 19,
      researchDepth: 13,
      evidenceScreenshots: 10,
      balancedCriticism: 9,
      originalFindings: 9,
      decisionClarity: 10,
      editorialQuality: 5,
    },
    notes: {
      handsOnAuthenticity: 'Full hands-on workflow: installation, onboarding, page creation, responsive checking, publishing, CRO tools, AI checkup, A/B testing access, heatmaps, and related interfaces.',
      merchantUsefulness: 'Directly answers whether a merchant can build without a developer and surfaces the important distinction between standalone landing pages and a full homepage redesign.',
      researchDepth: 'Good plan verification and feature checks, but the research record is lighter than Judge.me on external merchant-feedback analysis and broader source triangulation.',
      evidenceScreenshots: 'Publication-ready screenshots directly support the product overview, homepage continuity finding, and pricing boundaries.',
      balancedCriticism: 'Strong praise for the editor and CRO tooling while clearly documenting AI-credit limits, homepage continuity friction, and the A/B testing plan discrepancy.',
      originalFindings: 'The homepage theme-continuity issue and observed Free-plan A/B-testing discrepancy are valuable findings that a listing-only review would likely miss.',
      decisionClarity: 'The verdict clearly distinguishes the strongest use case—landing and promotional pages—from merchants expecting a completely theme-independent homepage replacement.',
      editorialQuality: 'Clean, specific, readable, and consistently evidence-led.',
    },
  },
};
