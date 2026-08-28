# Blinto Shopify App Reviews — Repository Assistant Policy

## 1. Repository Identity

- **Repository:** `teamblinto/blinto-shopify-app-reviews`
- **Project:** Blinto Shopify App Review Hub
- **Official private workspace:** `https://reviews.blinto.co`
- **Infrastructure URL:** `https://blinto-shopify-app-reviews.pages.dev`
- **Access:** Private; Cloudflare Access protected.
- **Purpose:** Blinto's operating system for evidence-based Shopify app reviews.
- **Business objective:** Shopify ecosystem authority, useful merchant decision content, SEO, founder relationships, partnerships, and qualified business opportunities.

Use `https://reviews.blinto.co` as the normal team URL.

## 2. Grounding Hierarchy

1. `AGENTS.md`
2. `source-sops/` — detailed Core Strategy + SOP 1–7
3. `docs/` — approved Blinto execution layer
4. `templates/`
5. `reviews/`
6. current code/configuration

Do not invent project facts, assignments, approvals, URLs, statuses, testing, evidence, dates, scores, people, or decisions.

The source SOPs remain preserved as detailed guidance. The current pilot deliberately consolidates routine production handoffs into a lightweight execution model. Do not silently reintroduce additional routine gates that the approved execution model has removed.

## 3. Team Context

| Person | Blinto context | Review Hub context |
| --- | --- | --- |
| Fazle Rabbi | Founder & CEO | Project owner; review author; publisher |
| Shemanto | Marketing Strategist / SEO Consultant | Core Strategy/SOP author; final SEO/quality reviewer; publisher |
| Rakibul | Product Designer / Shopify product-growth context | Review author / category owner when approved |
| Muna | Developer | Review author / category owner when approved |
| Sayem | Developer | Review author / category owner when approved |
| Imran | Product Designer | Review author / category owner when approved |

One review has one primary author/assignee. The author's normal Blinto role does not limit the review scope.

## 4. Approved Pilot Principle

**One owner → one review → one final SEO/quality check → publish.**

The author owns:

**Research & Testing → Evidence → Brief as needed → Writing → Self-check → Corrections**

Routine final gate:

**SEO Check — Shemanto or, later, a calibrated SEO Agent.**

Publish:

**Fazle or Shemanto after SEO Check passes.**

There is no routine separate Technical Review, Revision, or Final Approval stage in the pilot. Specialist technical/legal/reputational review is escalation-based when a material issue genuinely requires it.

## 5. ClickUp Lifecycle

**Assigned → Research & Write → SEO Check → Ready to Publish → Published → Monitoring**

Do not create separate board statuses for research vs brief vs writing vs self-check, or for corrections/revision.

If SEO Check requests changes, the task remains in **SEO Check** while the same author resolves the feedback.

Status rule: **the person handing the work to the next owner changes the status.**

- Fazle/Shemanto → Assigned
- Author starts → Research & Write
- Author finishes/self-checks → SEO Check
- Shemanto/SEO Agent passes → Ready to Publish
- Fazle/Shemanto publishes → Published
- Publisher/maintenance owner activates monitoring → Monitoring

Planning, category selection, SEO topic validation, distribution strategy, and program improvements belong in **Shopify GTM Execution**, not the Shopify App Reviews production list.

## 6. Evidence & AI Rules

Every review must accurately state its evaluation level:

1. Full Hands-On Test
2. Partial Hands-On Test
3. Demo and Documentation Review
4. Research-Only Evaluation
5. Insufficient Evidence

Separate developer claims, Blinto observations, and merchant feedback. Verify/date pricing. Missing evidence must be flagged rather than invented.

**The author owns the review. AI assists the author; it does not become the author.**

AI may organize research, summarize verified evidence, structure, draft from verified inputs, edit, and QA. AI must never fabricate hands-on experience, product behavior, pricing, scores, merchant feedback, quotations, statistics, screenshots, citations, or technical verification.

## 7. Common Questions

### What is the website?
`https://reviews.blinto.co` — the private Blinto Shopify App Review Hub.

### How do I write a review?
Use `docs/review-process.md`, `docs/operating-model.md`, the relevant source SOPs, and `templates/app-review.md`. One author owns research through self-check and corrections; then Shemanto/SEO Agent performs the final SEO/quality check.

### Who reviews it?
The routine final pilot gate is Shemanto or a calibrated SEO Agent. Escalate specialist issues only when necessary.

### Who approves it?
There is no separate Final Approval ceremony. Passing SEO Check moves the article to Ready to Publish; Fazle or Shemanto publishes it.

### What happens if changes are requested?
Keep the ClickUp task in SEO Check. The original author fixes the comments and resubmits.

### Can AI write/research this?
AI can assist, but it cannot create missing evidence or claim unperformed testing.

### Who owns this category/app?
Check repository records. Never invent ownership.

## 8. System Responsibilities

- **GitHub:** content, evidence, source SOPs, execution docs, templates, assistant rules, version history.
- **ClickUp:** owner, due date, stage, blockers, operational follow-up; one task per review.
- **Review Hub:** team-facing strategy/process access, review records/status, private previews.
- **WordPress CMS (future):** public blog publishing backend.
- **Public Blinto Astro website:** presentation layer consuming approved CMS content.

Do not use GitHub Issues as the primary PM system when ClickUp is the documented execution system.

## 9. Current Program Phase

The program is in pilot/validation. Optimize for publishing velocity and learning while preserving evidence quality.

The first operational pilot is five single-app reviews. The broader SOP 7 validation remains 10 pieces: 3 category/bulk reviews, 5 single-app reviews, and 2 comparisons.

Do not scale process complexity or mass-produce toward 100 before the pilot shows what is actually needed.

## 10. Change Control

Do not modify `source-sops/` unless explicitly instructed to revise the source strategy/SOPs themselves. Approved execution changes belong in `docs/`, templates, and this assistant policy.

When source SOP detail and the lightweight pilot execution layer differ, explain that the source SOP is the detailed knowledge base while the approved pilot consolidates routine operational gates for speed. Never weaken evidence, transparency, or factual-integrity requirements.
