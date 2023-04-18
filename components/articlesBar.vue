<template>
    <div class="container">

        <div class="h1">Полезная информация</div>
        <swiper
                class="swiper-articles"
                :slides-per-view="'auto'"
                :grab-cursor="true"
                :space-between="26">
            <swiper-slide
                    class="swiper-slide"
                    v-for="(article, index) in articles"
                    :key="index"
            >
                <div class="title">{{ article.title }}</div>
                <div class="prev">{{ article.prev }}</div>
            </swiper-slide>
        </swiper>
    </div>

</template>

<script>
export default {
    name: "articlesBar",

    data() {
        return {
            articles: [
                {
                    title: 'Как ухаживать за букетом в шляпной коробке',
                    prev: 'В жизнь людей XXI века вошло новое модное веяние — делать нестандартные подарки. Чего только не дарят эти несчастные людишки, которые пришли в качестве подарка на букете.',
                },
                {
                    title: 'Как ухаживать за букетом в шляпной коробке',
                    prev: 'В жизнь людей XXI века вошло новое модное веяние — делать нестандартные подарки. Чего только не дарят эти несчастные людишки, которые пришли в качестве подарка на букете.',
                },
                {
                    title: 'Как ухаживать за букетом в шляпной коробке',
                    prev: 'В жизнь людей XXI века вошло новое модное веяние — делать нестандартные подарки. Чего только не дарят эти несчастные людишки, которые пришли в качестве подарка на букете.',
                },
                {
                    title: 'Как ухаживать за букетом в шляпной коробке',
                    prev: 'В жизнь людей XXI века вошло новое модное веяние — делать нестандартные подарки. Чего только не дарят эти несчастные людишки, которые пришли в качестве подарка на букете.',
                },
                {
                    title: 'Как ухаживать за букетом в шляпной коробке',
                    prev: 'В жизнь людей XXI века вошло новое модное веяние — делать нестандартные подарки. Чего только не дарят эти несчастные людишки, которые пришли в качестве подарка на букете.',
                },
            ]
        }
    }
}
</script>

<style scoped>
.container {
    width: 100%;
    height: 248px;
    margin-top: 69px;
}

.h1 {
    font-size: 36px;
    line-height: 100%;

    color: #2F3132;

    margin-bottom: 34px;
}

.swiper-slide {
    width: 392px;
    height: auto;

    background: #F3F5F8;
    border-radius: 20px;
    padding: 25px;
}

.swiper-slide:hover {
    background: #FFFFFF;
    box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.1);
}

.title {
    font-size: 20px;
    line-height: 130%;

    color: #2F3132
}

.swiper-slide:hover .title {
    color: #B46B95;
}

.prev {
    font-size: 16px;
    line-height: 130%;

    color: #989EA5;
    margin-top: 9px;

    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
}
</style>