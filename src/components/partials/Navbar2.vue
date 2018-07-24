<template>
  <div uk-sticky="sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky; bottom: #transparent-sticky-navbar">
 <nav class="uk-navbar-container" uk-navbar>

    <div class="uk-navbar-left">

        <ul class="uk-navbar-nav">
            <li><a href="/#/aboutus">About Us</a></li>
            
        </ul>

    </div>

    <div class="uk-navbar-right">

        <ul class="uk-navbar-nav">
            <li class="uk-active"><a href="/#/analyse">Analyse</a></li>
            <li>
                
                 <a class="uk-navbar-toggle" uk-navbar-toggle-icon href="#">  Profile  </a>
                <div class="uk-navbar-dropdown">
                    <ul class="uk-nav uk-navbar-dropdown-nav">
                        <li><a href="/#/history">History</a></li>
                        <li><a href="/#/">Log out</a></li>
                    </ul>
                </div>
            </li>
        </ul>

    </div>

</nav>
</div>
</template>

<script>

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  
</style>