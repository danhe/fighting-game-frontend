<template>
  <button class="base-button" :class="classes">
    <slot />
  </button>
</template>

<script>
export default {
  name: 'BaseButton',
  props: {
    theme: {
      type: String,
      default: 'primary',
    },
  },
  computed: {
    /**
     * Compute the classes to apply at the root according to the given props
     * @return {Object}
     */
    classes() {
      const { theme } = this

      return { [`btn--${theme}`]: true }
    },
  },
}
</script>

<style lang="stylus" scoped>
  .base-button {
    cursor: pointer
    height: 40px
    border-radius: 32px
    font-size: 14px
    line-height: 1
    position: relative
    padding: 0 16px
    border: none

    &.btn--primary {
      background-color: var(--color-action)
      color: var(--color-white)
    }

    &.btn--secondary {
      background-color: var(--color-white)
      color: var(--color-black)
      border: 1px solid #eaeaea
    }
  }
</style>
