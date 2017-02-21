(function (window) {
    'use strict';

    var fn = {},
        _fn = {},
        document,
        interval,
        app = {};
    
    document = window.document;

    fn.init = function () {
        _fn.addEvent();
    };

    _fn.addEvent = function () {
        var btn_start,
            btn_stop;

        btn_start = document.getElementById('js-notify-start');
        btn_stop = document.getElementById('js-notify-stop');

        btn_start.addEventListener('click', _fn.onClickBtnStart, false);
        btn_stop.addEventListener('click', _fn.onClickBtnStop, false);
    };

    _fn.onClickBtnStart = function (e) {
        interval = window.setInterval(function () {
            new window.Notification('Hellooooooooooooooooo!!');
        }, 1000);
    };

    _fn.onClickBtnStop = function (e) {
        clearInterval(interval);
    };

    app.init = fn.init;

    window.app = app || {};
}(this));
