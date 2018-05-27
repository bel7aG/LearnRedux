import React from 'react';
import ReactDOM from 'react-dom';
import App, { AppRouter } from './App';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './store/configureStore'
import {  addExpense, removeExpense, editExpense } from './actions/expenses';
import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate } from './actions/filters';
import getVisiblExpenses from './selectors/expenses';


const store = configureStore();

const unsubscibe = store.subscribe(() => {
  const state = store.getState();
  const visibleExpenses = getVisiblExpenses(state.expenses, state.filters);
  console.log(visibleExpenses);
});

const expenseOne = store.dispatch(addExpense({
  description: 'first month Rent',
  notes: 'Clean history renter',
  amount: 1600,
  createdAt: -100
}));

const expenseTwo = store.dispatch(addExpense({
  description: 'second month Rent',
  notes: 'Clean history renter',
  amount: 900,
  createdAt: -100
}));

const expenseThree = store.dispatch(addExpense({
  description: 'third month',
  notes: 'Clean history renter',
  amount: 1100,
  createdAt: 300
}));

store.dispatch(setTextFilter('rent'));

// console.log(expenseOne);
//
// store.dispatch(removeExpense({ id: expenseTwo.expense.id }));
//
// store.dispatch(editExpense(expenseOne.expense.id, { amount: 1820 }));
//
// store.dispatch(setTextFilter('rent'));

// store.dispatch(setTextFilter(''));

// store.dispatch(sortByAmount());
//
// store.dispatch(sortByDate());
//
// store.dispatch(setStartDate(899));
//
// store.dispatch(setEndDate(3000));


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
