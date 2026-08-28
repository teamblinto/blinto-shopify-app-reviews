# Shopify App Review — Operating Model

This document defines how Blinto operates the Shopify App Review program day to day. It is an execution layer built on the **Core Strategy + SOP 1–7** in `source-sops/`; it does not replace or weaken those documents.

## 1. Objective

Build a trusted Shopify app review authority that helps merchants make better app decisions while creating long-term SEO, ecosystem knowledge, founder relationships, qualified leads, and commercial opportunities for Blinto.

Accuracy, evidence, usefulness, independence, and maintainability come before publishing speed.

## 2. Source of Truth

Use the system in this order:

1. **Core Strategy & SOPs** — governing requirements and edge cases.
2. **Process** — simplified day-to-day workflow.
3. **Review record/template** — evidence, brief, draft, checks, and handoffs for one review.
4. **ClickUp** — owner, due date, task status, blockers, and execution tracking.
5. **Private Review Hub** — team navigation, review status, validation and preview.

GitHub remains the content and documentation source of truth.

## 3. Ownership Model

One review has **one primary author**. The author's normal Blinto role does not limit what they evaluate.

### Individual Author

The author owns all production work through self-check:

**Research & Testing → Evidence → Brief → Writing → Self-check**

### Technical Review

**Owner: Fazle or Technical Review Agent**

This is the technical/editorial quality gate after author self-check. During the pilot Fazle may review directly. As the Technical Review Agent becomes calibrated and reliable, routine checks should move to the agent and Fazle should handle exceptions/escalations.

### SEO Review

**Owner: Shemanto or SEO Agent**

This is the SEO quality gate after author self-check. Shemanto may review directly during the initial stage. A calibrated SEO Agent may later handle routine checks with Shemanto handling exceptions/escalations.

### Publish

**Owner: Fazle or Shemanto**

There is **no separate routine Final Approval stage**. Publish is the final gate. Fazle or Shemanto may publish once the required Technical Review and SEO Review have passed, required revisions are resolved, and preview/QA is satisfactory.

Strategic, reputational, ethical, legal, commercial, or exceptional quality issues are escalated when necessary rather than creating a permanent additional approval layer.

Each author will own a Shopify app category once category research and assignments are approved. Category ownership and app assignments must be recorded centrally before production begins.

## 4. Editorial Independence

A review must remain evidence-led regardless of app-founder relationships, free access, discounts, partnerships, sponsorship discussions, affiliate opportunities, or potential Blinto business.

App founders may provide factual corrections or product updates. Blinto verifies those claims independently before changing content. Founders do not control scores, pros/cons, rankings, comparison winners, verdicts, or publication decisions.

## 5. Evidence & Testing Standard

Every review must state the actual evaluation level:

1. **Full Hands-On Test**
2. **Partial Hands-On Test**
3. **Demo and Documentation Review**
4. **Research-Only Evaluation**
5. **Insufficient Evidence**

Never present documentation research or partial access as full hands-on testing.

Keep official/developer claims, Blinto observations, and merchant feedback distinct. Important claims should be traceable to evidence. Pricing must be verified and dated. Missing evidence must be marked as missing rather than filled by assumption.

## 6. AI Rule

**The author owns the review. AI assists the author; it does not become the author.**

AI may organize research, summarize verified evidence, help structure briefs, draft from verified inputs, improve clarity, and perform QA.

AI must never fabricate or imply nonexistent research, testing, product behavior, screenshots, pricing, merchant feedback, quotations, statistics, scores, citations, or technical verification.

If required evidence is missing, AI should flag the gap and the review remains blocked until the gap is resolved or transparently disclosed.

## 7. Production Workflow

**Assign → Research & Test → Brief → Write → Author Self-check → Technical Review → SEO Review → Private Preview → Publish → Monitor**

The detailed gates are maintained in `docs/review-process.md` and the Core SOPs.

A stage is complete only when its required evidence/output exists. Moving a ClickUp status does not make an incomplete stage complete.

## 8. Quality Gates

### Author gate

Before handoff, the individual author confirms that the draft accurately represents the research, testing disclosure is correct, pricing is verified, limitations are visible, evidence is available, and the verdict follows the evidence.

### Technical Review gate — Fazle or Technical Review Agent

Checks accuracy, merchant usefulness, clarity, Shopify/app terminology, evidence representation, unsupported claims, contradictions, technical claims, disclosures, structure and readability. Material technical claims require appropriate validation.

### SEO gate — Shemanto or SEO Agent

Checks search intent, topical coverage, headings, metadata direction, internal linking, competing-content gaps, comparison opportunities, cannibalization risk, and natural keyword alignment. SEO must not override evidence or merchant usefulness.

### Publishing gate — Fazle or Shemanto

Publish is the final control gate. It requires passed Technical Review, passed SEO Review, resolved revisions, and satisfactory private preview/QA. No separate routine Final Approval is required.

## 9. Roles of the Systems

**GitHub** — content, evidence records, templates, SOPs, assistant policy, version history, and source of truth.

**ClickUp** — who, when, status, blockers, assignments, and operational follow-up. One ClickUp task per review.

**Private Review Hub** — human-friendly navigation, review records, quality/status visibility, and article preview.

**Future WordPress CMS** — publishing backend for approved public blog content.

**Public Blinto Astro website** — public presentation layer consuming approved CMS content through API.

## 10. Validation Before Scale

The 100-review target is a direction, not permission to mass-produce content before the system is validated.

Blinto will begin with a small pilot so the team can test the workflow, evidence model, review quality, production effort, and maintenance burden before scaling.

SOP 7's final validation model specifies **10 initial validation pieces: 3 category/bulk reviews, 5 single-app reviews, and 2 comparison articles**. The first five author/category reviews are an operational pilot inside that broader validation phase, not a replacement for the 10-piece validation requirement.

The broader validation decision evaluates formats, SEO outcomes, leads, founder/partnership outcomes, internal learning, production effort, and maintenance effort before a **scale / improve / narrow / pause** decision.

## 11. Post-Publication Ownership

Publication is not Done. Published reviews become long-term SEO and business assets.

Each published article must eventually have an article/performance owner and be monitored for search visibility, engagement, CTA/lead outcomes, founder or partnership opportunities, pricing, features, ratings, screenshots, app availability, content decay, and refresh requirements.

Meaningful updates should be reverified and pass the appropriate review gates. Do not change a visible last-updated date merely to make content appear fresh.

## 12. Current Rollout

**Now:** finalize the operating system/templates, research and approve category ownership, assign one category and initial app to each author, run the first five reviews through the complete workflow, and audit friction/quality/AI behavior.

**Next:** improve from pilot findings, continue category production, complete the broader 10-piece validation set, and collect sufficient performance/operational data.

**Later:** make the scale/improve/narrow/pause decision, scale toward 100 only when evidence supports it, and add the WordPress headless publishing workflow when needed.

## 13. Non-Negotiables

- One primary author per review.
- Author owns research through self-check.
- Technical Review = Fazle or Technical Review Agent.
- SEO Review = Shemanto or SEO Agent.
- Publish = Fazle or Shemanto after required review gates pass.
- No separate routine Final Approval stage.
- No fabricated evidence or experience.
- Testing level must be transparent.
- Pricing and time-sensitive facts must be verified.
- Evidence, observation, and merchant feedback must not be blurred together.
- Important limitations must remain visible.
- Founder/commercial relationships cannot control editorial conclusions.
- SEO cannot override usefulness or truthfulness.
- Publication is followed by monitoring and maintenance.
- Do not scale merely to hit the 100-review number.

When this operating model conflicts with a Core SOP, the **Core Strategy & SOPs govern** until the underlying SOP is deliberately revised and approved.
