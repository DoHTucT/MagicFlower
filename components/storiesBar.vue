<template>
    <div class="background"/>
    <div class="swiperContainer">
        <Swiper
                class="swiper-stories"
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
                <img class="img" :src="image.prev" :alt="image.alt"/>
            </SwiperSlide>
        </Swiper>
    </div>
    <div v-if="isModalOpen" class="modal">
        <div class="modal-content">
            <Swiper
                    class="swiper-modal"
                    :modules="[SwiperNavigation, SwiperPagination]"
                    :slides-per-view="1"
                    :space-between="0"
                    :initial-slide="activeIndex"
                    :navigation="{
                    nextEl: next,
                    prevEl: prev
                    }"
                    :pagination="{
                        el: pagination,
                        clickable: true,
                        type: 'bullets'
                    }"

            >
                <SwiperSlide
                        class="swiper-slide-modal"
                        v-for="(image, index) in images"
                        :key="index"
                >
                    <img class="img-modal" :src="image.full" :alt="image.alt"/>
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
                {
                    prev: "./img/preview_stories.svg",
                    full: "./img/card_stories.jpg",
                    alt: "Image 1",
                    isNew: true,
                },
                {
                    prev: "./img/preview_stories.svg",
                    full: "./img/card_stories.jpg",
                    alt: "Image 2",
                    isNew: true,
                },
                {
                    prev: "./img/preview_stories.svg",
                    full: "./img/card_stories.jpg",
                    alt: "Image 3",
                    isNew: true,
                },
                {
                    prev: "./img/preview_stories.svg",
                    full: "./img/card_stories.jpg",
                    alt: "Image 4",
                    isNew: true,
                },
                {
                    prev: "./img/preview_stories.svg",
                    full: "./img/card_stories.jpg",
                    alt: "Image 5",
                    isNew: true,
                },
                {
                    prev: "./img/preview_stories.svg",
                    full: "./img/card_stories.jpg",
                    alt: "Image 6",
                    isNew: true,
                },
                {
                    prev: "./img/preview_stories.svg",
                    full: "./img/card_stories.jpg",
                    alt: "Image 7",
                    isNew: true,
                },
                {
                    prev: "./img/preview_stories.svg",
                    full: "./img/card_stories.jpg",
                    alt: "Image 8",
                    isNew: true,
                },
                {
                    prev: "./img/preview_stories.svg",
                    full: "./img/card_stories.jpg",
                    alt: "Image 9",
                    isNew: true,
                },
            ],
            isModalOpen: false,
            activeIndex: 0,
            pagination: '',
        };
    },
    methods: {
        openModal(index) {
            this.activeIndex = index;
            this.isModalOpen = true;

            const slideEl = document.querySelectorAll('.swiper-slide')[index];
            slideEl.classList.remove('swiper-slide-new');
            localStorage.setItem(`slide${index}`, index);
            // let storiesLength = this.images.length;
            // let cssVar = 100 / storiesLength;
            // this.pagination = `${cssVar}%`;
            // console.log(this.pagination);

        },
        closeModal() {
            this.isModalOpen = false;
        },

    },
    mounted() {
        for (let i = 0; i < this.images.length; i++) {
            const slideEl = document.querySelectorAll(".swiper-slide")[i];
            const slideIndex = localStorage.getItem(`slide${i}`);
            if (slideIndex !== null) {
                this.images[i].isNew = false
            }
            setTimeout(() => {
                if (this.images[i].isNew === false) {
                    slideEl.classList.remove("swiper-slide-new")
                }
            }, 0);

        }
    }
}

</script>

<style scoped>
.background {
    position: absolute;
    width: 1280px;
    height: 40px;
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

.swiper-stories {
    background: #FFFFFF;
    width: 100%;
}

.swiper-slide {
    background: #FFFFFF;
    box-sizing: border-box;
    width: 192px;
    height: 250px;

}

.swiper-slide-new {
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

.swiper-slide-modal {
    width: auto;
    height: 710px;
    border-radius: 30px;
}

.swiper {
    border-radius: 30px;

}

.modal-content {
    background-color: transparent;
    width: 446px;
    height: 600px;
    border-radius: 30px;
}

.img-modal {
    border-radius: 30px;
}

.swiper-button-next {
    position: absolute;
    top: 0;
    right: 0;
    background-color: transparent;
    height: 120%;
    width: 50%;
    z-index: 2;
}

.swiper-button-prev {
    position: absolute;
    top: 0;
    left: 0;
    background-color: transparent;
    height: 120%;
    width: 50%;
    z-index: 2;
}

.swiper-button-next::after, .swiper-button-prev::after {
    content: none;
}

/*.image-slider{*/
/*    width: 100%;*/
/*    top: 0;*/
/*}*/

/*.swiper-pagination {*/
/*    width: 100%;*/
/*    background-color: transparent;*/
/*    --swiper-pagination-top: 0;*/
/*    --swiper-pagination-bullet-width: v-bind(pagination) ;*/
/*}*/

/*.swiper-pagination-bullet{*/
/*    height: 2px;*/
/*    background: #F3F5F8;*/

/*}*/

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