<script>
  //Importing Line class from the vue-chartjs wrapper
  import {Line} from 'vue-chartjs'
  //Exporting this so it can be used in other components
  export default {
    extends: Line,
    props: ['response'],
    data () {
      return {
        label_data: [],
        data_data: [],
        datacollection: {
        //Data to be represented on x-axis
          labels: this.label_data,
          datasets: [
            {
              label: 'Instagram',
              //backgroundColor: 'white',
              pointBackgroundColor: 'blue',
              borderWidth: 3,
              borderColor: 'blue',
              pointBorderColor: 'blue',
              fill: false,
              //Data to be represented on y-axis
              data: this.data_data
            }
            // {
            //   label: 'VKontakte',
            //   //backgroundColor: 'white',
            //   pointBackgroundColor: 'red',
            //   borderWidth: 3,
            //   borderColor: 'red',
            //   pointBorderColor: 'red',
            //   fill: false,
            //   //Data to be represented on y-axis
            //   data: [100, 70, 90, 70, 20, 100, 30, 80, 50, 50, 20, 10]
            // }
          ]
        },
        //Chart.js options that controls the appearance of the chart
        options: {
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true
              },
              gridLines: {
                display: true
              }
            }],
            xAxes: [ {
              gridLines: {
                display: false
              }
            }]
          },
          legend: {
            display: true
          },
          responsive: true,
          maintainAspectRatio: false
        }
      }
    },
    updated() {
      // Fired every second, should always be true
      console.log(this.response)
      for(date in this.response.dates) {
        this.label_data.push(date["date"])
        this.data_data.push(date["vk"]["posts_count"])
      }
    },
    mounted () {
    //renderChart function renders the chart with the datacollection and options object.
      this.renderChart(this.datacollection, this.options)
    }
  }
</script>
