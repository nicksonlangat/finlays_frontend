<template>
<div>
<link rel="stylesheet" 
        href="https://use.fontawesome.com/releases/v5.2.0/css/all.css" 
        integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ" 
        crossorigin="anonymous">
  <nav id="header" class="bg-white fixed w-full z-10 top-0 shadow">
        <div class="w-full container mx-auto flex flex-wrap items-center mt-0 pt-3 pb-3 md:pb-0">

            <div class="w-1/2 pl-2 md:pl-0">
                <a class="text-gray-900 text-base xl:text-xl no-underline hover:no-underline font-bold" href="#">
                    <i class="fas fa-coffee text-sky-800 pr-3"></i> Finlays Tea ERP
                </a>
            </div>
            <div class="w-1/2 pr-0">
                <div class="flex relative inline-block float-right">

                    <div class="relative text-sm">
                        <button id="userButton" class="flex items-center focus:outline-none mr-3">
                            <img class="w-8 h-8 rounded-full mr-4" src="../assets/user.svg" alt="Avatar of User"> <span class="hidden md:inline-block">Hi, {{user.first_name}} {{user.last_name}}</span>
                            <svg class="pl-2 h-2" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 129 129" xmlns:xlink="http://www.w3.org/1999/xlink" enable-background="new 0 0 129 129">
                                <g>
                                    <path d="m121.3,34.6c-1.6-1.6-4.2-1.6-5.8,0l-51,51.1-51.1-51.1c-1.6-1.6-4.2-1.6-5.8,0-1.6,1.6-1.6,4.2 0,5.8l53.9,53.9c0.8,0.8 1.8,1.2 2.9,1.2 1,0 2.1-0.4 2.9-1.2l53.9-53.9c1.7-1.6 1.7-4.2 0.1-5.8z" />
                                </g>
                            </svg>
                        </button>
                        <div id="userMenu" class="bg-white rounded shadow-md mt-2 absolute mt-12 top-0 right-0 min-w-full overflow-auto z-30 invisible">
                            <ul class="list-reset">
                                <li><a href="#" class="px-4 py-2 block text-gray-900 hover:bg-gray-400 no-underline hover:no-underline">My account</a></li>
                                <li>
                                    <hr class="border-t mx-2 border-gray-400">
                                </li>
                                <li><a @click="logOut()" class="px-4 py-2 block text-gray-900 hover:bg-gray-400 no-underline hover:no-underline">Logout</a></li>
                            </ul>
                        </div>
                    </div>


                    <div class="block lg:hidden pr-4">
                        <button id="nav-toggle" class="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-gray-900 hover:border-teal-500 appearance-none focus:outline-none">
                            <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <title>Menu</title>
                                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                            </svg>
                        </button>
                    </div>
                </div>

            </div>


            <div class="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden lg:block mt-2 lg:mt-0 bg-white z-20" id="nav-content">
                <ul class="list-reset lg:flex flex-1 items-center px-4 md:px-0">
                    <li class="mr-6 my-2 md:my-0">
                        <a href="#" @click="setHome()" 
                        :class="{ 'border-emerald-600': new_home}"
                         class="block py-1 md:py-3 pl-1 align-middle text-sky-600 no-underline hover:text-gray-900 border-b-2  hover:border-emerald-800">
                         
                            <i class="fas fa-home fa-fw mr-3 text-sky-600"></i><span class="pb-1 md:pb-0 text-sm">Home</span>
                        </a>
                    </li>
                    
                    <li class="mr-6 my-2 md:my-0">
                        <a href="#"
                        @click="setEmployee()"
                        :class="{ 'border-emerald-600': new_employee}"
                          class="block py-1 md:py-3 pl-1 align-middle text-sky-600 no-underline hover:text-gray-900 border-b-2  hover:border-emerald-800">
                            <i class="fas fa-users fa-fw mr-3"></i><span class="pb-1 md:pb-0 text-sm">Employees</span>
                        </a>
                    </li>
                    <li class="mr-6 my-2 md:my-0">
                        <a href="#"
                        @click="setLeave()"
                        :class="{ 'border-emerald-600': new_leave}"
                         class="block py-1 md:py-3 pl-1 align-middle text-sky-600 no-underline hover:text-gray-900 border-b-2  hover:border-emerald-800">
                            <i class="fas fa-tasks fa-fw mr-3"></i><span class="pb-1 md:pb-0 text-sm">Leave Requests</span>
                        </a>
                    </li>
                    <li class="mr-6 my-2 md:my-0">
                        <a href="#"
                        @click="setPayroll()"
                        :class="{ 'border-emerald-600': new_payroll}"
                         class="block py-1 md:py-3 pl-1 align-middle text-sky-600 no-underline hover:text-gray-900 border-b-2  hover:border-emerald-800">
                            <i class="fas fa-money-check fa-fw mr-3"></i><span class="pb-1 md:pb-0 text-sm">Payroll</span>
                        </a>
                    </li>
                </ul>
            </div>

        </div>
    </nav>
</div>
</template>

<script>
import { HTTP } from '@/http-common'

export default {
     props: { is_home: Boolean, is_division:Boolean, is_employee:Boolean, is_leave:Boolean, is_payroll:Boolean },
     
data(){
    return{
        new_home: this.is_home,
        new_employee: this.is_employee,
        new_division: this.is_division,
        new_leave: this.is_leave,
        new_payroll: this.is_payroll,
        user:""
    }
},
methods:{
    logOut(){
        localStorage.removeItem('is_loggedIn')
         this.$router.push('login')

    },
    async getCurrentUser(){
       await HTTP.get('accounts/current/user').then(res=>{
            this.user = res.data
            console.log(this.user)
        })
    },
    setHome(){
        this.new_home = true
        this.new_employee = false
        this.new_division = false
         this.new_leave = false
       this.new_payroll = false
        this.$emit('tabHome')
    },
    setEmployee(){
       this.new_employee = true
       this.new_home = false
       this.new_division = false
        this.new_leave = false
       this.new_payroll = false
       this.$emit('tabEmployee')
    },
    setDivision(){
       this.new_division = true
       this.new_employee = false
       this.new_home = false
        this.new_leave = false
       this.new_payroll = false
       this.$emit('tabDivision')
    },
    setLeave(){
       this.new_leave = true
       this.new_payroll = false
       this.new_division = false
       this.new_employee = false
       this.new_home = false
       this.$emit('tabLeave')
    },
    setPayroll(){
       this.new_leave = false
       this.new_payroll = true
       this.new_division = false
       this.new_employee = false
       this.new_home = false
       this.$emit('tabPayroll')
    }
},
mounted(){
   
    var userMenuDiv = document.getElementById("userMenu");
    var userMenu = document.getElementById("userButton");

    var navMenuDiv = document.getElementById("nav-content");
    var navMenu = document.getElementById("nav-toggle");

    document.onclick = check;

    function check(e) {
        var target = (e && e.target) || (event && event.srcElement);

        //User Menu
        if (!checkParent(target, userMenuDiv)) {
            // click NOT on the menu
            if (checkParent(target, userMenu)) {
                // click on the link
                if (userMenuDiv.classList.contains("invisible")) {
                    userMenuDiv.classList.remove("invisible");
                } else { userMenuDiv.classList.add("invisible"); }
            } else {
                // click both outside link and outside menu, hide menu
                userMenuDiv.classList.add("invisible");
            }
        }

        //Nav Menu
        if (!checkParent(target, navMenuDiv)) {
            // click NOT on the menu
            if (checkParent(target, navMenu)) {
                // click on the link
                if (navMenuDiv.classList.contains("hidden")) {
                    navMenuDiv.classList.remove("hidden");
                } else { navMenuDiv.classList.add("hidden"); }
            } else {
                // click both outside link and outside menu, hide menu
                navMenuDiv.classList.add("hidden");
            }
        }

    }

    function checkParent(t, elm) {
        while (t.parentNode) {
            if (t == elm) { return true; }
            t = t.parentNode;
        }
        return false;
    }
     this.getCurrentUser()
  }
  
}
</script>
