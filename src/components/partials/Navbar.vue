<template>
  <div uk-sticky="sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky; bottom: #transparent-sticky-navbar">
 <nav class="uk-navbar-container" uk-navbar>
    <div class="uk-navbar-left">
        <ul class="uk-navbar-nav">
            <li class="uk-active"><a href="/#/aboutus">About Us</a></li>
        </ul>
    </div>
     <a href="/#/" class="uk-navbar-center"><img class="uk-width-1-4@s" src="@/assets/logo.png"></a>
    <div class="uk-navbar-right">
        <ul class="uk-navbar-nav">
            <li class="uk-active"><a href="/#/register">Sign up</a></li>
            <li class="uk-active"><a href="/#/login">Login</a></li>
        </ul>
    </div>
</nav>
</div>
</template>

<script>

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.uk-navbar-container:not(.uk-navbar-transparent) {
    background: #ffffff;
}  
element.style {
    height: 0px;
    margin: 0px;
}
.uk-navbar-center {
    margin-left: 13%;
}

</style>