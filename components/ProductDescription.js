app.component('product-description', {
  props: {
    description: {
      type: String,
      required: true,
    },
  },
  template:
    /*html*/
    `
  <p class="" id="description"> {{description}} </p>
  `,
});
