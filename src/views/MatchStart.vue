<template>
  <div class="match-start">
    <h1>Lance un combat ⚔️ </h1>
    <h4 class="list-title">Choisis ton personnage</h4>

    <CharacterList
      class="characters"
      :selectable="selectedCharacters.length < 2"
      :selectedCharacters="selectedCharacters"
      @click="onCharacterSelect"
      @weapon="onWeaponSelect"
    />

    <div class="footer">
      <BaseButton @click="onStartFight">
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
      selectedCharacters: []
    }
  },
  methods: {
    /**
     * Call when the user click on an element of the character list
     * @param {Number} char
     */
    onCharacterSelect(char) {
      const { selectedCharacters } = this

      // Flat the map to have only the ids
      const selectedIds =  selectedCharacters.map(char => char.fighter_id)
      const index = selectedIds.indexOf(char)

      if (index !== -1) {
        selectedCharacters.splice(index, 1)
      } else {
        selectedCharacters.push({ fighter_id: char })
      }
    },
    /**
     * 
     */
    onWeaponSelect(fighter) {
      const { selectedCharacters } = this
      
      const selectedIds =  selectedCharacters.map(char => char.fighter_id)
      const index = selectedIds.indexOf(fighter.characterId)

      selectedCharacters[index] = {
        ...selectedCharacters[index],
        weapon_id: fighter.weaponId
      }
    },
    /**
     * Called when the user click on the button to start the fight,
     * Will send the list of selected characters and selected weapons
     */
    onStartFight() {
      const { selectedCharacters } = this

      axios.post('https://fighting-game-api.herokuapp.com/api/v1/fightings', {
        fighting: selectedCharacters
      })
        .then((response) => { console.warn(response) })
        .catch(e => { console.error(e) })
    },
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
