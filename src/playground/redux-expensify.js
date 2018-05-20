import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

//ADD_EXPENSE
const addExpense = ({
  description = '',
  notes = '',
  amount = 0,
  createdAt = 0
}) => ({
  type: 'ADD_EXPENSE',
  expense: {
    id: uuid(),
    description,
    notes,
    amount,
    createdAt
  }
});

//REMOVE_EXPENSE
const removeExpense = ({ id } = {}) => ({
  type: 'REMOVE_EXPENSE',
  id
});

//EDIT_EXPENSE
const editExpense = (id, update) => ({
  type: 'EDIT_EXPENSE',
  id,
  update
});

//SET_TEXT_FILTER
const setTextFilter = (text = '') => ({
  type: 'SET_TEXT_FILTER',
  text
});

//SORT_BY_AMOUNT
const sortByAmount = () => ({
  type: 'SORT_BY_AMOUNT',
});

//SORT_BY_DATE
const sortByDate = () => ({
  type: 'SORT_BY_DATE'
});

//SORT_START_DATE
const startDate = (startDate = undefined) => ({
  type: 'SORT_START_DATE',
  startDate
});

//SORT_END_DATE
const endDate = (endDate = undefined) => ({
  type: 'SORT_END_DATE',
  endDate
});

//Expense Reducer
const expenseReducerDefaultState = [];
const expenseReducer = (state = expenseReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      return [
        ...state,
        action.expense
      ];
    case 'REMOVE_EXPENSE':
      return state.filter(({ id }) => id !== action.id );
    case 'EDIT_EXPENSE':
      return state.map((expense) => {
        if (expense.id === action.id) {
          return {
            ...expense,
            ...action.update
          }
        } else {
          return expense
        }
      });
    default:
      return state;
  }
}



//Filter Reducer
const filterReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
};
const filterReducer = (state = filterReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_TEXT_FILTER':
      return {
        ...state,
        text: action.text
      };
    case 'SORT_BY_AMOUNT':
      return {
        ...state,
        sortBy: 'amount'
      };
    case 'SORT_BY_DATE':
      return {
        ...state,
        sortBy: 'date'
      };
    case 'SORT_START_DATE':
      return {
        ...state,
        startDate: action.startDate
      };
    case 'SORT_END_DATE':
      return {
        ...state,
        endDate: action.endDate
      };
    default:
      return state;
  }
}

const store = createStore(
  combineReducers({
    expenses: expenseReducer,
    filters: filterReducer
  })
);

const unsubscibe = store.subscribe(() => {
  console.log(store.getState());
});

const expenseOne = store.dispatch(addExpense({description: 'first month Rent', notes: 'Clean history renter', amount: 600}));
const expenseTwo = store.dispatch(addExpense({description: 'second month Rent', notes: 'Clean history renter', amount: 900}));
const expenseThree = store.dispatch(addExpense({description: 'second month Rent', notes: 'Clean history renter', amount: 900}));

console.log(expenseOne);

store.dispatch(removeExpense({ id: expenseTwo.expense.id }));

store.dispatch(editExpense(expenseOne.expense.id, { amount: 1820 }));

store.dispatch(setTextFilter('rent'));

// store.dispatch(setTextFilter(''));

store.dispatch(sortByAmount());

store.dispatch(sortByDate());

store.dispatch(startDate(222));
store.dispatch(startDate());

store.dispatch(endDate(3000));








// import {createStore, combineReducers} from 'redux';
// import uuid from 'uuid';
//
// //ADD_EXPENSE
// const addExpense = ({
//   description = '',
//   notes = '',
//   amount = 0,
//   createdAt = 0
// }) => ({
//     type: 'ADD_EXPENSE',
//     expense: {
//     id: uuid(),
//     description,
//     notes,
//     amount,
//     createdAt
//   }
// });
//
// //REMOVE_EXPENSE
//
// const removeExpense = ({ id } = {}) => ({
//   type: 'REMOVE_EXPENSE',
//   id
// });
//
// //EDIT_EXPENSE
// //SET_TEXT_FILTER
// //SORT_BY_DATE
// //SORT_BY_AMOUNT
// //SORT_START_DATE
// //SORT_END_DATE
//
// //Expenses Reducer
// const expensesReducerDefaultState = [];
// const expensesReducer = (state = expensesReducerDefaultState, action) => {
//   switch (action.type) {
//     case 'ADD_EXPENSE':
//       return [...state, action.expense];
//     case 'REMOVE_EXPENSE':
//       return state.filter(({ id }) => id !== action.id);
//     default:
//       return state;
//   }
// };
//
// //filter Reducer
// const filterReducerDefaultState = {
//   text: '',
//   sortBy: 'date',
//   startDate: undefined,
//   endDate: undefined
// };
//
// const filterReducer = (state = filterReducerDefaultState, action) => {
//   switch (action.type) {
//     default:
//       return state;
//   }
// };
//
// //Store creation
// const store = createStore(combineReducers({expense: expensesReducer, filters: filterReducer}));
// console.log(store.getState());
//
// const unsubscribe = store.subscribe(() => {
//   console.log(store.getState());
// });
//
// const expenseOne = store.dispatch(addExpense({description: 'Rent', notes: 'first payment Jan', amount: 770}));
// const expenseTwo = store.dispatch(addExpense({description: 'Rent', notes: 'second payment Fev', amount: 780}));
//
// store.dispatch(removeExpense({ id: expenseOne.expense.id }));
//
// console.log(expenseOne);
