<template>
    <div class="background"/>
    <slot/>
</template>

<script>
export default {
    name: "default"
}
</script>

<style scoped>
.background {
    position: absolute;
    width: 100%;
    height: 481px;
    left: 0px;
    top: 0px;

    background: #F3F5F8;

    z-index: -1;
}
</style>