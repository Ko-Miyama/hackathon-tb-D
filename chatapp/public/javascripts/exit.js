'use strict';

// 退室メッセージをサーバに送信する
function exit() {
    // ユーザ名取得
    const userName = $('#userName').val();
    // 退室メッセージイベントを送信する
    socket.emit('sendExitEvent', userName);
    // 退室
    location.href = '/';
}

// サーバから受信した退室メッセージを画面上に表示する
socket.on('receiveExitEvent', function (data) {
    $('#thread').prepend('<p class="threadd center notail">' + data + 'さんが退出しました。</p>');
});

socket.on('exitEvent', function (data) {
    $('.login-user').remove();
    for (const user of data) {
        $('#login-users').append('<h6 class="login-user">' + user + '</h6>');
    }
});
