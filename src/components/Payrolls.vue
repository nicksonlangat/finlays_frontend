<template>

    <div class="flex flex-row flex-wrap flex-grow mt-4">
        
    
                <div class="w-full p-3 shadow-md sm:rounded-lg">
                <div class="p-4">
                    <h1 class="uppercase mb-6">select dates then generate</h1>
                    <div class="mb-4 ">
            <form @submit.prevent="generatePayroll()" class="items-center md:flex">
                <div class="w-md">
                    <label class="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">Start</label>

                    <input v-model="start_date" class="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" type="date">
                </div>

                <div class="w-md mx-2 mt-4 md:mt-0">
                    <label class="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">End</label>

                    <input v-model="end_date" class="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" type="date">
                </div>
                <div class="flex mt-7">
                <button class="px-4 py-2 text-white transition-colors duration-200 transform bg-sky-600 rounded-md hover:bg-sky-600 focus:outline-none focus:bg-sky-600">Generate Payroll</button>
            </div>
            </form>
        </div>
                <label for="table-search" class="sr-only">Search</label>
                <div class="relative mt-1">
                <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                </div>
                <input type="text" id="table-search" v-model="name" class="bg-white border border-black text-black text-sm rounded-lg focus:ring-sky-500 focus:border-blue-500 block w-80 pl-10 p-2.5" placeholder="Search by employee">
                </div>
                
                </div>
               <div v-if="header!=null" class="">
                 <h3 class="font-black uppercase ml-4">from: {{header.payroll_from}}</h3>
                  <h3 class="font-black uppercase ml-4">to: {{header.payroll_to}}</h3>
                  <h3 class="font-black uppercase ml-4">total weight: {{header.weight_total}}</h3>
                  <h3 class="font-black uppercase ml-4">total kes: {{header.payroll_total}}</h3>
               </div>
                <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-gray-700 uppercase bg-sky-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                <th scope="col" class="px-6 py-3">
                employee
                </th>
                <th scope="col" class="px-6 py-3">
               total weight
                </th>
                <th scope="col" class="px-6 py-3">
                total earnings
                </th>
                
                <th scope="col" class="px-6 py-3">
               action
                </th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="item in filteredData" :key="item.id" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                {{item.employee}}
                </th>
                <td class="px-6 py-4">
                {{item.total_weight}} kgs
                </td>
                <td class="px-6 py-4">
                KES {{item.earnings}}
                </td>

                <td class="px-6 flex py-4">
                <svg v-on:click="toggleModal()" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-sky-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
                <div>
                      <div v-if="showModal" class="overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center flex">
                        <div class="relative w-auto my-6 mx-auto max-w-3xl">
                          <!--content-->
                          <div class="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                            <!--header-->
                            <div class="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                              <h3 class="text-3xl font-semibold">
                                Payslip breakdown for {{item.employee}} - {{item.payroll_number}}
                              </h3>
                              <button class="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none" v-on:click="toggleModal()">
                                <span class="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                  ×
                                </span>
                              </button>
                            </div>
                            <!--body-->
                            <div class="relative p-6 flex-auto">
                              <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                  <thead class="text-xs text-gray-700 uppercase bg-sky-50 dark:bg-gray-700 dark:text-gray-400">
                                  <tr>
                                  
                                
                                  <th scope="col" class="px-6 py-3">
                                  day
                                  </th>
                                  <th scope="col" class="px-6 py-3">
                                  weight
                                  </th>
                                  <th scope="col" class="px-6 py-3">
                                round
                                  </th>
                                  </tr>
                                  </thead>
                                  <tbody>
                                  <tr v-for="data in item.weights" :key="data.id" class=" border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                  
                                
                                  <td class="px-6 py-4">
                                  {{data.day}}
                                  </td>
                                  <td class="px-6 py-4">
                                  {{data.weight}}
                                  </td>
                                  <td class="px-6 py-4">
                                  {{data.round}} 
                                  </td>
                                  </tr>
                                  </tbody>
                                  </table>
                            </div>
                            <!--footer-->
                            <div class="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                              <button class="text-red-500 bg-transparent border border-solid border-red-500 hover:bg-red-500 hover:text-white active:bg-red-600 font-bold uppercase text-sm px-6 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button" v-on:click="toggleModal()">
                                Close
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div v-if="showModal" class="opacity-25 fixed inset-0 z-40 bg-black"></div>
                                  </div>
                |
                <svg @click="generateEmployeePayroll(item)" xmlns="http://www.w3.org/2000/svg" class="h-6 mr-6 w-6 text-sky-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                </td>
                </tr>
                </tbody>
                </table>
                </div>

            </div>
</template>
<script>
import { HTTP } from '@/http-common';
import jsPDF from "jspdf";
import autoTable from 'jspdf-autotable';

export default {
  data(){
        return{
            showModal: false,
            editable:false,
            start_date:"",
            end_date:"",
            name:"",
            payroll_data:[],
            header:null,
            new_weight:""
        }
    },
    computed: {
    filteredData() {
      return this.payroll_data.filter((item) => {
        return item.employee.toLowerCase().includes(this.name.toLowerCase());
      });
    },
  },
    methods:{
      toggleModal: function(){
      this.showModal = !this.showModal;
    },
      generatePayroll(){
            HTTP.get(`payroll?start_date=${this.start_date}&end_date=${this.end_date}`).then(res=>{
                this.payroll_data = res.data
                this.header = this.payroll_data.at(-1)
                this.payroll_data = this.payroll_data.filter(item=>item.payroll_from == null)
            }).catch(err=>{
                console.log(err)
            })
        },
      generateEmployeePayroll(data){
        console.log(data.weights)
        const employee_name = data.employee;
        const employee_number = data.payroll_number
        const details = employee_name.concat(' ', employee_number)
        const text = "Payslip for".concat(' ', details)
        const doc = new jsPDF()
        const finalY = doc.lastAutoTable.finalY || 10
        doc.text(text, 14, finalY + 15)
        autoTable(doc,
          {
            startY: finalY + 20,
            body: data.weights,
                  columns: [
                    { header: 'Day', dataKey: 'day' },
                    { header: 'Weight', dataKey: 'weight' },
                    { header: 'Round', dataKey: 'round' },
                  ],
                  
          })
        doc.save('payroll.pdf')
        },
    },
}
</script>