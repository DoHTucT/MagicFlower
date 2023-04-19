<template>
    <div class="container">
        <div class="h1">{{ h1 }}</div>
        <div class="categoryFrame">
            <div class="category">
                <img :src="img1">
                {{ category1 }}
            </div>
            <div class="category">
                <img :src="img2">
                {{ category2 }}

            </div>
            <div class="category">
                <img :src="img3">
                {{ category3 }}

            </div>
            <div class="category">
                <img :src="img4">
                {{ category4 }}

            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "categoryGrid",

    props: ['h1', 'img1', 'category1', 'img2', 'category2', 'img3', 'category3', 'img4', 'category4'],

}
</script>

<style scoped>
.container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 30px;

    width: auto;
    height: auto;

    background: #F3F5F8;
    border-radius: 26px;

    margin-top: 50px;
}

.h1 {
    font-weight: 500;
    font-size: 36px;
    line-height: 100%;

    color: #2F3132;
}

.categoryFrame {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    margin-top: 20px;
}

.category {
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>