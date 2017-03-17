import { applyMiddleware, combineReducers, createStore } from 'redux';
import { todoApp, visibilityFilters } from './reducers/actions';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import createLogger from 'redux-logger';

const logger = createLogger();
const reducers = combineReducers({
    todoApp,
    visibilityFilters
});
const middleware = [thunk, promise, logger];

export default (initialState = {}) => {
    return createStore(
        reducers,
        initialState,
        applyMiddleware(middleware));
}