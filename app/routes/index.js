import Ember from 'ember';
import RSVP from 'rsvp';

export default Ember.Route.extend({
  fastboot: Ember.inject.service(),

  isFastBoot: Ember.computed.reads('fastboot.isFastBoot'),

  model() {
    if (this.get('isFastBoot')) {
      let headers = this.get('fastboot.request.headers');
      console.log(headers);
    }

    return RSVP.hash({
      users: this.store.findAll('user')
    })
  }
});