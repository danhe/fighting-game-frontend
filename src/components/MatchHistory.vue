<template>
  <div class="match-history">
    <h4>Historique des combats</h4>
    <div
      v-for="match in history"
      :key="match.id"
      class="match"
    >
      🏅 <span class="winner">{{ match.winner }}</span> est le gagnant du combats !

    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'MatchHistory',
  data() {
    return {
      history: [],
      errors: [],
    }
  },
  // Fetches posts when the component is created.
  created() {
    axios.get('https://fighting-game-api.herokuapp.com/api/v1/fightings')
      .then((response) => {
        // JSON responses are automatically parsed.
        this.history = response.data
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
  .match-history {
    padding: 16px

    .match {
      padding: 8px 0
      border-bottom: 1px solid var(--color-grey)

      .winner {

      }
    }
  }
</style>
