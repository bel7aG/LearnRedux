//SET_TEXT_FILTER
export const setTextFilter = (text = '') => ({
  type: 'SET_TEXT_FILTER',
  text
});

//SORT_BY_AMOUNT
export const sortByAmount = () => ({
  type: 'SORT_BY_AMOUNT',
});

//SORT_BY_DATE
export const sortByDate = () => ({
  type: 'SORT_BY_DATE'
});

//SORT_START_DATE
export const setStartDate = (startDate = undefined) => ({
  type: 'SORT_START_DATE',
  startDate
});

//SORT_END_DATE
export const setEndDate = (endDate = undefined) => ({
  type: 'SORT_END_DATE',
  endDate
});
