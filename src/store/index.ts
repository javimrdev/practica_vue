import {createStore} from 'vuex';
import EmployeeModule from './employee';

export default createStore({
    modules: {
        EmployeeModule: EmployeeModule
    }
})