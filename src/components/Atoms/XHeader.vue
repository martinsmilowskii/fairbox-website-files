<template lang="pug">

    component(
        :is="htmlTag"
        :style="style"
    )
        slot

</template>

<script>
export default {
    name: "x-header",

    computed: {
        computedFontSize() {
            let fontSize = 0;

            if(this.fontSize) return this.fontSize

            if(this.medium) {
                if(this.breakpointPhone) fontSize = 32;
                else if(!this.breakpointPhone) fontSize = 40;
            }

            return fontSize;
        },

        htmlTag() {
            return this.tag;
        },

        style() {
            return {
                display: "block",
                letterSpacing: "0.01em",
                color: this.color,
                fontWeight: this.weight,
                fontSize: this.computedFontSize + "px",
                lineHeight: 1.4
            };
        }
    },

    props: {
        medium: Boolean,
        fontSize: [String, Number],

        color: String,

        tag: {
            type: String,
            default: "h1"
        },

        weight: {
            type: Number | String,
            default: 300
        }
    }
};
</script>