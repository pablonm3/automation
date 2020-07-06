const OPENER = "hay algo de vs que me encanta y otra cosa que odio"
var element = document.querySelector('[aria-label="Like"]')
setInterval(function(){
    element.click()
    var match_element_input = document.querySelector('#chat-text-area')
    var enter = $.Event( "keypress", { which: 13 } );
    //var send_btn = document.querySelector('.sendMessageForm__button')
    if(match_element_input){
        match_element_input.value = OPENER
        //send_btn.click()
        $('#chat-text-area').trigger(enter);
    }
    }, 200)
