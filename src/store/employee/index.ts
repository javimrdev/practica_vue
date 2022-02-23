import {ActionContext, Module, MutationTree, ActionTree, GetterTree} from 'vuex';

type EmployeeListState = {
    company: string;
}

enum EmployeListMutationsEnums {
    SET_COMPANY = 'SET_COMPANY'
}

export enum EmployeListActionsEnums {
    SET_COMPANY = 'SET_COMPANY'
}

const state: EmployeeListState = {
    company: ''
}

type EmployeeListMutations<S=EmployeeListState> = {
    [EmployeListMutationsEnums.SET_COMPANY]: (state: S, payload: string)=>void;
}

const mutations: MutationTree<EmployeeListState> & EmployeeListMutations = {
    [EmployeListMutationsEnums.SET_COMPANY]: (state: EmployeeListState, payload: string) => {
        state.company = payload;
    }
}

type EmployeeListActions<S=EmployeeListState> = {
    [EmployeListActionsEnums.SET_COMPANY]: ({commit}: ActionContext<S,unknown>, payload: string) => void;
}

const actions: ActionTree<EmployeeListState, unknown> & EmployeeListActions = {
    [EmployeListActionsEnums.SET_COMPANY]: ({commit}: ActionContext<EmployeeListState, unknown>, payload: string) => {
        commit(EmployeListMutationsEnums.SET_COMPANY, payload);
    }
}

type EmployeeListGetters = {
    company: (state: EmployeeListState) => string;
}

const getters: GetterTree<EmployeeListState, unknown> & EmployeeListGetters= {
    company: (state:EmployeeListState) => state.company
}


const EmployeeModule: Module<EmployeeListState, unknown> = {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}

export default EmployeeModule