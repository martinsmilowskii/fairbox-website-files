import Vue from 'vue'

const breakpoints = {

    computed: {
        breakpointBigScreen(){
            return this.$vuetify.breakpoint.xl || this.breakpointScreen
        },

        breakpointScreen(){
            return this.$vuetify.breakpoint.lg || this.breakpointTablet
        },

        breakpointTablet(){
            return this.$vuetify.breakpoint.md || this.breakpointPhone
        },

        breakpointPhone(){
            return this.$vuetify.breakpoint.sm || this.$vuetify.breakpoint.xs
        },
    },

}

Vue.mixin(breakpoints)