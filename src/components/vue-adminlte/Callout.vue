<template>
    <div class="callout"
         :class="[typeClass, bgClass]">
        <h4 v-if="header"><i class="icon" style="margin-right:10px" :class="icon" v-show="icon"></i><span>{{header}}</span><span style="margin-left:10px;" class="badge" :class="[badgeBgClass]">{{badgeText}}</span></h4>
        <slot></slot>
    </div>
</template>

<script>
import UiHeader from './ui-header.js'

export default {
    extends: UiHeader,
    computed: {
        typeClass() { return `callout-${this.type}` },
    }
}
</script>