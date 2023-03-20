import store from '../store';

export const GOOGLE_SET_ACCESS_TOKEN = 'GOOGLE_SET_ACCESS_TOKEN';

export const setGoogleAccessToken = (accessToken) => ({
    type: GOOGLE_SET_ACCESS_TOKEN,
    accessToken
});
