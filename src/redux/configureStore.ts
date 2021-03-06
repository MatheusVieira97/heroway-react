import * as Redux from 'redux';
import * as ReduxDevtools from 'redux-devtools-extension';

import thunk from 'redux-thunk';

import todosReducer from './reducers/todos';
import counterReducer from './reducers/counter';
import heroesReducer from './reducers/heroes';

// Gera nosso state através de nossos reducers
const state = Redux.combineReducers({
  todosReducer: todosReducer, // pode ser potato: todosReducer " Pode "
  counterReducer: counterReducer,
  heroesReducer: heroesReducer,
});

export type IAppState = ReturnType<typeof state>;


// Gera nossa store
const store = Redux.createStore(
  state,
  ReduxDevtools.composeWithDevTools(
    Redux.applyMiddleware(thunk)
  ) // enhancers // para usar no navegador
);

// exporta nossa store para ser utilizado no arquivo Root.tsx
export default store;