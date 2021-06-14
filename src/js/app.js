// Import Vue
import { createApp } from 'vue';
import store from '../store/store'
import { createI18n } from 'vue-i18n'
import messages from '@/locales/en'
import { createWebHistory, createRouter } from "vue-router";

//import {i18n} from './i18n'
/*import { defineRule } from 'vee-validate';
import { required, email, min } from '@vee-validate/rules';

defineRule('required', required);
defineRule('email', email);
defineRule('min', min);*/
// Import Framework7
import Framework7 from 'framework7/lite-bundle';

// Import Framework7-Vue Plugin
import Framework7Vue, { registerComponents } from 'framework7-vue/bundle';
import PrimeVue from 'primevue/config';


import VueNumerals from 'vue-numerals';

// Import Framework7 Styles
import 'framework7/framework7-bundle.css';

// Import Icons and App Custom Styles
import "primeflex/primeflex.css";
import 'primevue/resources/themes/saga-blue/theme.css'       //theme
import 'primevue/resources/primevue.min.css'                 //core css
import 'primeicons/primeicons.css'                          //icons
import "leaflet/dist/leaflet.css";

import '../css/icons.css';
import '../css/helpers.scss';
import '../css/app.scss';

// Import App Component

import App from '../components/app.vue';

// Init Framework7-Vue Plugin
Framework7.use(Framework7Vue);

// Init App
const app = createApp(App);
//app.use(VueRouter)

import routes from '../js/routes.js';

const router = createRouter({
  history: createWebHistory('/'),
  routes,  
  linkActiveClass: 'active'
})


const i18n = createI18n({
  /*locale: process.env.VUE_APP_I18N_LOCALE || 'en',
  fallbackLocale: process.env.VUE_APP_I18N_FALLBACK_LOCALE || 'en',*/
  locale: 'en',
  fallbackLocale: 'en',

  messages: {'en': messages}
  //messages: {'en2': {}}
})

// Register Framework7 Vue components
registerComponents(app);

app.use(PrimeVue);
app.use(store)
// with options
app.use(VueNumerals, {
  locale: 'en'
});
app.use(i18n)
app.use(router).mount('#app');
/*app.use(i18n)*/

// Mount the app
