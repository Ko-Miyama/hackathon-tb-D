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


