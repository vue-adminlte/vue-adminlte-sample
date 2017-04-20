<template>
    <div class="alert"
         :class="[typeClass, bgClass]">
        <button v-show="closeable"
                type="button"
                class="close"
                data-dismiss="alert"
                aria-hidden="true">x</button>
        <h4 v-if="header"><i class="icon" :class="icon" v-show="icon"></i><span>{{header}}</span><span style="margin-left:10px;" class="badge" :class="[badgeBgClass]">{{badgeText}}</span></h4>
        <i class="icon"
           :class="icon"
           v-if="icon && !header"></i>
        <slot></slot>
    </div>
</template>

<script>
import UiHeader from './ui-header.js'

export default {
    extends: UiHeader,
    computed: {
        typeClass() {
            if (!this.type) return ''
            return ['alert-' + this.type]
        }
    },
    props: {
        closeable: {
            type: Boolean,
            default: false
        }
    }
}
</script>