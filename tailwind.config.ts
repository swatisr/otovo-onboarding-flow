import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "system-ui", "sans-serif"],
      },
      colors: {
        /* Otovo Theme - semantic tokens (prefer these over raw hex) */
        primary: "#1e40b4",
        "primary-light": "#e0eaff",
        "primary-lightest": "#f9fbff",
        secondary: "#fe8f65",
        /* Text */
        "text-primary": "#1b2438",
        "text-secondary": "#6c778c",
        "text-tertiary": "#858EA1",
        "text-white": "#ffffff",
        "text-inverse": "#f9f9fc",
        /* Background */
        "bg-primary": "#f9f9fc",
        "bg-secondary": "#F0F1F5",
        "bg-tertiary": "#DFE1E8",
        "bg-surface": "#ffffff",
        /* Border */
        "border-default": "#dfe1e8",
        "border-light": "#e0eaff",
        "border-error": "#FFC9CF",
        /* Status */
        "status-success": "#11efa1",
        "status-success-dark": "#037048",
        "status-success-light": "#F0FFF7",
        "status-error": "#e23b3e",
        "status-error-light": "#FFF5F6",
        "status-warning": "#fe8f65",
        "status-warning-light": "#FFF5F0",
        /* Dark surfaces (hero, footer) */
        "surface-dark": "#1A202C",
      },
      fontSize: {
        xs: ["10px", { lineHeight: "1.3" }],
        sm: ["11px", { lineHeight: "1.3" }],
        base: ["12px", { lineHeight: "1.4" }],
        md: ["13px", { lineHeight: "1.4" }],
        lg: ["14px", { lineHeight: "1.3" }],
        xl: ["16px", { lineHeight: "1.2" }],
        "2xl": ["18px", { lineHeight: "1.2" }],
        "3xl": ["20px", { lineHeight: "1.2" }],
        "4xl": ["28px", { lineHeight: "1.2" }],
      },
      borderRadius: {
        none: "0px",
        sm: "4px",
        md: "6px",
        lg: "8px",
        xl: "12px",
        "2xl": "16px",
        "3xl": "24px",
        "4xl": "32px",
        full: "610px",
      },
      boxShadow: {
        panel: "0 -4px 24px rgba(27, 36, 56, 0.13)",
        card: "4px 12px 40px rgba(27, 36, 56, 0.08)",
        "card-dark": "4px 12px 32px rgba(0, 0, 0, 0.25)",
        container: "0 8px 40px rgba(0, 0, 0, 0.3)",
      },
      spacing: {
        0: "0px",
        1: "2px",
        2: "4px",
        3: "6px",
        4: "8px",
        5: "12px",
        6: "16px",
        7: "20px",
        8: "24px",
        9: "32px",
        10: "38px",
        11: "40px",
        12: "48px",
      },
    },
  },
  plugins: [],
} satisfies Config;
