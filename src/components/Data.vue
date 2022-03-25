<template>
  <div>
    <Carousel
      v-slot="{ currentSlide }"
      v-bind:pag="pag"
      v-bind:nav="nav"
      v-bind:speed="speed"
      v-bind:auto="auto"
      class="carousel"
    >
      <Slide v-for="(itm, index) in data" v-bind:key="itm.id">
        <div v-show="currentSlide === index + 1" class="slide-info">
          <img v-bind:src="itm.url" alt="anime image" />
        </div>
      </Slide>
    </Carousel>
  </div>
</template>

<script>
import axios from 'axios'
import { ref, reactive, toRefs, computed } from 'vue'
import Carousel from './Carousel.vue'
import Slide from './Slide.vue'

export default {
  name: 'Data',
  components: {
    Carousel,
    Slide,
  },
  async setup() {
    const pag = ref(true)
    const nav = ref(true)
    const auto = ref(true)
    const speed = ref(3000)

    const currentItem = ref(0)
    const resultLength = ref(0)
    let data = ref(null)
    // const res = await fetch('https://anime-facts-rest-api.herokuapp.com/api/v1')
    // const res = await fetch('https://nekos.best/api/v2/hug?amount=10')
    await axios.get('https://nekos.best/api/v2/hug?amount=10').then(
      (response) => {
        return (data = response.data.results)
      },
      (error) => {
        console.log(error)
      },
    )

    // const res = await axios.get('https://nekos.best/api/v2/hug?amount=10')
    console.log('data:', data)
    return {
      data,
      resultLength,
      currentItem,
      pag,
      nav,
      speed,
      auto,
      // slideOptions,
      // ...toRefs(state),
      // pagEnabled
    }
  },
}
</script>

<style scoped>
.carousel {
  position: relative;
  height: 100vh;
  width: 100vw;
}
.slide-info {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  max-height: 100%;
}
img {
  min-width: 100%;
  min-height: 100%;
  object-fit: cover;
  /* transform: scale(1); */
}
</style>
