<template>
  <div class="main-layout">
    <nav>
      <div class="wrapper">
        <BaseButton class="first-button">
          Lancer un combat
        </BaseButton>
        <BaseButton theme="secondary">
          Creer un personnage
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
      border-bottom: 1px solid #eaeaea
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
