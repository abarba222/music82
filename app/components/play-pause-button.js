import Ember from 'ember';

export default Ember.Component.extend({
  className: ['play'],
  isPlaying: false,

  actions: {
    play: function(){
      this.toggleProperty('isPlaying');
      SC.stream("/tracks/2708347", function(sound){
        console.log(this);
        this.set('sound', sound);
        sound.play();
      }.bind(this));
    },
    pause: function(){
      this.toggleProperty('isPlaying');
      console.log('pause');
      this.get('sound').pause();
    },
  }
});
