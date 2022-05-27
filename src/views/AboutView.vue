<template>
  <div class="bg-gray-900">
    
    <nav class="bg-slate-900 shadow dark:bg-gray-800">
        <div class="container px-6 py-4 mx-auto md:flex md:justify-between md:items-center">
            <div class="flex items-center justify-between">
                <div>
                    <a class="text-2xl font-bold text-[#E7BB7EB3] transition-colors duration-200 transform dark:text-white lg:text-3xl hover:text-gray-700 dark:hover:text-gray-300" href="#">iGamer</a>
                </div>
                
                <!-- Mobile menu button -->
                <div class="flex md:hidden">
                    <button type="button" class="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400" aria-label="toggle menu">
                        <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
                            <path fill-rule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"></path>
                        </svg>
                    </button>
                </div>
            </div>

            <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
            <div class="items-center md:flex">
                <div class="flex flex-col md:flex-row md:mx-6">
                    <a class="my-1 text-sm font-medium text-[#E7BB7EB3] transition-colors duration-200 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0" href="#">Home</a>
                    <a class="my-1 text-sm font-medium text-[#E7BB7EB3] transition-colors duration-200 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0" href="#">Shop</a>
                    </div>

                <div class="flex justify-center md:block">
                    <a class="relative text-[#E7BB7EB3] transition-colors duration-200 transform dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-300" href="#">
                        <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3 3H5L5.4 5M7 13H17L21 5H5.4M7 13L5.4 5M7 13L4.70711 15.2929C4.07714 15.9229 4.52331 17 5.41421 17H17M17 17C15.8954 17 15 17.8954 15 19C15 20.1046 15.8954 21 17 21C18.1046 21 19 20.1046 19 19C19 17.8954 18.1046 17 17 17ZM9 19C9 20.1046 8.10457 21 7 21C5.89543 21 5 20.1046 5 19C5 17.8954 5.89543 17 7 17C8.10457 17 9 17.8954 9 19Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>

                        <span class="absolute top-0 left-0 p-1 text-xs text-white bg-white rounded-full"></span>
                    </a>
                </div>
            </div>
        </div>
    </nav>
    <br>
    
    <div class="flex max-w-7xl mx-auto overflow-hidden bg-black rounded-lg shadow-lg dark:bg-gray-800">
        

        <div class="w-full p-4 md:p-4">
            <h1 class="text-6xl font-bold text-[#E7BB7EB3] dark:text-white">Shop Here Anytime</h1>

            <p class="mt-4 text-sm text-[#E7BB7EB3] dark:text-gray-400">Games you want to have!</p>
<h1 class="text-4xl mt-2 font-bold text-[#E7BB7EB3] dark:text-white">25% off from</h1>
<h1 class="text-xl font-bold text-[#E7BB7EB3] dark:text-white">May 26 to June 10</h1>
                <button class="px-6 py-3 mt-16 text-xs font-bold text-white uppercase transition-colors duration-200 transform bg-[#833A06] rounded dark:bg-gray-700 hover:bg-gray-700 dark:hover:bg-gray-600 focus:outline-none focus:bg-gray-700 dark:focus:bg-gray-600">Shop now</button>
        </div>
        <div class="w-64 h-80 bg-cover" :style="{'background-image': 'url(' + require('../assets/ASS.png') + ')'}"></div>
    </div>
    <br>
    <div class="bg-gray-900">
      <h2 class="text-center text-[#E7BB7EB3] text-4xl">Best Selling Games</h2>
      <h2 class="text-center text-[#E7BB7EB3] text-xl">Games of all kinds</h2>
    </div>
    <section class="bg-gray-900">
        <div class="container px-2 py-8 mx-auto">
            <div class="lg:flex lg:-mx-2">
                

                <div class="mt-6 lg:mt-0 lg:px-2 lg:w-5/5 ">
                    

                    <div class="grid grid-cols-2 gap-4 mt-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
                        <div class="flex flex-col items-center justify-center w-full max-w-lg mx-auto">
                            <img class="object-cover w-full rounded-md h-72 xl:h-80" src="../assets/FIFA_22_Cover.jpg" alt="T-Shirt">
                            <h4 class="mt-2 text-lg font-medium text-gray-700 dark:text-gray-200">FIFA 22</h4>
                            <p class="text-[#E7BB7EB3]">KES 2100</p>

                            <button class="flex items-center justify-center w-full px-2 py-2 mt-4 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-[#833A06] rounded-md hover:bg-gray-700 focus:outline-none focus:bg-gray-700">
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 mx-1" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                                </svg>
                                <span class="mx-1">Add to cart</span>
                            </button>
                        </div>
                        <div class="flex flex-col items-center justify-center w-full max-w-lg mx-auto">
                            <img class="object-cover w-full rounded-md h-72 xl:h-80" src="../assets/Battlefield_2042_cover_art.jpg" alt="T-Shirt">
                            <h4 class="mt-2 text-lg font-medium text-gray-700 dark:text-gray-200">BATTLEFIELD 2042</h4>
                            <p class="text-[#E7BB7EB3]">KES 3100</p>

                            <button class="flex items-center justify-center w-full px-2 py-2 mt-4 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-[#833A06] rounded-md hover:bg-gray-700 focus:outline-none focus:bg-gray-700">
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 mx-1" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                                </svg>
                                <span class="mx-1">Add to cart</span>
                            </button>
                        </div>

                        <div class="flex flex-col items-center justify-center w-full max-w-lg mx-auto">
                            <img class="object-cover w-full rounded-md h-72 xl:h-80" src="../assets/Far_cry_6_cover.jpg" alt="T-Shirt">
                            <h4 class="mt-2 text-lg font-medium text-gray-700 dark:text-gray-200"> FAR CRY 6</h4>
                            <p class="text-[#E7BB7EB3]">KES 4200</p>

                            <button class="flex items-center justify-center w-full px-2 py-2 mt-4 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-[#833A06] rounded-md hover:bg-gray-700 focus:outline-none focus:bg-gray-700">
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 mx-1" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                                </svg>
                                <span class="mx-1">Add to cart</span>
                            </button>
                        </div>

                        <div class="flex flex-col items-center justify-center w-full max-w-lg mx-auto">
                            <img class="object-cover w-full rounded-md h-72 xl:h-80" src="../assets/Grand_Theft_Auto_V.png" alt="T-Shirt">
                            <h4 class="mt-2 text-lg font-medium text-gray-700 dark:text-gray-200">GTA V</h4>
                            <p class="text-[#E7BB7EB3]">KES 900</p>

                            <button class="flex items-center justify-center w-full px-2 py-2 mt-4 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-[#833A06] rounded-md hover:bg-gray-700 focus:outline-none focus:bg-gray-700">
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 mx-1" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                                </svg>
                                <span class="mx-1">Add to cart</span>
                            </button>
                        </div>

                        <div class="flex flex-col items-center justify-center w-full max-w-lg mx-auto">
                            <img class="object-cover w-full rounded-md h-72 xl:h-80" src="../assets/God_of_War_4_cover.jpg" alt="T-Shirt">
                            <h4 class="mt-2 text-lg font-medium text-gray-700 dark:text-gray-200">GOD OF WAR</h4>
                            <p class="text-[#E7BB7EB3]">KES 1900</p>

                            <button class="flex items-center justify-center w-full px-2 py-2 mt-4 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-[#833A06] rounded-md hover:bg-gray-700 focus:outline-none focus:bg-gray-700">
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 mx-1" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                                </svg>
                                <span class="mx-1">Add to cart</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  </div>
</template>
