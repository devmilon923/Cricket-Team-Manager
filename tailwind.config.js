/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
          container: {
        center: true, // Optional: Centers the container
        padding: '1rem', // Optional: Adds padding to the container
      },
      screens: {
        xs: '480px', // Define custom screen size (optional)
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },
      // Custom container widths for each screen size
      container: {
        screens: {
          xs: '100%', // Custom width for xs screen
          sm: '600px', // Custom width for sm screen
          md: '720px', // Custom width for md screen
          lg: '960px', // Custom width for lg screen
          xl: '1140px', // Custom width for xl screen
          '2xl': '1320px', // Custom width for 2xl screen
        },
      },
    },
  },
  plugins: [require("daisyui")],
};
