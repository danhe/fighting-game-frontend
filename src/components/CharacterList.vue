<template>
  <div class="character-cards-list">
    <CharacterCard
      v-for="char in characters"
      :key="char.id"
      :character="char"
      :selectable="selectable"
      :selected="isSelected(char.id)"
      @click="(event) => $emit('click', event)"
    >
      <WeaponSelector
        v-if="isSelected(char.id)"
        :character-id="char.id" 
        @update="(weaponId) => $emit('weapon', { weaponId, characterId })"
      />
    </CharacterCard>
  </div>
</template>

<script>
import axios from 'axios'

import CharacterCard from '@/components/CharacterCard.vue'
import WeaponSelector from '@/components/WeaponSelector.vue'

export default {
  name: 'CharacterCardsList',
  components: {
    CharacterCard,
    WeaponSelector,
  },
  props: {
    /**
     * The list can be selectable, which means the user can click on the elements
     * of the list
     */
    selectable: {
      type: Boolean,
      default: false,
    },
    /**
     * List of selected character
     */
    selectedCharacters: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      characters: [],
      errors: [],
    }
  },
  // Fetches posts when the component is created.
  created() {
    axios.get('https://fighting-game-api.herokuapp.com/api/v1/characters')
      .then((response) => {
        // JSON responses are automatically parsed.
        this.characters = response.data
      })
      .catch((e) => {
        this.errors.push(e)
      })
  },
  methods: {
    /**
     * Check if the given character id is in the list of the selected character
     * @param {Number} characterId
     * @return {Boolean}
     */
    isSelected(characterId) {
      const { selectedCharacters } = this

      // Flatten the map to only have the id of the selected characters
      const selectedIds =  selectedCharacters.map(char => char.fighter_id)

      return selectedIds.indexOf(characterId) !== -1
    },
  },
}
</script>
