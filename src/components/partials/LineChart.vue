<script>
  //Importing Line class from the vue-chartjs wrapper
  import {Line} from 'vue-chartjs'
  //Exporting this so it can be used in other components
  export default {
    extends: Line,
    data () {
      return {
        datacollection: {
        //Data to be represented on x-axis
          labels: ['13.07', '14.07', '15.07', '16.07', '17.07', '18.07', '19.07', '20.07', '21.07', '22.07', '23.07', '24.07'], 
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
              data: [40, 20, 30, 50, 90, 10, 20, 40, 50, 70, 90, 100]
            },{
              label: 'VKontakte',
              //backgroundColor: 'white',
              pointBackgroundColor: 'red',
              borderWidth: 3,
              borderColor: 'red',
              pointBorderColor: 'red',
              fill: false,
              //Data to be represented on y-axis
              data: [100, 70, 90, 70, 20, 100, 30, 80, 50, 50, 20, 10]
            }
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
    mounted () {
    //renderChart function renders the chart with the datacollection and options object.
      this.renderChart(this.datacollection, this.options)
    }
  }
</script>