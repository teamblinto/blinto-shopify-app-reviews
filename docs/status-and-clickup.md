# Review Lifecycle & ClickUp Operating Model

This document defines the simple production status system used by the Blinto Shopify App Review team.

The detailed SOP requirements remain canonical in `source-sops/`. These statuses are an execution layer: they group many SOP requirements into a small number of stages so the team can see progress without managing dozens of statuses.

## System Responsibilities

- **ClickUp:** assignment, due dates, current stage, blockers, and management dashboard.
- **GitHub:** research, evidence, briefs, drafts, checklists, assistant rules, and version history.
- **Private Astro workspace:** human-friendly SOP/wiki, review progress, review reading/preview, and approval visibility.
- **Public publishing stack:** added later after a review is approved.

Do not duplicate the full article or research in ClickUp. The ClickUp task should link to the canonical review file/workspace.

---

# Production Statuses

Use these statuses for the review program:

1. **Backlog**
2. **Assigned**
3. **Research**
4. **Writing**
5. **Review**
6. **Revision**
7. **Approved**
8. **Published**
9. **Monitoring**

## 1. Backlog

The topic exists as an opportunity but is not ready for execution.

May include category/app candidates awaiting research, prioritization, or assignment.

### Exit gate

- Topic/app approved for the current plan.
- Author selected.
- Content type known.

Then move to **Assigned**.

## 2. Assigned

One author owns the review end-to-end.

### Required before research begins

- App/topic confirmed.
- Category confirmed.
- Author confirmed.
- Content type confirmed.
- Due date set.
- GitHub review record created.
- ClickUp task links to the review record.

Then move to **Research**.

## 3. Research

This stage combines detailed evidence gathering, hands-on testing, research approval, SEO/content research, and brief preparation.

The detailed sequence still follows SOP 2 and SOP 3:

**App Research & Testing → Research Complete → Content/SEO Research → Brief Approved**

### Exit gate

Do not move to Writing until:

- Testing level is recorded.
- App identity and official sources are verified.
- Pricing is verified and dated.
- Core merchant workflow has been tested where access allows.
- Important features and limitations are documented.
- Merchant feedback patterns are researched where relevant.
- Technical observations are supported or flagged for validation.
- Evidence/screenshots are organized.
- Best-fit and poor-fit merchant are identified.
- Search intent and target audience are defined.
- Primary keyword/topic is defined.
- SERP/content competitor research is completed sufficiently.
- Differentiated angle is defined.
- Article outline is ready.
- Evidence is mapped to important sections.
- Required disclosures are known.
- Brief is ready for writing.

Then move to **Writing**.

## 4. Writing

The author writes the complete article using the approved research and brief.

### Exit gate

- Draft is complete.
- Quick verdict is evidence-based.
- Testing methodology/disclosure is accurate.
- Important features are connected to merchant value.
- Pricing is represented accurately.
- Strengths and limitations are balanced.
- Best-fit and poor-fit guidance is clear.
- Final verdict follows the evidence.
- Required links/CTA/visual placeholders are included.
- Author self-check is complete.
- Known evidence limitations and technical review needs are noted.

Then move to **Review**.

## 5. Review

The article passes the quality gates required by the source SOPs.

The normal review order is:

1. Technical Writing Assistant
2. Human technical/editorial review where required
3. SEO review
4. Final quality check

The review process must identify missing evidence rather than rewriting around it.

### Exit decisions

- No substantive issues → **Approved**
- Changes required → **Revision**

## 6. Revision

The author resolves review feedback.

The review remains owned by the original author.

### Rules

- Fix the underlying research/evidence when a claim cannot be supported.
- Do not use wording changes to disguise missing evidence.
- Re-run affected review gates after material revisions.

When corrections are complete, return to **Review**.

## 7. Approved

The content has passed its required quality gates and is ready for private publication preview/final publishing QA.

### Required

- Editorial/technical writing review passed.
- Required technical claims validated.
- SEO review passed.
- Required disclosures present.
- Author information available.
- Publication assets/requirements identified.

An approved review may be rendered on the private Astro workspace for final visual verification.

## 8. Published

The approved article has been published to the intended public publishing system and live QA has passed.

During the current pre-CMS phase, reviews may remain **Approved** after private Astro preview. Do not mark them Published merely because they render on the private workspace.

### Exit gate

After live publication and QA verification, move to **Monitoring**.

## 9. Monitoring

The article is a live content asset under performance and freshness monitoring.

Monitor as applicable:

- Search visibility and rankings
- Organic traffic
- Engagement
- Conversion/lead signals
- Founder/app-company engagement
- Backlinks/mentions
- Pricing changes
- Product/feature changes
- App Store changes
- Outdated screenshots or claims
- Refresh requirements

When an article needs a substantial refresh, create/assign the maintenance work and route it through the relevant research, writing, review, and publishing gates again.

---

# Blockers

Status should show **where the review is**. Blockers should show **why it cannot move**.

Use a separate blocker field rather than creating blocker statuses.

Recommended values:

- None
- App Access
- Paid Feature / Budget
- Research / Evidence
- Technical Validation
- SEO Input
- Author Revision
- Publishing / Asset
- External / Other

Every blocker should have a short note explaining the exact dependency.

---

# ClickUp Task Structure

Create **one ClickUp task per review**.

Recommended task name:

`[App Name] Shopify App Review`

## Required task information

- App / review title
- Author
- Category
- Content type
- Status
- Due date
- Priority
- Blocker
- GitHub review link
- Private preview link when available
- Public URL when published

## Useful custom fields

Keep custom fields minimal during validation:

| Field | Purpose |
|---|---|
| Category | Category ownership/reporting |
| Content Type | Single / Category / Comparison |
| Testing Level | Levels 1–5 from research SOP |
| Blocker | Why progress is stopped |
| GitHub Review | Canonical working record |
| Private Preview | Internal Astro page |
| Published URL | Final public article |

Do not create custom fields for every SOP checkbox. Those belong in the GitHub review record/checklists.

---

# ClickUp Task Description Template

```md
## Review

**App:**
**Category:**
**Author:**
**Content Type:**

## Working Links

- GitHub Review:
- Private Preview:
- Published URL:

## Current Goal

Complete the requirements for the current status and move the review to the next gate.

## Blocker

None / describe exact blocker.

## Source Process

Follow the Blinto Shopify App Review workflow and the detailed source SOPs linked from the repository.
```

---

# Dashboard

The CEO/project lead should be able to understand the program without opening individual articles.

The first dashboard only needs:

## Overall

- Total planned reviews
- Active reviews
- Approved reviews
- Published reviews
- Blocked reviews

## Pipeline

Group tasks by status:

**Backlog → Assigned → Research → Writing → Review → Revision → Approved → Published → Monitoring**

## Ownership

Group by author to see:

- Assigned
- In progress
- Awaiting review
- Published

## Category

Once category ownership is decided, group/filter by category to see progress and content depth.

## Attention

Show:

- Overdue reviews
- Blocked reviews
- Reviews in Revision
- Reviews awaiting review/approval

Do not build a complex analytics dashboard during the five-review pilot.

---

# Management Rule

ClickUp tracks execution. GitHub tracks the work itself.

If ClickUp says **Writing** but the GitHub review record does not contain completed research/brief evidence, the review is not actually ready for Writing. The source requirements and review record take precedence over an incorrectly updated status.
