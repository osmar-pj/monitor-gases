<template>
  <div class="surface-section px-2 py-3 md:px-6 lg:px-8 text-center h-full">
      <div class="mb-3 font-bold text-3xl">
          <span class="text-900">Monitoreo de gases, </span>
          <span class="text-red-300">Winex Solutions</span>
      </div>
      <div class="grid">
        <div class="col-12 md:col-6 mb-4 px-5" >
          <p class="text-teal-500 text-3xl">OXIGENO - O2</p>
          <h1 class="text-7xl text-teal-500 -m-1">20.9 %</h1>
          <div class="mt-5">
            <Chart height="30" type="line" :options="basicOptions" :data="{
              labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
              datasets: [
                {
                  data: [21, 22, 21, 20, 21, 21, 20, 22],
                  fill: true,
                  backgroundColor: 'rgba(0, 188, 212, 0.2)',
                  borderWidth: 1,
                  pointRadius: 0,
                  borderColor: '#00BCD4',
                  tension: .4
                }
              ]
            }"></Chart>
            </div>
            <Divider></Divider>
          </div>
          <div class="col-12 md:col-6 mb-4 px-5" >
            <p class="text-yellow-500 text-3xl">MONOXIDO - CO</p>
            <h1 class="text-7xl text-yellow-500 -m-1">24 ppm</h1>
            <div class="mt-5">
              <Chart height="30" type="line" :options="basicOptions" :data="{
              labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
              datasets: [
                  {
                      data: [0, 0, 1, 0, 1, 12, 13, 14, 7, 1, 0],
                      fill: true,
                      backgroundColor: 'rgba(255, 235, 59, 0.2)',
                      borderWidth: 1,
                      pointRadius: 0,
                      borderColor: '#FFEB3B',
                      tension: .4
                  }
              ]
            }"></Chart>
            </div>
            <Divider></Divider>
          </div>
          <div class="col-12 md:col-6 mb-4 px-5" >
            <p class="text-cyan-500 text-3xl">DIOXIDO - CO2</p>
            <h1 class="text-7xl text-cyan-500 -m-1">3 ppm</h1>
            <div class="mt-5">
              <Chart height="30" type="line" :options="basicOptions" :data="{
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                datasets: [
                    {
                        data: [0.1, 0.2, 0.6, 0.1, 0.2, 0, 0, 0, 0.2 ],
                        fill: true,
                        backgroundColor:  'rgba(66, 165, 245, 0.2)',
                        borderWidth: 1,
                        pointRadius: 0,
                        borderColor: '#42A5F5',
                        tension: .4
                    }
                ]
              }"></Chart>
            </div>
            <Divider></Divider>
          </div>
          <div class="col-12 md:col-6 mb-4 px-5" >
            <p class="text-orange-500 text-3xl">NITROSOS - NOx</p>
            <h1 class="text-7xl text-orange-500 -m-1">1 %vol</h1>
            <div class="mt-5">
              <Chart height="30" type="line" :options="basicOptions" :data="{
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                datasets: [
                    {
                        data: [0.3, 0.1, 0, 0, 0.4, 0.2, 0, 0, 0.1, 0.2],
                        fill: true,
                        backgroundColor: 'rgba(255, 152, 0, 0.2)',
                        borderWidth: 1,
                        pointRadius: 0,
                        borderColor: '#FF9800',
                        tension: .4
                    }
                ]
              }"></Chart>
            </div>
            <Divider></Divider>
          </div>
      </div>
  </div>
</template>

<script>
import { ref, inject, onMounted } from 'vue'
export default {
  setup() {
    const socket = inject('socket')
    const basicOptions = ref(
        {
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                x: {
                    display: false
                },
                y: {
                    display: false
                }
            }
        }
    )
    const data = ref([])
    const data1 = ref([])
    const data2 = ref([])
    const data3 = ref([])
    const data4 = ref([])

    onMounted(() => {
      socket.on('data', (data) => {
        console.log(data)
      })
    })

    return { basicOptions, data1, data2, data3, data4 }
  }
}
</script>

<style>

</style>