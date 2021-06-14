import APIMETHODS from "../js/api-methods";
import { getFormDataFromObject, isObjEmpty, sortArrayByObjProps } from "../js/helper";

export default {
  state: () => ({
    AllSolutionStats: [],
    Products: [],
    ActivatedInPastPeriod: [],
    ActivatedPerDay: [],
    UsageOverview: [],
    AllSimsStates: [],
  }),
  mutations: {
    SET_ALL_SOLUTION_STATS(state, data) {
      state.AllSolutionStats = data
    },
    SET_PRODUCTS(state, data) {
      state.Products = data
    },
    SET_ACTIVATED_IN_PAST_PERIOD(state, data) {
      state.ActivatedInPastPeriod = data
    },
    SET_ACTIVATED_PER_DAY(state, data) {
      state.ActivatedPerDay = data
    },
    SET_USAGE_OVERVIEW(state, data) {
      state.UsageOverview = data
    },
    SET_ALL_SIMS_STATES(state, data) {
      state.AllSimsStates = data
    },
  },
  getters: {
    AllSolutionStats: s => s.AllSolutionStats,
    Products: s => s.Products,
    ActivatedInPastPeriod: s => s.ActivatedInPastPeriod,
    ActivatedPerDay: s => s.ActivatedPerDay,
    UsageOverview: s => s.UsageOverview,
    AllSimsStates: s => s.AllSimsStates,

  },
  actions:{
    async GET_DASHBOARD({commit, dispatch, rootState}, query){
      try {
        let data = getFormDataFromObject(query)
        let response = await fetch(APIMETHODS.GET_DASHBOARD, {
          method: "POST",
          body: data
        });

        response = await response.json();
        //console.log(response)
        if(response.MajorCode === '000' && !isObjEmpty(response.Data)){
          commit('SET_MAJOR_TOKEN', query.MajorToken)
          commit('SET_MINOR_TOKEN', query.MinorToken)
          if (query.MajorToken === rootState.RootToken){
            commit('SET_IS_ROOT', true)
          }

          commit('SET_CREDITS', response.Data.Credits ? response.Data.Credits : 0)
          commit('SET_ALL_SOLUTION_STATS', response.Data.Total.length ? response.Data.Total : [])
          commit('SET_PRODUCTS', response.Data.Products.length ? sortArrayByObjProps(response.Data.Products, [{prop: 'Name', direction: 1}]) : [])
          commit('SET_ACTIVATED_IN_PAST_PERIOD', response.Data.Past14days.length ? response.Data.Past14days : [])
          commit('SET_ACTIVATED_PER_DAY', response.Data.Daily.length ? response.Data.Daily : [])
          commit('SET_ALL_SIMS_STATES', response.Data.Sims.length ? sortArrayByObjProps(response.Data.Sims, [{prop: 'SimStatus', direction: 1}]) : [])
          commit('SET_AUTH_STATE', true)

          return response.Data
        }else{
          response.method = 'GET_DASHBOARD';
          commit('SET_ERROR', response)
          return false
        }
      } catch (e) {
        if(e && e.response && e.response.data) e.response.data.method = 'GET_DASHBOARD';
        commit('SET_ERROR',  !e.response ? e : (!e.response.data) ? e.response : e.response.data)
        throw e
      }
    },
    async GET_TOP_USAGE({commit}, query){
      try {
        /*var qs = require('qs');
        let data = qs.stringify(query)
        let response = await fetch(APIMETHODS.GET_TOP_USAGE, {
          method: "POST",
          body: data,
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        });*/
        let data = getFormDataFromObject(query)
        let response = await fetch(APIMETHODS.GET_TOP_USAGE, {
          method: "POST",
          body: data,
        });
        response = await response.json();

        if(Array.isArray(response)){
          return response
        }else{
          response.method = 'GET_TOP_USAGE';
          commit('SET_ERROR', response)
          return false
        }
        //console.log(response)

      } catch (e) {
        if(e && e.response && e.response.data) e.response.data.method = 'GET_TOP_USAGE';
        commit('SET_ERROR',  !e.response ? e : (!e.response.data) ? e.response : e.response.data)
        throw e
      }
    },
    async GET_USAGE_OVERVIEW({commit}, query){
      try {
        let data = getFormDataFromObject(query)
        let response = await fetch(APIMETHODS.GET_USAGE_OVERVIEW, {
          method: "POST",
          body: data,
        });
        response = await response.json();

        //console.log(response)
        if(response.MajorCode === '000'){
          commit('SET_USAGE_OVERVIEW', response.Data ? response.Data : {})
          return response.Data

        }else{
          response.method = 'GET_USAGE_OVERVIEW';
          commit('SET_ERROR', response)
          return false
        }
      } catch (e) {
        if(e && e.response && e.response.data) e.response.data.method = 'GET_TOP_USAGE';
        commit('SET_ERROR',  !e.response ? e : (!e.response.data) ? e.response : e.response.data)
        throw e
      }
    },

  }
}