// Generated by CoffeeScript 1.3.1
(function() {

  $(document).on('selectstart', function() {
    return false;
  }).on('mousewheel', function() {
    return false;
  }).on('drop', function() {
    return false;
  }).on('ready', function() {
    window.loader = new LoaderWidget();
    loader.message('Downloading');
    window.app = new Euphony();
    return app.initMidi(function() {
      app.initScene();
      return app.loadBuiltinPlaylist(function(playlist) {
        window.player = new PlayerWidget('#player');
        player.setPlaylist(playlist);
        player.on('pause', app.pause);
        player.on('resume', app.resume);
        player.on('stop', app.stop);
        player.on('play', app.start);
        player.on('progress', app.setProgress);
        player.on('trackchange', function(trackId) {
          return loader.message('Loading MIDI', function() {
            return app.loadBuiltinMidi(trackId, function() {
              return loader.stop(function() {
                return player.play();
              });
            });
          });
        });
        player.on('filedrop', function(midiFile) {
          player.stop();
          return loader.message('Loading MIDI', function() {
            return app.loadMidiFile(midiFile, function() {
              return loader.stop(function() {
                return player.play();
              });
            });
          });
        });
        app.on('progress', player.displayProgress);
        return player.show(function() {
          var candidates, id;
          if (window.location.hash) {
            return player.setTrackFromHash();
          } else {
            candidates = [3, 5, 6, 7, 10, 11, 12, 13, 14, 16, 19, 30];
            id = Math.floor(Math.random() * candidates.length);
            return player.setTrack(candidates[id]);
          }
        });
      });
    });
  });

}).call(this);
