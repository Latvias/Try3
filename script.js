$(document).ready(function() {
    let messageCount = 0;

    function botReply(message) {
        let replies = ["Сообщение А", "Сообщение Б", "Сообщение В", "Сообщение Д", "Сообщение Е", "Сообщение Ж", "Сообщение З"];
        if (messageCount < replies.length) {
            setTimeout(() => {
                displayMessage(replies[messageCount], 'bot');
                messageCount++;
            }, 1000);
        }
    }

    function displayMessage(message, sender) {
        let messageElement = $('<div>').addClass('message').addClass(sender + '-message').text(message);
        $('#chat-messages').append(messageElement);
        $('#chat-window').scrollTop($('#chat-window')[0].scrollHeight);
    }

    $('#send-button').click(function() {
        let message = $('#message-input').val();
        if (message.trim()) {
            displayMessage(message, 'user');
            $('#message-input').val('');
            botReply(message);
        }
    });

    $('#message-input').keypress(function(e) {
        if (e.which == 13) {
            $('#send-button').click();
        }
    });

    $('#attach-button').click(function() {
        displayMessage('Пользователь отправил документ', 'user');
        setTimeout(() => {
            displayMessage('Вот ваш документ', 'bot');
        }, 10000);
    });

    let micTimer;
    $('#mic-button').mousedown(function() {
        micTimer = setTimeout(function() {
            let timeHeld = Math.floor((Date.now() - micTimer) / 1000);
            let audioMessage, imageFile;
            if (timeHeld < 20) {
                audioMessage = "Ответ на аудио 1";
                imageFile = "png1.png";
            } else if (timeHeld < 40) {
                audioMessage = "Ответ на аудио 2";
                imageFile = "png2.png";
            } else if (timeHeld < 60) {
                audioMessage = "Ответ на аудио 3";
                imageFile = "png3.png";
            } else {
                audioMessage = "Ответ на аудио 4";
                imageFile = "png4.png";
            }
            displayMessage(audioMessage, 'user');
            $('#chat-messages').append(`<img src="${imageFile}" class="img-fluid">`);
        }, 1000);
    }).mouseup(function() {
        clearTimeout(micTimer);
    });

    $('#message-input').on('input', function() {
        let text = $(this).val();
        if (text === 'ошибка1') {
            displayMessage('Td.ЛРCJыбSLМ/Vд:p]cВ', 'bot');
        } else if (text === 'ошибка2') {
            alert('шо#qv|~VYpcф^,фмDЯд}');
        }
    });
});
