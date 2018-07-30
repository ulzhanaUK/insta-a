<script>
 //Importing Line class from the vue-chartjs wrapper
   import {Pie, mixins} from 'vue-chartjs'
   //Exporting this so it can be used in other components
   export default {
     extends: Pie,
     mixins: [mixins.reactiveProp],
     props: ['chartData'],
     mounted () {
      this.renderChart(this.chartData, {responsive: true, maintainAspectRatio: false})
    }
  }
</script>
