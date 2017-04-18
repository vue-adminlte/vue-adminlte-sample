<template>
    <div class="alert"
         :class="[typeClass, bgClass]">
        <button v-show="dismissible"
                type="button"
                class="close"
                data-dismiss="alert"
                aria-hidden="true">x</button>
        <h4 v-show="isShowHeader"><i class="icon" :class="icon" v-show="isShowIcon"></i><span>{{header}}</span></h4>
        <i class="icon"
           :class="icon"
           v-show="!isShowHeader && isShowIcon"></i>
        <slot></slot>
    </div>
</template>

<script>
export default {
    computed: {
        typeClass() {
            if (!this.type) return ''
            return ['alert-' + this.type]
        },
        bgClass() {
            if (!this.bg) return ''
            return ['bg-' + this.bg]
        },
        isShowHeader() {
            if (this.header && this.header != '') {
                return true
            } else {
                return false
            }
        },
        isShowIcon() {
            if (this.icon && this.icon != '') {
                return true
            } else {
                return false
            }
        },
        isShowContentIcon() {
            return !isShowIcon()
        }
    },
    props: {
        type: {
            type: String,
            default: undefined
        },
        bg: {
            type: String,
            default: undefined
        },
        header: {
            type: String,
            default: undefined
        },
        icon: {
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