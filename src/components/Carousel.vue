<template>
  <div class="carousel">
    <slot :currentSlide="currentSlide" />
    <!-- Slide Nav -->
    <div v-if="navEnabled" class="nav-slide">
      <div class="toggle-page left">
        <i @click="prevSlide" class="fas fa-chevron-left"></i>
      </div>
      <div class="toggle-page right">
        <i @click="nextSlide" class="fas fa-chevron-right"></i>
      </div>
    </div>
    <!-- Slide Pagination -->
    <div v-if="pagEnabled" class="pag-slide">
      <span
        @click="pagSlide(index)"
        v-for="(slideCount, index) in getSlideCount"
        :key="index"
        :class="{ active: index + 1 === currentSlide }"
      >
      </span>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'

export default {
  props: ['auto', 'pag', 'nav', 'speed'],
  setup(props) {
    const currentSlide = ref(1)
    const getSlideCount = ref(null)
    const autoSlide = ref(props.auto === undefined ? true : props.auto)
    const slideSpeed = ref(props.speed === undefined ? 5000 : props.speed)
    const pagEnabled = ref(props.pag === undefined ? true : props.pag)
    const navEnabled = ref(props.nav === undefined ? true : props.nav)

    const nextSlide = () => {
      if (currentSlide.value === getSlideCount.value) {
        currentSlide.value = 1
        return
      }
      currentSlide.value += 1
    }
    const prevSlide = () => {
      if (currentSlide.value === 1) {
        currentSlide.value = getSlideCount.value
        return
      }
      currentSlide.value -= 1
    }
    const pagSlide = (index) => {
      currentSlide.value = index + 1
    }
    const slideAutoplay = () => {
      setInterval(() => {
        nextSlide()
      }, slideSpeed.value)
    }
    if (autoSlide.value) {
      slideAutoplay()
    }

    onMounted(() => {
      getSlideCount.value = document.querySelectorAll('.slide').length
      console.log(getSlideCount.value)
    })
    return {
      currentSlide,
      nextSlide,
      prevSlide,
      getSlideCount,
      pagSlide,
      slideAutoplay,
      pagEnabled,
      navEnabled,
    }
  },
}
</script>

<style>
.nav-slide {
  position: fixed;
  padding: 20px;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
}
.pag-slide {
  position: fixed;
  bottom: 10px;
  height: 10%;
  width: 100%;
  display: flex;
  gap: 16px;
  justify-content: center;
  align-items: center;
  background: #1f2937;
}
.pag-slide span {
  border-radius: 50%;
  width: 20px;
  height: 20px;
  background-color: #fff;
}
.pag-slide .active {
  background-color: #d1b724;
}
.nav-slide .toggle-page {
  /* border: 1px solid red; */
  display: flex;
  flex: 1;
}
.nav-slide .right {
  justify-content: flex-end;
}
i {
  padding: 20px;
  margin: 0 10px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: #1f2937;
  color: #fff;
  box-shadow: 1px 2px 10px #303030;
}
</style>
