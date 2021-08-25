import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            light: {
                primary: '#020203'
            },
        },
    },
    breakpoint: {
        thresholds: {
            xs: 576,
            sm: 768,
            md: 992,
            lg: 1200,
            xl: 1600,
        },
        scrollBarWidth: 0,
      },
});
