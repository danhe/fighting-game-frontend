<template>
  <div class="chararacter-creation">
    <h1>Créer ton personnage ! 💪 </h1>

    <div class="card card-success" v-if="creationResponse">
      <h3>Ton personnage: {{ creationResponse.name }} à bien été créer !</h3>
    </div>

    <div class="card card-error" v-if="creationError">
      <h3>Désolé, il y a eu une erreure, nous n'avons pas pu créer ton personnage 😩</h3>
      <div>Essaye avec un autre nom, celui-ci est peut être déjà pris</div>
    </div>

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
      /**
       * Name of the character written by the user
       */
      charName: '',
      /**
       *
       */
      creationResponse: null,
      /**
       *
       */
      creationError: null,
    }
  },
  methods: {
    /**
     * Called when the user want to create a
     */
    onClick() {
      const { charName } = this

      // Reset the error and response before the request
      this.creationResponse = null
      this.creationError = null

      axios.post('https://fighting-game-api.herokuapp.com/api/v1/characters', {
        name: charName,
      })
        .then((response) => { this.creationResponse = response.data })
        .catch((error) => { this.creationError = error })
    },
  },
}
</script>

<style lang="stylus" scoped>
  .chararacter-creation {
    margin: 48px auto 48px auto
    width 1040px

    .card {
      margin-bottom: 24px
    }

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
