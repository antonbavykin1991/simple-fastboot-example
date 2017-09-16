import Ember from 'ember';
import fetch from 'ember-fetch/ajax';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('user');
  }
});