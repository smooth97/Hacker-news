import Vue from "vue";
import Vuex from "vuex";
import {
  fetchNewsList,
  fetchAskList,
  fetchJobsList,
  fetchUserInfo,
  fetchAskItem
} from "../api/index";
import { mutations } from "./mutations";
import { actions } from "./actions";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    news: [],
    ask: [],
    jobs: [],
    user: {},
    item: []
  },
  getters: {
    // = computed
    fetchedAsk(state) {
      return state.ask;
    },
    fetchedItem(state) {
      return state.item;
    }
  },
  mutations: {
    SET_NEWS(state, news) {
      state.news = news; // data 전달
    },
    SET_ASK(state, ask) {
      state.ask = ask;
    },
    SET_JOBS(state, jobs) {
      state.jobs = jobs;
    },
    SET_USER(state, user) {
      state.user = user;
    },
    SET_ITEM(state, item) {
      state.item = item;
    }
  },
  actions: {
    FETCH_NEWS(context) {
      fetchNewsList()
        .then(response => {
          context.commit("SET_NEWS", response.data);
        })
        .catch(error => console.log(error));
    },
    FETCH_ASK(context) {
      fetchAskList()
        .then(response => context.commit("SET_ASK", response.data))
        .catch(error => console.log(error));
    },
    FETCH_JOBS(context) {
      fetchJobsList()
        .then(response => context.commit("SET_JOBS", response.data))
        .catch(error => console.log(error));
    },
    FETCH_USER(context, name) {
      fetchUserInfo(name)
        .then(response => context.commit("SET_USER", response.data))
        .catch(error => console.log(error));
    },
    FETCH_ITEM(context, item) {
      fetchAskItem(item)
        .then(response => context.commit("SET_ITEM", response.data))
        .catch(error => console.log(error));
    }
  }
});
