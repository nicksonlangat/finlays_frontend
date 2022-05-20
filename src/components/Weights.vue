<template>
    <div class="flex flex-row flex-wrap flex-grow mt-20">
                <div class="w-full p-3 shadow-md sm:rounded-lg">
                <div class="p-4">
                <label for="table-search" class="sr-only">Search</label>
                <div class="relative mt-1">
                <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                </div>
                <input type="text" id="table-search" v-model="name" class="bg-white border border-black text-black text-sm rounded-lg focus:ring-sky-500 focus:border-blue-500 block w-80 pl-10 p-2.5" placeholder="Search by employee">
                </div>
                </div>
                <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-gray-700 uppercase bg-sky-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                
                <th scope="col" class="px-6 py-3">
                date
                </th>
                <th scope="col" class="px-6 py-3">
                employee
                </th>
                <th scope="col" class="px-6 py-3">
                round
                </th>
                <th scope="col" class="px-6 py-3">
                total weight
                </th>
                <th scope="col" class="px-6 py-3">
               action
                </th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="weight in filteredWeights" :key="weight.id" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                {{weight.date}}
                </th>
                <td class="px-6 py-4">
                {{weight.employee}}
                </td>
                <td class="px-6 py-4">
                {{weight.weight_round}}
                </td>
                <td class="px-6 py-4">
                {{weight.total_weight}} kgs
                </td>
                <td class="px-6 py-4">
              <button class="bg-sky-600 hover:bg-sky-600 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                </svg>
                <span></span>
                </button>
                </td>
                </tr>
                </tbody>
                </table>
                </div>

            </div>
</template>
<script>
import axios from 'axios'
export default {
  data(){
        return{
            name:"",
            weights:[]
        }
    },
    computed: {
    filteredWeights() {
      return this.weights.filter((weight) => {
        return weight.employee.toLowerCase().includes(this.name.toLowerCase());
      });
    },
  },
    methods:{
        getWeights(){
            axios.get('http://localhost:8000/weights').then(res=>{
                this.weights = res.data
                console.log(this.weights)
            }).catch(err=>{
                console.log(err)
            })
        },
    },
    mounted(){
        this.getWeights()
    }
}
</script>