'use strict';

module.exports = function (socket, io) {
    // 投稿メッセージを送信する
    socket.on('sendMessage', function (data) {
        io.sockets.emit('receiveMessage',data);
    });
};

