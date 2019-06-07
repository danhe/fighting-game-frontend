<template>
  <div class="match-history">
    <h4>Historique des combats</h4>
    <table>
      <tr
        v-for="match in history"
        :key="match.id"
      >
        <td class="match">
          <span class="winner">🏅{{ match.winner.name }}</span> est le gagnant du combats !
          <div><span>⏰{{ match.created_at }}</span></div>
        </td>
      </tr>
    </table>
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
  },
}
</script>

<style lang="stylus" scoped>
  .match-history {
    padding: 16px

    table{
      border-spacing: 1px

      tr:hover {
        background: var(--color-grey)
      }
    }

    .match {
      padding: 8px 0
      border-bottom: 1px solid var(--color-grey)
    }
  }
</style>
