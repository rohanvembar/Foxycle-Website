import Vue from "vue";
import Vuex, { MutationTree, ActionTree } from "vuex";

import { iUser } from "@/models/user.interface";
import { iShopItem } from "@/models/shopitem.interface";

Vue.use(Vuex);

interface iRootState {
  userToken: string | null;
  userId: number | null;
  items: iShopItem[];
  userRole: number;
}

interface iLoginPayload {
  token: string;
  userid: number;
}

const state: iRootState = {
  userToken: null,
  userId: null,
  items: [],
  userRole: 0
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
    state.items.push(id);
  },
  changeRole(state, newRole) {
    state.userRole = newRole;
  }
};

const actions: ActionTree<iRootState, iRootState> = {};

export default new Vuex.Store({
  state,
  mutations,
  actions
});
