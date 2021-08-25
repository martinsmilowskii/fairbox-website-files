<template lang="pug">

    v-hover(
        v-slot="{ hover }"
        open-delay="100"
        close-delay="100"
    )

        v-card(
            flat
            tile
        )

            .box-full-size(class="d-flex align-center")
                img.img-cover.element-transition(
                    :src="image"
                    :alt="alt"

                    :style="{transform: hover && !breakpointTablet ? 'scale(1.1)' : 'scale(1)', 'max-height' : breakpointPhone ? '330px' : undefined}"
                )

    </template>

<script>
export default {
    name: 'gallery-box',

    props: {
        image: {
            type: String,
            required: true
        },
        alt: {
            type: String,
            required: true
        },
    },
}
</script>