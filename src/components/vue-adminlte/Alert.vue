<template>
    <div class="alert"
         :class="[typeClass, bgClass]">
        <button v-show="dismissible"
                type="button"
                class="close"
                data-dismiss="alert"
                aria-hidden="true">x</button>
        <h4 v-show="isShowHeader"><i class="icon" :class="icon" v-show="icon"></i><span>{{header}}</span></h4>
        <i class="icon"
           :class="icon"
           v-show="!isShowHeader && isShowIcon"></i>
        <slot></slot>
    </div>
</template>

<script>
import UiBase from './ui-base.js'

export default {
    extends: UiBase,
    computed: {
        typeClass() {
            if (!this.type) return ''
            return ['alert-' + this.type]
        },
        isShowHeader() {
            if (this.header && this.header != '') {
                return true
            } else {
                return false
            }
        }
    },
    props: {
        header: {
            type: String,
            default: undefined
        },
        dismissible: {
            type: Boolean,
            default: false
        }
    }
}
</script>