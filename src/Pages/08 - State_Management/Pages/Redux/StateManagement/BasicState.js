/* TESTING NOTE : command 'node thisFile.js' in cmd terminal */

//inital
const redux = require('redux');
const createStore = redux.createStore;
const defautState = { id: -1, name: "test", value: 0, data: [] };


//Reducer
const rootReducer = (state = defautState, action) => {
  switch (action.type) {
    case 'SET_ID':
      return { ...state, id: action.value }

    case 'SET_NAME':
      return { ...state, name: action.name }

    case 'INCREMENT_VALUE':
      return { ...state, value: state.value++ }

    case 'ADD_DATA':
      return { ...state, data: [...state.data, action.newData] }

    default:
      return state
  }
}

//Store
const store = createStore(rootReducer);

//Subscription
store.subscribe(()=>{
  //do something when store is changed
  console.log("Store Changed : ", store.getState());
});

//Dispatch
console.log(store.getState());
store.dispatch({ type: "SET_ID", value: 1 });
store.dispatch({ type: "SET_NAME", name: "Data Anggota" });
store.dispatch({ type: "ADD_DATA", newData: "Rangga" });
store.dispatch({ type: "ADD_DATA", newData: "Fasya" });
console.log(store.getState());

