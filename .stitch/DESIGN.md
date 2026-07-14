# Design System: Eveno Premium Marketplace

## 6. Design System Notes for Stitch Generation
When generating screens for the Eveno platform, STRICTLY adhere to the following premium, modern aesthetics to ensure a cohesive and highly impressive user experience:

**Color Palette:**
- **Primary:** Deep Royal Indigo (`#312E81` to `#4338CA`) — Used for major CTA buttons, headers, and primary active states.
- **Accent:** Vibrant Coral / Gold (`#F43F5E` or `#F59E0B`) — Used for badges, highlights, and secondary playful actions.
- **Background:** Soft, off-white/pearl background (`#FAFAFA`) to keep the site feeling expansive and clean, with pure white (`#FFFFFF`) for elevated cards.
- **Text:** Dark Slate (`#1E293B`) for primary text to ensure readability without harshness, and Cool Gray (`#64748B`) for secondary text.

**Typography:**
- Use a highly legible, geometric sans-serif (like `Inter` or `Plus Jakarta Sans`) for the entire application.
- Headings should be bold, tightly tracked, and clearly distinct in hierarchy.
- Use uppercase, widely-tracked micro-copy (`text-xs font-semibold tracking-wider`) for section overlines (e.g., "HOW IT WORKS").

**UI Elements & Components:**
- **Cards:** White background, large border-radius (`rounded-2xl` or `rounded-3xl`), with very soft, diffused drop shadows (`shadow-lg` or custom soft shadow) to create depth.
- **Buttons:** Fully rounded (`rounded-full`) or heavily rounded (`rounded-xl`). Primary buttons must use the Indigo color, occasionally with a subtle gradient or inner shadow to feel premium.
- **Glassmorphism:** Use blurred, translucent backgrounds (`bg-white/70 backdrop-blur-md`) for sticky headers, floating search bars, or overlay text on images.
- **Imagery:** Use high-quality, aspirational event photography (weddings, parties, beautifully decorated tables). Use colorful, abstract 3D shapes or premium SVG illustrations where photos aren't available. Do NOT use generic flat vectors.
- **Whitespace:** Use extreme, generous whitespace (`p-12`, `gap-8`, `mb-24`) to let elements breathe. It should never feel cramped.

**Layout & Animations:**
- Break out of rigid boxes. Use overlapping elements (e.g., a card slightly overlapping a background section).
- Ensure interactive elements (buttons, cards) have clear, satisfying hover states (e.g., `hover:-translate-y-1 hover:shadow-xl transition-all duration-300`).
