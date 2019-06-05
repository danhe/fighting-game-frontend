<template>
  <div class="main-layout">
    <nav>
      <div class="wrapper">
        <BaseButton class="first-button">
          <router-link to="/fight/start">
            Lancer un combat
          </router-link>
        </BaseButton>
        <BaseButton
          theme="secondary"
        >
          <router-link to="/character/creation">
            Creer un personnage
          </router-link>
        </BaseButton>
      </div>
    </nav>
    <main>
      <slot />
    </main>
  </div>
</template>

<script>
import BaseButton from '@/components/core/BaseButton.vue'

export default {
  name: 'MainLayout',
  components: {
    BaseButton,
  },
}
</script>

<style lang="stylus" scoped>
  .main-layout {
    nav {
      border-bottom: 1px solid var(--color-grey)
      padding: 8px 16px
    }

    .wrapper {
      margin: 0 auto
      width 1040px
    }

    .first-button {
      margin-right: 16px
    }
  }
</style>
