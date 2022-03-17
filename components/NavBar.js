app.component('nav-bar', {
  /*html*/
  template: `
  <nav class="
 
  py-4
  text-black
  hover:text-gray-700
  focus:text-gray-700
  navbar navbar-expand-lg navbar-light
  
   navbar
   navbar-expand-lg 
   navbar-light
   py-4 1">
    <div class="container-fluid  px-6">
       <button class="
          navbar-toggler
          text-gray-500
          border-0
          hover:shadow-none hover:no-underline
          py-2
          px-2.5
          bg-transparent
          focus:outline-none focus:ring-0 focus:shadow-none focus:no-underline
          " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bars"
             class="w-6" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
             <path fill="currentColor"
                d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z">
             </path>
          </svg>
       </button>
  
  
       <div class="collapse navbar-collapse  flex justify-around" id="navbarSupportedContent">
        <div>
          <a class="text-xl text-black natalino" href="#"> NATALINO</a>
        </div>
          <!-- Left links -->
        <div>
        <ul class="navbar-nav flex flex-col pl-0 list-style-none mr-auto">
             <li class="nav-item px-2">
                <a class="nav-link  text-black	" aria-current="page" href="#">Collection </a>
             </li>
             <li class="nav-item pr-2">
                <a class="nav-link text-black	hover:text-gray-700 focus:text-gray-700 p-0" href="#">About </a>
             </li>
             <li class="nav-item pr-2">
                <a class="nav-link text-black	 hover:text-gray-700 focus:text-gray-700 p-0" href="#">Delivery and Returns </a>
             </li>
             <li class="nav-item pr-2">
                <a class="nav-link text-black	 hover:text-gray-700 focus:text-gray-700 p-0" href="#">FAQs</a>
             </li>
             <li class="nav-item pr-2">
                <a class="nav-link text-black	 hover:text-gray-700 focus:text-gray-700 p-0" href="#">Contact </a>
             </li>
             <li class="nav-item pr-2">
                <a class="nav-link text-black	 hover:text-gray-700 focus:text-gray-700 p-0" href="#">Account </a>
             </li>
          </ul>
        </div>
  
        <div>
        <ul class="navbar-nav flex flex-col pl-0 list-style-none mr-auto">
        <li class="nav-item px-2">
        <a href="#" >  <i class="fa-brands fa-spotify"></i>   </a> 
        </li>
        <li class="nav-item pr-2">
        <a href="#" >  <i class="fa-brands fa-instagram"></i>  </a>      
        </li>
        <li class="nav-item pr-2">
           <span  class='text-gray-300' > ( </span> 1   <span class='text-gray-300'> ) </span>
        </li>
     </ul>
        </div>
          
          <!-- Left links -->
          
          
      


       </div>
       <!-- Collapsible wrapper -->
       
    </div>

    <div class="second-menu">
    <ul class="navbar-nav nav-item-secondary flex flex-row justify-center pl-0 list-style-none mr-auto">
         <li class="nav-item  pr-2">
            <a class="nav-link   text-zinc-400	" aria-current="page" href="#">All </a>
         </li>
         <li class="nav-item pr-2">
            <a class="nav-link text-zinc-400	hover:text-zinc-300 focus:text-gray-700 p-0" href="#">Polo Shirts </a>
         </li>
         <li class="nav-item pr-2">
            <a class="nav-link text-zinc-400		 hover:text-zinc-300 focus:text-gray-700 p-0" href="#">Shirting</a>
         </li>
         <li class="nav-item pr-2">
            <a class="nav-link text-zinc-400		 hover:text-zinc-300 focus:text-gray-700 p-0" href="#">Knitwear</a>
         </li>
         <li class="nav-item pr-2">
            <a class="nav-link text-zinc-400		 hover:text-zinc-300 focus:text-gray-700 p-0" href="#">Sport Jacket </a>
         </li>
         <li class="nav-item pr-2">
            <a class="nav-link text-black	 hover:text-zinc-300 focus:text-gray-700 p-0" href="#">Trousers </a>
         </li>
         <li class="nav-item pr-2">
         <a class="nav-link text-zinc-400	 hover:text-zinc-300 focus:text-gray-700 p-0" href="#">Suiting </a>
      </li>
      <li class="nav-item pr-2">
         <a class="nav-link text-zinc-400	 hover:text-zinc-300 focus:text-gray-700 p-0" href="#">Accessories </a>
      </li>
      <li class="nav-item pr-2">
         <a class="nav-link text-zinc-400	 hover:text-zinc-300 focus:text-gray-700 p-0" href="#">Pre-order </a>
      </li>
      <li class="nav-item pr-2">
      <a class="nav-link text-red-500	  focus:text-gray-700 p-0" href="#">Sale</a>
   </li>
      </ul>
    </div>

    
  </nav>
  `,
});
