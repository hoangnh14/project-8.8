import {combineReducers} from 'redux'
import listProduct from "../reducers/list";
import statistic from "../reducers/statistic";

export const rootReducer = combineReducers({
    listProduct,
    statistic

})
