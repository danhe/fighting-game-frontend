<template>
  <div class="chararacter-creation">
    <h1>Créer ton personnage ! 💪 </h1>

    <div class="form">
      <div class="name">
        <span class="overline">C'est quoi son petit nom ?</span>
        <TextInput
          class="input"
          v-model="charName"
        />
      </div>

      <BaseButton
        class="button"
        @click="onClick"
      >
        Créer !
      </BaseButton>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

import BaseButton from '@/components/core/BaseButton.vue'
import TextInput from '@/components/core/TextInput.vue'

export default {
  name: 'CharacterCreation',
  components: {
    BaseButton,
    TextInput,
  },
  data() {
    return {
      charName: '',
    }
  },
  methods: {
    onClick() {
      const { charName } = this

      axios.post('https://fighting-game-api.herokuapp.com/api/v1/characters', {
        name: charName,
      })
        .then((response) => { console.warn(response) })
        .catch(e => { console.error(e) })
    },
  },
}
</script>

<style lang="stylus" scoped>
  .chararacter-creation {
    margin: 48px auto 48px auto
    width 1040px

    h1 {
      margin-bottom: 24px
    }

    .form {
      display: flex

      .name {
        margin-right: 16px
        display: flex
        flex-direction: column
        width: 400px

        .input {
          margin-top: 8px
        }
      }

      .button {
        margin-top: auto
      }
    }
  }
</style>
