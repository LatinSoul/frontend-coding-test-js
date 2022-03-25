<template>
  <section>
    <div v-if="error">
      <h1 class="text-red-600 text-xl">
        {{ error.message }}
      </h1>
      <h2 class="text-blue-600 text-xl">
        How upsetting... let's go and fix it asap!
      </h2>
    </div>
    <div v-else-if="toastOpened">
      <Toast @close="toastOpened = !toastOpened">
        <p class="font-bold text-xl">
          You're about to watch a slideshow displaying some cool Anime
          Characters.
        </p>
        <br />
        <p>Close this message when you're ready</p>
      </Toast>
    </div>
    <div v-else>
      <Suspense>
        <template #default>
          <Data />
        </template>
        <template #fallback> Loading anime list... </template>
      </Suspense>
    </div>
  </section>
</template>

<script>
import { ref, onErrorCaptured } from 'vue'
import Data from '../components/Data.vue'
import Toast from '../components/Toast.vue'

export default {
  name: 'Anime',
  components: {
    Data,
    Toast,
  },
  setup() {
    const toastOpened = ref(true)
    const error = ref(null)
    console.log(toastOpened.value)
    onErrorCaptured((e) => {
      error.value = e
    })

    return { error, toastOpened }
  },
}
</script>
<style scoped></style>
