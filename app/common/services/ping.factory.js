'use strict';

sws.factory('ping', ['$timeout', function($timeout) {
    return {
        test: function(url, callback) {
            if (typeof url === 'undefined' || typeof callback === 'undefined') {
                throw new Error('Undefined argument "url" or "callback".');
            }
            if (typeof callback !== 'function') {
                throw new Error('Argument "callback" must be a function.');
            }
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
