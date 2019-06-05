<template>
  <div class="character-list">
    <div
      v-for="char in characters"
      :key="char.id"
      class="character-card card"
    >
      <h2>{{char.name}}</h2>
      <div>{{char.level}}</div>
      <div>{{char.power}}</div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'CharacterList',
  data() {
    return {
      characters: [],
      errors: []
    }
  },
  // Fetches posts when the component is created.
  created() {
    axios.get(`https://fighting-game-api.herokuapp.com/api/v1/characters`)
    .then(response => {
      console.log(response)
      // JSON responses are automatically parsed.
      this.characters = response.data
    })
    .catch(e => {
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
  }
}
</script>

<style lang="stylus" scoped>
  .character-list {
  }
</style>
