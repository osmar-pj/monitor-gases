<template>
    <Splitter style="height: 50vh">
      <SplitterPanel>
        <div class="text-center">
          <p class="text-teal-700 text-5xl">OXIGENO - O2</p>
          <h1 class="text-8xl text-teal-500">21 %</h1>
          <div>
            <Chart height="30" type="line" :options="basicOptions" :data="{
              labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
              datasets: [
                  {
                      data: [21, 22, 21, 20, 21, 21, 20, 22],
                      // fill below line
                      fill: true,
                      // darle color teal degradado al area
                      backgroundColor: 'rgba(0, 188, 212, 0.2)',
                      // linea mas delgada
                      borderWidth: 1,
                      // retirar los puntos
                      pointRadius: 0,
                      // color de la linea teal
                      borderColor: '#00BCD4',
                      tension: .4
                  }
              ]
            }"></Chart>
          </div>
        </div>
      </SplitterPanel>
      <SplitterPanel>
        <div class="text-center">
          <p class="text-yellow-700 text-5xl">MONOXIDO - CO</p>
          <h1 class="text-8xl text-yellow-500">24 ppm</h1>
          <div>
            <Chart height="30" type="line" :options="basicOptions" :data="{
              labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
              datasets: [
                  {
                      data: [0, 0, 1, 0, 1, 12, 13, 14, 7, 1, 0],
                      // fill below line
                      fill: true,
                      // darle color teal degradado al area color anarillo
                      backgroundColor: 'rgba(255, 235, 59, 0.2)',
                      // linea mas delgada
                      borderWidth: 1,
                      // retirar los puntos
                      pointRadius: 0,
                      // color de la linea teal
                      borderColor: '#FFEB3B',
                      tension: .4
                  }
              ]
            }"></Chart>
          </div>
        </div>
      </SplitterPanel>
    </Splitter>
    <Splitter style="height: 50vh">
      <SplitterPanel>
        <div class="text-center">
          <p class="text-cyan-700 text-5xl">DIOXIDO - CO2</p>
          <h1 class="text-8xl text-cyan-500">3 ppm</h1>
          <div>
            <Chart height="30" type="line" :options="basicOptions" :data="{
              labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
              datasets: [
                  {
                      data: [0.1, 0.2, 0.6, 0.1, 0.2, 0, 0, 0, 0.2 ],
                      // fill below line
                      fill: true,
                      // darle color teal degradado al area
                      backgroundColor: 'rgba(66, 165, 245, 0.2)',
                      // linea mas delgada
                      borderWidth: 1,
                      // retirar los puntos
                      pointRadius: 0,
                      // color de la linea teal
                      borderColor: '#42A5F5',
                      tension: .4
                  }
              ]
            }"></Chart>
          </div>
        </div>
      </SplitterPanel>
      <SplitterPanel>
        <div class="text-center">
          <p class="text-orange-700 text-5xl">NITROSOS - NOx</p>
          <h1 class="text-8xl text-orange-500">1 %vol</h1>
          <div>
            <Chart height="30" type="line" :options="basicOptions" :data="{
              labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
              datasets: [
                  {
                      data: [0.3, 0.1, 0, 0, 0.4, 0.2, 0, 0, 0.1, 0.2],
                      // fill below line
                      fill: true,
                      // darle color teal degradado al area
                      backgroundColor: 'rgba(255, 152, 0, 0.2)',
                      // linea mas delgada
                      borderWidth: 1,
                      // retirar los puntos
                      pointRadius: 0,
                      // color de la linea teal
                      borderColor: '#FF9800',
                      tension: .4
                  }
              ]
            }"></Chart>
          </div>
        </div>
      </SplitterPanel>
    </Splitter>
  </template>
  
  <!-- Script con setup -->
  <script>
  import { ref, inject, onMounted } from 'vue'
  export default {
    setup() {  
      // include socket
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