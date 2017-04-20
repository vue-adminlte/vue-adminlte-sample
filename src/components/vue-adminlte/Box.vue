<template>
  <div class="box"
       :class="[typeClass,bgClass,solidClass]">
    <div class="box-header"
         :class="[borderClass]">
      <h3 class="box-title"><i v-if="icon" :class="icon"></i> {{header}}<span style="margin-left:10px;" class="badge" :class="[badgeBgClass]">{{badgeText}}</span></h3>
      <div class="box-tools pull-right"
           v-show="expandable">
        <button type="button"
                class="btn btn-box-tool"
                data-widget="collapse"><i class="fa fa-minus"></i>
        </button>
        <button type="button"
                class="btn btn-box-tool"
                v-show="closeable"
                data-widget="remove"><i class="fa fa-times"></i></button>
      </div>
    </div>
    <div class="box-body"
         style="display: block;">
      <slot></slot>
    </div>
    <div class="overlay"
         v-show="loading">
      <i class="fa fa-refresh fa-spin"></i>
    </div>
  </div>
</template>

<script>
import UiHeader from './ui-header.js'

export default {
  extends: UiHeader,
  computed: {
    typeClass() {
      return this.type ? 'box-' + this.type : ''
    },
    borderClass() {
      return this.border ? 'with-border' : ''
    },
    solidClass() {
      return this.solid ? 'box-solid' : ''
    },
    collapsedClass() {
      return this.collapsed ? 'collapsed-box' : ''
    }
  },
  props: {
    border: {
      type: Boolean,
      default: true
    },
    expandable: {
      type: Boolean,
      default: false
    },
    closeable: {
      type: Boolean,
      default: false
    },
    solid: {
      type: Boolean,
      default: false
    },
    closeable: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    }
  }
}
</script>