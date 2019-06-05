<template>
  <div class="home">
    <header>
      <div>
        Bonjour todo text Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Aliquam consequat vehicula felis quis cursus. Nulla augue amet.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Aliquam consequat vehicula felis quis cursus. Nulla augue amet.
      </div>
    </header>
    <div class="content-wrapper">
      <CharacterList />
      <h4>Histoire de combat</h4>
    </div>
  </div>
</template>

<script>
import CharacterList from '@/components/CharacterList.vue'

export default {
  name: 'home',
  components: {
    CharacterList,
  },
}
</script>

<style lang="stylus" scoped>
  .home {
    header {
      min-height: 240px
      border-bottom: 1px solid #eaeaea
    }

    .content-wrapper {
      margin: -48px auto 0 auto
      width 1040px
      display: grid
      grid-auto-rows: min-content
      grid-template-columns: repeat(2, 1fr)
      grid-row-gap: 24px
      grid-column-gap: 40px
    }

  }
</style>
