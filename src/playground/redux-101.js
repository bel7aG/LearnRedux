import { createStore } from 'redux';

const incrementCount = (payload = {}) => ({
  type: 'INCREMENT',
  incrementBy: typeof(payload.incrementBy) === 'number' ? payload.incrementBy : 1
});

const decrementCount = ({ decrementBy = 1} = {}) => ({ //DISTRUCTURING
  type: 'DECREMENT',
  decrementBy
});

const countReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        count: state.count + action.incrementBy
      };
    case 'DECREMENT':
      return {
        count: state.count - action.decrementBy
      };
    default:
      return {
        count: state.count
      }
  }
};

const store = createStore(countReducer);
const unsubscibe = store.subscribe(() => {
  console.log(store.getState());
})

store.dispatch(incrementCount({ incrementBy: 10 }));
store.dispatch(incrementCount({ incrementBy: 20 }));
store.dispatch(incrementCount({ incrementBy: 2 }));

store.dispatch(decrementCount({ decrementBy: 111 }));
store.dispatch(decrementCount({ decrementBy: 330 }));












// import { createStore } from 'redux';
//
// const store = createStore((state = { count: 0 }, action) => {
//
//   switch (action.type) {
//     case 'INCREMENT':
//       const incrementBy = isNaN(action.incrementBy) ? 1 : action.incrementBy;
//       return {
//         count: state.count + action.incrementBy
//       };
//     case 'DICREMENT':
//       const dicrementBy = typeof(action.dicrementBy) === 'number' ? action.dicrementBy : 1;
//       return {
//         count: state.count - dicrementBy
//       };
//     case 'RESET':
//         return {
//           count: 0
//         };
//     default:
//         return state;
//   }
//
//   console.log('running');
//   return state;
// });
//
// console.log(store);
// console.log(store.getState());
//
// const unsubscribe = store.subscribe(() => {
//   console.log(store.getState());
// });
//
// store.dispatch({
//   type: 'INCREMENT',
//   incrementBy: 5
// });
//
// store.dispatch({
//   type: 'DICREMENT',
//   dicrementBy: 99
// });
//
// unsubscribe();
//
// store.dispatch({
//   type: 'RESET',
// });
//
// store.dispatch({
//   type: 'DICREMENT',
//   dicrementBy: "99"
// });
//
//
//
//
//
//
//
//
//
//
//
//
//
// // import { createStore } from 'redux';
// //
// // const store = createStore((state = { count: 0 }, action) => {
// //   console.log('running');
// //   switch (action.type) {
// //     case 'INCREMENT':
// //       const incrementBy = isNaN(action.incrementBy) ? 1 : action.incrementBy;
// //       action.incrementBy = incrementBy;
// //       return {
// //         count: state.count + action.incrementBy
// //       };
// //     case 'DICREMENT':
// //       const dicrementBy = typeof(action.dicrementBy) === "number" ? dicrementBy : 1
// //       return {
// //         count: state.count - action.dicrementBy
// //       };
// //     default:
// //       return state
// //   }
// //
// // });
// //
// // store.subscribe(() => {
// //   console.log();
// // })
// //
// // store.dispatch({
// //   type: 'INCREMENT',
// //   incrementBy: 10
// // });
// //
// // store.dispatch({
// //   type: 'INCREMENT',
// //   incrementBy: 10
// // });
// //
// // store.dispatch({
// //   type: 'INCREMENT',
// //   incrementBy: 10
// // });
// //
// // store.dispatch({
// //   type: 'DICREMENT',
// //   dicrementBy: 5
// // });
// //
// //
// //
// // //
// // // import { createStore } from 'redux';
// // // import React from 'react';
// // //
// // //
// // // const store = createStore((state = {count: 0}, action) => {
// // //   console.log('running');
// // //   switch (action.type) {
// // //     case 'INCREMENT':
// // //       const incrementBy = isNaN(action.incrementBy) ? 1 : action.incrementBy;
// // //       action.incrementBy = incrementBy;
// // //       return {
// // //         count: state.count + action.incrementBy
// // //       };
// // //     case 'DICREMENT':
// // //       const decrementBy = typeof(action.decrementBy) === 'number' ? action.decrementBy : -1;
// // //       action.decrementBy = decrementBy;
// // //         return {
// // //           count: state.count - decrementBy
// // //         };
// // //     case 'RESET':
// // //           return {
// // //             count: 0
// // //           };
// // //     default:
// // //         return state;
// // //   }
// // // });
// // //
// // // store.subscribe(() => {
// // //   console.log(store.getState());
// // // });
// // //
// // //
// // // console.log(store.getState()); // hédhi lowla running tét3ada jawha béhy
// // // console.log(store.getState()); // hédhy 7ata ki na3ytelha él fonction matekhdemech just tatini el current state éli héya 0
// // //
// // //   // Hadhéka aléch fama él Actions f Redux
// // //
// // // // Actions
// // // store.dispatch({
// // //   type: 'INCREMENT',
// // //   incrementBy: 53
// // // });
// // //
// // //
// // // // console.log(store.getState()); //tawa lahné él fonction tékhdém running because fama Action using dispatch
// // //
// // // store.dispatch({
// // //   type: 'DICREMENT',
// // //   decrementBy: 1000
// // // });
// // //
// // //
// // // store.dispatch({
// // //   type: 'RESET'
// // // });
// // //
// // //
// // // store.dispatch({
// // //   type: 'DICREMENT'
// // // });
// // //
// // //
// // // export default store;
