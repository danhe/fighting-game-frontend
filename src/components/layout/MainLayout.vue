<template>
  <div class="main-layout">
    <nav>
      <div class="nav-line">
        <aside class="nav-left">
          <router-link to="/">
            <h1>
              🤼‍ Jeu de combat
            </h1>
          </router-link>
        </aside>

        <aside class="nav-right">
          <BaseButton class="first-button">
            <router-link to="/fighting/new">
              Lancer un combat
            </router-link>
          </BaseButton>
          <BaseButton theme="secondary">
            <router-link to="/character/new">
              Creer un personnage
            </router-link>
          </BaseButton>
        </aside>
      </div>
    </nav>

    <main class="content">
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
      z-index: 20
      border-bottom: 1px solid var(--color-grey)
      max-height: 72px
      overflow-y: auto
      position: fixed
      width: 100%
      background: var(--color-white)

      .nav-line {
        width: 80%
        margin: auto

        aside {
          display: inline-block

          &.nav-left {
            padding: 10px
          }

          &.nav-right {
            margin: 0 auto
            float: right
            padding-top: 11px
          }
        }
      }
    }

    main.content {
      padding: 72px 0
    }

    .first-button {
      margin-right: 16px
    }
  }
</style>
