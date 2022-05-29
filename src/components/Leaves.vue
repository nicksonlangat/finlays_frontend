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
                employee
                </th>
                <th scope="col" class="px-6 py-3">
                type
                </th>
                 <th scope="col" class="px-6 py-3">
               from
                </th>
                <th scope="col" class="px-6 py-3">
                to
                </th>
                <th scope="col" class="px-6 py-3">
                status
                </th>
                <th scope="col" class="px-6 py-3">
               action
                </th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="leave in filteredLeaves" :key="leave.id" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                
               
                <td class="px-6 py-4">
                {{leave.employee}}
                </td>
                <td class="px-6 py-4">
                {{leave.type}}
                </td>
                <td class="px-6 py-4">
                {{leave.start_date}} 
                </td>
                <td class="px-6 py-4">
                    {{leave.end_date}}
                </td>
                <td class="px-6 py-4">
               Pending
                </td>
                <td class="px-6 py-4">
                 <div class="flex">
                      <h2 class="text-green-600">
                          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
</svg>
                      </h2> | <h2 class="text-red-600">
                          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
</svg>
                      </h2>
                 </div>
                </td>
                </tr>
                </tbody>
                </table>
                </div>

            </div>
</template>
<script>
import { HTTP } from '@/http-common';
export default {
  data(){
        return{
            editable:false,
            name:"",
            leaves:[],
            new_leave:""
        }
    },
    computed: {
    filteredLeaves() {
      return this.leaves.filter((leave) => {
        return leave.employee.toLowerCase().includes(this.name.toLowerCase());
      });
    },
  },
    methods:{
        getLeaves(){
            HTTP.get('leaves').then(res=>{
                this.leaves = res.data
                console.log(this.weights)
            }).catch(err=>{
                console.log(err)
            })
        },
        
    updateWeight(id){
     
      HTTP.patch(`weights/${id}/`, {"total_weight":this.new_weight}).then(res=>{
        
        this.getWeights()  
        this.editable = false;
            }).catch(err=>{
                console.log(err)
            })
    }
    },
    
    mounted(){
        this.getLeaves()
    }
}
</script>