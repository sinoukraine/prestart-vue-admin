import dashboard from './dashboard'
import credits from './credits'
import simManage from './sim-manage'
import { createStore } from "vuex"
import {getFormDataFromObject, isObjEmpty} from "../js/helper";
import APIMETHODS from "../js/api-methods";
import axios from "axios";

const store = createStore({
  state: {
    IS_LOGGED_IN: false,
    IS_ROOT: false,
    ERROR: null,
    //API_VALIDATION_ERROR: null,
    UserInfo: {},
    MajorToken: '',
    MinorToken: '',
    RootToken: '00000000-0000-0000-0000-000000000000',

  },
  mutations: {
    SET_ERROR(state, error) {
      state.ERROR = error
    },
    CLEAR_ERROR(state) {
      state.ERROR = null
    },


    SET_USER_INFO(state, info){
      state.UserInfo = info;
      //localStorage.USERINFO = JSON.stringify(info);
    },
    CLEAR_USER_INFO(state){
      state.UserInfo = {};
      localStorage.clear();
    },

    SET_AUTH_STATE(state, auth){
      state.IS_LOGGED_IN = auth
    },
    SET_IS_ROOT(state, isRoot){
      state.IS_ROOT = isRoot
    },
    SET_MAJOR_TOKEN(state, token){
      state.MajorToken = token
    },
    SET_MINOR_TOKEN(state, token){
      state.MinorToken = token
    },

  },
  getters: {
    ERROR: s => s.ERROR,
    //API_VALIDATION_ERROR: s => s.API_VALIDATION_ERROR,
    IS_LOGGED_IN: s => s.IS_LOGGED_IN,
    IS_ROOT: s => s.IS_ROOT,

    UserInfo: s => s.UserInfo,

    MajorToken: s => s.MajorToken,
    MinorToken: s => s.MinorToken,
    RootToken: s => s.RootToken,

  },
  actions: {
    async GET_USER_INFO({commit}, query){
      try {
        let data = new URLSearchParams(query).toString()
        let response = await fetch(APIMETHODS.GET_USER_INFO+'?'+data );
        response = await response.json();
        const getLanguage = () => navigator.userLanguage || (navigator.languages && navigator.languages.length && navigator.languages[0]) || navigator.language || navigator.browserLanguage || navigator.systemLanguage || 'en';

        if(response.MajorCode === '000' && !isObjEmpty(response.Data)){
          response.Data.Locale = getLanguage()
          commit('SET_USER_INFO', response.Data)

          return response.Data
        }else{
          response.method = 'GET_USER_INFO';
          commit('SET_ERROR', response)
          return false
        }
      } catch (e) {
        if(e && e.response && e.response.data) e.response.data.method = 'GET_USER_INFO';
        commit('SET_ERROR',  !e.response ? e : (!e.response.data) ? e.response : e.response.data)
        throw e
      }
    },
    async QUERY_CUSTOMERS({commit}, query){
      try {
        let data = getFormDataFromObject(query)
        let response = await fetch(APIMETHODS.QUERY_CUSTOMERS, {
          method: "POST",
          body: data,
        });
        response = await response.json();
        if(response.MajorCode === '000'){
          return response.Data
        }else{
          response.method = 'QUERY_CUSTOMERS';
          commit('SET_ERROR', response)
          return false
        }
      } catch (e) {
        if(e && e.response && e.response.data) e.response.data.method = 'QUERY_CUSTOMERS';
        commit('SET_ERROR',  !e.response ? e : (!e.response.data) ? e.response : e.response.data)
        throw e
      }
    },
    async GET_ASSET_LOCATION({commit}, query){
      try {
        var qs = require('qs');
        let data = qs.stringify(query)
        let response = await fetch(APIMETHODS.GET_ASSET_LOCATION, {
          method: "POST",
          body: data,
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        });
        /*let data = getFormDataFromObject(query)
        let response = await fetch(APIMETHODS.GET_ASSET_LOCATION, {
          method: "POST",
          body: data,
        });*/
        response = await response.json();
        if(response.MajorCode === '000'){
          return response.Data
        }else{
          response.method = 'GET_ASSET_LOCATION';
          commit('SET_ERROR', response)
          return false
        }
      } catch (e) {
        if(e && e.response && e.response.data) e.response.data.method = 'GET_ASSET_LOCATION';
        commit('SET_ERROR',  !e.response ? e : (!e.response.data) ? e.response : e.response.data)
        throw e
      }
    },
    async GET_ADDRESS_BY_COORDS({commit}, params){
      let data = {
        format: 'json',
        addressdetails: '1',
        lat: params.latitude,
        lon: params.longitude,
      }
      try {
        const response = await axios.get(APIMETHODS.GET_ADDRESS_BY_COORDS, {
          params: data,
          //headers: { 'Content-Type': 'application/json' }
        });
        return response.data
      } catch (e) {
        /*commit('SET_ERROR', e)
        throw e*/
        if(e && e.response && e.response.data) e.response.data.method = 'GET_ADDRESS_BY_COORDS';
        commit('SET_ERROR',  !e.response ? e : (!e.response.data) ? e.response : e.response.data)
        throw e
      }
    },
    /*async GET_SMS_HISTORY({commit}, query){
      try {
        var qs = require('qs');
        let data = qs.stringify(query)
        let response = await fetch(APIMETHODS.GET_SMS_HISTORY, {
          method: "POST",
          body: data,
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        });
        /!*let data = getFormDataFromObject(query)
        let response = await fetch(APIMETHODS.GET_SMS_HISTORY, {
          method: "POST",
          body: data,
        });*!/
        response = await response.json();
        if(response.MajorCode === '000'){
          return response.Data
        }else{
          response.method = 'GET_SMS_HISTORY';
          commit('SET_ERROR', response)
          return false
        }
      } catch (e) {
        if(e && e.response && e.response.data) e.response.data.method = 'GET_SMS_HISTORY';
        commit('SET_ERROR',  !e.response ? e : (!e.response.data) ? e.response : e.response.data)
        throw e
      }
    },*/


  },
  modules: {
    //user,

    dashboard,
    credits,
    simManage
  }
})

export default store