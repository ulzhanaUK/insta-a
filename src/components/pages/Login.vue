<template>
 <div class="uk-position-relative">
  <Navbar />
  <center>
  <vk-card class="uk-width-1-3@m">
  <form class="login" @submit.prevent="login">
    <h3>Log in</h3>
    <div class="uk-margin uk-width-1-1">
        <input class="uk-input" required v-model="username" type="text" placeholder="Username">
    </div>
    <div class="uk-margin uk-width-1-1">
        <input class="uk-input" required v-model="password" type="password" placeholder="Password">
    </div>
    <div class="uk-margin uk-width-1-1">
      <a class="uk-width-1-1 uk-button uk-button-primary uk-button-large">Login</a>
    </div>
    <a href="#">Forget Password</a>
  </form>
  </vk-card>
  </center>
  <!-- <Footer /> -->
</div>
</template>

<script>
import Navbar from "@/components/partials/Navbar"
// import Footer from "@/components/partials/Footer"
export default {
  components: {
    Navbar
    // Footer
  },
  data() {
    return {
      username: "",
      password:""
    }
  },
  methods: {
    login: function () {
    let api = ''
    let username = this.username
    let password = this.password
    this.axios.post(api, {
        username, password
      }).then( (response) =>{
        this.$router.push('/analyse')
      }, (err) => {
        console.log(err)
    })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.button {
  display: inline-block;
  padding: 5px 15px;
  font-size: 14px;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  outline: none;
  color: #fff;
  background-color: #055095;
  border: none;
  border-radius: 8px;
  box-shadow: 0 9px #999;
}

.button:hover {background-color: #005BA1}

.button:active {
  background-color: #055095;
  box-shadow: 0 5px #666;
  transform: translateY(4px);
}
.uk-position-relative {
  background-color: rgb(242, 246, 252);
}
</style>
