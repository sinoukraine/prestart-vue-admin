//import { getFormDataFromObject, isObjEmpty } from "../js/helper";
import {getFormDataFromObject} from "../js/helper";
import APIMETHODS from "../js/api-methods";

export default {
  state: () => ({
    SimCommands: []
  }),
  mutations: {
    SET_SIM_COMMANDS(state, items){
      state.SimCommands = items
    },
  },
  getters: {
    SimCommands: s => s.SimCommands,

  },
  actions:{
    async GET_SMS_HISTORY({commit, rootState }, query){
      try {
        let data = getFormDataFromObject(query)
        let response = await fetch(APIMETHODS.GET_SMS_HISTORY, {
          method: "POST",
          body: data,
          headers: {
            'token': rootState.RootToken
          }
        });
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
    },
    async SIM_SET_SUSPEND({commit, rootState }, query){
      try {
        let data = getFormDataFromObject(query)
        let response = await fetch(APIMETHODS.SIM_SET_SUSPEND, {
          method: "POST",
          body: data,
          headers: {
            'token': rootState.RootToken
          }
        });
        response = await response.json();
        if(response.MajorCode === '000'){
          return response.Data
        }else{
          response.method = 'SIM_SET_SUSPEND';
          commit('SET_ERROR', response)
          return false
        }
      } catch (e) {
        if(e && e.response && e.response.data) e.response.data.method = 'SIM_SET_SUSPEND';
        commit('SET_ERROR',  !e.response ? e : (!e.response.data) ? e.response : e.response.data)
        throw e
      }
    },
    async SIM_SET_RESUME({commit, rootState }, query){
      try {
        let data = getFormDataFromObject(query)
        let response = await fetch(APIMETHODS.SIM_SET_RESUME, {
          method: "POST",
          body: data,
          headers: {
            'token': rootState.RootToken
          }
        });
        response = await response.json();
        if(response.MajorCode === '000'){
          return response.Data
        }else{
          response.method = 'SIM_SET_RESUME';
          commit('SET_ERROR', response)
          return false
        }
      } catch (e) {
        if(e && e.response && e.response.data) e.response.data.method = 'SIM_SET_RESUME';
        commit('SET_ERROR',  !e.response ? e : (!e.response.data) ? e.response : e.response.data)
        throw e
      }
    },
    async SIM_SET_TERMINATE({commit, rootState }, query){
      try {
        let data = getFormDataFromObject(query)
        let response = await fetch(APIMETHODS.SIM_SET_TERMINATE, {
          method: "POST",
          body: data,
          headers: {
            'token': rootState.RootToken
          }
        });
        response = await response.json();
        if(response.MajorCode === '000'){
          return response.Data
        }else{
          response.method = 'SIM_SET_TERMINATE';
          commit('SET_ERROR', response)
          return false
        }
      } catch (e) {
        if(e && e.response && e.response.data) e.response.data.method = 'SIM_SET_TERMINATE';
        commit('SET_ERROR',  !e.response ? e : (!e.response.data) ? e.response : e.response.data)
        throw e
      }
    },
    async SIM_REPLACE({commit}, query){
      try {
        let data = new URLSearchParams(query).toString()
        let response = await fetch(APIMETHODS.SIM_REPLACE+'?'+data );
        response = await response.json();
        if(response.MajorCode === '000'){
          return response.Data
        }else{
          response.method = 'SIM_REPLACE';
          commit('SET_ERROR', response)
          return false
        }
      } catch (e) {
        if(e && e.response && e.response.data) e.response.data.method = 'SIM_REPLACE';
        commit('SET_ERROR',  !e.response ? e : (!e.response.data) ? e.response : e.response.data)
        throw e
      }
    },
    async SIM_GET_COMMANDS({commit}, query){
      try {
        let data = new URLSearchParams(query).toString()
        let response = await fetch(APIMETHODS.SIM_GET_COMMANDS+'?'+data );
        /*let data = getFormDataFromObject(query)
        let response = await fetch(APIMETHODS.SIM_GET_COMMANDS, {
          method: "POST",
          body: data,
        });*/
        response = await response.json();
        if(response && Array.isArray(response) && response.length){
          commit('SET_SIM_COMMANDS', response)
          return response
        }else{
          return []
        }

        /*if(response.MajorCode === '000'){
          return response.Data
        }else{
          response.method = 'SIM_GET_COMMANDS';
          commit('SET_ERROR', response)
          return false
        }*/
      } catch (e) {
        if(e && e.response && e.response.data) e.response.data.method = 'SIM_GET_COMMANDS';
        commit('SET_ERROR',  !e.response ? e : (!e.response.data) ? e.response : e.response.data)
        throw e
      }
    },
    async SIM_SEND_COMMAND({commit}, query){
      try {
        /*let data = new URLSearchParams(query).toString()
        let response = await fetch(APIMETHODS.SIM_SEND_COMMAND+'?'+data );*/
        /*let data = getFormDataFromObject(query)*/
        var qs = require('qs');
        let data = qs.stringify(query)
        let response = await fetch(APIMETHODS.SIM_SEND_COMMAND, {
          method: "POST",
          body: data,
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        });
        response = await response.json();
        if(response.MajorCode === '000'){
          return response.Data
        }else{
          response.method = 'SIM_SEND_COMMAND';
          commit('SET_ERROR', response)
          return false
        }
      } catch (e) {
        if(e && e.response && e.response.data) e.response.data.method = 'SIM_SEND_COMMAND';
        commit('SET_ERROR',  !e.response ? e : (!e.response.data) ? e.response : e.response.data)
        throw e
      }
    },
  }
}