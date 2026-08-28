# Review Lifecycle & ClickUp Operating Model

This is the approved lightweight ClickUp lifecycle for the Blinto Shopify App Review pilot.

## Principle

**ClickUp tracks who, when, status, and handoff links. GitHub/Review Hub holds the work.**

The production list contains actual review tasks only. Planning, category selection, topic validation, distribution strategy, and system improvements belong in Shopify GTM Execution.

## Final Production Statuses

1. **Backlog**
2. **Research & Write**
3. **SEO Check**
4. **Ready to Publish**
5. **Published**

There is no Assigned status; ClickUp assignee represents ownership. There is no Monitoring production status; post-publication tracking/maintenance is handled separately.

### Backlog

The review is approved/proposed and waiting to start. The task may already have its intended assignee. Production does not start until applicable topic approval is complete.

### Research & Write

The human reviewer tests the app and supplies screenshots, notes, observations, and judgment. ChatGPT, Claude, or another approved repository-capable AI assistant guides the process, conducts legitimate public research, asks for missing evidence, organizes the material, and writes the complete article.

The human does not need to be a professional writer. Before handoff they fact-check the AI-written article against what they actually tested and observed.

### SEO Check

A task may enter SEO Check only when:

1. Complete review is committed/pushed to GitHub.
2. Review is rendered on `reviews.blinto.co`.
3. Exact Content Preview URL is present in the ClickUp task.
4. Human reviewer has fact-checked the article.

Shemanto opens the Content Preview from ClickUp and performs the final SEO/quality check. If changes are required, the task stays in SEO Check while the original reviewer works with their AI assistant to update the content/preview.

When passed, Shemanto moves it to Ready to Publish.

### Ready to Publish

SEO/quality check passed. Fazle or Shemanto completes publishing and live QA.

### Published

Public article is live and verified. Add the public URL to ClickUp and move the task to Published.

## Status Ownership

| Transition | Changed by | Required handoff |
|---|---|---|
| Backlog → Research & Write | Human reviewer | Work begins |
| Research & Write → SEO Check | Human reviewer | Fact-checked content + GitHub push + live Content Preview + ClickUp preview link |
| SEO Check → Ready to Publish | Shemanto / SEO Agent | SEO/quality gate passed |
| Ready to Publish → Published | Fazle / Shemanto | Public URL live + QA complete |

## Required Task Links

Every review task must contain these entry points:

- **Shopify App:** direct Shopify App Store listing.
- **GitHub Repository:** `https://github.com/teamblinto/blinto-shopify-app-reviews`
- **Review Hub:** `https://reviews.blinto.co`
- **Content Preview:** exact rendered review page; add before SEO Check.
- **Published URL:** add after public publication.

## Canonical Task Checklist

- [ ] Started review with AI assistant + repository context
- [ ] App testing completed + experience shared
- [ ] Required screenshots/evidence/information provided
- [ ] AI-generated review fact-checked by human reviewer
- [ ] Review committed/pushed and Content Preview URL added
- [ ] Submitted for SEO Check

Detailed SOP checks stay in the repository rather than becoming ClickUp board columns.

## Blockers

Use a blocker field/comment rather than blocker statuses. Useful blockers include app access, paid feature/budget, evidence, specialist validation, SEO input, reviewer correction, publishing asset, and external dependency.

## Dashboard Questions

The board should answer: Who owns each review? What is being researched/written? What is waiting for SEO check? What is ready to publish? What is published? What is blocked or overdue?

## Management Rule

Status movement never substitutes for completing the underlying evidence and quality requirements. In particular, **no Content Preview URL = no SEO Check handoff.**
