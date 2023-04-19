<template>
    <div class="h1">{{ h1Value }}<img class="arrow" src="@/assets/img/categoryArrowRight.svg"></div>
    <div class="cardContainer">
        <productTeaser/>
        <productTeaser/>
        <productTeaser/>
        <productTeaser/>
    </div>
</template>

<script>
export default {
    name: "categorySection",

    props: ['h1Value']
}
</script>

<style scoped>
.background {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;

    background: #FFFFFF;
}

.h1 {
    position: relative;
    margin-top: 50px;
    font-weight: 500;
    font-size: 36px;
    line-height: 100%;
    background: #FFFFFF;

    color: #2F3132;
}

.arrow {
    margin-left: 17px;
}

.cardContainer {
    display: flex;
    justify-content: space-between;
    padding: 20px 0px 0px;
    gap: 20px;

    width: 100%;
    height: 507px;

    flex: none;
    order: 1;
    align-self: stretch;
    flex-grow: 0;
}
</style>