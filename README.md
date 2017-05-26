# NativeAuth
react native and OAuth. Social Auth for facebook and google.

![](https://github.com/clint-gitahi/chat-native/blob/master/img/chat.png)
![](https://github.com/clint-gitahi/chat-native/blob/master/img/chat2.png)
![](https://github.com/clint-gitahi/chat-native/blob/master/img/chat2.png)


Go to https://developers.facebook.com/ & https://console.developers.google.com/ and add a new app

Replace APP_ID and APP_SECRET with the respective values.

backend/config.js
```js
export const facebook = {
  clientID: 'APP_ID',
  clientSecret: 'APP_SECRET',
  callbackURL: 'http://10.0.2.2:3000/auth/facebook/callback',
  profileFields: ['id', 'name', 'displayName', 'picture', 'email'],
};

export const google = {
  clientID: 'APP_ID',
  clientSecret: 'APP_SECRET',
  callbackURL: 'http://localhost:3000/auth/google/callback',
};
```
