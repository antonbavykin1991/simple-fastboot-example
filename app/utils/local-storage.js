import Ember from 'ember';
const LOCAL_STORAGE_TEST_KEY = 'localStorage_test_key';

export function checkLocalStorageAvailable() {
  try {
    window.localStorage.setItem(LOCAL_STORAGE_TEST_KEY, true);
    window.localStorage.removeItem(LOCAL_STORAGE_TEST_KEY);
    Ember.Logger.debug('localStorage is available');
    return true;
  } catch(e) {
    Ember.Logger.debug('localStorage is not available');
    return false;
  }
}