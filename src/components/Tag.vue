<template>
    <transition :name="closeTransition ? '' : 'el-zoom-in-center'">
        <span class="vm-tag" :class="[type ? 'vm-tag--' + type : '', {'hit': hit}, tagclass]" :style="{backgroundColor: color}">
            <slot></slot>
            <i class="vm-tag__close vm-icon-close" v-if="closable" @click="handleClose"></i>
        </span>
    </transition>
</template>

<script>
    export default {
        name: 'VmTag',
        props: {
            text: String,
            closable: Boolean,
            type: String,
            hit: Boolean,
            closeTransition: Boolean,
            color: String,
            tagclass: String
        },
        methods: {
            handleClose(event) {
                this.$emit('close', event);
            }
        }
    };
</script>

<style scoped>

</style>
