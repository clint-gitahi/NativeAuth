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
