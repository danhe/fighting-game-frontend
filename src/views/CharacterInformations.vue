<template>
  <div class="character-informations">
    <h1>Info du personnage</h1>

    <div class="character-name">
      <span class="overline">Personnage</span>
      <h2>{{ character.name }}</h2>
    </div>

    <div>
      <span class="overline">Level</span>
      <div>{{ character.level }}</div>
    </div>

    <div>
      <span class="overline">Pouvoir</span>
      <div>{{ character.power }}</div>
    </div>

    <div>
      <span class="overline">Experiences</span>
      <BaseSlider
        :value="character.current_experience"
        :max="character.max_experience"
        :is-disabled="true"
        :show-tooltip="false"
        :paddingless="true"
      />
      {{ `${character.current_experience}/${character.max_experience}` }}
    </div>

    <div>
      <span class="overline">Vie</span>
      <BaseSlider
        :value="character.current_life"
        :max="character.max_life"
        :is-disabled="true"
        :show-tooltip="false"
        :paddingless="true"
      />
      {{ `${character.current_life}/${character.max_life}` }}
    </div>
  </div>
</template>

<script>
import axios from 'axios'

import BaseSlider from '@/components/core/BaseSlider.vue'

export default {
  name: 'CharacterInformations',
  components: {
    BaseSlider,
  },
  data() {
    return {
      character: [],
      errors: [],
    }
  },
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  created() {
    const { id } = this

    if(id) {
      axios.get(`https://fighting-game-api.herokuapp.com/api/v1/characters/${id}`)
        .then((response) => {
          // JSON responses are automatically parsed.
          this.character = response.data
        })
        .catch((e) => {
          this.errors.push(e)
        })
    }
  },
}
</script>

<style lang="stylus" scoped>
  .character-informations {
    margin: 0 auto
    width 1040px
  }
</style>
