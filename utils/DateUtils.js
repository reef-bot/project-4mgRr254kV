// File: utils/DateUtils.js

import moment from 'moment';

const DateUtils = {
  getCurrentDate: () => {
    return moment().format('YYYY-MM-DD');
  },

  getCurrentTime: () => {
    return moment().format('HH:mm:ss');
  },

  isFutureDate: (date) => {
    return moment(date).isAfter(moment());
  },

  isPastDate: (date) => {
    return moment(date).isBefore(moment());
  },

  isSameDate: (date1, date2) => {
    return moment(date1).isSame(moment(date2), 'day');
  },

  addDaysToDate: (date, days) => {
    return moment(date).add(days, 'days').format('YYYY-MM-DD');
  },

  subtractDaysFromDate: (date, days) => {
    return moment(date).subtract(days, 'days').format('YYYY-MM-DD');
  },
};

export default DateUtils;