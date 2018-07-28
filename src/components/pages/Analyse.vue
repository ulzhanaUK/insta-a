<template>
	<div>
		<Navbar2 />

		<center>
			<vk-card class="uk-width-1-3@m">
			  <form class="login uk-form" @submit.prevent="send">
			    <h3>Analyse the keyword</h3>

					<span>Keyword</span>
					<div class="uk-margin uk-width-1-1">
				    <input class="uk-input" required v-model="keyword" type="text" placeholder="keyword">
					</div>

					<span>Start date</span>
					<div class="uk-margin uk-width-1-1">
			      <input class="uk-input" type="date" v-model="startdate" placeholder="DD.MM.YYYY" data-uk-datepicker="{format:'DD.MM.YYYY'}">
					</div>

					<span>Finish date</span>
					<div class="uk-margin uk-width-1-1">
						<input class="uk-input" type="date" v-model="finishdate" placeholder="DD.MM.YYYY" data-uk-datepicker="{format:'DD.MM.YYYY'}">
					</div>

					<div class="uk-margin uk-width-1-1">
						<button type="submit" class="uk-width-1-2 uk-button uk-button-primary uk-button-small">Analyse</button>
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
		<!-- <Footer /> -->
	</div>
</template>

<script>
import Navbar2 from "@/components/partials/Navbar2"
// import Footer from "@/components/partials/Footer"
import LineChart from '@/components/partials/LineChart'
import PieChart from '@/components/partials/PieChart'

export default {
  components: {
    Navbar2,
    // Footer,
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
    send: function () {
	    let api = 'http://127.0.0.1:5000/get_data'
	    let keyword = this.keyword
	    let startdate = this.startdate
	    let finishdate = this.finishdate

			let data = {
				'keyword': keyword,
				'startdate': startdate,
				'enddate': finishdate
			}

	    this.axios.post(api, data, {
				headers: {
					'Content-type': 'application/json'
				}
			}).then( (response) => {
					console.log(response)
	        // this.$router.push('/analyse')
	      }, (err) => {
	        console.log(err)
	    })
    }
  }
}

</script>

<style>

</style>
