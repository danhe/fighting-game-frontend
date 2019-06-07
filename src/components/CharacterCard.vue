<template>
  <div
    class="character-card card"
    :class="classes"
  >
    <div
      class="character-info"
      @click="onClick"
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

    <div class="weapon-list" v-if="selected">
      <slot />
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
      },
      selectable: {
        type: Boolean,
        default: false,
      },
      selected: {
        type: Boolean,
        default: false,
      },
    },
    computed: {
      classes() {
        const { selectable, selected } = this

        return [
          { 'character-card--selectable' : selectable },
          { 'character-card--selected' : selected },
        ]
      },
    },
    methods: {
      onClick() {
        const { char } = this

        this.$emit('click', char.id)
      }
    },
  }
</script>

<style lang="stylus" scoped>
  .character-card {
    .character-info {
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

    .weapon-list {
      grid-column: 1/-1
      margin: 0 -16px
      border-top: solid 1px var(--color-grey)
    }
  }

  .character-card--selectable {
    cursor: pointer

    &:hover {
      border: 1px solid var(--color-action)
    }
  }

  .character-card:not(.character-card--selected) {
    max-height: 185px
  }

  .character-card--selected {
    cursor: pointer
    border: 1px solid var(--color-action)

    &:hover {
      border: 1px solid var(--color-negative)
    }
  }
</style>


