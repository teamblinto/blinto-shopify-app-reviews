# Shopify App Review — Operating Model

This document defines how Blinto operates the Shopify App Review program day to day. It is an execution layer built on the **Core Strategy + SOP 1–7** in `source-sops/`; it does not replace or weaken those documents.

## 1. Objective

Build a trusted Shopify app review authority that helps merchants make better app decisions while creating long-term SEO, ecosystem knowledge, founder relationships, qualified leads, and commercial opportunities for Blinto.

The program is not a volume-content exercise. Accuracy, evidence, usefulness, independence, and maintainability come before publishing speed.

## 2. Source of Truth

Use the system in this order:

1. **Core Strategy & SOPs** — governing requirements and edge cases.
2. **Process** — simplified day-to-day workflow.
3. **Review record/template** — evidence, brief, draft, checks, and handoffs for one review.
4. **ClickUp** — owner, due date, task status, blockers, and execution tracking.
5. **Private Review Hub** — team navigation, review status, validation and preview.

GitHub remains the content and documentation source of truth.

## 3. Ownership Model

- One review has **one primary author**.
- The author owns the review end to end: research, testing, evidence, analysis, brief, draft, and author self-check.
- Other team members do not automatically participate in that review.
- Reviewers provide quality gates; they do not become the author.
- Each author will own a Shopify app category once category research and assignments are approved.
- Category ownership and app assignments must be recorded centrally before production begins.

The author's normal Blinto role does not limit what they evaluate. Every author should become capable of reviewing the whole app from the merchant's perspective.

## 4. Editorial Independence

A review must remain evidence-led regardless of app-founder relationships, free access, discounts, partnerships, sponsorship discussions, affiliate opportunities, or potential Blinto business.

App founders may provide factual corrections or product updates. Blinto verifies those claims independently before changing content. Founders do not control scores, pros/cons, rankings, comparison winners, verdicts, or publication decisions.

Escalate material factual disputes, legal/security concerns, or commercial situations that could affect editorial independence.

## 5. Evidence & Testing Standard

Every review must state the actual evaluation level:

1. **Full Hands-On Test**
2. **Partial Hands-On Test**
3. **Demo and Documentation Review**
4. **Research-Only Evaluation**
5. **Insufficient Evidence**

Never present documentation research or partial access as full hands-on testing.

Keep these evidence types distinct:

- **Official/developer claims** — what the app/company says.
- **Blinto observations** — what the author actually verified or experienced.
- **Merchant feedback** — patterns found in merchant reviews or other approved evidence.

Important claims should be traceable to evidence. Pricing must be verified and dated. Missing evidence must be marked as missing rather than filled by assumption.

## 6. AI Rule

**The author owns the review. AI assists the author; it does not become the author.**

AI may organize research, summarize verified evidence, help structure briefs, draft from verified inputs, improve clarity, and perform QA.

AI must never fabricate or imply nonexistent research, testing, product behavior, screenshots, pricing, merchant feedback, quotations, statistics, scores, citations, or technical verification.

If required evidence is missing, AI should flag the gap and the review remains blocked until the gap is resolved or transparently disclosed.

## 7. Production Workflow

The operating workflow is:

**Assign → Research & Test → Brief → Write → Author Self-check → Technical Writing Review → SEO Review → Approve → Private Preview → Publish → Monitor**

The detailed gates are maintained in `docs/review-process.md` and the Core SOPs.

A stage is complete only when its required evidence/output exists. Moving a ClickUp status does not make an incomplete stage complete.

## 8. Quality Gates

### Author gate

Before handoff, the author confirms that the draft accurately represents the research, testing disclosure is correct, pricing is verified, limitations are visible, evidence is available, and the verdict follows the evidence.

### Technical writing gate

The Technical Writing Assistant or future human technical writer checks SOP compliance, unsupported claims, contradictions, unclear technical explanations, evidence gaps, promotional language, false first-hand language, freshness, disclosures, structure, readability, and author voice.

Material technical claims require an appropriate Shopify expert when necessary.

### SEO gate

SEO review covers search intent, topical coverage, headings, metadata direction, internal linking, competing-content gaps, comparison opportunities, cannibalization risk, and natural keyword alignment. SEO must not override evidence or merchant usefulness.

### Approval gate

Approval means substantive evidence, editorial, technical (where applicable), and SEO issues are resolved. Leadership is an escalation path, not a routine approval bottleneck.

### Publishing gate

The approved version must pass private preview and live-page QA before it is treated as published and verified.

## 9. Roles of the Systems

**GitHub** — content, evidence records, templates, SOPs, version history, and source of truth.

**ClickUp** — who, when, status, blockers, assignments, and operational follow-up. One ClickUp task per review.

**Private Review Hub** — human-friendly navigation, review records, quality/status visibility, and article preview.

**Future WordPress CMS** — publishing backend for approved public blog content.

**Public Blinto Astro website** — public presentation layer consuming approved CMS content through API.

Do not duplicate the full review content across operational systems when a link to the source of truth is sufficient.

## 10. Validation Before Scale

The 100-review target is a direction, not permission to mass-produce content before the system is validated.

Blinto will begin with a small pilot so the team can test the workflow, evidence model, review quality, production effort, and maintenance burden before scaling.

The Core Strategy's full validation decision must ultimately evaluate the initial validation content as a connected group and compare content formats, SEO outcomes, leads, founder/partnership outcomes, internal learning, production effort, and maintenance effort before a **scale / improve / narrow / pause** decision is made.

SOP 7's final validation model specifies **10 initial validation pieces: 3 category/bulk reviews, 5 single-app reviews, and 2 comparison articles**. The first five author/category reviews are therefore an operational pilot inside that broader validation phase, not a replacement for the 10-piece validation requirement.

## 11. Post-Publication Ownership

Publication is not Done. Published reviews become long-term SEO and business assets.

Each published article must eventually have an article/performance owner and be monitored for search visibility, engagement, CTA/lead outcomes, founder or partnership opportunities, pricing, features, ratings, screenshots, app availability, content decay, and refresh requirements.

Meaningful updates should be reverified and pass the appropriate review gates. Do not change a visible last-updated date merely to make content appear fresh.

The initial post-publication cycle is complete only after the required promotion/tracking setup and first monthly review are completed; ongoing maintenance continues after that.

## 12. Current Rollout

**Now**

- Finalize the operating system and templates.
- Research and approve category ownership.
- Assign one category to each author.
- Select one initial app/review per author.
- Run the first five reviews through the complete workflow.
- Audit friction, missed requirements, quality gaps, and AI-assistant behavior.

**Next**

- Improve the process from pilot findings.
- Continue category production.
- Complete the broader 10-piece validation set required by the Core Strategy.
- Collect sufficient performance and operational data.

**Later**

- Make the scale / improve / narrow / pause decision.
- Scale toward the 100-review authority target only when evidence supports it.
- Add the WordPress headless publishing workflow when needed.

## 13. Non-Negotiables

- One primary author per review.
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
