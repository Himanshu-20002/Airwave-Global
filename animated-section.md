# TASK — Build Premium Animated Logistics Route System

You are working on an existing Next.js website.

I want you to implement a premium, subtle, highly optimized animated logistics route visualization in the existing **LOGISTICS CAPABILITIES** section.

I have provided a reference screenshot in the current conversation. In that screenshot, the red hand-drawn lines represent the approximate routes I want.

IMPORTANT:
- Do NOT redesign the existing section.
- Do NOT change the cards, typography, heading, CTA styling, spacing, colors, or overall visual hierarchy unless absolutely necessary for integration.
- The red lines in the reference image are ONLY visual guidance. Do not use red in the final website.
- The final result should look like a premium enterprise logistics / SaaS website.
- The animation should feel subtle, sophisticated, technical, and expensive — not like a cartoon or game.

---

# 1. CORE VISUAL CONCEPT

Create a network of subtle curved "sea routes" around and underneath the logistics cards.

Small cargo-ship / micro-boat SVG icons should continuously travel along these routes.

The routes should visually originate from the left and right edges of the section and gradually converge toward the central CTA:

"Speak to a Senior Freight Expert"

The visual story should be:

GLOBAL ROUTES
      ↓
LOGISTICS CAPABILITIES
      ↓
CARGO MOVEMENT
      ↓
EXPERT / CTA

The CTA should feel like the destination of the logistics network.

The routes should remain primarily in the empty space surrounding/below the cards and must NOT visually interfere with the card content.

---

# 2. TECHNOLOGY REQUIREMENT — VERY IMPORTANT

Use a lightweight SVG-based implementation.

Preferred architecture:

- Native inline SVG
- SVG `<path>` elements for routes
- SVG `<animateMotion>` for boats
- `<mpath>` to attach boats to routes
- CSS for route appearance
- CSS animations only where appropriate
- No canvas
- No Three.js
- No Lottie
- No GIFs
- No video
- No large image assets
- No unnecessary animation library
- Do NOT introduce GSAP or Framer Motion just for this effect
- Do NOT create a JavaScript `requestAnimationFrame` animation loop
- Do NOT continuously update React state for animation

The browser should handle the animation natively.

The objective is:

EXTREMELY LIGHTWEIGHT
+
SMOOTH
+
RESPONSIVE
+
LOW CPU USAGE
+
LOW MEMORY USAGE

---

# 3. COMPONENT ARCHITECTURE

Keep the implementation clean.

Prefer:

components/
  logistics/
    LogisticsCapabilities.tsx
    LogisticsRoutes.tsx

If the existing project already has an appropriate component structure, follow the existing architecture instead of unnecessarily creating new folders.

The main section should remain something similar to:

<section className="relative overflow-hidden">

  <LogisticsRoutes />

  <div className="relative z-10">
    existing heading
    existing cards
    existing CTA
  </div>

</section>

The routes must be decorative and should never block interaction.

The SVG must use:

pointer-events: none;

and:

aria-hidden="true"

---

# 4. SVG VIEWBOX

Use a normalized SVG coordinate system.

Example:

<svg
  viewBox="0 0 1920 760"
  preserveAspectRatio="none"
  className="absolute inset-0 h-full w-full pointer-events-none"
  aria-hidden="true"
>

Do NOT calculate route positions using JavaScript based on viewport width.

The SVG should scale naturally.

Use the existing section's actual height rather than forcing an unnecessarily large fixed height.

---

# 5. ROUTE DESIGN

Create approximately 6–8 independent curved routes.

Do NOT make one giant continuous line.

The routes should feel like separate maritime trade lanes.

Conceptually:

LEFT SIDE

Boat → ─────────────╮
                    ╲
Boat → ──────────────╲
                      ╲
                       ╲
                        ╲
                         ╲
                          ● CTA


RIGHT SIDE

                         ╱───────────── ← Boat
                        ╱
                       ╱
                      ╱
                     ╱
                    ╱
                   ╯
                         CTA


Additional secondary routes can approach from lower-left and lower-right.

The routes should have natural Bézier curves.

Avoid perfectly symmetrical paths.

Avoid looking mathematically generated.

The paths should feel organic and professionally art-directed.

---

# 6. ROUTE PLACEMENT

The routes should generally occupy the empty area around the cards.

IMPORTANT:

Do NOT draw routes directly through:

- heading
- subtitle
- card text
- card icons/numbers
- card borders
- CTA text

The cards remain the primary content.

The route system is a background visual layer.

The approximate composition should be:

┌─────────────────────────────────────────────────────────┐

                    LOGISTICS CAPABILITIES
                         subtitle

             ┌────────┐ ┌────────┐ ┌────────┐ ┌────────┐
             │ CARD 01 │ │ CARD 02 │ │ CARD 03 │ │ CARD 04 │
             └────────┘ └────────┘ └────────┘ └────────┘

🚢 ────────────────╮
                    ╲
                     ╲
                      ╲
                       ╲
                        🟠 CTA
                       ╱
                      ╱
                     ╱
🚢 ─────────────────╯

└─────────────────────────────────────────────────────────┘

The actual routes should be more sophisticated than this diagram.

---

# 7. ROUTE STYLING

The routes must be subtle.

They should NOT look like bright neon lines.

Suggested styling:

stroke:
rgba(100, 140, 190, 0.16)

stroke-width:
1–1.5px

fill:
none

Some selected routes can have a very subtle warm/orange accent:

rgba(255, 140, 50, 0.20)

Do not overuse orange.

The existing website's navy/orange design language must remain dominant.

The routes should become visible only after looking closely.

---

# 8. OPTIONAL FLOW EFFECT

A very subtle moving dashed/dotted effect can be applied to selected routes.

For example:

stroke-dasharray: 3 14;

with a slow CSS animation.

But DO NOT animate every route aggressively.

The visual should remain calm.

Example:

@keyframes routeFlow {
  to {
    stroke-dashoffset: -120;
  }
}

animation:
routeFlow 8s linear infinite;

Only use this if it genuinely improves the visual.

---

# 9. MICRO BOATS

Create tiny cargo-ship / maritime vessel silhouettes using inline SVG.

DO NOT use:

- PNG
- JPG
- WebP
- external SVG files
- icon libraries unless the existing project already has one and the icon fits perfectly

Create a simple but premium micro-boat SVG.

The boat should be approximately:

12–20px

depending on viewport.

It should look like a tiny cargo vessel viewed from a minimal side profile.

It should NOT look like an emoji.

Do NOT use:

🚢

Create an actual vector silhouette.

Keep the SVG geometry extremely small.

---

# 10. BOAT ANIMATION

Attach each boat to one route using:

<animateMotion>

and:

<mpath>

Example architecture:

<g className="boat">
  <use href="#boat-shape" />

  <animateMotion
    dur="10s"
    repeatCount="indefinite"
    rotate="auto"
  >
    <mpath href="#route-1" />
  </animateMotion>
</g>

Use different durations.

For example:

8s
10s
12s
14s
16s

Do NOT make all boats move at exactly the same speed.

---

# 11. OFFSET ANIMATION

Do NOT allow all boats to start from the beginning of their routes simultaneously.

Use negative animation delays / different start offsets where supported.

Example concept:

Boat 1:
begin="0s"

Boat 2:
begin="-3s"

Boat 3:
begin="-6s"

Boat 4:
begin="-9s"

etc.

The page should look alive immediately after loading.

There should never be a moment where all boats are grouped together at one edge.

---

# 12. BOAT BEHAVIOR

The boats must follow the curvature of their routes.

Use:

rotate="auto"

so the boat orientation follows the path.

The movement should be:

- slow
- smooth
- continuous
- subtle
- predictable
- premium

Avoid:

- bouncing
- acceleration effects
- sudden teleporting
- random movement
- excessive rotation
- flashing

---

# 13. CTA CONVERGENCE

The routes should visually converge around the CTA.

The CTA is:

"Speak to a Senior Freight Expert"

The final sections of several routes should approach the CTA from different directions.

Do NOT literally draw all paths into one point underneath the button.

Instead, create a visually pleasing convergence zone.

Example:

          ╲
           ╲
            ╲
             ╲
              ╲
             [ CTA ]
              ╱
             ╱
            ╱
           ╱
          ╱

The CTA should remain clearly readable and clickable.

The routes should pass behind the CTA layer.

Use z-index appropriately:

routes:
lower layer

cards/content:
higher layer

CTA:
highest content layer

---

# 14. CTA GLOW

If the existing CTA already has a shadow/glow, preserve it.

If necessary, add a VERY subtle warm ambient glow behind the CTA.

Do NOT create a strong pulsing neon effect.

The CTA should remain professional.

---

# 15. DEPTH / OPACITY

Create a subtle sense of depth.

Possible approach:

Primary routes:
opacity 0.20

Secondary routes:
opacity 0.10–0.14

Boats:
opacity 0.55–0.85

Boats should be more noticeable than the routes.

This gives the feeling that the routes are infrastructure and the boats are the moving objects.

---

# 16. RESPONSIVE BEHAVIOR

Desktop:

Show approximately 6–8 routes and 5–8 boats.

Tablet:

Reduce to approximately 4–5 routes and 3–5 boats.

Mobile:

Simplify aggressively.

Show approximately:

2–3 routes
2–3 boats

Do NOT allow routes to interfere with mobile card content.

On small mobile screens, it is acceptable to hide some decorative routes entirely.

The actual content must always have priority.

Do NOT create separate completely different implementations for every breakpoint.

Use the same SVG system with responsive CSS visibility/opacity.

---

# 17. REDUCED MOTION

This is REQUIRED.

Respect:

@media (prefers-reduced-motion: reduce)

When reduced motion is enabled:

- stop boat movement
- stop route-flow animation
- keep static routes if they look good
- do not continuously animate anything

Example:

@media (prefers-reduced-motion: reduce) {
  .logistics-route {
    animation: none;
  }

  .logistics-boat {
    display: none;
  }
}

Choose the implementation that works best with the SVG structure.

---

# 18. PERFORMANCE REQUIREMENTS

This is one of the highest priorities.

Do NOT:

- use requestAnimationFrame
- update React state every frame
- use scroll listeners for animation
- use IntersectionObserver for something that does not need it
- import a heavy animation library
- create hundreds of SVG elements
- create hundreds of DOM elements
- load external animation assets

Target:

ONE SVG

approximately:

6–8 paths

5–8 boats

minimal DOM

native browser animation

The animation must remain smooth at 60fps on normal modern desktop hardware.

---

# 19. NEXT.JS COMPATIBILITY

The implementation must work cleanly in the existing Next.js project.

Prefer keeping the route component as a server-compatible component if possible.

Do NOT add:

"use client";

unless it is genuinely necessary.

Native SVG animation does not require React client-side state.

If the existing section is already a client component, do not unnecessarily refactor it.

---

# 20. ACCESSIBILITY

The decorative route SVG must use:

aria-hidden="true"

and:

pointer-events-none

The animation must never interfere with:

- button clicks
- card links
- text selection
- keyboard navigation

Do not expose decorative boat/path elements to screen readers.

---

# 21. VISUAL QUALITY

The final result should feel similar to the visual language of:

- premium B2B SaaS
- enterprise logistics
- global freight infrastructure
- high-end technology companies
- sophisticated data visualization

Think:

"global cargo network"

rather than:

"animated website decoration."

The animation should be something users notice after a second or two, not something screaming for attention immediately.

---

# 22. IMPORTANT — PRESERVE EXISTING DESIGN

Before coding:

1. Inspect the existing Logistics Capabilities section.
2. Understand its current layout.
3. Identify the actual section height.
4. Identify the CTA location.
5. Identify card positions.
6. Identify existing colors and CSS variables/tokens.
7. Reuse existing design tokens wherever possible.

Do NOT blindly replace the section.

Integrate the route system into the existing implementation.

Do NOT modify unrelated components.

Do NOT modify global CSS unless absolutely necessary.

Do NOT add unnecessary dependencies.

---

# 23. IMPLEMENTATION QUALITY

Keep the SVG route data organized.

Prefer something conceptually like:

const routes = [
  {
    id: "route-1",
    path: "...",
    duration: "10s",
    delay: "-2s",
  },
  ...
];

However, if using React arrays causes unnecessary complexity for SVG animation references, a simple explicit SVG structure is also acceptable.

Prioritize maintainability and performance.

Use descriptive class names such as:

.logistics-routes
.logistics-route
.logistics-route-accent
.logistics-boat
.logistics-boat-shape

Avoid generic names such as:

.path
.item
.animation

---

# 24. DO NOT OVERENGINEER

This is important.

The desired result does NOT require:

- physics
- collision detection
- random procedural routes
- WebGL
- canvas
- particle systems
- JavaScript animation engines

This should be a carefully art-directed SVG composition.

Simple technology.

Premium result.

---

# 25. FINAL VISUAL TARGET

The final section should communicate:

"Cargo is moving through a global network toward our logistics experts."

The user should see:

- subtle curved maritime routes
- tiny cargo vessels traveling along them
- multiple independent routes
- different boat speeds
- routes approaching the central CTA
- deep navy background
- restrained blue/orange accents
- existing cards remaining dominant
- smooth, premium movement

It should NOT feel:

- busy
- childish
- game-like
- neon
- distracting
- heavy
- gimmicky

---

# 26. DEVELOPMENT PROCESS

First inspect the current codebase and find the Logistics Capabilities section.

Then implement the SVG route system.

After implementation:

1. Run the project.
2. Check for TypeScript errors.
3. Check for ESLint errors.
4. Check desktop layout.
5. Check tablet layout.
6. Check mobile layout.
7. Check animation smoothness.
8. Check that CTA remains clickable.
9. Check that routes do not overlap important text.
10. Check `prefers-reduced-motion`.
11. Check that no unnecessary dependency was introduced.

Fix any issues you find.

---

# 27. DO NOT STOP AT A BASIC IMPLEMENTATION

Do not simply draw 3 straight lines and move icons across them.

The routes need to have:

- natural Bézier curvature
- varying lengths
- different entry directions
- different speeds
- different animation offsets
- subtle hierarchy
- central convergence
- good composition around the cards

The result should look intentionally designed by a professional UI motion designer.

---

# 28. REFERENCE IMAGE

Use the image provided in this conversation as the visual reference.

The RED HAND-DRAWN MARKINGS represent where I want the routes to generally exist and how they should flow toward the CTA.

Do NOT reproduce the red markings.

Translate them into polished, subtle maritime routes.

Most importantly:

RED MARKINGS = ROUTE GUIDANCE ONLY.

The actual website should contain elegant thin routes and tiny professional cargo vessels.

---

# 29. ACCEPTANCE CRITERIA

Consider the task complete only when:

[ ] Existing Logistics Capabilities design is preserved.

[ ] SVG routes exist around/below the cards.

[ ] Routes are curved and organic.

[ ] Multiple independent routes exist.

[ ] Routes visually converge toward the CTA.

[ ] Tiny vector cargo boats travel along routes.

[ ] Boats follow route curvature.

[ ] Boats have different speeds.

[ ] Boats have different starting offsets.

[ ] Routes are subtle and premium.

[ ] Boats are more visible than routes.

[ ] No red markup appears in the final UI.

[ ] No PNG/JPG/GIF/video assets are required.

[ ] No canvas is used.

[ ] No Three.js is used.

[ ] No Lottie is used.

[ ] No GSAP is introduced.

[ ] No Framer Motion is introduced solely for this animation.

[ ] No requestAnimationFrame loop is used.

[ ] No per-frame React state updates are used.

[ ] SVG scales responsively.

[ ] Mobile version is simplified.

[ ] Reduced-motion behavior is implemented.

[ ] SVG does not block pointer events.

[ ] CTA remains fully interactive.

[ ] No unnecessary global changes are made.

[ ] No unnecessary dependencies are installed.

[ ] TypeScript passes.

[ ] ESLint passes.

[ ] Production build passes.

[ ] Final animation feels subtle, smooth, premium, and enterprise-grade.

---

IMPLEMENT THIS NOW IN THE EXISTING PROJECT.

Do not just explain the implementation.

Inspect the existing code, make the changes, run the project/build checks, and fix any issues before finishing.