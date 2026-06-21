import { createApp } from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import {
  faPhone,
  faEnvelope,
  faBaby,
  faCalendarDays,
  faGlobeAsia,
} from '@fortawesome/free-solid-svg-icons';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

import App from './App.vue';

library.add(
  faPhone,
  faEnvelope,
  faBaby,
  faCalendarDays,
  faLinkedinIn,
  faGlobeAsia,
);

createApp(App)
  .component('font-awesome-icon', FontAwesomeIcon)
  .mount('#app');
