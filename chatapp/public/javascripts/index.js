'use strict';

// チャットルームに入室する
function enter() {
    // 入力されたユーザ名を取得する
    const userName = $('#userName').val();
 
    // ユーザ名が未入力でないかチェックする
    if(userName.length === 0 || !userName.match(/\S/g)){
        alert("ユーザ名を入力してください。");
    }else{
        $('form').submit();
    }
    
    //userName == "" ? alert("ユーザ名を入力してください。") : $('form').submit();
}

socket.on('OK', function () {
    $('form').submit();
});

// ユーザ名に重複があった場合に帰ってくる信号 --> エラー表示
socket.on('NO', function (data) {
    $('.errorMessage').remove();
    $('#sameNameError').append('<p class="errorMessage">既にユーザ名："' + data + '"が存在するので、別の名前でログインして下さい</p>');
});


