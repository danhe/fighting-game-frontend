<template>
  <div class="home">
    <header>
      <div class="card card-info introduction">
        <h1>Hello CaptainContrat 👋</h1>
        <div>Je m'apelle Dan et voici mon test technique !</div>
        <div>
          Vous êtes ici sur la home, ou vous pouvez voir la liste des personnages existants, ainsi
          que l'historique des combats.
        </div>
        <div>
          De plus, vous pouvez aussi créer un combat entre deux personnages,
          ou créer votre personnage !
        </div>
      </div>
    </header>

    <div class="content-wrapper">
      <CharacterList
        class="character-list"
        :selectable="true"
        @click="onCharacterClick"
      />
      <MatchHistory class="match-history" />
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
  methods: {
    /**
     * Redirect on the details page of the character cliecked by the user
     * @param {Number} id
     */
    onCharacterClick(id) {
      this.$router.push(`/character/${id}`)
    },
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

        .description {
          white-space:
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
