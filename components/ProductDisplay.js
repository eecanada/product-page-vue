app.component('product-display', {
  props: {
    premium: {
      type: Boolean,
      required: true,
    },
  },
  template:
    /*html*/
       `
<div class="product-display">
    <div class="product-container">
        <div class="product-image">
            <img v-bind:src="image" />
        </div>

        <div class="product-info">
            <h1 class="title">{{ title }} </h1>
            <p>{{price}} <span>excl. VAT</span></p>

            <product-details :description="description"></product-details>
            <p class="none" v-if="inStock">In Stock</p>
            <p class="none" v-else>Out of Stock</p>
            <p class="none">Shipping: {{shipping}}</p>

            <br />
            <ul>
                <li v-for="detail in details">{{ detail }}</li>
            </ul>

            <ul class="size-list">
              <li class="trouser-size" v-for="(size, index) in sizes" :key="index">{{size}}</li>
            </ul>
            <div class="circle-selection">
                <div class="color-circle" :class="[!inStock ? 'out-of-stock-img' : '']" v-for="(variant,index) in variants" :key="variant.id" @mouseover="updateVariant(index)" :style="{backgroundColor: variant.colorCode}">
                    {{ variant.color }}
                </div>
            </div>

            <p>{{onSale}}</p>

            <button class="button" :class="{disabledButton : !inStock}" :disabled="!inStock" v-on:click="addToCart">
                Add to Cart
            </button>
            <button class="button" @click="removeFromCart">
                Remove to Cart
            </button>
        </div>
    </div>

    <review-list v-if="reviews.length" :reviews="reviews"> </review-list>
    <review-form @review-submitted="addReview"></review-form>
</div>
`,
  data() {
    return {
      brand: 'Natalino',
      product: 'Single Pleat Trouser',
      description: `
      Our trouser is cut with a high rise designed to be worn on the waist with single reverse pleats for comfort and classic styling.

      Cut with room around the thigh and a gentle taper for a clean line throughout the leg, they are finished with genuine horn buttons, side adjusters, coin pocket, two rear pockets, and a 5cm cuff.
    
      Made up in a 10 oz Brisbane Moss cotton with a subtle brushed texture, the trouser is designed for four season wearing and features a softly napped surface that lends itself to a neater drape seldom seen in a cotton trouser
    
      Made in Naples, Italy.`,
      selectedVariant: 0,
      url: 'https://natalino.co/',
      inventory: 5,
      // onSale: false,
      details: ['100% cotton from Brisbane Moss', '285gsm', 'Mercerised for a brushed finish', 'Single reverse pleats', 'Genuine horn buttons', 'Side adjusters', 'Curtained waistband' , 'Reinforced waistband with internal canvas' , 'Coin pocket and two rear pockets', 'Zip closure', 'Bar tack reinforcement', '5cm turn ups (L length is unfinished)', 'Made in Naples, Italy', 'Dry clean only'],
      variants: [
        {
          id: 2224,
          colorCode: '#59503F',
          color: 'olive',
          title: 'Olive Brush Cotton',
          image: './assets/images/trousers_olive.jpg',
          quantity: 3,
          onSale: false,
          price: 150.0,
        },
        {
          id: 2235,
          colorCode: '#111B26',
          title: 'Navy Brush Cotton',
          color: 'navy',
          image: './assets/images/trousers_navy.jpg',
          quantity: 5,
          onSale: true,
          price: 150.0,
        },
      ],
      reviews: [],
      sizes: ['44S', '46S', '46R', '46L', '48R', '48L', '50S', '50L', '52S', '52R', '54L'],
    };
  },
  methods: {
    addToCart() {
      this.$emit('add-to-cart', this.variants[this.selectedVariant].id);
    },
    removeFromCart() {
      this.$emit('remove-from-cart');
    },
    updateVariant(index) {
      this.selectedVariant = index;
      console.log(this.selectedVariant);
    },
    addReview(productReview) {
      this.reviews.push(productReview);
    },
  },
  computed: {
    title() {
      return `${this.variants[this.selectedVariant].title} - ${this.product}`;
    },
    price() {
      return `$${this.variants[this.selectedVariant].price}`;
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
