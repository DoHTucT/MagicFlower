<template>
    <div class="background"></div>
    <div class="swiperContainer">
        <Swiper
            class="swiper"
            :slides-per-view="'auto'"
            :grab-cursor="true"
            :space-between="20"
        >
            <SwiperSlide
                class="swiper-slide"
                v-for="(image, index) in images"
                :key="index"
                @click="openModal(index)"
                :class="{ 'swiper-slide-new': image.isNew }"
            >
                <img class="img" :src="image.prev" :alt="image.alt" />
            </SwiperSlide>
        </Swiper>
    </div>
    <div v-if="isModalOpen" class="modal" @click="closeModal">
        <div class="modal-content">
            <Swiper
                class="swiper-modal"
                :slides-per-view="1"
                :space-between="0"
                :initial-slide="activeIndex"
                @slideChange="updateSlideIndex"
            >
                <SwiperSlide
                    class="swiper-slide-modal"
                    @click.stop
                    v-for="(image, index) in images"
                    :key="index"
                >
                    <img class="img-modal" :src="image.full" :alt="image.alt" />
                </SwiperSlide>
            </Swiper>
            <button class="close-btn" @click="closeModal">X</button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            images: [
                { prev: "./img/preview_stories.svg", full: "./img/card_stories.jpg", alt: "Image 1", isNew: true },
                { prev: "./img/preview_stories.svg", full: "./img/card_stories.jpg", alt: "Image 2", isNew: true },
                { prev: "./img/preview_stories.svg", full: "./img/card_stories.jpg", alt: "Image 3", isNew: true },
                { prev: "./img/preview_stories.svg", full: "./img/card_stories.jpg", alt: "Image 4", isNew: true },
                { prev: "./img/preview_stories.svg", full: "./img/card_stories.jpg", alt: "Image 5", isNew: true },
                { prev: "./img/preview_stories.svg", full: "./img/card_stories.jpg", alt: "Image 6", isNew: true },
                { prev: "./img/preview_stories.svg", full: "./img/card_stories.jpg", alt: "Image 7", isNew: true },
                { prev: "./img/preview_stories.svg", full: "./img/card_stories.jpg", alt: "Image 8", isNew: true },
                { prev: "./img/preview_stories.svg", full: "./img/card_stories.jpg", alt: "Image 9", isNew: true },
            ],
            isModalOpen: false,
            activeIndex: 0,
        };
    },
    methods: {
        openModal(index) {
            this.activeIndex = index;
            this.isModalOpen = true;
            const slideEl = document.querySelectorAll('.swiper-slide')[index];
            slideEl.classList.remove('swiper-slide-new');
            localStorage.removeItem('swiper-slide-new');
        },
        closeModal() {
            this.isModalOpen = false;
        },
        updateSlideIndex(slideIndex) {
            this.activeIndex = slideIndex;

        },
    },
    mounted() {
        const imagesData = localStorage.getItem("images");
        if (imagesData) {
            this.images = JSON.parse(imagesData);
        }
    },
};
</script>

<style>
.background {
    position: absolute;
    width: 100%;
    height: 326px;
    left: 0px;
    top: 441px;

    background: #FFFFFF;
    border-radius: 40px 40px 0px 0px;
}

.swiperContainer {
    width: 100%;
    height: 250px;
    margin-top: 66px;
    background: #FFFFFF;
    /*overflow: hidden;*/
}

.swiper {
    background: #FFFFFF;
    width: 100%;
}

.swiper-slide {
    background: #FFFFFF;

    width: 192px;
    height: auto;

}

.swiper-slide-new{
    border-radius: 28px;
    border: 2px solid #DAE147;
}

.img {
    width: 98%;
    height: 98.5%;
    background: #FFFFFF;
    border: 2px solid #ffffff;
    border-radius: 26px;
}

.swiper-wrapper {
    background: #FFFFFF;
}

/* Modal styles */

.modal {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
}

.modal-content {
    background-color: transparent;
    /*display: inline-block;*/
    /*margin: auto;*/
    /*padding: 20px;*/
    height: auto;
    max-width: 600px;
    /*position: relative;*/
}



.close-btn {
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: 24px;
    font-weight: bold;
    cursor: pointer;
    background-color: transparent;
    border: none;
}
</style>