const app = Vue.createApp({
  data() {
    return {
      cart: 0,
      brand: 'Natalino',
      product: 'Trouser',
      selectedVariant: 0,
      description: `
      Our trouser is cut with a high rise designed to be worn on the waist with single reverse pleats for comfort and classic styling.

      Cut with room around the thigh and a gentle taper for a clean line throughout the leg, they are finished with genuine horn buttons, side adjusters, coin pocket, two rear pockets, and a 5cm cuff.
      
      Made up in a 10 oz Brisbane Moss cotton with a subtle brushed texture, the trouser is designed for four season wearing and features a softly napped surface that lends itself to a neater drape seldom seen in a cotton trouser
      
      Made in Naples, Italy.`,
      url: 'https://natalino.co/',
      inventory: 5,
      // onSale: false,
      details: ['100% Cotton', '285g Bisbane Moss', 'Made in Italy'],
      variants: [
        {
          id: 2224,
          colorCode: '#59503F',
          color: 'olive',
          image: './assets/images/trousers_olive.jpg',
          quantity: 3,
        },
        {
          id: 2235,
          colorCode: '#111B26',
          color: 'navy',
          image: './assets/images/trousers_navy.jpg',
          quantity: 5,
        },
      ],
      sizes: ['44S', '46S', '46R', '50S', '50L'],
    };
  },
  methods: {
    addToCart() {
      this.cart += 1;
    },
    removeFromCart() {
      this.cart -= 1;
    },
    updateVariant(index) {
      this.selectedVariant = index;
      console.log(this.selectedVariant);
    },
  },
  computed: {
    title() {
      return `${this.brand} ${this.product}`;
    },
    image() {
      return this.variants[this.selectedVariant].image;
    },
    inStock() {
      return this.variants[this.selectedVariant].quantity;
    },
  },
});
