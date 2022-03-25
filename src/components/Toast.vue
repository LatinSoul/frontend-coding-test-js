<template>
  <transition name="fade" appear>
    <div class="toast mt-10 p-4 rounded bg-yellow-500">
      <div class="m-4 text-left">
        <slot />
      </div>
      <!-- <button type="button" @click="$emit('close')"> -->
      <button type="button" @click="emitEvent()">
        <i class="fas fa-close fa-xs"></i>
      </button>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'Toast',
  methods: {
    emitEvent() {
      this.$emit('close')
    },
  },
}
</script>

<style>
.toast {
  display: flex;
  justify-content: space-around;
  width: 50vw;
  box-shadow: 2px 2px 20px #303020;
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s ease-in-out;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(50px);
}
</style>
