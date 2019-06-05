<template>
  <div class="home">
    <header>
      <div class="card card-info introduction">
        <h1>Hello CaptainContrat 👋</h1>
        Bonjour todo text Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Aliquam consequat vehicula felis quis cursus. Nulla augue amet.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Aliquam consequat vehicula felis quis cursus. Nulla augue amet.
      </div>
    </header>
    <div class="content-wrapper">
      <CharacterList />
      <MatchHistory />
    </div>
  </div>
</template>

<script>
import CharacterList from '@/components/CharacterList.vue'
import MatchHistory from '@/components/MatchHistory.vue'

export default {
  name: 'home',
  components: {
    CharacterList,
    MatchHistory,
  },
}
</script>

<style lang="stylus" scoped>
  .home {
    header {
      padding: 24px
      min-height: 240px
      border-bottom: 1px solid var(--color-grey)

      .introduction {
        width: 800px
        margin-right: auto
        margin-left: auto

        h1 {
          margin-bottom: 24px
        }
      }
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

    .character-list {
      display: grid
      grid-auto-rows: min-content
      grid-template-columns: repeat(1, 1fr)
      grid-row-gap: 24px
    }

    .match-history {
      display: grid
      grid-auto-rows: min-content
      grid-template-columns: repeat(1, 1fr)
      grid-row-gap: 24px
    }
  }
</style>
