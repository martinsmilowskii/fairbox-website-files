<template lang="pug">

    .main-container

        x-space(large)

        x-header(
            medium
            weight="500"
            class="primary--text"
        ) Home Gallery

        x-space(small)

        x-grid(
            :cols="gridColumns"
            :gapY="40"
            :gapX="breakpointPhone ? 40 : 50"
        )

            gallery-box(
                v-for="(box, index) in images"
                :key="index"

                :image="box.image"
                :alt="box.alt"

                :class="addClass(index) ? 'vertical-pseudo-element' : undefined"
            )

        x-space(large)

</template>

<script>
import GalleryBox from '@/components/Home/GalleryBox'

export default {
    name: 'gallery-section',

    data: () => ({
        gridColumns: [3,3,2,1],
        images: [
            {
                image: require('@/assets/images/home-gallery/fairbox-conference.jpg'),
                alt: 'fairbox conference'
            },
            {
                image: require('@/assets/images/home-gallery/fairbox-main-partner.jpg'),
                alt: 'fairbox main partner'
            },
            {
                image: require('@/assets/images/home-gallery/fairbox-office.jpg'),
                alt: 'fairbox office'
            },
            {
                image: require('@/assets/images/home-gallery/fairbox-sub-partner.jpg'),
                alt: 'fairbox sub partner'
            },
            {
                image: require('@/assets/images/home-gallery/jan-kowalski-seo.jpg'),
                alt: 'jan kowalski seo'
            },
            {
                image: require('@/assets/images/home-gallery/stand-up-meeting.jpg'),
                alt: 'stand up meeting'
            },
        ]
    }),

    methods: {
        addClass(index){
            let columnsAmount = this.breakpointTablet ? 2 : 3

            if((index + 1) % columnsAmount === 0 && !this.breakpointPhone) return false
            else if(this.breakpointPhone) return false
            else return true
        }
    },

    mounted(){
        window.addEventListener('resize', this.addClass)
    },

    beforeDestroy(){
        window.removeEventListener('resize', this.addClass);
    },

    components: {
        GalleryBox
    }

}
</script>

<style lang="sass" scoped>

    .vertical-pseudo-element
        &:before
            content: ''
            display: flex
            position: absolute
            height: 100%
            width: 1px
            top: 0
            right: -20px
            background-color: #020203


</style>