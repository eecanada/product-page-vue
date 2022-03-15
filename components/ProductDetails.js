app.component('product-details', {
  props: {
    description: {
      type: String,
      required: true,
    },
  },
  template:
    /*html*/
    `
  <p id="description"> {{description}} </p>
  `,
});
