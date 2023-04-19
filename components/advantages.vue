<template>
    <div class="container">
<!--        <div class="swiper-button-prev"></div>-->
        <swiper
                class="swiper-advantages"
                :modules="[SwiperNavigation]"
                :slides-per-view="'auto'"
                :grab-cursor="true"
                :space-between="24"
                :navigation="{
                    nextEl: next,
                    prevEl: prev
                    }"
        >
            <swiper-slide
                    class="swiper-slide"
                    v-for="(advantage, index) in advantages"
                    :key="index"
            >
                <img :src="advantage.img">
                <div class="title">{{ advantage.title }}</div>
            </swiper-slide>
        </swiper>
<!--        <div class="swiper-button-next"></div>-->
    </div>
</template>

<script>
export default {
    name: "advantages",
    data() {
        return {
            advantages: [
                {
                    img:'/img/advantagesDelivery.svg',
                    title: 'Быстрая доставка за 2 часа',
                },
                {
                    img:'/img/advantagesDelivery.svg',
                    title: 'Быстрая доставка за 2 часа',
                },
                {
                    img:'/img/advantagesDelivery.svg',
                    title: 'Быстрая доставка за 2 часа',
                },
                {
                    img:'/img/advantagesDelivery.svg',
                    title: 'Быстрая доставка за 2 часа',
                }
            ]
        }
    }
}
</script>

<style scoped>
.container {
    display: flex;
    width: 88%;
    height: 119px;
    margin-top: 109px;
}
.swiper-slide {
    width: 344px;
    height: 119px;

    background: #F3F5F8;
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
}

.swiper {
    --swiper-navigation-size: 47px;
    --swiper-navigation-color: #F3F5F8;
}

/*.swiper-button-next {*/
/*    position: relative;*/
/*    !*left: 150px;*!*/
/*}*/

</style>