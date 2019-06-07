<template>
  <div class="match-start">
    <h1>Lance un combat ⚔️ </h1>
    <div v-if="matchInformation" class="card card-success match-info">
      <h2>Le match s'est bien déroulé !</h2>
      <strong>{{ matchInformation.winner.name }}</strong> est le gagnant du match !
    </div>
    <h4 class="list-title">Choisis ton personnage</h4>

    <CharacterList
      class="characters"
      :selectable="selectedCharacters.length < 2"
      :selectedCharacters="selectedCharacters"
      @click="onCharacterSelect"
      @weapon="onWeaponSelect"
    />

    <div class="footer">
      <BaseButton
        :disabled="selectedCharacters.length < 2"
        @click="onStartFight"
      >
        Commencer le combat
      </BaseButton>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

import CharacterList from '@/components/CharacterList.vue'
import BaseButton from '@/components/core/BaseButton.vue'

export default {
  name: 'MatchStart',
  components: {
    CharacterList,
    BaseButton,
  },
  data() {
    return {
      /**
       *
       */
      selectedCharacters: [],
      /**
       *
       */
      matchInformation: null,
    }
  },
  methods: {
    /**
     * Call when the user click on an element of the character list
     * @param {Number} char
     */
    onCharacterSelect(characterId) {
      const { selectedCharacters } = this

      // Flat the map to have only the ids
      const selectedIds = selectedCharacters.map(char => char.fighter_id)
      const index = selectedIds.indexOf(characterId)

      if (index !== -1) {
        selectedCharacters.splice(index, 1)
      } else {
        selectedCharacters.push({ fighter_id: characterId })
      }
    },
    /**
     * Called when the user selected his weapon. We add the weapon id on the object
     * with the matching character id
     * @param {Object} fighter
     */
    onWeaponSelect(fighter) {
      const { selectedCharacters } = this

      const selectedIds = selectedCharacters.map(char => char.fighter_id)
      const index = selectedIds.indexOf(fighter.characterId)

      selectedCharacters[index] = {
        ...selectedCharacters[index],
        weapon_id: fighter.weaponId,
      }
    },
    /**
     * Called when the user click on the button to start the fight,
     * Will send the list of selected characters and selected weapons
     */
    onStartFight() {
      const { selectedCharacters, $router } = this

      axios.post('https://fighting-game-api.herokuapp.com/api/v1/fightings', {
        fighting: selectedCharacters,
      })
        .then((response) => {
          this.matchInformation = response.data
          setTimeout(() => ($router.push('/')), 2000)
        })
    },
  },
}
</script>

<style lang="stylus" scoped>
  .match-start {
    width: 800px
    margin: 40px auto

    .match-info {
      margin-top: 24px
    }

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
      padding: 16px 160px
      height: 40px
      position: fixed
      bottom: 0
      left: 0
      right: 0
      background-color: var(--color-white)
      border-top: solid 1px var(--color-grey)
    }
  }
</style>
