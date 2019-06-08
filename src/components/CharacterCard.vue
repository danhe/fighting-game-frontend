<template>
  <div
    class="character-card card"
    :class="classes"
  >
    <div
      class="character-info"
      @click="onCardClick"
    >
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

    <div class="weapon-list" v-if="$slots.default">
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
    /**
     * Character we want to display in the card
     */
    character: {
      type: Object,
      required: true,
    },
    /**
     * Apply a different style on the card if the card is selectable
     */
    selectable: {
      type: Boolean,
      default: false,
    },
    /**
     * Apply a different style on the card if the card is selected
     */
    selected: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    /**
     * Create an object with all the class to apply at the root according
     * to the given props
     */
    classes() {
      const { selectable, selected } = this

      return [
        { 'character-card--selectable': selectable },
        { 'character-card--selected': selected },
      ]
    },
  },
  methods: {
    /**
       * Emit the id of the character if the card is clicked and selectable
       */
    onCardClick() {
      const { selectable, character } = this

      if (selectable) {
        this.$emit('click', character.id)
      }
    },
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

      .character-name {
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
