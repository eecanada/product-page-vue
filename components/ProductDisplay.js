app.component('product-display', {
  props: {
    premium: {
      type: Boolean,
      required: true,
    },
  },
  template:
    /*html*/
    `<div class="product-display">
  <div class="product-container">
    <div class="product-image">
      <img v-bind:src="image" />
    </div>

    <div class="product-info">
      <h1>{{ title }}</h1>
      <p v-if="inStock">In Stock</p>
      <p v-else>Out of Stock</p>
      <p> Shipping: {{shipping}} </p>
      <ul>
        <li v-for="detail in details">{{ detail }}</li>
      </ul>

      <product-details :description="description"></product-details>

      <div
        class="color-circle"
        :class="[!inStock ? 'out-of-stock-img' : '']"
        v-for="(variant,index) in variants"
        :key="variant.id"
        @mouseover="updateVariant(index)"
        :style="{backgroundColor: variant.colorCode}"
      >
        {{ variant.color }}
      </div>
      <p>{{onSale}}</p>

      <button
        class="button"
        :class="{disabledButton : !inStock}"
        :disabled="!inStock"
        v-on:click="addToCart"
      >
        Add to Cart
      </button>
      <button class="button" @click="removeFromCart">
        Remove to Cart
      </button>
    </div>
  </div>
</div>`,
  data() {
    return {
      brand: 'Natalino',
      product: 'Trouser',
      description: `
      Our trouser is cut with a high rise designed to be worn on the waist with single reverse pleats for comfort and classic styling.

      Cut with room around the thigh and a gentle taper for a clean line throughout the leg, they are finished with genuine horn buttons, side adjusters, coin pocket, two rear pockets, and a 5cm cuff.
    
      Made up in a 10 oz Brisbane Moss cotton with a subtle brushed texture, the trouser is designed for four season wearing and features a softly napped surface that lends itself to a neater drape seldom seen in a cotton trouser
    
      Made in Naples, Italy.`,
      selectedVariant: 0,
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
          onSale: false,
        },
        {
          id: 2235,
          colorCode: '#111B26',
          color: 'navy',
          image: './assets/images/trousers_navy.jpg',
          quantity: 5,
          onSale: true,
        },
      ],
      sizes: ['44S', '46S', '46R', '50S', '50L'],
    };
  },
  methods: {
    addToCart() {
      this.$emit('add-to-cart', this.variants[this.selectedVariant].id)
    },
    removeFromCart() {
      this.$emit('remove-from-cart')
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
    onSale() {
      if (this.variants[this.selectedVariant].onSale) {
        return `${this.brand} ${this.product} is on sale`;
      }
    },
    shipping() {
      if (this.premium) {
        return 'Free';
      }
      return `$27.99`;
    },
  },
});
