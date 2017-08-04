import Ember from 'ember';
import InViewportMixin from 'ember-in-viewport';

export default Ember.Component.extend(InViewportMixin,{

  didEnterViewport() {
      this.$().typed({
          strings: this.get('strings'),
          backDelay: this.get('backDelay'),
          typeSpeed: this.get('typeSpeed'),
          backSpeed: this.get('backSpeed'),
          loop: this.get('loop'),
          contentType: this.get('contentType')
      });
  }
  
});
