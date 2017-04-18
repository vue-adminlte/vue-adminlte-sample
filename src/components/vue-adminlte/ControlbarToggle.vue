<template>
  <li>
    <a href="#"
       data-toggle="control-sidebar"
       role="button">
      <i v-if="icon"
         :class="icon"></i>
      <span class="sr-only">Toggle navigation</span>
    </a>
  </li>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      default: 'fa fa-gears'
    }
  }
}
</script>