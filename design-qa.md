# Design QA

- Source visual truth:
  - Layout and content specification: approved “For Humans 第二幕：百万行数据流畅探索” implementation plan.
  - Workspace narrative specification: approved “For Humans Section 3：统一 Workspace 叙事” implementation plan.
  - Workspace product screenshot: `/Users/jeffrey/Documents/Code/Dory/www/public/images/core-features/dory-desktop-sql-console-sqlite-results.png`
  - Large-result source screenshot: `/Users/jeffrey/Documents/Code/Dory/www/public/large-resultset.png` (2312 × 1802 px).
  - Oil-painting treatment: `/var/folders/8t/5d4kjsy95pdb46sy3x204z8w0000gn/T/codex-clipboard-0e7e1354-5fe5-4ec5-a188-27555ff0099f.png`
- Reusable background asset: `/Users/jeffrey/Documents/Code/Dory/www/public/product-oil-backdrop.png`
- Implementation screenshots:
  - Desktop: `/tmp/dory-result-set-engine-final.png`
  - Mobile: `/tmp/dory-result-set-engine-mobile.png`
  - Workspace desktop: `/tmp/dory-workspace-section-desktop.png`
  - Workspace mobile copy: `/tmp/dory-workspace-section-mobile-top.png`
  - Workspace mobile screenshot order: `/tmp/dory-workspace-section-mobile-image.png`
  - Large-result desktop: `/tmp/dory-large-resultset-desktop.png` (1280 × 900 px, 1280 × 900 CSS px, device scale 1).
  - Large-result mobile: `/tmp/dory-large-resultset-mobile.png` (390 × 844 px, 390 × 844 CSS px, device scale 1).
- Combined focused comparison: `/tmp/dory-second-act-frame-comparison.png`
- Workspace source/implementation comparison: `/tmp/dory-workspace-section-comparison.png`
- Large-result source/implementation comparison: `/tmp/dory-large-resultset-comparison.png`
- Viewports:
  - Desktop: 1280 × 720 CSS px at device scale 1.
  - Mobile: 390 × 844 CSS px at device scale 1.
- State: Chinese locale and light theme; English, Japanese, and Spanish were also checked at the desktop breakpoint.

## Full-view comparison evidence

The second-act desktop capture shows the approved mirrored composition: a 60% result screenshot on the left and 40% copy on the right. The new Section 3 desktop capture shows a real Dory Workspace screenshot on the left and the three numbered continuation features on the right. Its mobile captures confirm that heading, copy, features, and semantic tab labels precede the painted screenshot frame.

## Focused region comparison evidence

`/tmp/dory-second-act-frame-comparison.png` places the Cursor oil-canvas reference and the new result-set frame side by side. Both use a restrained painted landscape around a centered application screenshot. The implementation keeps Dory's cooler blue-gray palette, native result screenshot ratio, rounded frame, and quiet elevation.

`/tmp/dory-workspace-section-comparison.png` places the source Dory Workspace screenshot beside the rendered Section 3. The implementation preserves the complete SQL editor, result grid, sidebars, and native aspect ratio while adding only the shared painted frame around the image.

`/tmp/dory-large-resultset-comparison.png` places the newly supplied one-million-row result screenshot beside the rendered Result Set Engine section. The source is scaled proportionally from 2312 × 1802 into the existing painted frame; no crop, stretch, or replacement UI is introduced.

## Fidelity surfaces

- Fonts and typography: the second act reuses the first act's responsive heading, description, numbered feature title, and body styles. Chinese fits on one desktop line; English, Japanese, and Spanish wrap without clipping.
- Spacing and layout rhythm: both narrative sections use a 3:2 image/text grid with 48 px gap; mobile uses a single column with text before media. Section 3 keeps the heading above the split layout, aligns its three numbered features to the screenshot, and allows labels to wrap without overflow.
- Colors and visual tokens: the shared background uses low-saturation periwinkle, slate blue, ivory, and muted green. Existing dark-mode brightness and saturation treatment is centralized in `PaintedProductFrame`.
- Image quality and asset fidelity: both product screenshots use static imports, retain their native aspect ratios, and are rendered without the extra black `ProductFrame` wrapper. The 1739 × 904 oil asset is cropped with `object-cover`.
- Copy and content: the second act keeps the approved Result Set Engine story. Section 3 contains only the approved Workspace title, subtitle, three continuation features, technical labels, and the `Customer Analysis`, `Revenue Report`, and `Top Products` example tabs. All four locales share the same highlighted object structure.

## Findings

No actionable P0, P1, or P2 differences remain. The source is a style reference rather than the same product composition, so the Dory screenshot content and blue-gray artwork are intentional product-specific deviations.

## Comparison history

### Iterations 1–5

The earlier SQL Editor work removed the generic black screenshot wrapper, eliminated the stale white strip through static imports, matched Dory's blue palette, and replaced the flat panel with an original oil-painted landscape.

### Iteration 6

- Earlier finding: the oil asset and wrapper were SQL Editor-specific, while the results story was a separate full-width block with five bullets and a chart overlay.
- Fix: renamed the asset, extracted `PaintedProductFrame`, reused it in both acts, replaced the results block with a mirrored second act, reduced the story to the three approved capabilities, and moved the general capability section after it.
- Post-fix evidence: desktop and mobile captures confirm the approved order and layout; the focused comparison confirms consistent painted-frame treatment.

### Iteration 7

- Earlier finding: the second-act copy emphasized multi-tab and multiple-result-set workflows rather than the Result Set Engine itself.
- Fix: added the `Result Set Engine` label, replaced the title and architecture description, and refocused all three features on large-result browsing, full-result filtering/search/sorting, and persisted results.
- Post-fix evidence: `/tmp/dory-result-set-engine-final.png` and `/tmp/dory-result-set-engine-mobile.png` show the revised hierarchy and copy with no overflow.

### Iteration 8

- Earlier finding: Section 3 was an eight-card feature inventory followed by separate Saved Queries and Query History screenshots, so it repeated capabilities without explaining how a complete exploration stays together.
- Fix: replaced the inventory with a single Workspace narrative, a real SQL/result workspace screenshot, three numbered continuation features, semantic emphasis labels, and three compact example tabs.
- Post-fix evidence: `/tmp/dory-workspace-section-desktop.png` confirms the 60/40 desktop composition; the two mobile captures confirm copy-first order and a full-width painted screenshot with zero horizontal overflow. English, Japanese, and Spanish each report matching article scroll/client widths.

### Iteration 9

- Earlier finding: the Result Set Engine still used the older generic `result-table.png` screenshot.
- Fix: replaced it with the user-supplied `large-resultset.png` through a static Next.js image import while preserving the shared frame, layout, copy, and native aspect ratio.
- Post-fix evidence: `/tmp/dory-large-resultset-desktop.png` shows the one-million-row counter, selected range, and 232 MB status clearly inside the desktop frame. `/tmp/dory-large-resultset-mobile.png` confirms copy-first order, proportional 318 × 248 px rendering, and zero horizontal overflow.

### Iteration 10

- Earlier finding: Next.js selected `w=750&q=75` variants for product screenshots displayed at approximately 635 px, producing only about 1.1× effective density in the DPR 1 preview and softening table text and thin UI lines.
- Fix: product screenshots now bypass Next.js recompression and load their original PNG assets; the painted background remains optimized.
- Post-fix evidence: at the same 635 px CSS width, the SQL completion screenshot renders at 2.02×, the million-row screenshot at 3.64×, and the Workspace screenshot at 4.76×. The browser reports raw static asset URLs, no generated `srcset`, zero horizontal overflow, and no console warnings or errors.

## Verification

- Desktop Chinese layout and focused visual comparison: passed.
- Desktop English, Japanese, and Spanish heading/wrapping checks: passed.
- Mobile 390 × 844 stacking, image ratio, and horizontal overflow checks: passed.
- Browser console errors and warnings: none.
- The shared painted-frame dark styles remain unchanged from the previous passing comparison; the new labels use existing dark border, background, and text tokens. The in-app header theme switch did not change the live theme during this run, so a new dark screenshot is a residual test gap rather than an observed visual mismatch.
- Message JSON parsing: passed.
- `npm run types:check`: passed.
- `git diff --check`: passed.

final result: passed
