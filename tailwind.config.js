/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["public/**/*.{html,js}"],
  theme: {
    container: {
      padding: {
        DEFAULT: '15px'
      }
    },

    screens:{
      sm: "375px",
      md: '778px',
      lg: '1024px'
    },
    backgroundImage: {
      product1: 'url(/images/image-product-1.jpg)',
      product2: 'url(/images/image-product-2.jpg)',
      product3: 'url(/images/image-product-3.jpg)',
      product4: 'url(/images/image-product-4.jpg)',
    },
    extend: {
      colors: {
        myOrange: 'hsl(26, 100%, 55%)',
        vdb: 'hsl(220, 13%, 13%)',
        paleOrange: 'hsl(25, 100%, 94%)',
        dgb: 'hsl(219, 9%, 45%)',
        gb: 'hsl(220, 14%, 75%)',
        lgb: 'hsl(223, 64%, 98%)',
        myBlack: 'hsl(0, 0%, 0%)',
        lightBoxBg: 'hsla(0, 0%, 0%, 75%)'
      }
    },
  },
  plugins: [],
}