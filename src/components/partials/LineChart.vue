<script>
  //Importing Line class from the vue-chartjs wrapper
  import {Line, mixins} from 'vue-chartjs'
  //Exporting this so it can be used in other components
  export default {
    extends: Line,
    mixins: [mixins.reactiveProp],
    props: ['chartData'],
    mounted () {
      this.renderChart(this.chartData, {
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
       })
    }
  }
</script>
