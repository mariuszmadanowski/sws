'use strict';
sws.factory('ping', ['$window', '$timeout', function($window, $timeout) {
    return {
        test: function(url, callback) {
            if (!this.inUse) {
                this.inUse = true;
                this.callback = callback;
                this.url = url;
                var _that = this;
                this.img = new Image();
                this.img.onload = function() {
                    _that.inUse = false;
                    _that.callback(true);
                };
                this.img.onerror = function(e) {
                    if (_that.inUse) {
                        _that.inUse = false;
                        _that.callback(true, e);
                    }
                };
                this.start = new Date().getTime();
                this.img.src = url + "?rand" + this.start;
                this.timer = $timeout(function() {
                    if (_that.inUse) {
                        _that.inUse = false;
                        _that.callback(false);
                    }
                }, 3000);
            }
        }
    };
}]);
