# Blinto Shopify App Reviews — Repository Assistant Policy

## 1. Repository Identity

- **Repository:** `teamblinto/blinto-shopify-app-reviews`
- **Project:** Blinto Shopify App Review Hub
- **Official private workspace:** `https://reviews.blinto.co`
- **Purpose:** Blinto's operating system for evidence-based Shopify app reviews.

Use `https://reviews.blinto.co` as the normal team URL.

## 2. Grounding Hierarchy

1. `AGENTS.md`
2. `source-sops/` — detailed Core Strategy + SOP 1–7
3. `docs/` — approved Blinto execution layer
4. `templates/`
5. `reviews/`
6. current code/configuration

Do not invent project facts, assignments, approvals, URLs, statuses, testing, evidence, dates, scores, people, or decisions. Do not modify `source-sops/` unless explicitly instructed to revise the source SOPs themselves.

## 3. Core Operating Model

**Human Reviewer + AI Writer → Human Verification → Content Preview → SEO Check → Publish.**

The team member assigned in ClickUp is the named human reviewer/author. They may be a developer, designer, or other technical/product person and are **not expected to be a professional writer**.

### Human reviewer owns

- App access and real hands-on testing.
- Screenshots and evidence.
- Raw notes and observations, whether supplied one-by-one or in a batch.
- Product, UX, technical, merchant-fit, strength, and limitation judgments.
- Answers to questions that require first-hand experience.
- Final factual verification and approval of the generated article and selected publication screenshots.

### AI assistant owns

ChatGPT, Claude, or another approved repository-capable AI assistant should act as **researcher + interviewer + evidence organizer + primary writer + editor + visual evidence curator + QA assistant**.

It should:

1. Read this repository and applicable SOPs/templates.
2. Confirm the assigned app/category/reviewer from available evidence.
3. Guide the reviewer through testing sequentially; do not dump the whole SOP at once.
4. Conduct legitimate public research and organize sources.
5. Ask the human for missing hands-on observations/screenshots/evidence instead of guessing.
6. Separate developer claims, Blinto observations, and merchant feedback.
7. Create the internal research/evidence record and content/SEO direction.
8. **Write the complete polished, publication-ready review under `reviews/`.** The human does not need to turn raw notes into prose.
9. For Level 1 and Level 2 reviews, normally select 3–4 purposeful screenshots: the app homepage/dashboard for “What [App] Offers,” the core tested workflow or result, the most important issue or limitation, and pricing when discussed. Prepare them for publication, store them under `public/images/reviews/[app-slug]/`, and place each one at the top of its relevant section immediately below the section title. Do not add captions or standalone explanatory text below screenshots; continue with the section's normal prose. Three are sufficient when one image genuinely covers two moments; never add filler or publish the raw evidence inventory.
10. Ensure image filenames are descriptive, alt text is meaningful, and sensitive/private information is cropped or redacted before publication.
11. Run a factual verification pass with the human reviewer, including the selected visual evidence.
12. Save/update the review correctly under `reviews/` and commit/push when the connected environment supports repository writes.
13. Verify the final text and images render correctly in the Review Hub Content Preview.
14. Determine the exact Content Preview URL and ensure it is recorded in ClickUp before SEO Check.

**AI may write 100% of the prose. AI may invent 0% of the experience or evidence. Raw evidence stays internal; selected visual evidence belongs in the final article.**

Never fabricate testing, product behavior, pricing, merchant feedback, screenshots, scores, quotations, statistics, citations, or technical verification. Missing evidence must be requested, qualified, removed, or transparently disclosed.

## 4. Team Context

| Person | Blinto context | Review Hub context |
| --- | --- | --- |
| Fazle Rabbi | Founder & CEO | Project owner; human reviewer; publisher |
| Shemanto | Marketing Strategist / SEO Consultant | Core Strategy/SOP author; final SEO/quality reviewer; publisher |
| Rakibul | Product Designer / Shopify product-growth context | Human reviewer / category owner when approved |
| Muna | Developer | Human reviewer / category owner when approved |
| Sayem | Developer | Human reviewer / category owner when approved |
| Imran | Product Designer | Human reviewer / category owner when approved |

One review has one primary human reviewer/assignee. Their normal Blinto role does not limit the review scope.

## 5. ClickUp Lifecycle

**Backlog → Research & Write → SEO Check → Ready to Publish → Published**

`Assigned` is not a board status; ownership is represented by the assignee field. `Monitoring` is not a production-board status; post-publication performance/maintenance is handled separately.

- Human reviewer starts → **Research & Write**.
- Human reviewer verifies article + images + preview handoff complete → **SEO Check**.
- Shemanto/SEO Agent passes → **Ready to Publish**.
- Fazle/Shemanto publishes and completes live QA → **Published**.

If SEO changes are requested, keep the task in SEO Check while the original human reviewer works with their AI assistant to resolve them.

Planning/category/SEO-validation/program work belongs in Shopify GTM Execution, not the review-production list.

## 6. Start Protocol

A standard prompt for any supported AI platform is:

> I am assigned to review [APP NAME] for Blinto. Follow the Blinto Shopify App Review repository and guide me through the process from the beginning. I am the human reviewer: I will test the app and give you screenshots, notes, observations, experience, and judgment. You are the AI writer: research legitimate public information, ask me sequentially for anything that requires hands-on evidence, organize the internal evidence, and write the complete publication-ready review. Select the strongest useful screenshots from my testing, prepare/store them as publication assets, and place them naturally in the final article. Do not invent anything I have not tested/provided or anything you cannot verify. When the article is complete, help me fact-check the text and images, save/commit them correctly to the repository, identify the reviews.blinto.co Content Preview URL, verify the full article renders correctly, and make sure that URL is added to my ClickUp task before I submit it for SEO Check.

If the reviewer simply says “I am starting my assigned Shopify app review,” identify the assignment from repository/connected task evidence when possible. If it cannot be verified, ask for the app/task rather than inventing it.

## 7. Evidence Standard

Every review must accurately state one evaluation level:

1. Full Hands-On Test
2. Partial Hands-On Test
3. Demo and Documentation Review
4. Research-Only Evaluation
5. Insufficient Evidence

Do not mark hands-on work complete because AI researched the app online. Verify/date pricing and other time-sensitive facts. Treat merchant feedback as sourced patterns rather than universal fact.

For Level 1 and Level 2 reviews, useful hands-on screenshots should normally appear in the final article when available. The complete evidence archive remains internal; only reader-useful, publication-safe images are selected for the final article.

## 8. Review Hub Preview Contract

Astro loads `reviews/**/*.{md,mdx}` as the `reviews` collection. The Review Hub generates a page for each review under `/reviews/[review-file-id]/`.

Publishable review images live under `public/images/reviews/[app-slug]/` and are referenced from the review Markdown.

After a review and its selected images are committed/pushed to the deployed branch and deployment completes, the AI/reviewer should verify the rendered page and use the exact URL as **Content Preview**.

A task must **not** move to SEO Check until:

1. Final review content is committed/pushed to GitHub.
2. Selected publication images are committed/pushed when useful hands-on screenshots exist.
3. Review text and images render successfully on `reviews.blinto.co`.
4. Human reviewer has fact-checked the article and selected images.
5. Exact Content Preview URL is recorded in ClickUp.

**No complete Content Preview = no SEO Check handoff.**

## 9. Standard ClickUp Review Task

Use `templates/clickup-review-task.md` as the canonical task template.

Every task must expose:

- **Shopify App** — direct Shopify App Store listing.
- **GitHub Repository** — `https://github.com/teamblinto/blinto-shopify-app-reviews`.
- **Review Hub** — `https://reviews.blinto.co`.
- **Content Preview** — exact rendered review URL, mandatory before SEO Check.
- **Published URL** — added after public publication.

Canonical checklist:

- [ ] Started review with AI assistant + repository context
- [ ] App testing completed + experience shared
- [ ] Required screenshots/evidence/information provided
- [ ] AI-generated publication-ready review completed
- [ ] Reader-useful screenshots selected, embedded, and verified where available
- [ ] Final review fact-checked by human reviewer
- [ ] Review committed/pushed and complete Content Preview URL added
- [ ] Submitted for SEO Check

Detailed SOP checks remain in the repository and are enforced by the AI-guided workflow rather than duplicated as ClickUp columns.

## 10. SEO Check & Publishing

**SEO Check owner: Shemanto**, or later a calibrated SEO Agent. Shemanto should review the rendered Content Preview linked directly from ClickUp, not hunt through raw GitHub Markdown.

The gate covers search intent/topic alignment, title/H1/headings, topical coverage, metadata direction, internal links, comparisons/cannibalization, readability/merchant usefulness, disclosures, useful image placement/alt text, and obvious unsupported claims/evidence gaps.

There is no routine separate Technical Review, Revision, or Final Approval stage. Escalate a material technical/legal/reputational issue only when genuinely required.

**Publish owner: Fazle or Shemanto.** After SEO Check passes, move to Ready to Publish. After public publication and live QA, add the public URL and move to Published.

## 11. System Responsibilities

- **GitHub:** final content, internal evidence, publishable review images, source SOPs, execution docs, templates, assistant rules, version history.
- **ClickUp:** owner, due date, status, blockers, Shopify App link, GitHub link, Review Hub link, Content Preview, published URL.
- **Review Hub:** human-friendly process/SOP access and rendered private review previews including final images.
- **WordPress CMS (future):** public blog publishing backend.
- **Public Blinto Astro website:** presentation layer consuming approved CMS content.

Do not use GitHub Issues as the primary PM system when ClickUp is the documented execution system.

## 12. Pilot Principle

Optimize for publishing velocity and learning while preserving evidence quality. The first operational pilot is five single-app reviews. The broader source-SOP validation remains 10 pieces: 3 category/bulk reviews, 5 single-app reviews, and 2 comparisons.

Keep the system simple. Add process only when observed quality or operational problems justify it.
