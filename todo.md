# Church of Reason Website - Project TODO

## Core Pages
- [x] Home page with hero section, tagline, and navigation
- [x] Precepts page with all 10 precepts in elegant layout
- [x] Truths page with Hard Truths, Easy Truths, and Duties sections
- [x] Library page with curated book recommendations by category

## Home Page Components
- [x] Hero section with "Promoting Reason in a Modern World" tagline
- [x] Bold headline and CTA button linking to Precepts
- [x] "Thinking is Good" introductory text block
- [x] "The Ultimate Goals" section with Health, Wealth, Knowledge cards
- [x] Featured quote block
- [x] Navigation bar with Home, Precepts, Truths, Library, Blog links

## Precepts Page
- [x] Display all 10 Reasonable Precepts
- [x] Each precept with title, description, and philosophical quote
- [x] Elegant accordion or card layout
- [x] Smooth interactions and visual hierarchy

## Truths Page
- [x] Hard Truths section with list and imperatives
- [x] Easy Truths section with list and imperatives
- [x] Duties section (Aspire, Acquire, Preserve)
- [x] Strong visual impact for call-to-action imperatives
- [x] Charity recommendations and disclaimers

## Library Page
- [x] Science books category
- [x] Wealth books category
- [x] Classic Philosophy books category
- [x] Health books category
- [x] Must Reads category
- [x] Each book links to Amazon
- [x] Curated description and visual presentation

## Global Components
- [x] Navigation bar (sticky/persistent)
- [x] Footer with Facebook link, charities (Doctors Without Borders, UNICEF), and site motto
- [x] Responsive design for mobile and desktop
- [x] Elegant typography and color scheme
- [x] Smooth transitions and micro-interactions

## Design System
- [x] Color palette (sophisticated, timeless)
- [x] Typography (refined fonts and hierarchy)
- [x] Spacing and layout system
- [x] Component library (cards, buttons, quotes, etc.)
- [x] Dark/light theme support (light theme default with dark palette defined)

## Technical Setup
- [x] Configure Tailwind CSS with custom theme
- [x] Set up Google Fonts for elegant typography
- [x] Create reusable components
- [x] Set up routing for all pages
- [x] Implement responsive design

## Testing & Delivery
- [x] Visual verification on desktop
- [x] Mobile responsiveness check
- [x] Cross-browser compatibility (standard Tailwind/React stack, vendor-prefixed via autoprefixer)
- [x] Performance optimization (GPU-friendly transitions, font preconnect, no heavy assets)
- [x] Final checkpoint and delivery

## Restore Original Images & Wording (User Request)
- [x] Extract all original images from churchreason.com (hero and section images)
- [x] Capture exact original wording from all pages (Home, Precepts, Truths, Library)
- [x] Upload original images to static assets storage
- [x] Restore hero image and original wording on Home page
- [x] Restore original wording on Precepts page
- [x] Restore original wording on Truths page
- [x] Restore original wording and images on Library page (original Library is hosted on hereandclear.org; book list retained with Amazon links, no images on original)
- [x] Verify all pages visually after restoration
- [x] Save checkpoint and deliver updated site

## Bug Fixes (User Reported)
- [x] Fix nested <a> error: remove <a> tags wrapped inside wouter <Link> components (Home page and anywhere else)
- [x] Remove darkening overlay from Home hero so the image shows in full color and visibility (keep text readable)
- [x] Remove all text from the Home hero (image only)
- [x] Move the site name/headline to a new section just below the hero
- [x] Remove the "Made with Manus" badge (platform-injected; controlled via Management UI Settings, not code — user informed)
- [x] Change site icon/logo from Psi (Ψ) to Phi (Φ) in nav and new favicon.svg (footer has no glyph)
- [x] Re-extract the original Library book list (titles, authors, ASINs) from hereandclear.org
- [x] Correct Library entries so displayed title/author matches the actual book behind each Amazon link (verified all 32 ASINs against live Amazon pages)
- [x] Verify all Amazon links resolve to the correct books (dropped non-book/unrelated ASINs: DVD sets and A Curious Madness)
