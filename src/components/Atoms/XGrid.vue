<template lang="pug">

    div(
        style="display: grid"
        :style="{'grid-template-columns': computedCols, 'grid-gap': computedGap}"
    )
        slot

</template>

<script>
export default {
    name: 'x-grid',

    props: {
        cols: {
            type: Array,
            default: [4,3,2,1]
        },
        gap: {
            type: Number | String,
            default: 20
        },
        gapX: {
            type: Number | String,
            default: 0
        },
        gapY: {
            type: Number | String,
            default: 0
        },
    },

    computed: {
        computedCols() {
            let populate = (obj) => {
                let out = ''
                if(typeof obj == 'number'){
                    for(let i = 0; i < obj; i++){
                        out = out + '1fr '
                    }
                }
                return out
            }

            if(this.breakpointPhone) return populate(this.cols[3])
            else if(this.breakpointTablet) return populate(this.cols[2])
            else if(this.breakpointScreen) return populate(this.cols[1])
            else return populate(this.cols[0])
        },

        computedGap(){
            let out = [this.gap, this.gap]
            if(this.gapX) out[0] = this.gapX
            if(this.gapY) out[1] = this.gapY
            return out[0] + 'px ' + out[1] + 'px'
        },

    },
};
</script>