<template>
  <VueSlideBar v-bind="$attrs" v-on="$listeners"/>
</template>

<script>
  import VueSlideBar from 'vue-slide-bar'

  /**
   * This component is just a wrapper for the library slider-component
   */
  export default {
    name: "BaseSlider",
    inheritAttrs: false,
    components: {
      VueSlideBar
    }
  }
</script>
