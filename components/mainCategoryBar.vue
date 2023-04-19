<template>
    <div class="container">
        <div class="categoryItem"><img src="@/assets/img/mainCategory/RedRoses.svg">Красные розы</div>
        <div class="categoryItem"><img src="@/assets/img/mainCategory/whiteRoses.svg">Белые розы</div>
        <div class="categoryItem"><img src="@/assets/img/mainCategory/tulips.svg">Тюльпаны</div>
        <div class="categoryItem"><img src="@/assets/img/mainCategory/gypsophila.svg">Гипсофила</div>
        <div class="categoryItem"><img src="@/assets/img/mainCategory/gypsophila.svg">Орхидеи</div>
        <div class="categoryItem"><img src="@/assets/img/mainCategory/chrysanthemums.svg">Хризантемы</div>
        <div class="categoryItem"><img src="@/assets/img/mainCategory/alstroemeria.svg">Алстромерии</div>
        <div class="categoryItem"><img src="@/assets/img/mainCategory/hydrangeas.svg">Гортензии</div>
    </div>
</template>

<script>
export default {
    name: "mainCategoryBar"
}
</script>

<style scoped>

.container {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    padding: 0px;
    gap: 20px;

    width: 100%;
    height: 132px;
    margin-top: 25px;
    margin-bottom: 40px;

    flex: none;
    order: 1;
    align-self: stretch;
    flex-grow: 0;
}

.categoryItem {
    display: flex;
    flex-direction: column;
    align-items: center;
    /*padding: 0px;*/
    gap: 14px;
    font-weight: 500;
    font-size: 16px;
    line-height: 110%;

    text-align: center;

    color: #2F3132;
}
</style>