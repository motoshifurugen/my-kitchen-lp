export default {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx}"] ,
  theme: {
    extend: {
      colors: {
        background: {
          primary: "#FDFCFA",
          secondary: "#F5F3EF",
          tertiary: "#FFFFFF"
        },
        surface: {
          elevated: "#FFFFFF",
          pressed: "#F0EBE5",
          selected: "#F5EDE6"
        },
        text: {
          primary: "#2C2825",
          secondary: "#6B6560",
          tertiary: "#9C9590",
          inverse: "#FDFCFA",
          disabled: "#B8B3AD",
          link: "#C17A50"
        },
        icon: {
          default: "#6B6560",
          active: "#C17A50",
          disabled: "#B8B3AD"
        },
        accent: {
          primary: "#C17A50",
          secondary: "#7B9E87",
          subtle: "#E8DFD5"
        },
        button: {
          primary: {
            bg: "#4B3426",
            bgPressed: "#3F2C20",
            bgDisabled: "#7A6557",
            text: "#F6EFE5"
          },
          secondary: {
            bg: "transparent",
            bgPressed: "rgba(75,52,38,0.10)",
            border: "#4B3426",
            borderDisabled: "rgba(75,52,38,0.35)",
            text: "#4B3426",
            textDisabled: "rgba(75,52,38,0.35)"
          }
        },
        semantic: {
          success: {
            text: "#5A7A63",
            background: "#EDF5EF",
            border: "#7B9E87"
          },
          error: {
            text: "#9E5A4D",
            background: "#F6EDEA",
            border: "#D9A59A"
          }
        }
      },
      fontFamily: {
        serif: ["Shippori Mincho B1", "serif"],
        sans: ["Zen Kaku Gothic New", "sans-serif"],
        display: ["Shippori Mincho B1", "serif"]
      },
      fontSize: {
        caption: ["16px", { lineHeight: "1.6" }],
        body: ["17px", { lineHeight: "1.6" }],
        subheading: ["19px", { lineHeight: "1.4" }],
        heading: ["22px", { lineHeight: "1.4" }],
        display: ["28px", { lineHeight: "1.3" }]
      },
      letterSpacing: {
        wide: "0.02em"
      },
      spacing: {
        xs: "4px",
        sm: "8px",
        md: "16px",
        lg: "24px",
        xl: "32px",
        "2xl": "48px",
        "screen-x": "20px",
        "screen-y": "16px"
      },
      borderRadius: {
        sm: "4px",
        md: "8px",
        lg: "12px",
        xl: "16px",
        full: "9999px"
      },
      boxShadow: {
        sm: "0 1px 2px rgba(0,0,0,0.05)",
        md: "0 2px 8px rgba(0,0,0,0.08)",
        lg: "0 4px 16px rgba(0,0,0,0.10)"
      }
    }
  },
  plugins: []
};
