'use strict';


window.addEventListener("keyup",KeyUp)

function KeyUp(event){
    if(event.shiftKey){
		if(event.key=='Enter'){
            publish();
		}
    }
}
