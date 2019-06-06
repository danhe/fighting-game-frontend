<template>
  <div class="character-cards-list">
    <CharacterCard
      v-for="char in characters"
      :key="char.id"
      :char="char"
    />
  </div>
</template>

<script>
import axios from 'axios'

import CharacterCard from '@/components/CharacterCard.vue'

export default {
  name: 'CharacterCardsList',
  components: {
    CharacterCard,
  },
  props: {
    selectable: {
      type: Boolean,
      default: false,
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

    // async / await version (created() becomes async created())
    //
    // try {
    //   const response = await axios.get(`http://jsonplaceholder.typicode.com/posts`)
    //   this.posts = response.data
    // } catch (e) {
    //   this.errors.push(e)
    // }
  },
}
</script>