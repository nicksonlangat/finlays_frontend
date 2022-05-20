<template>
    <div class="w-full p-3">
                    <div class="bg-white border rounded shadow">
                        <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                            <div class="p-4">
                <label for="table-search" class="sr-only">Search</label>
                <div class="relative mt-1">
                <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                </div>
                <input type="text" id="table-search" v-model="name" class="bg-white border border-black text-black text-sm rounded-lg focus:ring-sky-500 focus:border-blue-500 block w-80 pl-10 p-2.5" placeholder="Search by name">
                </div>
                            </div>
                        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead class="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                        <th scope="col" class="px-6 py-3">
                        first name
                        </th>
                        <th scope="col" class="px-6 py-3">
                        last name
                        </th>
                        <th scope="col" class="px-6 py-3">
                        id number
                        </th>
                        <th scope="col" class="px-6 py-3">
                        phone number
                        </th>
                        <th scope="col" class="px-6 py-3">
                        division
                        </th>
                        <th scope="col" class="px-6 py-3">
                        payroll
                        </th>
                        <th scope="col" class="px-6 py-3">
                        action
                        </th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr v-for="employee of filteredEmployees" :key="employee.id" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                       {{employee.first_name}}
                        </th>
                        <td class="px-6 py-4">
                         {{employee.last_name}}
                        </td>
                        <td class="px-6 py-4">
                         {{employee.id_number}}
                        </td>
                        <td class="px-6 py-4">
                         {{employee.phone_number}}
                        </td>
                        <td class="px-6 py-4">
                         {{employee.division}}
                        </td>
                        <td class="px-6 py-4">
                         {{employee.payroll_number}}
                        </td>
                        <td class="px-8 py-0">
                        <i class="fas fa-pen text-green-600 pr-3"></i>  <i class="fas fa-trash text-red-600 pr-3"></i>
                        </td>
                        </tr>
                        </tbody>
                        </table>
                        </div>
                    </div>
                </div>
</template>
<script>
import axios from 'axios'
export default {
  data(){
        return{
            name:"",
            employees:[]
        }
    },
    computed: {
    filteredEmployees() {
      return this.employees.filter((employee) => {
        return employee.first_name.toLowerCase().includes(this.name.toLowerCase());
      });
    },
  },
    methods:{
        getEmployees(){
            axios.get('http://localhost:8000/employees').then(res=>{
                this.employees = res.data
                console.log(this.employees)
            }).catch(err=>{
                console.log(err)
            })
        },
    },
    mounted(){
        this.getEmployees()
    }
}
</script>
