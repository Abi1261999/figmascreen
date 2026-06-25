/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    screens: {
      sm: '640px',   
      md: '768px',    
      lg: '1024px',   
      xl: '1280px',
      '2xl': '1536px'
    },
    extend: {
      colors: {
        /* Primary Colors */
        primary: {
          background: "var(--primary-background)",
          foreground: "var(--primary-foreground)",
          light: "var(--primary-light)",
          dark: "var(--primary-dark)"
        },
        /* Secondary Colors */
        secondary: {
          background: "var(--secondary-background)",
          foreground: "var(--secondary-foreground)",
          light: "var(--secondary-light)",
          dark: "var(--secondary-dark)"
        },
        /* Text Colors */
        text: {
          primary: "var(--text-primary)",
          secondary: "var(--text-secondary)",
          muted: "var(--text-muted)",
          accent: "var(--text-accent)",
          light: "var(--text-light)",
          highlight: "var(--text-highlight)",
          overlay: "var(--text-overlay)",
          subtle: "var(--text-subtle)",
          cream: "var(--text-cream)",
          transparent: "var(--text-transparent)"
        },
        /* Background Colors */
        background: {
          main: "var(--bg-main)",
          card: "var(--bg-card)",
          dark: "var(--bg-dark)",
          muted: "var(--bg-muted)",
          'accent-primary': "var(--bg-accent-primary)",
          'accent-secondary': "var(--bg-accent-secondary)",
          'blue-primary': "var(--bg-blue-primary)",
          'blue-light': "var(--bg-blue-light)",
          'blue-medium': "var(--bg-blue-medium)",
          'blue-dark': "var(--bg-blue-dark)"
        },
        /* Border Colors */
        border: {
          primary: "var(--border-primary)",
          muted: "var(--border-muted)",
          light: "var(--border-light)"
        },
        /* Component-Specific Colors */
        header: {
          text: "var(--header-text-color)"
        },
        button: {
          'bg-primary': "var(--button-bg-primary)",
          'bg-secondary': "var(--button-bg-secondary)",
          'bg-dark': "var(--button-bg-dark)",
          'text-light': "var(--button-text-light)",
          'text-dark': "var(--button-text-dark)",
          border: "var(--button-border)"
        },
        star: {
          'blue-1': "var(--star-bg-blue-1)",
          'blue-2': "var(--star-bg-blue-2)",
          'blue-3': "var(--star-bg-blue-3)",
          'blue-4': "var(--star-bg-blue-4)",
          accent: "var(--star-bg-accent)"
        },
        line: {
          muted: "var(--line-bg-muted)",
          light: "var(--line-bg-light)",
          accent: "var(--line-bg-accent)"
        },
        link: {
          primary: "var(--link-text-primary)",
          secondary: "var(--link-text-secondary)"
        },
        input: {
          bg: "var(--input-bg)",
          text: "var(--input-text)"
        }
      },
      /* Typography Extensions */
      fontSize: {
        'xs': 'var(--font-size-xs)',
        'sm': 'var(--font-size-sm)',
        'md': 'var(--font-size-md)',
        'lg': 'var(--font-size-lg)',
        'xl': 'var(--font-size-xl)',
        '2xl': 'var(--font-size-2xl)',
        '3xl': 'var(--font-size-3xl)',
        '4xl': 'var(--font-size-4xl)',
        '5xl': 'var(--font-size-5xl)',
        'hero': 'var(--font-size-hero)'
      },
      fontWeight: {
        'normal': 'var(--font-weight-normal)',
        'medium': 'var(--font-weight-medium)',
        'semibold': 'var(--font-weight-semibold)'
      },
      lineHeight: {
        'xs': 'var(--line-height-xs)',
        'sm': 'var(--line-height-sm)',
        'md': 'var(--line-height-md)',
        'lg': 'var(--line-height-lg)',
        'xl': 'var(--line-height-xl)',
        '2xl': 'var(--line-height-2xl)',
        '3xl': 'var(--line-height-3xl)',
        '4xl': 'var(--line-height-4xl)',
        '5xl': 'var(--line-height-5xl)',
        '6xl': 'var(--line-height-6xl)',
        '7xl': 'var(--line-height-7xl)',
        '8xl': 'var(--line-height-8xl)',
        '9xl': 'var(--line-height-9xl)',
        '10xl': 'var(--line-height-10xl)',
        'hero': 'var(--line-height-hero)'
      },
      letterSpacing: {
        'wide': 'var(--letter-spacing-wide)'
      },
      fontFamily: {
        'primary': 'var(--font-primary)',
        'display': 'var(--font-display)',
        'stretch': 'var(--font-stretch)'
      },
      /* Spacing Extensions */
      spacing: {
        '1': 'var(--spacing-1)',
        '2': 'var(--spacing-2)',
        '3': 'var(--spacing-3)',
        '4': 'var(--spacing-4)',
        '5': 'var(--spacing-5)',
        '6': 'var(--spacing-6)',
        '7': 'var(--spacing-7)',
        '8': 'var(--spacing-8)',
        '9': 'var(--spacing-9)',
        '10': 'var(--spacing-10)',
        '11': 'var(--spacing-11)',
        '12': 'var(--spacing-12)',
        '13': 'var(--spacing-13)',
        '14': 'var(--spacing-14)',
        '15': 'var(--spacing-15)',
        '16': 'var(--spacing-16)',
        '17': 'var(--spacing-17)',
        '18': 'var(--spacing-18)',
        '19': 'var(--spacing-19)',
        '20': 'var(--spacing-20)',
        '21': 'var(--spacing-21)',
        '22': 'var(--spacing-22)',
        '23': 'var(--spacing-23)',
        '24': 'var(--spacing-24)',
        '25': 'var(--spacing-25)',
        '26': 'var(--spacing-26)',
        '27': 'var(--spacing-27)',
        '28': 'var(--spacing-28)',
        '29': 'var(--spacing-29)',
        '30': 'var(--spacing-30)',
        '31': 'var(--spacing-31)',
        '32': 'var(--spacing-32)',
        '33': 'var(--spacing-33)',
        '34': 'var(--spacing-34)',
        '35': 'var(--spacing-35)',
        '36': 'var(--spacing-36)',
        '37': 'var(--spacing-37)',
        '38': 'var(--spacing-38)',
        '39': 'var(--spacing-39)',
        '40': 'var(--spacing-40)',
        '41': 'var(--spacing-41)',
        '42': 'var(--spacing-42)',
        '43': 'var(--spacing-43)',
        '44': 'var(--spacing-44)',
        '45': 'var(--spacing-45)',
        '46': 'var(--spacing-46)',
        '47': 'var(--spacing-47)',
        '48': 'var(--spacing-48)',
        '49': 'var(--spacing-49)'
      },
      padding: {
        '1': 'var(--padding-1)',
        '2': 'var(--padding-2)',
        '3': 'var(--padding-3)',
        '4': 'var(--padding-4)',
        '5': 'var(--padding-5)',
        '6': 'var(--padding-6)',
        '7': 'var(--padding-7)',
        '8': 'var(--padding-8)',
        '9': 'var(--padding-9)',
        '10': 'var(--padding-10)',
        '11': 'var(--padding-11)',
        '12': 'var(--padding-12)',
        '13': 'var(--padding-13)',
        '14': 'var(--padding-14)',
        '15': 'var(--padding-15)',
        '16': 'var(--padding-16)',
        '17': 'var(--padding-17)',
        '18': 'var(--padding-18)',
        '19': 'var(--padding-19)'
      },
      gap: {
        '1': 'var(--gap-1)',
        '2': 'var(--gap-2)',
        '3': 'var(--gap-3)',
        '4': 'var(--gap-4)',
        '5': 'var(--gap-5)',
        '6': 'var(--gap-6)',
        '7': 'var(--gap-7)',
        '8': 'var(--gap-8)',
        '9': 'var(--gap-9)',
        '10': 'var(--gap-10)',
        '11': 'var(--gap-11)',
        '12': 'var(--gap-12)',
        '13': 'var(--gap-13)',
        '14': 'var(--gap-14)',
        '15': 'var(--gap-15)',
        '16': 'var(--gap-16)',
        '17': 'var(--gap-17)'
      },
      /* Border Extensions */
      borderRadius: {
        'xs': 'var(--radius-xs)',
        'sm': 'var(--radius-sm)',
        'lg': 'var(--radius-lg)'
      },
      borderWidth: {
        'thin': 'var(--border-width-thin)'
      },
      /* Layout Extensions */
      maxWidth: {
        'container': 'var(--width-container)'
      }
    }
  },
  plugins: []
};