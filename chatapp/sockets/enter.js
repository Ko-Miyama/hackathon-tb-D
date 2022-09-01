'use strict';

module.exports = function (socket) {
    // 入室メッセージをクライアントに送信する
    socket.on('enterMyselfEvent', function (data) {
        // console.log("data = " + data);
        socket.broadcast.emit('sendEnterMyselfEvent', data);
    });
};
