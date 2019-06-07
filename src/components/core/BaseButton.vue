<template>
  <button
    class="base-button"
    :class="classes"
    :disabled="disabled"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <slot />
  </button>
</template>

<script>
export default {
  name: 'BaseButton',
  inheritAttrs: false,
  props: {
    /**
     * THeme to apply to the button
     */
    theme: {
      type: String,
      default: 'primary',
    },
    /**
     *
     */
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    /**
     * Compute the classes to apply at the root according to the given props
     * @return {Object}
     */
    classes() {
      const { theme, disabled } = this

      return {
        [`btn--${theme}`]: true,
        'btn--disabled': disabled,
      }
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

      > * {
        color: var(--color-white)
      }
    }

    &.btn--secondary {
      background-color: var(--color-white)
      color: var(--color-black)
      border: 1px solid var(--color-grey)
    }

    &.btn--disabled {
      opacity: 0.5
      cursor: not-allowed
    }
  }
</style>
