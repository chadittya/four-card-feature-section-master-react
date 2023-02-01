/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "c-red": "hsl(0, 78%, 62%)",
        "c-cyan": "hsl(180, 62%, 55%)",
        "c-orange": "hsl(34, 97%, 64%)",
        "c-blue": "hsl(212, 86%, 64%)",
        "c-veryDarkBlue": "hsl(234, 12%, 34%)",
        "c-grayishBlue": "hsl(229, 6%, 66%)",
        "c-veryLightGray": "hsl(0, 0%, 98%)",
      },
      fontWeight: {
        "cfw-200": "200",
        "cfw-400": "400",
        "cfw-600": "600",
      },
    },
  },
  plugins: [],
};
