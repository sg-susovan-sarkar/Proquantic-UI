/** @type {import('tailwindcss').Config} */
export default {
  prefix: "tw-",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,css,scss}"],
  theme: {
    extend: {
      screens: {
        xl: "1200px",
        "2xl": "1400px",
        "custom-2xl": "1600px",
      },
      colors: {
        brand: {
          green: "var(--color-brand-green)",
          "green-hover": "var(--color-brand-green-hover)",
          blue: "var(--color-brand-blue)",
          "blue-dark": "var(--color-brand-blue-dark)",
          "blue-accent": "var(--color-brand-blue-accent)",
        },
        ink: {
          DEFAULT: "var(--color-ink)",
          900: "var(--color-ink-900)",
          700: "var(--color-ink-700)",
          500: "var(--color-ink-500)",
          300: "var(--color-ink-300)",
          200: "var(--color-ink-200)",
          100: "var(--color-ink-100)",
          50: "var(--color-ink-50)",
        },
        surface: {
          DEFAULT: "var(--color-surface)",
          muted: "var(--color-surface-muted)",
          dark: "var(--color-surface-dark)",
        },
      },
      fontFamily: {
        sans: [
          "'SF Pro Display'",
          "'SF Pro'",
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],
        display: ["'SF Pro Display'", "'SF Pro'", "Inter", "sans-serif"],
        dm: ["'DM Sans'", "Inter", "sans-serif"],
      },
      fontSize: {
        "d-xl": ["100px", { lineHeight: "0.95", letterSpacing: "-0.03em" }],
        "d-xl-2": ["88px", { lineHeight: "0.95", letterSpacing: "-0.03em" }],
        "d-lg": ["70px", { lineHeight: "1.05", letterSpacing: "-0.02em" }],
        "d-md": ["60px", { lineHeight: "1.05", letterSpacing: "-0.02em" }],
        "h-xl": ["45px", { lineHeight: "1.2", letterSpacing: "-0.02em" }],
        "h-lg": ["40px", { lineHeight: "1.2", letterSpacing: "-0.02em" }],
        "h-md": ["30px", { lineHeight: "1.3" }],
        "h-sm": ["25px", { lineHeight: "1.3" }],
      },
      borderRadius: {
        pill: "80px",
        card: "30px",
      },
      boxShadow: {
        soft: "0 4px 24px rgba(0,0,0,0.06)",
        lift: "0 18px 40px rgba(0,0,0,0.08)",
        phone: "0 40px 80px rgba(32,49,175,.25), 0 8px 24px rgba(0,0,0,.15)",
      },
      backgroundImage: {
        "hero-glow": "url('/src/assets/images/home-bnr-bg.png')",
        accelerate: "url('/src/assets/images/statistic-bg.jpg')",
        footer: "url('/src/assets/images/footer-bg.png')",
        "soft-tile":
          "linear-gradient(135deg, rgba(66,83,173,.15), rgba(34,139,0,.10)), linear-gradient(160deg, #eef2ff, #f3fbee)",
        "partner-bg": "url('/src/assets/images/partner-bg.jpg')",
      },
    },
    container: {
      center: true,
      padding: "1.25rem",
      screens: {
        xl: "1140px",
        "2xl": "1320px",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".border-image-fade": {
          "border-image-source":
            "linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, #FFFFFF 19.71%, #FFFFFF 80.77%, rgba(255, 255, 255, 0) 100%)",
          "border-image-slice": "1",
        },
        ".border-image-fade-primary": {
          "border-image-source":
            "linear-gradient(90deg, rgba(66, 83, 173, 0) 0%, #4253AD 17.79%, #4253AD 85.58%, rgba(66, 83, 173, 0) 100%)",
          "border-image-slice": "1",
        },
      });
    },
  ],
};
