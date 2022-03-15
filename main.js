const app = Vue.createApp({
  data() {
    return {
      cart: 0,
      product: 'Trousers',
      description: `
      Our trouser is cut with a high rise designed to be worn on the waist with single reverse pleats for comfort and classic styling.

      Cut with room around the thigh and a gentle taper for a clean line throughout the leg, they are finished with genuine horn buttons, side adjusters, coin pocket, two rear pockets, and a 5cm cuff.
      
      Made up in a 10 oz Brisbane Moss cotton with a subtle brushed texture, the trouser is designed for four season wearing and features a softly napped surface that lends itself to a neater drape seldom seen in a cotton trouser
      
      Made in Naples, Italy.`,
      image: './assets/images/trousers_olive.jpg',
      url: 'https://natalino.co/',
      inventory: 5,
      inStock: true,

      onSale: false,
      details: ['100% Cotton', '285g Bisbane Moss', 'Made in Italy'],
      variants: [
        { id: 2224, color: 'olive',  image: './assets/images/trousers_olive.jpg'},
        { id: 2235, color: 'navy',  image: './assets/images/trousers_navy.jpg' }, 
      ],
      sizes: ['44S', '46S', '46R', '50S', '50L'],
    };
  },
  methods: {
    addToCart() {
      this.cart += 1;
    },
    updateImage(variantImage){
      this.image = variantImage
    }
  },
});
