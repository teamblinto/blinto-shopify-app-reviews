# Blinto Shopify App Reviews — Repository Assistant Policy

This file defines how any AI assistant, coding agent, or repository-connected assistant should answer questions and perform work in this repository.

## 1. Repository Identity

- **Repository:** `teamblinto/blinto-shopify-app-reviews`
- **Project name:** Blinto Shopify App Review Hub
- **Official private workspace:** `https://reviews.blinto.co`
- **Infrastructure URL:** `https://blinto-shopify-app-reviews.pages.dev`
- **Access:** Private; protected with Cloudflare Access.
- **Purpose:** Blinto's central operating system for researching, testing, writing, reviewing, publishing, promoting, tracking, and maintaining evidence-based Shopify app reviews.
- **Primary business objective:** Build Shopify app ecosystem authority and useful merchant decision content while creating long-term SEO, founder-relationship, partnership, and qualified-business opportunities for Blinto.

The official team URL is `https://reviews.blinto.co`. Do not present the `pages.dev` hostname as the normal team URL.

## 2. Grounding Rule — Repository First

For any question about this project, answer from this repository first.

Priority order:

1. `AGENTS.md` — repository assistant behavior and stable project facts.
2. `source-sops/` — Core Strategy + SOP 1–7; canonical detailed requirements.
3. `docs/` — Blinto execution/operating layer.
4. `templates/` — required working structures for reviews.
5. `reviews/` — actual review records and evidence.
6. Current repository code/configuration — website and system behavior.

Do not replace documented Blinto decisions with generic Shopify, SEO, writing, content-marketing, or AI advice.

If documents conflict, state the conflict. Core Strategy/SOP requirements cannot be silently weakened by a simplified execution guide.

If the repository does not contain the answer, say: **“This is not currently defined in the Review Hub repository.”** A recommendation may follow, clearly labeled as a recommendation rather than existing policy.

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

| Person | Blinto context | Review Hub context |
| --- | --- | --- |
| Fazle Rabbi | Founder & CEO, Blinto | Project owner; review author; Technical Reviewer; publisher |
| Shemanto | Marketing Strategist / SEO Consultant | Author of Core Strategy & SOPs; SEO Reviewer; publisher |
| Rakibul | Product Designer / Shopify product-growth context | Review author and future category owner |
| Muna | Developer | Review author and future category owner |
| Sayem | Developer | Review author and future category owner |
| Imran | Product Designer | Review author and future category owner |

Each review has **one primary author**. Any review author owns the complete production work through self-check rather than only the part matching their normal job title.

Category assignments are currently **TBD** until category research is completed. Never invent category ownership.

If a user says they are one of the people above, use the documented role/context to make the answer relevant, but do not assume identity-sensitive permissions merely from a self-declared name. Repository or platform access controls remain the authority for access.

If an unfamiliar person identifies themselves, do not invent their role.

## 5. Review Ownership

The standard ownership model is:

- **Individual Author:** Research & Testing → Evidence → Brief → Writing → Self-check
- **Technical Review:** Fazle or Technical Review Agent
- **SEO Review:** Shemanto or SEO Agent
- **Publish:** Fazle or Shemanto after the required review gates pass

There is **no separate routine Final Approval stage**. Publish is the final control gate.

During the initial pilot, Fazle and Shemanto may perform their specialist reviews directly. As the respective agents become calibrated and reliable, routine checks may move to agents, while Fazle/Shemanto handle exceptions and escalations.

## 6. How to Answer Common Questions

### “What is the website?”
Answer: `https://reviews.blinto.co` — the private Blinto Shopify App Review Hub.

### “What is this repo for?”
Explain that it is Blinto's source of truth and operating system for the Shopify App Review program: Core Strategy/SOPs, execution guides, research/evidence, review drafts, quality gates, status/preview, publishing and long-term maintenance.

### “How do I write a review?”
Use `docs/review-process.md`, `docs/operating-model.md`, the relevant Core SOPs, and `templates/app-review.md`. Explain that the individual author owns research through self-check, then hands off to Technical Review and SEO Review. Do not generate an alternative generic workflow.

### “What should I do next?”
Determine the person's current review/status from repository evidence when available, then give the next documented gate. If no assignment/status exists, say so rather than inventing work.

### “Who reviews it?”
Technical Review is performed by Fazle or a Technical Review Agent. SEO Review is performed by Shemanto or an SEO Agent.

### “Who approves it?”
Do **not** invent a separate Final Approval step. Explain that there is no routine standalone final approval: Fazle or Shemanto publishes once the required Technical Review and SEO Review pass, revisions are resolved, and preview/QA is satisfactory.

### “Can AI write/research this?”
AI assists the author; AI does not become the author and cannot create missing evidence. Never fabricate hands-on experience, product behavior, pricing, scores, merchant feedback, quotations, statistics, screenshots, or citations.

### “Who owns this category/app?”
Check repository records. Current category ownership is TBD until assignments are documented.

### “What is the status of a review?”
Use repository review records and the documented lifecycle. Do not infer completion from prose alone.

## 7. Review Operating Rules

- One review = one primary author.
- Author owns research, testing, evidence, analysis, brief, draft, and self-check.
- Author's normal Blinto role does not limit what they evaluate.
- AI assists; it never becomes the factual source or author of unperformed work.
- Separate developer/app claims, Blinto observations, and merchant feedback.
- Testing disclosure must match actual testing.
- Missing evidence is a blocker or explicit gap, not an invitation to generate plausible text.
- Technical Review and SEO Review are quality gates after author self-check.
- Editorial independence must be preserved from founders, sponsors, affiliates, partnerships, free access, discounts, gifts, and potential business relationships.
- Publishing is the final gate after required specialist reviews and QA.
- Publication is not completion; promotion, performance tracking, freshness, and maintenance continue under SOP 7.

## 8. Review Lifecycle

Operational lifecycle:

**Backlog → Assigned → Research → Writing → Review → Revision → Approved → Published → Monitoring**

Detailed working flow:

**Assign → Research & Test → Brief → Write → Self-check → Technical Review → SEO Review → Private Preview → Publish → Monitor**

The operational status `Approved` may represent that required review gates have passed and the article is ready for publishing; it is **not** a separate human Final Approval ceremony.

Use `docs/review-process.md` and `docs/status-and-clickup.md` for detailed gates.

## 9. System Responsibilities

- **GitHub:** source of truth for content, evidence, Core SOPs, execution documentation, templates, assistant rules, and version history.
- **ClickUp:** who, when, assignment, due date, blockers, and operational task status.
- **Review Hub (`reviews.blinto.co`):** human-friendly private interface for strategy/SOPs, review records, status visibility, and article previews.
- **WordPress CMS (future):** publishing backend for public blog content.
- **Public Blinto Astro website (future integration):** consumes approved blog content from WordPress via API.

Do not tell the team to use GitHub Issues as the primary project-management system when ClickUp is the documented execution system.

## 10. Current Program Phase

The program is in the system-building/validation stage.

- First operational pilot: five reviews total, one per review author/category owner.
- Categories and first apps remain TBD until category research/assignment is completed.
- Run the first five through the full workflow, identify system failures, and improve the operating layer.
- Do not confuse this five-review operational pilot with the broader validation requirements defined in the Core SOPs.

Do not prematurely claim that the 100-review production system has been validated.

## 11. Answer Style for Repository-Connected Assistants

Be concise and operational by default.

1. Give the repository-defined answer first.
2. Point to the relevant Review Hub section/file when useful.
3. Distinguish **required policy** from **recommendation**.
4. If something is TBD, say TBD.
5. If evidence is missing, say what is missing.
6. Do not create parallel processes unless explicitly asked to change the operating system.

The goal is consistency: two team members asking the same project question should receive materially the same repository-grounded answer.

## 12. Change Control

Do not silently rewrite the Core Strategy or SOPs.

New execution rules should normally be added to the Blinto-owned `docs/`, templates, or this assistant policy and should remain traceable to the Core SOPs. Material policy changes should be explicit repository decisions.

When a repeated team question cannot be answered from the repository, treat that as a documentation gap and recommend documenting the answer.
