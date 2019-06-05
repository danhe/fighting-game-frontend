<template>
  <div class="match-start">
    <h1>Lance un combat ⚔️ </h1>
    <h4 class="list-title">Choisis ton personnage</h4>
    <CharacterList class="characters" />

    <div class="footer">
      <BaseButton>
        Lancer le combat
      </BaseButton>
    </div>
  </div>
</template>

<script>
import CharacterList from '@/components/CharacterList.vue'
import BaseButton from '@/components/core/BaseButton.vue'

export default {
  name: 'MatchStart',
  components: {
    CharacterList,
    BaseButton,
  },
}
</script>

<style lang="stylus" scoped>
  .match-start {
    width: 800px
    margin: 40px auto

    .list-title {
      margin-top: 40px
      margin-bottom: 24px
    }

    .characters {
      display: grid
      grid-auto-rows: min-content
      grid-template-columns: repeat(2, 1fr)
      grid-row-gap: 24px
      grid-column-gap: 24px
    }

    .footer {
      z-index: 999
      padding: 16px
      height: 40px
      position: fixed
      bottom: 0
      left: 0
      right: 0
      background-color: var(--color-white)
      width: 100%
      border-top: solid 1px var(--color-grey)
    }
  }
</style>
