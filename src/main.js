import Vue from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import {
  faPhone,
  faEnvelope,
  faBaby,
  faCalendarAlt,
  faGlobeAsia,
} from '@fortawesome/free-solid-svg-icons';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

import App from './App.vue';

library.add(
  faPhone,
  faEnvelope,
  faBaby,
  faCalendarAlt,
  faLinkedinIn,
  faGlobeAsia,
);

Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');
