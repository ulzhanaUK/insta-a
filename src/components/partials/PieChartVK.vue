<script>
 //Importing Line class from the vue-chartjs wrapper
 import {Pie} from 'vue-chartjs'
 //Exporting this so it can be used in other components
 export default {
 extends: Pie,
 mounted () {
   this.renderChart({
     labels: ['Позитивность', 'Негативность'],
     datasets: [
       {
         backgroundColor: [
           '#00D8FF',
           '#E46651'
         ],
         data: [40, 60]
       }
     ]
   }, {responsive: true, maintainAspectRatio: false})
 }
}
</script>