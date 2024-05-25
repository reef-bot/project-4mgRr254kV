services/CalendarService.js:

import moment from 'moment';
import { GoogleCalendarAPI } from 'google-calendar-api';

const CalendarService = {
  setReminder: async (title, date) => {
    try {
      const calendar = new GoogleCalendarAPI();
      const event = {
        summary: title,
        start: {
          dateTime: moment(date).toISOString(),
          timeZone: 'UTC',
        },
        end: {
          dateTime: moment(date).add(1, 'hour').toISOString(),
          timeZone: 'UTC',
        },
      };

      await calendar.createEvent(event);
      return 'Reminder set successfully';
    } catch (error) {
      console.error('Error setting reminder:', error);
      throw new Error('Failed to set reminder');
    }
  },
};

export default CalendarService;