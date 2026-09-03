# Shopify App Review — Execution Workflow

This is the approved practical workflow for the Shopify App Review operation.

The detailed requirements remain in `source-sops/`. The execution layer stays lightweight while preserving evidence, transparency, SEO quality, merchant usefulness, and internal learning.

## Two Required Outputs

Every completed app review must create two distinct outputs:

1. **External — Merchant Decision Output:** help a Shopify merchant make a better app decision through independent, evidence-based, hands-on evaluation.
2. **Internal — Founder Intelligence Output:** help Blinto understand the app company, merchant pain, product/growth gaps, unanswered questions, and where Blinto could genuinely help the founder.

The public editorial conclusion must be independent of any sales opportunity. **Lock the editorial verdict before founder intelligence is converted into CRM or outreach.** A company becoming a prospect must never make its review more positive.

## Core Model

**Research → merchant decision → human reviewer tests a realistic scenario → evidence → findings → AI researches/interviews/writes → human fact-checks → quality score → editorial verdict locked → founder intelligence → preview → SEO Check → publish → CRM/outreach when appropriate.**

The app is the subject of each single-app review. The merchant problem is the evaluation lens.

The human assignee is the named reviewer/author and owns the experience, evidence, judgment, and factual approval. The AI assistant produces the complete polished article from verified public research plus the reviewer's supplied testing experience and evidence.

**AI may write 100% of the prose. AI may invent 0% of the experience or evidence.**

## ClickUp Workflow

**Backlog → Research & Write → SEO Check → Ready to Publish → Published**

## 1. Backlog

An approved/proposed review task waits here until production starts. The task should contain the Shopify App Store link, GitHub repository link, Review Hub link, app/category/assignee, and any approval blocker.

## 2. Research & Write — Human Reviewer + AI Writer

When the assignee starts, move the task to **Research & Write** and open the repository with ChatGPT or Claude.

### Step A — Define the merchant decision

Before testing becomes a feature walkthrough, establish:

1. What real merchant problem causes someone to consider this app?
2. What does the app promise to solve?
3. What is the most important buying/install question this review should answer?
4. What realistic scenario must we test to answer it?

The question can evolve as hands-on evidence reveals a more important trade-off.

Examples:
- Judge.me: Can a Shopify merchant genuinely run product reviews for free, or will the limitations quickly require the paid plan?
- PageFly: Can a non-technical merchant build and launch a professional custom Shopify page without relying on a developer?

### Step B — Test the merchant scenario

Use the dedicated development/test store for normal reviews. Do not merely inspect screens. Complete the realistic workflow needed to evaluate the app's core promise where practical.

Examples include test products, test customers/orders, review requests, submitted reviews, email flows, discounts, imports, automations, published pages, responsive behavior, theme interactions, and outputs.

Use real-world/live validation only when a conclusion genuinely depends on traffic, conversion, revenue, real customers, long-term operations, or another condition a development store cannot establish.

Never claim beyond the testing level. If a workflow was only inspected rather than completed, say so or avoid the claim.

During testing, collect a normal set of **3–4 publication screenshots** rather than an undirected image dump:

1. App homepage, dashboard, or clearest overview for “What [App] Offers.”
2. The core tested workflow or result that answers the merchant decision question.
3. The exact issue, limitation, friction, or plan boundary discovered during testing.
4. The current in-app or official pricing screen when pricing is discussed.

Ask for each screenshot at the relevant testing moment. Three are enough when one image genuinely covers two content moments; never add filler just to reach four.

A **short screen recording is optional high-value evidence** when motion or sequence communicates the experience better than screenshots — for example a page-building flow, onboarding sequence, automation, upsell configuration, or another important multi-step workflow. It does not replace the publication screenshots. Recordings should demonstrate actual hands-on use, not become promotional decoration.

### Human reviewer owns

- Real app access and hands-on testing.
- Running the realistic merchant scenario requested by the review plan.
- Screenshots and other evidence from testing.
- Optional short screen recording when it materially strengthens evidence.
- Raw observations, opinions, UX/technical/product judgment, problems, strengths, limitations, and merchant-fit conclusions.
- Answering AI follow-up questions when experience cannot be learned from public sources.
- Final factual verification of the generated article.

### AI assistant owns

- Reading and following this repository, `docs/`, templates, and applicable `source-sops/`.
- Legitimate public research and source organization.
- Helping define the merchant problem and decision question.
- Designing/asking for the minimum realistic testing needed to answer that question.
- Asking the reviewer for missing testing, screenshots, observations, or decisions.
- Separating **developer claims**, **Blinto hands-on observations**, and **merchant feedback** as distinct evidence classes.
- Converting technical findings into merchant/business implications without inventing outcomes.
- Writing the complete merchant-focused article in polished prose.
- Editing, consistency checks, and pre-handoff QA.
- Creating/updating the review file in `reviews/` and committing/pushing it when the connected environment supports GitHub writes.

AI must never fabricate testing, product behavior, pricing, merchant feedback, screenshots, scores, quotations, statistics, citations, technical verification, conversion impact, or revenue impact. Missing evidence must be requested, removed, qualified, or disclosed.

### Step C — Write around the decision, not the interface

The final review should normally follow this editorial logic:

**Merchant problem → app promise → what we tested → what actually happened → important trade-offs → cost/value → who should use it → who should not → final recommendation.**

Do not publish a heading called “Merchant Problem.” Establish it naturally in the introduction.

Technical findings are evidence. They should earn space because they change or support the merchant's decision.

Place each selected screenshot at the top of its relevant section, immediately below the section title and before the normal article prose. Do not add a caption or standalone image explanation below it; continue with the section's normal evidence and analysis. Do not group screenshots into a gallery or leave them detached from the relevant finding.

Alternatives may be mentioned briefly when useful, but a single-app review should not be forced into a comparison article.

### Step D — Blinto Review Quality Score

Before the editorial verdict is locked, score the finished review out of 100:

| Quality area | Points |
|---|---:|
| Hands-on authenticity | 20 |
| Merchant usefulness | 20 |
| Research depth | 15 |
| Evidence/screenshots | 10 |
| Balanced criticism | 10 |
| Original findings | 10 |
| Decision clarity | 10 |
| Writing/editorial quality | 5 |
| **Total** | **100** |

Interpretation:

- **90–100 — Blinto Standard:** strong enough to represent the review program.
- **80–89 — Publishable:** minor improvements may still be useful.
- **70–79 — Revision required:** another editorial/testing pass is needed.
- **Below 70 — Not publishable:** the review does not yet meet the standard.

Writing quality intentionally carries fewer points than authenticity and merchant usefulness. A polished generic article must not outscore genuine hands-on evaluation.

### Step E — Lock the editorial verdict

After fact-checking and scoring, lock the merchant-facing conclusion before doing commercial qualification. The verdict should clearly answer **install / consider / skip — and for whom**, using language appropriate to the evidence rather than forcing those exact labels into every article.

Do not change the verdict, criticism, score, or factual framing because the developer is a current client, prospective client, partner, sponsor, or outreach target.

### Step F — Create the Founder Intelligence Output

The matching internal `research/` file must include a concise **Founder Intelligence** section after the editorial verdict is locked. This section is internal and must not distort the published review.

Capture:

1. **What the app does exceptionally well** — useful strengths worth recognizing in founder conversations.
2. **Merchant friction discovered** — onboarding, UX, pricing, documentation, positioning, support, technical or workflow friction evidenced during research/testing.
3. **Growth opportunities** — SEO, content, positioning, App Store optimization, conversion, onboarding, retention, distribution, or other evidence-backed opportunities.
4. **Product opportunities** — recurring merchant requests, missing capabilities, workflow problems, integration gaps, or other product observations.
5. **Questions for the founder** — material things independent research/testing could not establish.
6. **Blinto fit** — one of: `No obvious opportunity`, `Growth opportunity`, `UX opportunity`, `Development opportunity`, or `Multiple opportunities`, followed by a short evidence-based reason.

Founder intelligence is not permission to manufacture a sales angle. If no meaningful opportunity exists, record that clearly.

## 3. Preview & Human Fact-check

Every review file under `reviews/` is automatically included in the Astro Review Hub collection. After the review is committed/pushed and deployment completes, its private preview is available at:

`https://reviews.blinto.co/reviews/[review-file-id]/`

Before handoff, the human reviewer must read the generated review and confirm it accurately represents what they tested and found.

The reviewer/AI must then add the exact **Content Preview** URL to the ClickUp task.

The matching internal evidence file under `research/` renders privately at `https://reviews.blinto.co/research/[research-file-id]/` for fact-checking context and founder intelligence. It is never the Content Preview URL.

A task is **not ready for SEO Check** until all five are true:

1. Review content is committed/pushed to GitHub.
2. Rendered content preview is available on `reviews.blinto.co`.
3. Exact Content Preview URL is recorded in ClickUp.
4. Blinto Review Quality Score has been completed and is **80+**.
5. Editorial verdict is locked and Founder Intelligence is recorded internally.

## 4. SEO Check — Shemanto

The reviewer moves the task to **SEO Check** only after the preview handoff requirements are satisfied.

Shemanto checks search intent/topic alignment, title/H1 and headings, topical coverage, metadata direction, internal links, comparison/cannibalization opportunities, readability, merchant usefulness, disclosures, and unsupported claims/evidence gaps.

SEO optimization must preserve the review's merchant-decision thesis rather than turning the article back into a generic feature/pricing/pros-cons template.

If corrections are needed, keep the task in **SEO Check**. The same human reviewer works with their AI assistant to resolve feedback and update the preview. SEO edits may improve presentation and discover factual gaps, but they must not quietly change a locked editorial verdict without returning the review to the reviewer for evidence-based reconsideration.

When the check passes, Shemanto moves the task to **Ready to Publish**.

## 5. Ready to Publish

The article has passed the quality gate. Fazle or Shemanto completes final publishing/QA without adding another routine approval stage.

## 6. Published

Once the public article is live and verified, Fazle or Shemanto adds the published URL to ClickUp and moves the task to **Published**.

Only after the independent editorial verdict is locked may relevant Founder Intelligence be transferred into the sales CRM and used for respectful, evidence-based founder outreach.

Performance tracking, refreshes, pricing/product changes, and maintenance continue according to SOP 7, outside the production-board statuses.

## Required ClickUp Links

Every review task should expose:

- **Shopify App** — direct Shopify App Store listing.
- **GitHub Repository** — `teamblinto/blinto-shopify-app-reviews`.
- **Review Hub** — `https://reviews.blinto.co`.
- **Content Preview** — exact rendered review URL; mandatory before SEO Check.
- **Published URL** — added after public publication.

## Status Ownership

- Task created/approved → **Backlog**.
- Human reviewer starts → **Research & Write**.
- Human reviewer fact-checks + scores 80+ + locks verdict + records Founder Intelligence + preview is live + preview URL is in ClickUp → **SEO Check**.
- Shemanto passes SEO/quality gate → **Ready to Publish**.
- Fazle/Shemanto publishes and verifies → **Published**.

Planning/topic-validation work belongs in Shopify GTM Execution, not the review-production board.

## CEO Process Improvement Rule

When CEO/final review discovers a recurring weakness, do not fix only that article. Record the observation and decide whether the workflow, template, evidence requirement, or SOP should change so future reviewers automatically follow the improved standard.

Use this simple improvement logic:

**Observation → article issue → reusable process change.**

This is how the review system should improve as Blinto completes more apps.