const admin = require('firebase-admin');
const path = require('path');

/**
 * PUSH NOTIFICATION TEST SCRIPT (iOS)
 * 
 * REQUIREMENTS:
 * 1. Node.js installed.
 * 2. Run 'npm install firebase-admin' in this folder.
 * 3. A 'service-account.json' file from Firebase Console.
 *    - Go to Firebase Console -> Project Settings -> Service Accounts.
 *    - Click "Generate New Private Key".
 *    - Rename the downloaded file to 'service-account.json' and place it in this folder.
 */

const SERVICE_ACCOUNT_PATH = path.join(__dirname, 'service-account.json');

try {
  const serviceAccount = require(SERVICE_ACCOUNT_PATH);

  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
  });

  // PASTE YOUR IOS DEVICE TOKEN HERE
  const registrationToken = 'crO50otoj0ScvpjS64YP3G:APA91bEKoqP91_Y_9u1MRtxz76LxxxtebE2yYKtHfZqTRYfdJuFuvwZ92-FngrgmWO8uaEeiYn2KPOU6Fn6-OX0QSRlwulstN0xA1DS8RcTH224nUYhzIkw';

  const message = {
    notification: {
      title: 'iOS Test Notification',
      body: 'If you see this, push notifications are working on your iOS device!'
    },
    apns: {
      payload: {
        aps: {
          sound: 'default',
          badge: 1,
          alert: {
            title: 'iOS Test Notification',
            body: 'If you see this, push notifications are working on your iOS device!'
          }
        }
      }
    },
    token: registrationToken
  };

  console.log('Sending push notification to iOS device...');

  admin.messaging().send(message)
    .then((response) => {
      console.log('Successfully sent message:', response);
      process.exit(0);
    })
    .catch((error) => {
      console.error('Error sending message:', error);
      process.exit(1);
    });
} catch (err) {
  console.error('\nERROR: service-account.json not found!');
  console.error('Please download your Service Account JSON from Firebase Console and place it in this folder.\n');
  process.exit(1);
}
