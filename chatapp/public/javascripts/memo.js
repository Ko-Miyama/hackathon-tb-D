'use strict';

// メモを画面上に表示する
function memo() {
    // ユーザ名を取得
    const userName = $('#userName').val();
    // 入力されたメッセージを取得
    const message = $('#message').val();
    
    // メモの内容を表示
    if(message.length === 0 || !message.match(/\S/g)){
        alert("メモを入力してください。");
    }else{
        $('#thread').prepend('<p>' +userName+'さんのメモ'+ '</p>');
        $('#thread').prepend('<p id=memo>' +userName+'さんのメモ：'+ message +'</p>');
    }

    //$('#thread').prepend('<p>' +userName+'さんのメモ：'+ message +'</p>');


    return false;
}
