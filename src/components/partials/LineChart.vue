<script>
  //Importing Line class from the vue-chartjs wrapper
  import {Line, mixins} from 'vue-chartjs'
  //Exporting this so it can be used in other components
  export default {
    extends: Line,
    mixins: [mixins.reactiveProp],
    props: ['chartData', 'options'],
    mounted () {
      this.renderChart(this.chartData, this.options)
    }
  }
</script>
