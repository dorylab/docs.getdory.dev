# Design QA

- Source visual truth:
  - Layout and content specification: approved “For Humans 第二幕：百万行数据流畅探索” implementation plan.
  - Workspace narrative specification: approved “For Humans Section 3：统一 Workspace 叙事” implementation plan.
  - Workspace product screenshot: `/Users/jeffrey/Documents/Code/Dory/www/public/images/core-features/dory-desktop-sql-console-sqlite-results.png`
  - Large-result source screenshot: `/Users/jeffrey/Documents/Code/Dory/www/public/large-resultset.png` (2312 × 1802 px).
  - Magnifier source screenshot: `/Users/jeffrey/Documents/Code/Dory/www/public/large-resultset-2.png` (2324 × 1274 px).
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
  - Magnifier desktop: `/tmp/dory-large-resultset-magnifier-desktop.png` (1280 × 900 px, 1280 × 900 CSS px, device scale 1).
  - Magnifier mobile: `/tmp/dory-large-resultset-magnifier-mobile.png` (390 × 844 px, 390 × 844 CSS px, device scale 1).
  - Flush magnifier desktop: `/tmp/dory-large-resultset-magnifier-flush-desktop.png` (1280 × 900 px, 1280 × 900 CSS px, device scale 1).
  - Status-only magnifier desktop: `/tmp/dory-resultset-status-only-desktop.png` (1280 × 900 px, 1280 × 900 CSS px, device scale 1).
  - Status-only magnifier mobile: `/tmp/dory-resultset-status-only-mobile.png` (390 × 844 px, 390 × 844 CSS px, device scale 1).
  - Centered high-density status magnifier desktop: `/tmp/dory-resultset-status-centered-crisp-desktop.png` (1280 × 900 px, 1280 × 900 CSS px, device scale 1).
  - Centered high-density status magnifier mobile: `/tmp/dory-resultset-status-centered-crisp-mobile.png` (390 × 844 px, 390 × 844 CSS px, device scale 1).
  - Left-attached, vertically centered status magnifier desktop: `/tmp/dory-resultset-status-left-centered-desktop.png` (1280 × 900 px, 1280 × 900 CSS px, device scale 1).
  - Left-attached, vertically centered status magnifier mobile: `/tmp/dory-resultset-status-left-centered-mobile.png` (390 × 844 px, 390 × 844 CSS px, device scale 1).
- Combined focused comparison: `/tmp/dory-second-act-frame-comparison.png`
- Workspace source/implementation comparison: `/tmp/dory-workspace-section-comparison.png`
- Large-result source/implementation comparison: `/tmp/dory-large-resultset-comparison.png`
- Magnifier source/implementation comparison: `/tmp/dory-large-resultset-magnifier-comparison.png`
- Flush magnifier source/implementation comparison: `/tmp/dory-large-resultset-magnifier-flush-comparison.png`
- Status-only magnifier source/implementation comparison: `/tmp/dory-resultset-status-only-comparison.png`
- Centered high-density magnifier source/implementation comparison: `/tmp/dory-resultset-status-centered-crisp-comparison.png`
- Left-attached magnifier source/implementation comparison: `/tmp/dory-resultset-status-left-centered-comparison.png`
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

`/tmp/dory-large-resultset-magnifier-comparison.png` places the replacement result screenshot beside the rendered section. The main image preserves the complete source, while the lower-left inset reuses the same source at approximately 2.2× and exposes the authentic `1,000,000 rows · 232 MB` status line.

`/tmp/dory-resultset-status-only-comparison.png` confirms that the 2.2× lower-left crop now contains only the authentic bottom status bar. The source table rows and horizontal scrollbar remain visible in the main screenshot but are no longer duplicated inside the magnifier.

`/tmp/dory-resultset-status-centered-crisp-comparison.png` confirms that the status content is centered inside the attached strip and remains faithful to the source. The 2324 px source is rendered across a 1138.05 px virtual image width, providing 2.04 source pixels per CSS pixel at desktop scale.

`/tmp/dory-resultset-status-left-centered-comparison.png` confirms that the enlarged raster returns to the screenshot’s original left origin while its status text is vertically centered in the 30.85 px desktop strip.

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

### Iteration 11

- Earlier finding: the million-row count was present only in the source screenshot’s small bottom status bar and was difficult to read at marketing-page scale.
- Fix: switched the Result Set Engine to the replacement `large-resultset-2.png` and added an optional lower-left magnifier to `PaintedProductFrame`. The inset reuses the real source image and anchors its bottom-left crop at approximately 2.2×.
- Post-fix evidence: the desktop capture shows the enlarged status line without hiding the main result table; the mobile capture retains a compact 216 × 49 px inset with zero horizontal overflow. Browser measurement reports 2.18× after pixel rounding and no console warnings or errors.

### Iteration 12

- Earlier finding: the magnifier extended beyond the screenshot’s lower-left edge into the painted frame.
- Fix: aligned the inset to `left: 0` and `bottom: 0` inside the screenshot wrapper, with its lower-left radius matching the screenshot corner.
- Post-fix evidence: browser measurement reports zero-pixel difference between the screenshot and magnifier on both left and bottom edges at desktop and mobile sizes. The focused comparison confirms the inset no longer protrudes; horizontal overflow and console warnings/errors remain at zero.

### Iteration 13

- Earlier finding: the 4.4:1 magnifier also repeated several data rows and the horizontal scrollbar, competing with the intended million-row status.
- Fix: retained the approved 2.2× scale, 68% width, attached lower-left position, border, and shadow, while changing only the viewport ratio to 14:1 so the crop isolates the bottom status bar.
- Post-fix evidence: `/tmp/dory-resultset-status-only-desktop.png` shows only `Finished · 50.2s · 1,000,000 rows · 232 MB` in the magnifier. `/tmp/dory-resultset-status-only-mobile.png` confirms the same crop with zero horizontal overflow; the browser console reports no warnings or errors.

### Iteration 14

- Earlier finding: the isolated status content remained left-heavy inside the strip, and the 2.2× visual scale reduced the effective desktop source density to about 1.67 pixels per CSS pixel.
- Fix: reduced the visual scale to 1.8×, centered the authentic raster content with integer 32/64 px responsive offsets, and used integer bottom positioning instead of a transform to avoid subpixel raster placement.
- Post-fix evidence: `/tmp/dory-resultset-status-centered-crisp-desktop.png` shows the status content centered horizontally and vertically. Browser measurements report 2.04× effective source density on desktop and 4.10× on mobile, an integer desktop x-position, zero mobile horizontal overflow, and no console warnings or errors.

### Iteration 15

- Earlier finding: horizontally centering the status content moved the enlarged crop away from the screenshot’s left edge, while the text still appeared slightly high within the narrow strip.
- Fix: restored the enlarged raster to `left: 0` and moved it down by an additional 2 px at both responsive sizes, without changing the 1.8× high-density scale or the attached outer frame.
- Post-fix evidence: browser measurements show the outer magnifier and main screenshot sharing the same x-coordinate at 68 px desktop and 36 px mobile. `/tmp/dory-resultset-status-left-centered-desktop.png` confirms the text is vertically centered; mobile remains free of horizontal overflow and the console reports no warnings or errors.

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
