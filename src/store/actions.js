import Vue from 'vue'

export const getVacations = ({commit, state}) => {
  return Vue.axios.get(`${state.localPath}vacations?include=dates,user`)
    .then(
      (response) => {
        commit('setVacations', response.data.data)
      }
    )
}

export const getTotalVacations = ({commit, state}) => {
  return Vue.axios.get(`${state.localPath}vacations/total`)
    .then(
      (response) => {
        commit('setTotalVacations', response.data.data)
      }
    )
}

export const approveVacation = ({commit, state, dispatch}, id) => {
  return Vue.axios.put(`${state.localPath}vacations/approve/${id}`).then(
    (response) => {
      dispatch('getVacations');
    }
  );
}

export const disapproveVacation = ({commit, state, dispatch}, id) => {
  return Vue.axios.put(`${state.localPath}vacations/disapprove/${id}`).then(
    (response) => {
      dispatch('getVacations');
    }
  );
}

