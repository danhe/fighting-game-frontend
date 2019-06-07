<template>
  <div class="weapon-selector">
    <div
      class="weapon"
      v-for="weapon in weapons"
      :key="weapon.id"
    >
      <input
        type="radio"
        :name="`weapon-${characterId}`"
        @input="$emit('update', weapon.id)"
      />
      <span>{{ weapon.name }}</span>
      <span>{{ weapon.experience_price }}</span>
      <span>{{ weapon.additional_power_percent }}</span>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'WeaponSelector',
  props: {
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
    axios.get('https://fighting-game-api.herokuapp.com/api/v1/weapons')
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
  }
</style>
