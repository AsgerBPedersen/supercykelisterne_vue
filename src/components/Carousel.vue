<template>
  <div id="slides">
    <img v-for="image in inages" :key="image.id" className="img" alt="..." />
  </div>
</template>

<script>
import gql from 'graphql-tag';

export default {
  name: "carousel",
  apollo: {
      images: gql`
    query {
        randomPhotos {
        id
        url
        }
    }
`
  },
  mounted: function() {
    var slides = document.querySelectorAll(".slide");
    var currentSlide = 0;
    if (slides.length > 0) {
      setInterval(nextSlide, 5000);
    }
    const nextSlide = () => {
      slides[currentSlide].className = slides[currentSlide].className.replace(
        "slide showing",
        "slide"
      );
      currentSlide = (currentSlide + 1) % slides.length;
      slides[currentSlide].className = slides[currentSlide].className.replace(
        "slide",
        "slide showing"
      );
    };
  }
};
</script>

<style>
</style>