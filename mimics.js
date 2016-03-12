(function () {
    window.Audio = function(){ return { load: function(){}, play: function(){} } };
    var modifiedNavigator = Object.create(window.navigator);
    var plugin = {
        description: "Shockwave Flash 21.0 r0",
        filename: "pepflashplayer.dll",
        0: {},
        length: 1
    };
    Object.defineProperties(modifiedNavigator, {
        vendor: {
            value: "Google Inc.",
            configurable: false,
            enumerable: true,
            writable: false
        },
        plugins: {
            value: {
                "Shockwave Flash": plugin,
                "length": 1,
                "0": plugin
            },
            configurable: false,
            enumerable: true,
            writable: false
        },
        javaEnabled: {
            value: function(){return false},
            configurable: false,
            enumerable: true,
            writable: false
        }
    });
    window.navigator = modifiedNavigator;
    window.___p = Object.create(window._phantom);
    window.notifyMe = function () {
        return window.___p.call.call(window.___p, Array.prototype.slice.call(arguments, 0));
    };
    delete window._phantom;
    delete window.callPhantom;
})();