<template>
  <div class="character-list">
    <div
      v-for="char in characters"
      :key="char.id"
      class="character-card card"
    >
      <div class="char-name">
        <span class="overline">Personnage</span>
        <h2>{{char.name}}</h2>
      </div>

      <div>
        <span class="overline">Level</span>
        <div>{{char.level}}</div>
      </div>

      <div>
        <span class="overline">Pouvoir</span>
        <div>{{char.power}}</div>
      </div>

      <div>
        <span class="overline">Experiences</span>
        <BaseSlider
          :value="char.current_experience"
          :max="char.max_experience"
          :disabled="true"
        />
      </div>

      <div>
        <span class="overline">Vie</span>
        <BaseSlider
          :value="char.current_life"
          :max="char.max_life"
          :disabled="true"
        />
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

import BaseSlider from '@/components/core/BaseSlider.vue'

export default {
  name: 'CharacterList',
  components: {
    BaseSlider,
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

<style lang="stylus" scoped>
  .character-list {
    .character-card {
      display: grid
      grid-auto-rows: min-content
      grid-template-columns: repeat(3, 1fr)
      grid-row-gap: 24px
      grid-column-gap: 16px

      .char-name {
        grid-column: 1/-1
      }
    }
  }
</style>
