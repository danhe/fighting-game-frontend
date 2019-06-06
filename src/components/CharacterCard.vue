<template>
  <div class="character-card card">
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
        :is-disabled="true"
        :show-tooltip="false"
        :paddingless="true"
      />
      {{ `${char.current_experience}/${char.max_experience}` }}
    </div>

    <div>
      <span class="overline">Vie</span>
      <BaseSlider
        :value="char.current_life"
        :max="char.max_life"
        :is-disabled="true"
        :show-tooltip="false"
        :paddingless="true"
      />
      {{ `${char.current_life}/${char.max_life}` }}
    </div>
  </div>
</template>

<script>
  import BaseSlider from '@/components/core/BaseSlider.vue'

  export default {
    name: 'CharacterCard',
    components: {
      BaseSlider,
    },
    props: {
      char: {
        type: Object,
        required: true
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .character-card {
    display: grid
    grid-auto-rows: min-content
    grid-template-columns: repeat(3, 1fr)
    grid-row-gap: 24px
    grid-column-gap: 16px
    margin-bottom: 12px

    .char-name {
      grid-column: 1/-1
    }
  }
</style>


