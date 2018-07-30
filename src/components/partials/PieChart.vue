<script>
  //Importing Line class from the vue-chartjs wrapper
  import {Pie} from 'vue-chartjs'
  //Exporting this so it can be used in other components
  export default {
  extends: Pie,
  mounted () {
    this.renderChart({
      labels: ['Positive', 'Negative'],
      datasets: [
        {
          backgroundColor: [
            '#00D8FF',
            '#E46651'
            // '#DD1B16'
          ],
          data: [70, 30]
        }
      ]
    }, {responsive: true, maintainAspectRatio: false})
  }
}
</script>
