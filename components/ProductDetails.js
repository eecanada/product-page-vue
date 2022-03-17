app.component('product-details', {
  props: {
    details: {
      type: Array,
      required: true,
    },
    fits: {
      type: Array,
      required: true,
    },
    deliveries: {
      type: Array,
      required: true,
    },
  },
  /*html*/
  template: ` 
 <div class="accordion" id="accordionExample ">
  <div class="accordion-item ">
     <h2 class="accordion-header mb-0" id="headingOne">
        <button class="
           accordion-button
           collapsed
           relative
           flex
           items-center
           w-full
           py-4
           px-5
           pl-0
           text-base text-gray-800 text-left
           border-0
           rounded-none
           transition
           focus:outline-none
           " type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false"
           aria-controls="collapseOne">
        Details & Care
        </button>
     </h2>
     <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne"
        data-bs-parent="#accordionExample">
        <div class="accordion-body py-4 px-5">
           <ul class="details-list">
              <li v-for="detail in details">{{ detail }}</li>
           </ul>
        </div>
     </div>
  </div>
  <div class="accordion-item ">
     <h2 class="accordion-header mb-0" id="headingTwo">
        <button class="
           accordion-button
           collapsed
           relative
           flex
           items-center
           w-full
           py-4
           px-5
           pl-0
           text-base text-gray-800 text-left
           border-0
           rounded-none
           transition
           focus:outline-none
           " type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false"
           aria-controls="collapseTwo">
        Size & Fit
        </button>
     </h2>
     <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo"
        data-bs-parent="#accordionExample">
        <div class="accordion-body py-4 px-5">
          
        <ul class="details-list">
        <li v-for="fit in fits">{{ fit }}</li>
     </ul>
        </div>
     </div>
  </div>
  <div class="accordion-item  last-item ">
     <h2 class="accordion-header mb-0 pl-0	" id="headingThree">
        <button class="
           accordion-button
           collapsed
           relative
           flex
           items-center
           w-full
           py-4
           px-5
           pl-0
           text-base text-gray-800 text-left
           border-0
           rounded-none
           transition
           focus:outline-none
           " type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false"
           aria-controls="collapseThree">
        Devlivery & Return 
        </button>
     </h2>
     <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree"
        data-bs-parent="#accordionExample">
        <div class="accordion-body py-4 px-5">
        <ul class="details-list">
        <li v-for="delivery in deliveries">{{ delivery }}</li>
     </ul>
        </div>
     </div>

    
  </div>
 
</div>
  `,
});
