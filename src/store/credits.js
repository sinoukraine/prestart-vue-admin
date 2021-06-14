//import { getFormDataFromObject, isObjEmpty } from "../js/helper";
import {getFormDataFromObject} from "../js/helper";
import APIMETHODS from "../js/api-methods";

export default {
  state: () => ({
    Credits: 0,
  }),
  mutations: {
    SET_CREDITS(state, credits){
      state.Credits = credits
    }
  },
  getters: {
    Credits: s => s.Credits,

  },
  actions:{
    async CREATE_CREDITS_PAYMENT({commit}, query){
      try {
        let response = await fetch(APIMETHODS.CREATE_CREDITS_PAYMENT, {
          method: "POST",
          body: JSON.stringify(query)
        })
        response = await response.json();

        if(response.error){
          response.method = 'CREATE_CREDITS_PAYMENT';
          commit('SET_ERROR', response)
          return false
        }else{
          return response
        }
      } catch (e) {
        if(e && e.response && e.response.data) e.response.data.method = 'CREATE_CREDITS_PAYMENT';
        commit('SET_ERROR',  !e.response ? e : (!e.response.data) ? e.response : e.response.data)
        throw e
      }
    },

    async ADD_CREDITS({commit}, query){
      try {
        let response = await fetch(APIMETHODS.ADD_CREDITS, {
          method: "POST",
          body: JSON.stringify(query)
        })
        response = await response.json();

        if(response.MajorCode !== '000'){
          response.method = 'ADD_CREDITS';
          commit('SET_ERROR', response)
          return false
        }else{
          return response.Data
        }
      } catch (e) {
        if(e && e.response && e.response.data) e.response.data.method = 'ADD_CREDITS';
        commit('SET_ERROR',  !e.response ? e : (!e.response.data) ? e.response : e.response.data)
        throw e
      }
    },

    async CREDITS_TRANSFER({commit}, query){
      try {
        let data = getFormDataFromObject(query)
        let response = await fetch(APIMETHODS.CREDITS_TRANSFER, {
          method: "POST",
          body: data,
        });
        response = await response.json();

        console.log(response)
        if(response.MajorCode === '000'){
          return response.Data

        }else{
          response.method = 'CREDITS_TRANSFER';
          commit('SET_ERROR', response)
          return false
        }
      } catch (e) {
        if(e && e.response && e.response.data) e.response.data.method = 'CREDITS_TRANSFER';
        commit('SET_ERROR',  !e.response ? e : (!e.response.data) ? e.response : e.response.data)
        throw e
      }
    },

    async CREDITS_TRANSFER_HISTORY({commit}, query){
      try {
        let data = getFormDataFromObject(query)
        let response = await fetch(APIMETHODS.CREDITS_TRANSFER_HISTORY, {
          method: "POST",
          body: data,
        });
        response = await response.json();

        console.log(response)
        if(response.MajorCode === '000'){
          return response.Data

        }else{
          response.method = 'CREDITS_TRANSFER_HISTORY';
          commit('SET_ERROR', response)
          return false
        }
      } catch (e) {
        if(e && e.response && e.response.data) e.response.data.method = 'CREDITS_TRANSFER_HISTORY';
        commit('SET_ERROR',  !e.response ? e : (!e.response.data) ? e.response : e.response.data)
        throw e
      }
    },

  }
}