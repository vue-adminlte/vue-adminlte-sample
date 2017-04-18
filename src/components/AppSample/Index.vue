<template>
  <div>
    <app-header></app-header>
    <app-sidebar></app-sidebar>
    <lte-content-wrapper>
      <lte-main-content>
        <router-view></router-view>
      </lte-main-content>
    </lte-content-wrapper>
    <app-footer></app-footer>
  </div>
</template>

<script>
import AppHeader from '../shared/AppHeader'
import AppSidebar from '../shared/AppSidebar'
import AppFooter from '../shared/AppFooter'

export default {
  components: {
    AppHeader,
    AppSidebar,
    AppFooter
  }
}
</script>