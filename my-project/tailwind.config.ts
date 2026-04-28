import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // ─── Container — global page padding (Outer Layout) ─────────────────
      container: {
        center: true,
        padding: {
          DEFAULT: "0.5rem", // 8px — p-2 outer page padding per DESIGN.md
          md: "1rem",        // 16px — p-4
        },
        screens: {
          "2xl": "1400px",
        },
      },

      // ─── Brutalist Color System (DESIGN.md) ─────────────────────────────
      colors: {
        // Shadcn semantic tokens (via CSS variables, oklch)
        background: "var(--background)",
        foreground: "var(--foreground)",
        card: {
          DEFAULT: "var(--card)",
          foreground: "var(--card-foreground)",
        },
        popover: {
          DEFAULT: "var(--popover)",
          foreground: "var(--popover-foreground)",
        },
        primary: {
          DEFAULT: "var(--primary)",
          foreground: "var(--primary-foreground)",
        },
        secondary: {
          DEFAULT: "var(--secondary)",
          foreground: "var(--secondary-foreground)",
        },
        muted: {
          DEFAULT: "var(--muted)",
          foreground: "var(--muted-foreground)",
        },
        accent: {
          DEFAULT: "var(--accent)",
          foreground: "var(--accent-foreground)",
        },
        destructive: { DEFAULT: "var(--destructive)" },
        border: "var(--border)",
        input: "var(--input)",
        ring: "var(--ring)",
        sidebar: {
          DEFAULT: "var(--sidebar)",
          foreground: "var(--sidebar-foreground)",
          primary: "var(--sidebar-primary)",
          "primary-foreground": "var(--sidebar-primary-foreground)",
          accent: "var(--sidebar-accent)",
          "accent-foreground": "var(--sidebar-accent-foreground)",
          border: "var(--sidebar-border)",
          ring: "var(--sidebar-ring)",
        },

        // ─── Brutalist hardcoded tokens (DESIGN.md) ───────────────────────
        // Surfaces
        "bg-light": "#F4F4F5",      // Light global background / header
        "bg-dark": "#0A0A0A",       // Hero deep black (not pure #000)
        "bg-white": "#FFFFFF",

        // Text
        "text-primary": "#FFFFFF",   // Headings on dark
        "text-secondary": "#A1A1AA", // Neutral gray (services list, captions)
        "text-inverted": "#0A0A0A",  // Dark text on light header

        // Grid accents
        "grid-line": "#333333",      // Crosshairs (+) and grid lines
      },

      // ─── Border Radius — Brutalist ─────────────────────────────────────
      borderRadius: {
        none: "0",
        sm: "4px",
        DEFAULT: "8px",
        md: "8px",
        lg: "var(--radius)",
        xl: "16px",
        "2xl": "20px",
        "3xl": "24px",       // Hero container top corners
        "4xl": "32px",       // Larger hero variant
        full: "9999px",      // Pill buttons & tags
      },

      // ─── Font Families — Geometric grotesque only (DESIGN.md §2) ───────
      fontFamily: {
        sans: [
          "var(--font-geist-sans)",
          "Inter",
          "'Helvetica Neue'",
          "Helvetica",
          "Arial",
          "system-ui",
          "-apple-system",
          "'Segoe UI'",
          "sans-serif",
        ],
        display: [
          "var(--font-geist-sans)",
          "Inter",
          "'Helvetica Neue'",
          "sans-serif",
        ],
        mono: [
          "var(--font-geist-mono)",
          "SFMono-Regular",
          "Menlo",
          "Monaco",
          "Consolas",
          "'Courier New'",
          "monospace",
        ],
      },

      // ─── Typography Scale — Massive Display Sizes (DESIGN.md) ───────────
      fontSize: {
        xs: ["0.75rem", { lineHeight: "1rem" }],
        sm: ["0.875rem", { lineHeight: "1.25rem" }],   // Nav / body small
        base: ["1rem", { lineHeight: "1.5rem" }],
        lg: ["1.125rem", { lineHeight: "1.75rem" }],
        xl: ["1.25rem", { lineHeight: "1.75rem" }],
        "2xl": ["1.5rem", { lineHeight: "2rem" }],
        "3xl": ["1.875rem", { lineHeight: "2.25rem" }],
        "4xl": ["2.25rem", { lineHeight: "2.5rem" }],
        "5xl": ["3rem", { lineHeight: "1" }],          // "Studio" sub-headline
        "6xl": ["3.75rem", { lineHeight: "1" }],
        "7xl": ["4.5rem", { lineHeight: "1" }],
        "8xl": ["6rem", { lineHeight: "0.95" }],
        "9xl": ["8rem", { lineHeight: "0.9" }],
        // Display extreme
        display: ["clamp(4rem, 12vw, 12rem)", { lineHeight: "0.9", letterSpacing: "-0.04em" }],
        "display-xl": ["clamp(6rem, 14vw, 16rem)", { lineHeight: "0.85", letterSpacing: "-0.05em" }],
        hero: ["12vw", { lineHeight: "0.9", letterSpacing: "-0.04em" }],
      },

      // ─── Letter Spacing — Tight tracking for headlines ──────────────────
      letterSpacing: {
        tightest: "-0.05em",
        tighter: "-0.04em", // Display headline tracking per DESIGN.md
        tight: "-0.02em",
        normal: "0",
        wide: "0.025em",
        wider: "0.05em",
        widest: "0.1em",
      },

      // ─── Line Heights ──────────────────────────────────────────────────
      lineHeight: {
        none: "1",
        display: "0.9",     // Massive headlines
        heading: "1.1",
        subhead: "1.2",
        snug: "1.375",
        body: "1.5",
        relaxed: "1.625",
      },

      // ─── Spacing — 8pt grid + brutalist huge inner paddings ────────────
      spacing: {
        // Standard 8pt scale is preserved by Tailwind defaults; add macro values.
        18: "4.5rem",        // 72px
        22: "5.5rem",        // 88px
        26: "6.5rem",        // 104px
        30: "7.5rem",        // 120px
        34: "8.5rem",        // 136px
        38: "9.5rem",        // 152px
        // Hero inner padding aliases (p-12 / p-16 per DESIGN.md)
        "hero-sm": "3rem",   // 48px
        "hero-md": "4rem",   // 64px
        "hero-lg": "6rem",   // 96px
      },

      // ─── Max-widths — content rail ─────────────────────────────────────
      maxWidth: {
        "8xl": "88rem",
        "9xl": "96rem",
      },

      // ─── Box Shadows — Brutalist (sharp, not soft) ──────────────────────
      boxShadow: {
        "ring-grid": "0 0 0 1px #333333",
        "ring-light": "0 0 0 1px #F4F4F5",
        "ring-inset": "inset 0 0 0 1px #333333",
        brutal: "8px 8px 0 0 #0A0A0A",
        "brutal-sm": "4px 4px 0 0 #0A0A0A",
      },

      // ─── Background Images — noise overlay (DESIGN.md §5) ──────────────
      backgroundImage: {
        noise:
          "url(\"data:image/svg+xml;utf8,<svg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)' opacity='0.5'/></svg>\")",
      },

      // ─── Animations — buttery smooth, minimal ──────────────────────────
      keyframes: {
        "fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        "slide-up": {
          from: { opacity: "0", transform: "translateY(24px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "fade-in": "fade-in 600ms cubic-bezier(0.22, 1, 0.36, 1) both",
        "slide-up": "slide-up 700ms cubic-bezier(0.22, 1, 0.36, 1) both",
        "accordion-down": "accordion-down 200ms ease-out",
        "accordion-up": "accordion-up 200ms ease-out",
      },

      transitionTimingFunction: {
        smooth: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
}

export default config
