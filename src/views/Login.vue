<template>
	
    <div>
        <br><br><br><br><br><br><br>
        <div class="w-full max-w-lg mx-auto overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
        <div class="px-6 py-4">
            <h2 class="text-3xl font-bold text-center text-gray-700 dark:text-white">Finlays Tea ERP</h2>

            <h3 class="mt-1 text-xl font-medium text-center text-gray-600 dark:text-gray-200">Welcome Back</h3>

            <p class="mt-1 text-center text-gray-500 dark:text-gray-400">Login to proceed</p>

            <form>
                <div class="w-full mt-4">
                    <input v-model="user.email" class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-md dark:bg-pink-800 dark:border-pink-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300" type="email" placeholder="Email Address" aria-label="Email Address" />
                </div>

                <div class="w-full mt-8">
                    <input v-model="user.password" class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-md dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300" type="password" placeholder="Password" aria-label="Password" />
                </div>

                <div class="flex items-center justify-between mt-4">
                    <a href="#" class="text-sm text-gray-600 dark:text-gray-200 hover:text-gray-500">Forgot Password?</a>

                    <button 
                    @click="login()"
                    class="px-4 py-2 leading-5 text-white transition-colors duration-200 transform bg-sky-600
                     rounded hover:bg-sky-600 focus:outline-none" type="button">
                     Login</button>
                </div>
            </form>
        </div>

        <div class="flex items-center justify-center py-4 text-center bg-gray-50 dark:bg-gray-700">
            <span class="text-sm text-gray-600 dark:text-gray-200">Manager but don't have an account? </span>

            <a href="#" class="mx-2 text-sm font-bold text-blue-500 dark:text-blue-400 hover:underline">Contact admin</a>
        </div>
    </div>
    </div>
</template>
<script>
import { HTTP } from '@/http-common'
export default {
    data(){
        return{
            user:{
                email:"",
                password:""
            }
        }
    },
    methods:{
        login(){
            const data = {
                email:this.user.email,
                password:this.user.password
            }
            HTTP.post('accounts/login/token/', data).then(res=>{
                localStorage.setItem('user_token', res.data.access)
                localStorage.setItem('user_refresh', res.data.refresh)
                localStorage.setItem('is_loggedIn', true);
                this.$router.push('/')
            })
        }
    }
    
}
</script>