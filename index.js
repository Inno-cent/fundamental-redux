const redux = require('redux')
const reduxLogger = require('redux-logger')


const logger = reduxLogger.createLogger()
const createStore = redux.createStore
const combineReducer = redux.combineReducers
const applyMiddleware = redux.applyMiddleware


const BUY_CAKE = "BUY_CAKE";
const BUY_ICECREAM = "BUY_ICECREAM";

function buyCake(){
    return {
        type: BUY_CAKE,
        info: 'First redux action'
    }
}

function buyIcecream(){
    return {
      type: BUY_ICECREAM,
    };
}

const initialCakeState = {
    numOfCakes: 10
}

const initialIcecreamState = {
  numOfIcecream: 20,
};

const cakeReducer = (state = initialCakeState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1,
      };

    default:
      return state;
  }
};

const icecremReducer = (state = initialIcecreamState, action) => {
  switch (action.type) {
    case BUY_ICECREAM:
      return {
        ...state,
        numOfIcecream: state.numOfIcecream - 1,
      };

    default:
      return state;
  }
};


const rootReducer = combineReducer({
    cake: cakeReducer,
    IceCream: icecremReducer
})

const store = createStore(rootReducer,applyMiddleware(logger));
console.log('initial state', store.getState())
const unsubscribe = store.subscribe(()=>{})
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyIcecream());
store.dispatch(buyIcecream());
unsubscribe()