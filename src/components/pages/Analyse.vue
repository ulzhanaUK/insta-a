<template>
	<div>
		<Navbar2 />
        <div class="columns">
        	<div class="column">
			<vk-card class="uk-width-1-1@m">
			  <form class="login uk-form" @submit.prevent="send">
			    <h3>Проверить</h3>

					<span>Текст</span>
					<div class="uk-margin uk-width-1-1">
				    <input class="uk-input" required v-model="keyword" type="text" placeholder="текст">
					</div>

					<span>Начальная дата</span>
					<div class="uk-margin uk-width-1-1">
			      <input class="uk-input" type="date" v-model="startdate" placeholder="DD.MM.YYYY" data-uk-datepicker="{format:'DD.MM.YYYY'}">
					</div>

					<span>Конечная дата</span>
					<div class="uk-margin uk-width-1-1">
						<input class="uk-input" type="date" v-model="finishdate" placeholder="DD.MM.YYYY" data-uk-datepicker="{format:'DD.MM.YYYY'}">
					</div>

					<div class="uk-margin uk-width-1-1">
						<button type="submit" class="uk-width-1-2 uk-button uk-button-primary uk-button-small">Анализировать</button>
					</div>
				</form>
		  </vk-card>
		  </div>

      <div class="column">
         <h3>Использование</h3>
        <line-chart :chartData="stats"></line-chart>
      </div>
  </div>
  <h2>Тональность текста</h2>
  <div class="columns">
      <div class="column">
        <h3>Instagram</h3>
        <pie-chart></pie-chart>
      </div>
      <div class="column">
        <h3>Вконтакте</h3>
        <pie-chart-vk></pie-chart-vk>
      </div>
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
import PieChartVk from '@/components/partials/PieChartVK'

export default {
  components: {
    Navbar2,
    // Footer,
    LineChart,
    PieChart,
    PieChartVk
  },
  data() {
    return {
      keyword: "",
      startdate:"",
      finishdate: "",
      stats: []
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
					// console.log(response)
					this.stats = response.data
					console.log(this.stats)
					// this.$store.commit('change_data', response.data)
	        // this.$router.push('/analyse')
	      }, (err) => {
	        console.log(err)
	    })
    }
  }
}
</script>

<style>
.uk-button-primary {
	background-color: #c15a54
}
.columns {
	margin-top: 5%;
}
</style>
