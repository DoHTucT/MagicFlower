<template>
    <swiper
        :slides-per-view="6">
        <swiper-slide v-for="(item, index) in images" :key="index">
            <img :src="item.src" :alt="item.alt">
        </swiper-slide>
    </swiper>


</template>

<script>
export default {
    data() {
        return {
            images: [
                { src: './img/preview_stories.svg', alt: 'Image 1' },
                { src: './img/preview_stories.svg', alt: 'Image 2' },
                { src: './img/preview_stories.svg', alt: 'Image 3' },
                { src: './img/preview_stories.svg', alt: 'Image 4' },
                { src: './img/preview_stories.svg', alt: 'Image 5' },
                { src: './img/preview_stories.svg', alt: 'Image 6' },
                { src: './img/preview_stories.svg', alt: 'Image 7' },
                { src: './img/preview_stories.svg', alt: 'Image 8' },
                { src: './img/preview_stories.svg', alt: 'Image 9' },
            ],

        }
    },

}
</script>

<style>
.story-slider {
    overflow: hidden;
    position: relative;
}

.slides {
    display: flex;
    transition: transform 0.5s ease-in-out;
}

.slides li {
    width: calc(100% / 6);
    margin-right: 20px;
    flex-shrink: 0;
}

.slides img {
    width: 100%;
    height: auto;
    object-fit: cover;
}

.prev,
.next {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 20px;
    height: 20px;
    background: #000;
    color: #fff;
    text-align: center;
    line-height: 20px;
    border-radius: 50%;
    cursor: pointer;
}

.prev {
    left: 10px;
}

.next {
    right: 10px;
}
</style>