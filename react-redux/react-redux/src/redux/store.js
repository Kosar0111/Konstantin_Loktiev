import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';
import reduxLogger from 'redux-logger';
import rootReducers from './modules'


const configStore = (reducers = {}, preloadedState = {}, middleweres = []) => createStore(
    combineReducers({
        ...rootReducers,
        ...reducers
    }),
    preloadedState,
    compose(
        applyMiddleware(
            ...middleweres,
            thunk,
            reduxLogger
        ),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
)

export default configStore;