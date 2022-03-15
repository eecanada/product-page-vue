app.component('product-display', {
  props: {
    premium: {
      type: Boolean,
      required: true,
    }
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
      <p> Shipping: {{shipping}} <p>
      <ul>
        <li v-for="detail in details">{{ detail }}</li>
      </ul>

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
