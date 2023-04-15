<template>
    <div class="swiper-container">
        <div class="header">
            <div class="h1">Отзывы покупателей</div>
            <div class="feedbackButton">5013 отзывов
                <img src="@/assets/img/feedbackArrow.svg"></div>
            <div class="swiper-navigation">
                <div class="swiper-button-prev"></div>
                <div class="swiper-button-next"></div>

            </div>
        </div>

        <swiper
                class="swiper-feedback"
                :modules="[SwiperNavigation]"
                :slides-per-view="'auto'"
                :grab-cursor="true"
                :space-between="60"
                :navigation="{
                    nextEl: next,
                    prevEl: prev
                    }"
        >
            <swiper-slide
                    class="swiper-slide"
                    v-for="(feedback, index) in feedback"
                    :key="index"
            >
                <img src="@/assets/img/“.svg">
                <div class="swiper-frame">
                    <div class="txt">{{ feedback.txt }}</div>
                    <div class="sub-frame">
                        <img :src="feedback.img">
                        <div class="user-frame">
                        <div class="user">{{ feedback.user }}</div>
                        <div class="product">{{ feedback.product }}</div>
                        </div>
                    </div>
                </div>
            </swiper-slide>
        </swiper>
    </div>
</template>

<script>
export default {
    name: "feedbackBar",
    data() {
        return {
            feedback: [
                {
                    txt: 'Спасибо большое, отличный букет, доставка точь в точь, курьер вежливый',
                    img: '/img/feedbackImg.svg',
                    user: 'Александр',
                    product: '101 белая роза'
                },
                {
                    txt: 'Спасибо большое, отличный букет, доставка точь в точь, курьер вежливый',
                    img: '/img/feedbackImg.svg',
                    user: 'Александр',
                    product: '101 белая роза'
                },
                {
                    txt: 'Спасибо большое, отличный букет, доставка точь в точь, курьер вежливый',
                    img: '/img/feedbackImg.svg',
                    user: 'Александр',
                    product: '101 белая роза'
                }

            ]
        }
    }
}
</script>

<style scoped>
.swiper-container {
    height: auto;

    background: #F3F5F8;
    border-radius: 40px;
    margin-top: 50px;
    padding: 54px 0 52px 50px;
}

.header {
    display: flex;
    align-items: center;
    gap: 20px;
}

.h1 {
    font-weight: 500;
    font-size: 36px;
    line-height: 100%;

    color: #2F3132;
}

.feedbackButton {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 11px;

    width: 185px;
    height: 44px;

    border: 1px solid #B46B95;
    border-radius: 52px;

    font-weight: 500;
    font-size: 20px;
    line-height: 110%;

    color: #B46B95;
}

.swiper-slide{
    display: flex;
    gap: 24px;
    align-items: flex-start;
    margin-top: 34px;
    width: 435px;

}

.txt {
    font-family: 'Gilroy';
    font-style: normal;
    font-weight: 500;
    font-size: 26px;
    line-height: 110%;

    color: #989EA5;
}

.sub-frame{
    display: flex;
    gap: 18px;
    align-items: center;
    margin-top: 18px;
}

.user{
    font-weight: 500;
    font-size: 20px;
    line-height: 110%;

    color: #2F3132;
}

.product{
    font-weight: 500;
    font-size: 16px;
    line-height: 110%;
    color: #989EA5;
    margin-top: 8px;
}

.swiper-navigation {
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    justify-self: flex-end;
    border: 1px solid black;
    height: 30px;
width: 30px;
}

</style>