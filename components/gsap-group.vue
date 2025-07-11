
<script setup lang="ts">


const props = defineProps({
    options : {
        required : false,
        type : Object as () => Parameters<typeof $gsap.timeline>[0],
        default : () => ({})
    }
});
const timeline = $gsap.timeline({...props.options});
provide("timeline", timeline);
</script>

<template>
  <slot></slot>
</template>
