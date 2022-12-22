/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", top: "-100px" },
          "100%": { opacity: "1", top: "100px" },
        },
        //  className={classNames("avatar-container", isActive && "flip-img")}
        // onClick={flipImage}
      },
    },
  },
  plugins: [],
};
