'use strict';

// 投稿メッセージをサーバに送信する
function publish() {
    // ユーザ名を取得
    const userName = $('#userName').val();
    // 入力されたメッセージを取得
    const message = $('#message').val();
    
    if(message.length === 0 || !message.match(/\S/g)){
        alert("投稿文を入力してください。");
    }else{
        const NamemMessage=[userName,message];
        // 投稿内容を送信
        socket.emit('sendMessageEvent',NamemMessage);
    }

    return false;
}

// サーバから受信した投稿メッセージを画面上に表示する

socket.on('recieveMessage', function (data) {
    const now =  new Date();
    const year = now.getFullYear();
    const month = now.getMonth()+1;
    const date = now.getDate();
    const hour = now.getHours();
    const min = now.getMinutes();
    
    // 現在入出しているユーザー名を所得
    const userName = $('#userName').val();
    if(data[0] === userName){
        $('#thread').prepend('<p class="threadd right">' + data[0]+ 'さん:' +'<br>' + data[1] + '<br>' + '('+year+'/'+month+'/'+date+'/'+hour+':'+min+')' + '</p>');
    }else{
        $('#thread').prepend('<p class="threadd left">' + data[0]+ 'さん:' + '<br>' +data[1] + '<br>' + '('+year+'/'+month+'/'+date+'/'+hour+':'+min+')' + '</p>');
    }

});
