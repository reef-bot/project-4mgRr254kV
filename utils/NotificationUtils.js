File: NotificationUtils.js

import { FirebaseCloudMessaging } from 'firebase/cloud-messaging';

const NotificationUtils = {
  sendPushNotification: (token, title, body) => {
    try {
      FirebaseCloudMessaging.sendNotification(token, title, body);
      console.log('Push notification sent successfully');
    } catch (error) {
      console.error('Error sending push notification:', error);
    }
  },

  scheduleReminder: (userId, reminderTime, message) => {
    try {
      FirebaseCloudMessaging.scheduleNotification(userId, reminderTime, message);
      console.log('Reminder scheduled successfully');
    } catch (error) {
      console.error('Error scheduling reminder:', error);
    }
  }
};

export default NotificationUtils;