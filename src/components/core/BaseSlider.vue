<template>
  <vue-slider v-bind="$attrs" v-on="$listeners"/>
</template>

<script>
import VueSlider from "vue-slider-component";
import "vue-slider-component/theme/antd.css";

/**
 * This component is just a wrapper for the library slider-component
 */
export default {
  name: "BaseSlider",
  inheritAttrs: false,
  components: {
    VueSlider
  }
};
</script>
