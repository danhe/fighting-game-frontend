<template>
  <div class="weapon-selector">
    <div
      class="weapon"
      v-for="weapon in weapons"
      :key="weapon.id"
    >
      <input
        type="radio"
        :id="`weapon-${weapon.id}`"
        :name="`weapon-${characterId}`"
        @input="$emit('update', weapon.id)"
      />
      <label
        :for="`weapon-${weapon.id}`"
        class="weapon-label"
      >
        <div class="weapon-info">
          <div class="overline">Nom</div>
          <span>{{ weapon.name }}</span>
        </div>

        <div class="weapon-info">
          <div class="overline">Prix</div>
          <span>{{ weapon.experience_price }}</span>
        </div>

        <div class="weapon-info">
          <div class="overline">Pouvoir</div>
          <span>{{ weapon.additional_power_percent }}</span>
        </div>
      </label>
    </div>
    <div v-if="weapons.length === 0">
      Désolé mais tu n'as pas assez d'expériences pour séléctionner une arme 😱
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'WeaponSelector',
  props: {
    /**
     * Id of the character who want to select weapons
     */
    characterId: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      weapons: [],
      errors: [],
    }
  },
  created() {
    const { characterId } = this

    axios.get(`https://fighting-game-api.herokuapp.com/api/v1/characters/${characterId}/weapons`)
      .then((response) => {
        // JSON responses are automatically parsed.
        this.weapons = response.data
      })
      .catch((e) => {
        this.errors.push(e)
      })
  },
}
</script>

<style lang="stylus" scoped>
  .weapon-selector {
    padding: 16px

    input {
      margin-right: 8px
    }

    .weapon {
      display: flex

      .weapon-label {
        display: flex

        & > div:not(:last-child) {
          margin-right: 16px
        }
      }

      &:not(:last-child) {
        margin-bottom: 8px
      }

      .weapon-info {
        display: flex
        flex-direction: column
      }
    }
  }
</style>
