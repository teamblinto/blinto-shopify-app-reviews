# Shopify App Review — Execution Workflow

This is the practical day-to-day workflow for an assigned Shopify app review.

The detailed requirements remain in `source-sops/`. Use those documents when a step requires deeper guidance or when a reviewer identifies an edge case.

## Workflow

**Assign → Research & Test → Brief → Write → Self-check → Technical Review → SEO Review → Private Preview → Publish → Monitor**

## Ownership

- **Individual Author:** Research & Testing → Evidence → Brief → Writing → Self-check
- **Technical Review:** Fazle or Technical Review Agent
- **SEO Review:** Shemanto or SEO Agent
- **Publish:** Fazle or Shemanto, only after the required Technical Review and SEO Review have passed

There is no separate routine Final Approval stage. **Publish is the final gate.**

## 1. Assign

A review starts only after the app/category has been researched, selected, and assigned.

Record at minimum:

- Review/app name
- Category
- Author
- Content type
- Due date
- ClickUp task

Do not invent category assignments in the repository. Category ownership is decided separately.

Detailed reference: `source-sops/01-sop-project-planning-and-content-selection.md`

## 2. Research & Test — Author

The individual author owns the evidence base for the review.

Minimum requirements:

- Verify exact app/developer identity.
- Record App Store and official product sources.
- Verify current pricing and date checked.
- Determine testing level.
- Test the core merchant use case when access allows.
- Record important features, limitations, integrations, usability, support/documentation observations, and merchant-fit findings.
- Capture useful evidence/screenshots.
- Clearly separate developer claims, Blinto observations, and merchant feedback.

Testing levels:

1. Full Hands-On Test
2. Partial Hands-On Test
3. Demo and Documentation Review
4. Research-Only Evaluation
5. Insufficient Evidence

Never describe Levels 2–4 as full hands-on testing.

Detailed reference: `source-sops/02-sop-app-research-and-hands-on-testing.md`

## 3. Brief — Author

The author converts the evidence into a writer-ready SEO/content brief.

Confirm:

- Target merchant
- Merchant problem
- Search intent
- Primary keyword
- Relevant secondary topics/questions
- Current SERP/content competitors
- Differentiated angle
- Article outline
- Evidence mapped to important sections
- Best-fit and poor-fit merchant
- Required disclosures
- Internal links and CTA direction

The brief must not introduce claims that are unsupported by the research.

Detailed reference: `source-sops/03-sop-content-research-and-brief-creation.md`

## 4. Write — Author

Write for the merchant's decision, not for word count.

The article should normally make clear:

- What the app does
- How Blinto evaluated it
- Quick verdict
- Important features and merchant value
- Hands-on observations where applicable
- Pricing
- Setup/usability
- Integrations/support where relevant
- Strengths and limitations
- Best fit / poor fit
- Alternatives where useful
- Final verdict

Do not copy product marketing language. Do not turn assumptions into facts.

Detailed reference: `source-sops/04-sop-content-writing.md`

## 5. Author Self-check — Author

Before submission, the author confirms:

- Every factual claim is supported.
- Testing disclosure matches actual testing.
- Pricing is dated/verified.
- No fabricated experience, quotations, feedback, scores, or citations exist.
- Important limitations are visible.
- Verdict follows the evidence.
- Article helps both right-fit and wrong-fit merchants decide.
- Required evidence/screenshots are attached or linked.

Research through self-check is the responsibility of the individual author. Only after this gate passes does the review move to specialist review.

## 6. Technical Review — Fazle or Technical Review Agent

Technical Review checks accuracy, merchant usefulness, clarity, Shopify/app terminology, evidence representation, unsupported claims, contradictions, disclosures, and technical claims.

Material claims about integrations, compatibility, implementation, performance, APIs, themes, checkout, or other technical behavior must be appropriately validated.

During the initial pilot, Fazle may perform this review directly. A Technical Review Agent may take over routine checks as it becomes calibrated and reliable, with Fazle handling exceptions or escalations.

## 7. SEO Review — Shemanto or SEO Agent

SEO Review checks search intent, topical coverage, headings, metadata direction, internal links, competing-content gaps, comparison opportunities, cannibalization risk, and natural keyword usage.

SEO optimization must not override evidence or merchant usefulness.

During the initial stage, Shemanto may perform this review directly. A calibrated SEO Agent may perform the routine gate later, with Shemanto handling exceptions or escalations.

Detailed reference for review gates: `source-sops/05-sop-editorial-seo-and-technical-review.md`

## 8. Private Preview

Once the required Technical Review and SEO Review pass, render the review in Blinto's private Review Hub before public publishing.

Check:

- Article structure
- Tables
- Screenshots
- Mobile readability
- Links
- CTA
- Author information
- Testing/disclosure information
- Metadata/publishing fields

## 9. Publish — Fazle or Shemanto

There is no separate routine Final Approval stage. Publishing is the final control gate.

Fazle or Shemanto may publish only when:

- Author self-check is complete.
- Required Technical Review has passed.
- Required SEO Review has passed.
- Required revisions are resolved.
- Private preview/QA is satisfactory.

Complete live-page QA for formatting, mobile/desktop display, links, images, metadata, indexability, canonical settings, author/reviewer information, disclosures, and other applicable publishing requirements.

Strategic, reputational, ethical, legal, commercial, or exceptional quality concerns should be escalated rather than creating a routine additional approval stage.

Detailed reference: `source-sops/06-sop-design-publishing-and-quality-assurance.md`

## 10. Monitor

Publication is not completion.

Track search performance, engagement, business/relationship outcomes, outdated facts, pricing/product changes, and refresh requirements.

Use `source-sops/07-sop-promotion-performance-tracking-and-content-maintenance.md` for the detailed post-publication requirements.

## AI Rule

AI can assist with:

- Organizing research
- Summarizing verified evidence
- Structuring briefs
- Drafting from verified inputs
- Editing
- QA

AI cannot create missing evidence. It must never invent hands-on experience, product behavior, pricing, scores, merchant feedback, quotations, statistics, or citations.

When evidence is missing, mark it as missing and resolve it through research or review.
