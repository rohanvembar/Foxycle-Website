import Vue from "vue";
import Vuex, { MutationTree, ActionTree } from "vuex";

import { iUser } from "@/models/user.interface";

Vue.use(Vuex);

interface iRootState {
  userToken: string | null;
  userId: number | null;
  itemids: number[];
}

interface iLoginPayload {
  token: string;
  userid: number;
}

const state: iRootState = {
  userToken: null,
  userId: null,
  itemids: []
};

const mutations: MutationTree<iRootState> = {
  login(state, payload: iLoginPayload) {
    state.userToken = payload.token;
    state.userId = payload.userid;
  },
  logout(state) {
    state.userToken = null;
    state.userId = null;
  },
  cart(state, id) {
    state.itemids.push(id);
  }
};

const actions: ActionTree<iRootState, iRootState> = {};

export default new Vuex.Store({
  state,
  mutations,
  actions
});
