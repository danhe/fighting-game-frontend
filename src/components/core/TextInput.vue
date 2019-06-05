<template>
  <div class="text-input">
    <input
      v-bind="$attrs"
      @input="$emit('update', $event.target.value)"
      v-on="$listeners"
    />
  </div>
</template>

<script>
export default {
  name: 'TextInput',
  model: {
    event: 'update',
  },
  inheritAttrs: false,
}
</script>

<style lang="stylus" scoped>
  .text-input {
    input {
      width: 100%
      height: 40px
      font-size: 16px
      box-shadow: none
      border-radius: 32px
      padding: 0 16px
      caret-color: var(--color-action)
      box-sizing: border-box
      border: solid 1px var(--color-grey)
    }
  }
</style>
