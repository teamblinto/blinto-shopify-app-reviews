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

**One owner → AI-guided research & writing → one final SEO/quality check → publish.**

The human author owns the review and performs/provides the real-world work: app access, hands-on testing, screenshots, observations, judgment, and any information that cannot be independently verified by the assistant.

The repository-connected assistant guides the author through:

**Research & Testing → Evidence → Brief as needed → Writing → Self-check → Corrections**

The assistant should actively ask the author for missing manual work/evidence at the appropriate point rather than expecting the author to memorize the SOPs. It may also perform legitimate public research when available, but must clearly distinguish public/source research from the author's hands-on observations.

Routine final gate:

**SEO Check — Shemanto or, later, a calibrated SEO Agent.**

Publish:

**Fazle or Shemanto after SEO Check passes.**

There is no routine separate Technical Review, Revision, Final Approval, or Monitoring board stage in the pilot. Specialist technical/legal/reputational review is escalation-based when a material issue genuinely requires it. Post-publication performance/maintenance requirements remain in SOP 7 but are managed separately from the production board.

## 5. ClickUp Lifecycle

**Backlog → Research & Write → SEO Check → Ready to Publish → Published**

`Assigned` is not a board status. Assignment is represented by the ClickUp assignee field. `Monitoring` is not a production-board status.

Do not create separate board statuses for research vs testing vs brief vs writing vs self-check, or for corrections/revision.

If SEO Check requests changes, the task remains in **SEO Check** while the same author resolves the feedback.

Status rule: **the person handing the work to the next owner changes the status.**

- Approved topic waiting to start → Backlog
- Author starts production → Research & Write
- Author finishes/self-checks → SEO Check
- Shemanto/SEO Agent passes → Ready to Publish
- Fazle/Shemanto publishes and completes live QA → Published

Planning, category selection, SEO topic validation, distribution strategy, and program improvements belong in **Shopify GTM Execution**, not the Shopify App Reviews production list.

## 6. AI-Guided Review Start Protocol

When an assigned author starts a review in ChatGPT or another repository-connected assistant, the assistant should make the process conversational and sequential. Do not dump every SOP requirement on the author at once.

A standard author instruction is:

> I am assigned to review [APP NAME] for Blinto. Guide me through the Shopify App Review process from the beginning. Follow the Review Hub repository and SOPs. Ask me for the manual testing, screenshots, observations, and information you need. Do not invent anything I have not tested or provided.

If the author simply says something equivalent to **“I am starting my assigned Shopify app review”**, use repository evidence to identify the assignment when available. If the assignment cannot be verified, ask for the app/task rather than inventing it.

The assistant should then:

1. Confirm the app, category, author, and available assignment context.
2. Create/use the canonical review record from `templates/app-review.md`.
3. Guide research and hands-on testing in manageable steps.
4. Ask the author for screenshots, observations, access-dependent findings, and judgments when needed.
5. Organize verified public research and author-provided evidence in the review record.
6. Build the brief from the evidence and current search intent.
7. Draft the review from verified inputs while preserving the named human author as the author.
8. Run the author self-check with the human author, resolving evidence gaps rather than writing around them.
9. Tell the author when the review is ready to move to **SEO Check** and what remains blocked if it is not ready.

Do not mark manual testing complete because the assistant researched the app online. Do not manufacture first-hand language on behalf of the author.

## 7. Evidence & AI Rules

Every review must accurately state its evaluation level:

1. Full Hands-On Test
2. Partial Hands-On Test
3. Demo and Documentation Review
4. Research-Only Evaluation
5. Insufficient Evidence

Separate developer claims, Blinto observations, and merchant feedback. Verify/date pricing. Missing evidence must be flagged rather than invented.

**The human author owns the review. AI guides and assists the author; it does not become the factual source for unperformed work.**

AI may conduct legitimate research, organize sources, summarize verified evidence, structure the brief, draft from verified inputs, edit, and QA. AI must never fabricate hands-on experience, product behavior, pricing, scores, merchant feedback, quotations, statistics, screenshots, citations, or technical verification.

## 8. Standard ClickUp Review Task

Each review uses one lightweight ClickUp task. ClickUp is the management wrapper, not the place to duplicate the full SOP or article.

Recommended task name:

`Review: [App Name] — [Category]`

Required task context:

- App
- Category
- Human author/assignee
- Content type
- Due date
- Review Hub link
- Review record/private preview/public URL as they become available

Standard task-level checklist:

- [ ] Started review with ChatGPT + Review Hub
- [ ] Manual app testing/research completed
- [ ] Required evidence/screenshots provided
- [ ] Full article + author self-check completed
- [ ] Submitted for SEO Check

The detailed SOP checks remain in the repository and should be enforced through the AI-guided workflow/review record rather than copied into every ClickUp task.

## 9. Common Questions

### What is the website?
`https://reviews.blinto.co` — the private Blinto Shopify App Review Hub.

### How do I start my review?
Open the assigned ClickUp task, use the Review Hub/repository in ChatGPT, and ask the assistant to guide the assigned review from the beginning. The assistant should lead the author through the documented process and request manual testing/evidence as needed.

### How do I write a review?
Use `docs/review-process.md`, `docs/operating-model.md`, the relevant source SOPs, and `templates/app-review.md`. The assistant should guide the human author through research/testing, evidence, brief, writing, and self-check before SEO Check.

### Who reviews it?
The routine final pilot gate is Shemanto or a calibrated SEO Agent. Escalate specialist issues only when necessary.

### Who approves it?
There is no separate Final Approval ceremony. Passing SEO Check moves the article to Ready to Publish; Fazle or Shemanto publishes it.

### What happens if changes are requested?
Keep the ClickUp task in SEO Check. The original author works with the assistant to fix the comments and resubmits.

### Can AI write/research this?
Yes. AI is expected to materially assist with research organization, source work, brief creation, drafting, editing, and QA. The human author must provide/perform manual testing and evidence-dependent work. AI cannot invent missing evidence or claim unperformed testing.

### Who owns this category/app?
Check repository records. Never invent ownership.

## 10. System Responsibilities

- **GitHub:** content, evidence, source SOPs, execution docs, templates, assistant rules, version history.
- **ClickUp:** owner, due date, stage, blockers, operational follow-up; one task per review.
- **Review Hub:** team-facing strategy/process access, review records/status, private previews.
- **WordPress CMS (future):** public blog publishing backend.
- **Public Blinto Astro website:** presentation layer consuming approved CMS content.

Do not use GitHub Issues as the primary PM system when ClickUp is the documented execution system.

## 11. Current Program Phase

The program is in pilot/validation. Optimize for publishing velocity and learning while preserving evidence quality.

The first operational pilot is five single-app reviews. The broader SOP 7 validation remains 10 pieces: 3 category/bulk reviews, 5 single-app reviews, and 2 comparisons.

Do not scale process complexity or mass-produce toward 100 before the pilot shows what is actually needed.

## 12. Change Control

Do not modify `source-sops/` unless explicitly instructed to revise the source strategy/SOPs themselves. Approved execution changes belong in `docs/`, templates, and this assistant policy.

When source SOP detail and the lightweight pilot execution layer differ, explain that the source SOP is the detailed knowledge base while the approved pilot consolidates routine operational gates for speed. Never weaken evidence, transparency, or factual-integrity requirements.
