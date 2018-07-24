<template>
	<div>
		<Navbar2 />
		<center>
	<vk-card class="uk-width-1-3@m">
  <form class="login" @submit.prevent="send">
    <h3>Analyse the keyword</h3>
    <div class="uk-margin uk-width-1-1">
        <input class="uk-input" required v-model="keyword" type="text" placeholder="keyword">
    </div>
    <form class="uk-form">
      <h5>Start date</h5>
      <input type="text" v-model="startdate" placeholder="DD.MM.YYYY" data-uk-datepicker="{format:'DD.MM.YYYY'}">
    </form> 
    <form class="uk-form">
    	<h5>Finish date</h5>
      <input type="text" v-model="finishdate" placeholder="DD.MM.YYYY" data-uk-datepicker="{format:'DD.MM.YYYY'}">
    </form> 
    <div class="uk-margin uk-width-1-1">
      <a class="uk-width-1-2 uk-button uk-button-primary uk-button-small">Analyse</a>
    </div>
  </form>
  </vk-card>
  </center>
		<div class="columns">
      <div class="column">
        <h3>Line Chart</h3>
        <line-chart></line-chart>
      </div>
      <div class="column">
        <h3>Pie Chart</h3>
        <pie-chart></pie-chart>
      </div>
  </div>
		<Footer />
	</div>
</template>

<script>
import Navbar2 from "@/components/partials/Navbar2"
import Footer from "@/components/partials/Footer"
import LineChart from '@/components/partials/LineChart'
import PieChart from '@/components/partials/PieChart'
export default {
  components: {
    Navbar2,
    Footer,
    LineChart,
    PieChart
  },
  data() {
    return {
      keyword: "",
      startdate:"",
      finishdate: ""
    }
  },
  methods: {
    login: function () {
    let api = ''
    let keyword = this.keyword
    let startdate = this.startdate
    let finishdate = this.finishdate
    this.axios.post(api, {
        keyword, startdate, finishdate
      }).then( (response) =>{
        this.$router.push('/analyse')
      }, (err) => {
        console.log(err)
    })
    }
  }
}
	
</script>

<style>
	
</style>