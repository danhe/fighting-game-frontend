<template>
  <div class="character-cards-list">
    <CharacterCard
      v-for="char in characters"
      :key="char.id"
      :char="char"
      :selectable="selectable"
      :selected="selectedCharacters.indexOf(char.id) !== -1"
      @click="onClick"
    >
      <WeaponSelector :character-id="char.id" />
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
    selectable: {
      type: Boolean,
      default: false,
    },
    selectedCharacters: {
      type: Array,
      default: [],
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
    onClick(event) {
      this.$emit('click', event)
    }
  },
}
</script>
