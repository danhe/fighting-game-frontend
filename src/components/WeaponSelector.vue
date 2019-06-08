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
    <div
      v-if="weapons.length > 0"
      class="weapon"
    >
      <input
        type="radio"
        id="no-weapon"
        :name="`weapon-${characterId}`"
        @input="$emit('update', weapon.id)"
      />
      <label
        for="no-weapon"
        class="weapon-label"
      >
        Jouer sans arme
      </label>
    </div>
    <div v-else>
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
      /**
       * List of weapons available for the character with the given id
       * Because a character pay a weapon in XP point, we need to display only
       * the weapons he can buy
       * @type {Array}
       */
      weapons: [],
      /**
       * List of errors if the backend don't manage to send us the weapon list
       * @type {Array}
       */
      errors: [],
    }
  },
  created() {
    const { characterId } = this

    axios.get(`https://fighting-game-api.herokuapp.com/api/v1/characters/${characterId}/weapons`)
      .then((response) => {
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
