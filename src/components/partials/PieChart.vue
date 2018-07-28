<script>
  //Importing Line class from the vue-chartjs wrapper
  import {Pie} from 'vue-chartjs'
  //Exporting this so it can be used in other components
  export default {
  extends: Pie,
  mounted () {
    this.renderChart({
      labels: ['Instagram'],
      datasets: [
        {
          backgroundColor: [
            '#E46651'
            // '#00D8FF',
            // '#DD1B16'
          ],
          data: [100]
        }
      ]
    }, {responsive: true, maintainAspectRatio: false})
  }
}
</script>
