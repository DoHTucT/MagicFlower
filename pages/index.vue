<template>
    <navBar/>
    <div class="h1">Доставка цветов в Москве</div>
    <mainCategoryBar/>
    <storiesBar/>
    <categorySection h1Value="Бесплатный подарок к букету"/>
    <categorySection h1Value="101 роза"/>
    <categorySection h1Value="До 2000 рублей"/>
    <div class="categoryGridFrame">
        <categoryGrid v-for="(category, index) in categoryGrid"
                      :key="index"
                      :h1=category.h1
                      :category1=category.category1
                      :img1=category.img1
                      :category2=category.category2
                      :img2=category.img2
                      :category3=category.category3
                      :img3=category.img3
                      :category4=category.category4
                      :img4=category.img4
        />
    </div>

    <categorySection h1Value="Сборные букеты"/>
    <categorySection h1Value="Пионы"/>
    <categorySection h1Value="Букеты из клубники"/>
    <feedbackBar/>
    <categorySection h1Value="Гортензии"/>
    <SEO/>
    <articlesBar/>
    <question-block/>
    <advantages/>
    <foo-ter/>


</template>

<script>
import ArticlesBar from "~/components/articlesBar.vue";
import Advantages from "~/components/advantages.vue";
import FooTer from "~/components/foo-ter.vue";

export default {
    name: "index",
    components: {FooTer, Advantages, ArticlesBar},
    data() {
        return {
            categoryGrid: [
                {
                    h1: 'Цветы',
                    category1: 'Красные розы',
                    img1: '/img/RedRoses.svg',
                    category2: 'Белые розы',
                    img2: '/img/whiteRoses.svg',
                    category3: 'Тюльпаны',
                    img3: '/img/tulips.svg',
                    category4: 'Пионы',
                    img4: '/img/pion.svg'
                },
                {
                    h1: 'Цветы',
                    category1: 'Красные розы',
                    img1: '/img/RedRoses.svg',
                    category2: 'Белые розы',
                    img2: '/img/whiteRoses.svg',
                    category3: 'Тюльпаны',
                    img3: '/img/tulips.svg',
                    category4: 'Пионы',
                    img4: '/img/pion.svg'
                },
                {
                    h1: 'Цветы',
                    category1: 'Красные розы',
                    img1: '/img/RedRoses.svg',
                    category2: 'Белые розы',
                    img2: '/img/whiteRoses.svg',
                    category3: 'Тюльпаны',
                    img3: '/img/tulips.svg',
                    category4: 'Пионы',
                    img4: '/img/pion.svg'
                },

            ],
        }
    }
}
</script>

<style scoped>
.h1 {
    font-weight: 500;
    font-size: 50px;
    line-height: 110%;
    color: #2F3132;
    margin-top: 40px;
}

.categoryGridFrame {
    display: flex;
    justify-content: space-between;
}
</style>