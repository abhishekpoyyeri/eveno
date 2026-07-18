# Evenow - Luxury Event Orchestration

This is a modern Next.js 15 application built with React 19 and Tailwind CSS v4, utilizing Supabase for backend authentication.

## Design System & Architecture

Evenow relies on a meticulously crafted design system to ensure a premium, consistent, and highly polished user experience. Below are the architectural guidelines for developing in this repository.

### 1. Theme & Colors
The application uses a **Pearl and Indigo** color palette to invoke a sense of luxury and professionalism.
- **Primary Color:** Deep Royal Indigo (`--color-primary: #1a146b`) used for key interactions, buttons, and high-visibility text.
- **Background Color:** Pearl/Off-White (`--color-background: #f9f9ff`) used to soften contrast and provide a clean canvas for glassmorphism.
- **Glassmorphism:** Elements like the Header and Feature Cards use `bg-white/70 backdrop-blur-md` for a premium translucent effect.

**Important Note on Dark Mode:** To preserve the specific luxury visual identity across all platforms, OS-level Dark Mode (`dark:` variants) has been deliberately removed from the global theme. The application explicitly forces the cohesive light theme to prevent background/text color clashing.

### 2. Layout & Spacing
Consistent spacing is critical. We use custom CSS variables defined in `src/app/globals.css` to manage layout constraints across all devices:

- `--spacing-section-gap (80px)`: Vertical spacing between major independent sections.
- `--spacing-stack-lg (32px)`: Padding for sections and large components.
- `--spacing-stack-md (16px)`: Spacing between related items within a component (e.g., text elements).
- `--spacing-gutter (24px)`: The gap between grid columns.
- `--spacing-container-max (1280px)`: The absolute maximum width of the main content column.
- `--spacing-margin-desktop (64px)` and `--spacing-margin-mobile (20px)`: Standard horizontal paddings.

### 3. Page Structure Best Practices
When creating or modifying top-level pages (e.g., `/services`, `/vendors`), follow these strict structural guidelines:

#### The Main Container
Because the navigation `Header` is `fixed` and `h-20` (80px tall), the `<main>` tag of every page MUST start with exactly `pt-20` to prevent content from slipping behind the header:
```tsx
<main className="pt-20 min-h-screen bg-background">
  {/* Content */}
</main>
```

#### Full-Width Hero Sections
If a section contains a full-width background image, it should immediately follow the `<main>` tag with no top padding, allowing it to sit flush against the bottom of the header.

#### Standard Sections & Grids
For standard content sections and grid lists (e.g., Vendor grids or Package lists), you must wrap the content using the global container constraints to prevent edge-to-edge stretching:
```tsx
<section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop pt-stack-lg pb-section-gap">
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
    {/* Grid Items */}
  </div>
</section>
```
- **`max-w-container-max mx-auto`**: Centers the content and prevents it from exceeding 1280px wide on large displays.
- **`px-margin-mobile md:px-margin-desktop`**: Applies the correct breathing room on the left and right edges for phones and tablets.
- **`pt-stack-lg`**: Pushes the section down from the header so text doesn't feel cramped.

---

## Features & Implementation Methods

Below is a breakdown of the core features of the Evenow application and the specific technical methods used to implement them.

### 1. Authentication (Login / Sign Up)
- **Method:** Supabase Server-Side Rendering (SSR) Auth.
- **Implementation:** Authentication is handled entirely on the server using **Next.js Server Actions** (e.g., `src/app/login/actions.ts`). This ensures secure credential handling without exposing logic to the client. Session states and JWT token refreshes are managed automatically via Next.js Middleware (`src/utils/supabase/middleware.ts`) on every route change.

### 2. Global Styling & Theming
- **Method:** Tailwind CSS v4 Custom Properties (CSS Variables).
- **Implementation:** The entire visual identity is orchestrated centrally in `src/app/globals.css`. By mapping semantic tokens (like `--color-primary`) to absolute values, the application guarantees color and spacing consistency.

### 3. Responsive Data Grids (Vendors, Services, Packages)
- **Method:** CSS Grid Layouts & Tailwind Breakpoints.
- **Implementation:** A mobile-first approach is strictly followed. Item lists default to a single column (`grid-cols-1`) and expand based on device size (`md:grid-cols-2 lg:grid-cols-3`). Global constraints (`max-w-container-max mx-auto px-margin-mobile`) prevent the UI from stretching infinitely on ultra-wide monitors.

### 4. Interactive UI & "Glassmorphism"
- **Method:** Tailwind Backdrop Filters & Transitions.
- **Implementation:** The premium aesthetic is achieved using the `glass-card` CSS class, which utilizes `bg-white/70 backdrop-blur-md`. Micro-interactions (like hovering over a vendor card) use hardware-accelerated transforms (`hover:scale-[1.02] transition-transform duration-300`) to ensure 60fps smooth animations.

---

## Database Structure (Supabase)

The backend data architecture is designed for a multi-sided marketplace connecting luxury clients with premium event vendors.

### 1. `auth.users` (Native Supabase Table)
Handles all secure authentication.
- **Columns:** `id` (UUID), `email`, `encrypted_password`, `created_at`, `last_sign_in_at`.

### 2. `public.profiles`
Extends the native auth table with application-specific user data.
- **Columns:** 
  - `id` (UUID, Foreign Key to `auth.users.id`)
  - `full_name` (Text)
  - `role` (Enum: 'client', 'vendor', 'admin')
  - `avatar_url` (Text)
  - `created_at` (Timestamp)

### 3. `public.vendors`
Stores the directory of premium artisans and event professionals.
- **Columns:** 
  - `id` (UUID, Primary Key)
  - `profile_id` (UUID, Foreign Key to `profiles.id`)
  - `business_name` (Text)
  - `category` (Enum: 'Venue', 'Catering', 'Decor', 'Floral', 'Production')
  - `rating` (Numeric)
  - `location` (Text)
  - `featured_image_url` (Text)

### 4. `public.packages`
Pre-curated event orchestration packages.
- **Columns:**
  - `id` (UUID, Primary Key)
  - `tier_name` (Text - e.g., 'Foundation', 'Signature', 'Apex')
  - `base_price` (Numeric)
  - `description` (Text)
  - `features` (JSONB Array)

### 5. `public.services`
A-la-carte services that can be added to packages or booked individually.
- **Columns:**
  - `id` (UUID, Primary Key)
  - `vendor_id` (UUID, Foreign Key to `vendors.id`)
  - `service_name` (Text)
  - `description` (Text)
  - `price_starts_at` (Numeric)

---



Set up your `.env` file with Supabase credentials:
```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
