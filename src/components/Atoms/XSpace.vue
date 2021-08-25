<template lang="pug">

    div(
        :style="{height: height}"
    )

</template>

<script>
export default {
    name: 'x-space',

    props: {
        small: Boolean,
        large: Boolean,
    },

    computed: {
        height(){
            if(this.small) return '35px'
            if(this.large) {
                if(this.breakpointPhone) return '40px'
                else if(this.breakpointTablet) return '70px'
                else return '100px'
            }
        }
    }
}
</script>