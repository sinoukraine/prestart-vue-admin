//import Vue from 'vue'
//import VueI18n from 'vue-i18n'
import { createI18n } from 'vue-i18n'
import axios from 'axios'
import store from "@/store/store";
import messages from '@/locales/en'

//Vue.use(VueI18n)

export const i18n = createI18n({
  /*locale: process.env.VUE_APP_I18N_LOCALE || 'en',
  fallbackLocale: process.env.VUE_APP_I18N_FALLBACK_LOCALE || 'en',*/
  locale: 'en',
  fallbackLocale: 'en',

  messages: {'en': messages}
  //messages: {'en2': {}}
})

const loadedLanguages = ['en'] // our default language that is preloaded

function setI18nLanguage (lang) {
  i18n.locale = lang
  axios.defaults.headers.common['Accept-Language'] = lang
  document.querySelector('html').setAttribute('lang', lang)
  return lang
}

export async function loadLanguageAsync(lang='en') {
  // If the same language
    if (i18n.locale === lang) {
      setI18nLanguage(lang)
      return true
   }

   // If the language was already loaded
   if (loadedLanguages.includes(lang)) {
      setI18nLanguage(lang)
      return true
   }

   /*if(localStorage[lang]){
     i18n.setLocaleMessage(lang, JSON.parse(localStorage[lang]))
     loadedLanguages.push(lang)
     setI18nLanguage(lang)
     return true
   }*/

   try {
     const response = await axios.get('/locales/'+lang);
     console.log(response)
     /*if(response.data.MajorCode !== '001' && response.data.MajorCode !== '004'){
       i18n.setLocaleMessage(lang, response.data[lang.toUpperCase()])
       loadedLanguages.push(lang)
       setI18nLanguage(lang)
       localStorage.setItem(lang, JSON.stringify(response.data[lang.toUpperCase()]))
       return true
     }else{
       store.commit('app/SET_API_VALIDATION_ERROR', response.data)
       return false
     }*/
   } catch (e) {
     store.commit('app/SET_ERROR', e)
     //commit('SET_ERROR', e)
     throw e
   }
}
