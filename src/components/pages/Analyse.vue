<template>
	<div>
		<Navbar2 />
    <center>
      <div>
				<vk-card class="uk-width-1-3@m">
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
  	</center>
		<div class="columns">
			<div class="column">
         <h3>Использование в постах</h3>
        <line-chart :chartData="lineChartDataPost"></line-chart>
      </div>

			<div class="column">
         <h3>Использование в комментах</h3>
        <line-chart :chartData="lineChartDataComment"></line-chart>
      </div>
		</div>

		<h2>Тональность текста</h2>
	  <div class="columns">
	      <div class="column">
	        <h3>Instagram посты</h3>
	        <pie-chart :chartData="pieChartDataPost"></pie-chart>
	      </div>
	      <div class="column">
	        <h3>Instagram комменты</h3>
	        <pie-chart :chartData="pieChartDataComment"></pie-chart>
	      </div>
	  </div>
        <div class="uk-child-width-1-2@s uk-grid-match" v-if="mainData != {}" uk-grid>
           <div>
        <div class="uk-card uk-card-default uk-card-hover uk-card-body">
				<h3>Все посты:</h3>
				<ul>
				  <li v-for="user in mainData['posts']">
				    <h3>{{ user.user }}</h3>
						<ul>
						  <li v-for="post in user['posts']">
						    {{ post.text }}
								<br>
								<div class="uk-label uk-flex uk-flex-right">{{ post.sentiment }}</div>
						  </li>
						</ul>
					 </li>
				</ul>
			</div>
		</div>
		<div>
			<div class="uk-card uk-card-default uk-card-hover uk-card-body">
				<h3>Все комменты:</h3>
				<ul>
				  <li v-for="user in mainData['comments']">
				    <h4>{{ user.user }}</h4>
						<ul>
						  <li v-for="comment in user['comments']">
						    {{ comment.text }}
								<br>
								<div class="uk-label uk-flex uk-flex-right">{{ comment.sentiment }}</div>
						  </li>
						</ul>
					</li>
				</ul>
			</div>
		</div>
	</div>
  </div>
		<!-- <Footer /> -->
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
			lineChartDataPost: {},
			lineChartDataComment: {},
			pieChartDataPost: {},
			pieChartDataComment: {},
			mainData: {}
    }
  },
  methods: {
    send: function () {
	    let api = 'https://social-ml.herokuapp.com/get_data'
			// let api = 'http://127.0.0.1:5000/get_data'
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
					this.lineChartDataPost = response.data['line']['post']
					this.lineChartDataComment = response.data['line']['comment']
					this.pieChartDataPost = response.data['pie']['post']['insta']
					this.pieChartDataComment = response.data['pie']['comment']['insta']
					this.mainData = response.data['main']

					console.log(response.data['main'])
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
