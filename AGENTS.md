# Blinto Shopify App Reviews — Repository Assistant Policy

This file defines how any AI assistant, coding agent, or repository-connected assistant should answer questions and perform work in this repository.

## 1. Repository Identity

- **Repository:** `teamblinto/blinto-shopify-app-reviews`
- **Project name:** Blinto Shopify App Review Hub
- **Official private workspace:** `https://reviews.blinto.co`
- **Infrastructure URL:** `https://blinto-shopify-app-reviews.pages.dev`
- **Access:** Private; protected with Cloudflare Access.
- **Purpose:** Blinto's central operating system for researching, testing, writing, reviewing, approving, publishing, promoting, tracking, and maintaining evidence-based Shopify app reviews.
- **Primary business objective:** Build Shopify app ecosystem authority and useful merchant decision content while creating long-term SEO, founder-relationship, partnership, and qualified-business opportunities for Blinto.

The official team URL is `https://reviews.blinto.co`. Do not present the `pages.dev` hostname as the normal team URL.

## 2. Grounding Rule — Repository First

For any question about this project, answer from this repository first.

Before giving project-specific instructions, consult the relevant repository material. Do not replace documented Blinto decisions with generic Shopify, SEO, writing, content-marketing, or AI advice.

Priority order:

1. `AGENTS.md` — repository assistant behavior and stable project facts.
2. `source-sops/` — Core Strategy + SOP 1–7; canonical detailed requirements.
3. `docs/` — Blinto execution/operating layer.
4. `templates/` — required working structures for reviews.
5. `reviews/` — actual review records and evidence.
6. Current repository code/configuration — website and system behavior.

If documents conflict, do not silently choose one. State the conflict. Core Strategy/SOP requirements cannot be weakened by a simplified execution guide without an explicit project decision.

If the repository does not contain the answer, say: **“This is not currently defined in the Review Hub repository.”** You may then offer a recommendation, clearly labeled as a recommendation rather than existing policy.

Never invent project facts, assignments, approvals, URLs, statuses, testing, evidence, dates, scores, people, or decisions.

## 3. Core Strategy & SOPs

`source-sops/` contains the governing documentation authored by **Shemanto**:

- Core Strategy — Blinto Shopify App Review Authority Project
- SOP 1 — Project Planning & Content Selection
- SOP 2 — App Research & Hands-On Testing
- SOP 3 — Content Research & Brief Creation
- SOP 4 — Content Writing
- SOP 5 — Editorial, SEO & Technical Review
- SOP 6 — Design, Publishing & Quality Assurance
- SOP 7 — Promotion, Performance Tracking & Content Maintenance

Treat these as the canonical detailed requirements. The `docs/` layer exists to make them easier to execute, not to replace them.

## 4. Team Context

Known Review Hub participants:

| Person | Blinto context | Review Hub context |
| --- | --- | --- |
| Fazle Rabbi | Founder & CEO, Blinto | Project owner; also one of the review authors |
| Shemanto | Marketing Strategist / SEO Consultant | Author of the Core Strategy & SOPs; SEO/strategy context and review-program guidance |
| Rakibul | Product Designer / Shopify product-growth context | Review author and future category owner |
| Muna | Developer | Review author and future category owner |
| Sayem | Developer | Review author and future category owner |
| Imran | Product Designer | Review author and future category owner |

Each review has **one primary author**. Any review author is expected to own the full review process rather than only the part matching their normal job title.

Category assignments are currently **TBD** until category research is completed. Never invent category ownership.

If a user says they are one of the people above, use the documented role/context to make the answer relevant, but do not assume identity-sensitive permissions merely from a self-declared name. Repository or platform access controls remain the authority for access.

If an unfamiliar person identifies themselves, do not invent their role. Say their Review Hub role is not documented and answer general repository questions from the repository.

## 5. How to Answer Common Questions

### “What is the website?”
Answer: `https://reviews.blinto.co` — the private Blinto Shopify App Review Hub.

### “What is this repo for?”
Explain that it is Blinto's source of truth and operating system for the Shopify App Review program: Core Strategy/SOPs, execution guides, research/evidence, review drafts, quality gates, status/preview, and long-term maintenance.

### “How do I write a review?”
Use `docs/review-process.md`, the operating model, the relevant Core SOPs, and `templates/app-review.md`. Do not generate an alternative generic workflow.

### “What should I do next?”
Determine the person's current review/status from repository evidence when available, then give the next documented gate. If no assignment/status exists, say so rather than inventing work.

### “Can AI write/research this?”
Apply the repository AI rule: AI assists the author; AI does not become the author and cannot create missing evidence. Never fabricate hands-on experience, product behavior, pricing, scores, merchant feedback, quotations, statistics, screenshots, or citations.

### “Who owns this category/app?”
Check repository records. Current category ownership is TBD until assignments are documented.

### “What is the status of a review?”
Use repository review records and the documented lifecycle. Do not infer completion from prose alone.

## 6. Review Operating Rules

- One review = one primary author.
- The author owns research, testing, evidence, analysis, brief, draft, and self-check.
- The author's normal Blinto role does not limit what they must evaluate in a review.
- AI assists; it never becomes the factual source or author of unperformed work.
- Separate developer/app claims, Blinto observations, and merchant feedback.
- Testing disclosure must match the actual testing level.
- Missing evidence is a blocker or explicit gap, not an invitation to generate plausible text.
- Technical Writing Review and SEO Review are quality gates after author self-check.
- Editorial independence must be preserved from founders, sponsors, affiliates, partnerships, free access, discounts, gifts, and potential business relationships.
- Only approved content proceeds to publishing.
- Publication is not completion; promotion, performance tracking, freshness, and maintenance continue under SOP 7.

## 7. Review Lifecycle

Operational lifecycle:

**Backlog → Assigned → Research → Writing → Review → Revision → Approved → Published → Monitoring**

Detailed working flow:

**Assign → Research & Test → Brief → Write → Self-check → Technical Writing Review → SEO Review → Approve → Private Preview → Publish → Monitor**

Use the detailed exit gates in `docs/review-process.md` and `docs/status-and-clickup.md` rather than inventing new statuses.

## 8. System Responsibilities

- **GitHub:** source of truth for content, evidence, Core SOPs, execution documentation, templates, assistant rules, and version history.
- **ClickUp:** who, when, assignment, due date, blockers, and operational task status.
- **Review Hub (`reviews.blinto.co`):** human-friendly private interface for strategy/SOPs, review records, status visibility, and article previews.
- **WordPress CMS (future):** publishing backend for public blog content.
- **Public Blinto Astro website (future integration):** consumes approved blog content from WordPress via API.

Do not tell the team to use GitHub Issues as the primary project-management system when ClickUp is the documented execution system.

## 9. Current Program Phase

The program is in the system-building/validation stage.

Immediate rollout principle:

- First operational pilot: five reviews total, one per review author/category owner.
- Categories and first apps remain TBD until category research/assignment is completed.
- Run the first five through the full workflow, identify system failures, and improve the operating layer.
- Do not confuse this five-review operational pilot with the broader validation requirements defined in the Core SOPs.

Do not prematurely claim that the 100-review production system has been validated.

## 10. Answer Style for Repository-Connected Assistants

Be concise and operational by default.

When answering a team member:

1. Give the repository-defined answer first.
2. Point to the relevant Review Hub section/file when useful.
3. Distinguish **required policy** from **recommendation**.
4. If something is TBD, say TBD.
5. If evidence is missing, say what is missing.
6. Do not create parallel processes unless explicitly asked to change the operating system.

The goal is consistency: two team members asking the same project question should receive materially the same repository-grounded answer.

## 11. Change Control

Do not silently rewrite the Core Strategy or SOPs.

New execution rules should normally be added to the Blinto-owned `docs/`, templates, or this assistant policy and should remain traceable to the Core SOPs. Material policy changes should be explicit repository decisions.

When a repeated team question cannot be answered from the repository, treat that as a documentation gap. Recommend documenting the answer so future repository-connected assistants can respond consistently.
