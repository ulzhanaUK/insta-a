<template>
    <div>
	<div class="uk-position-relative">
		<Navbar />
		  <div class="uk-position-relative uk-visible-toggle uk-light" uk-slideshow="animation: push">

    <ul class="uk-slideshow-items">
        <li>
            <div class="uk-height-medium uk-position-cover" uk-slideshow-parallax="scale: 1.8,1.2,1">
                <img src="../../assets/main1.jpg" alt="" uk-cover>
            </div>
            <div class="uk-position-cover" uk-slideshow-parallax="opacity: 0,0,0.2; backgroundColor: #000,#000"></div>
            <div class="uk-position-center uk-position-medium uk-text-center">
                <div uk-slideshow-parallax="scale: 1,1,0.8">
                    <h2 uk-slideshow-parallax="x: 200,0,0">Analyse</h2>
                    <p uk-slideshow-parallax="x: 400,0,0;">Take the chance to realise your dreams.</p>
                </div>
            </div>
        </li>
        <li>
            <div class="uk-position-cover" uk-slideshow-parallax="scale: 1.2,1.2,1">
                <img src="../../assets/main2.jpg" alt="" uk-cover>
            </div>
            <div class="uk-position-cover" uk-slideshow-parallax="opacity: 0,0,0.2; backgroundColor: #000,#000"></div>
            <div class="uk-position-center uk-position-medium uk-text-center">
                <div uk-slideshow-parallax="scale: 1,1,0.8">
                    <h2 uk-slideshow-parallax="x: 200,0,0">Analyse</h2>
                    <p uk-slideshow-parallax="x: 400,0,0;">Take the chance to realise your dreams.</p>
                </div>
            </div>
        </li>
        <li>
            <div class="uk-position-cover" uk-slideshow-parallax="scale: 1.2,1.2,1">
                <img src="../../assets/main1.jpg" alt="" uk-cover>
            </div>
            <div class="uk-position-cover" uk-slideshow-parallax="opacity: 0,0,0.2; backgroundColor: #000,#000"></div>
            <div class="uk-position-center uk-position-medium uk-text-center">
                <div uk-slideshow-parallax="scale: 1,1,0.8">
                    <h2 uk-slideshow-parallax="x: 200,0,0">Analyse</h2>
                    <p uk-slideshow-parallax="x: 400,0,0;">Take the chance to realise your dreams.</p>
                </div>
            </div>
        </li>
    </ul>

    <a class="uk-position-center-left uk-position-small uk-hidden-hover" href="#" uk-slidenav-previous uk-slideshow-item="previous"></a>
    <a class="uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next uk-slideshow-item="next"></a>
      </div>
  </div>
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
  }
}

</script>

<style>

</style>
