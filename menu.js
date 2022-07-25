window.onload = function () {
    var audioHome = new Audio("msc/home.mp3")
    var audioClick = new Audio("msc/click.mp3")
    audioHome.loop = true;
    var soundIcon = document.getElementById("soundIcon");
    var logo = document.getElementById("menu-logo");
    var btns = document.getElementsByClassName("btn-menu")


    btns[0].onclick = function () {
        var modal = document.getElementById("modal-play");
        var modalLeft = document.getElementById("img-left");
        var modalCenter = document.getElementById("img-center");
        var modalRigth = document.getElementById("img-right");
        modal.style.zIndex = "1";
        modal.style.opacity = "1";
        audioHome.pause();
        var subs = document.getElementById("modal-play-subs")
        var fala = "";
        var cena = 1;
        var i = 0;

        modal.style.backgroundColor = "rgb(0,0,0)"
        modal.style.backgroundImage = "url(img/scenery.png)"
        subs.innerHTML = "<strong> </strong>"
        fala = 'WELCOME TO POKEHUNT!!! Click in the CONTINUE button to cotinue'; 
        typeWriter();

        document.getElementById("btn-continue").onclick = function(){
            switch (cena) {
                case 1:{
                    modalLeft.src = "img/jessieTalk.png"
                    subs.innerHTML = "<strong>Jessie: </strong>"
                    fala = 'Hey brat!! Are you ready for being smashed??'; 
                    break;
                }
                case 2:{
                    modalLeft.src = ""
                    modalRigth.src = "img/jamesTalk.png";
                    subs.innerHTML = "<strong>James: </strong>"
                    fala = 'Ha ha ha!! We will not let you collect those pokeballs, so be prepared to lose!!'; 
                    break;
                }''
                case 3:{
                    modalRigth.src = "";
                    modalLeft.src = "img/ash.gif"
                    subs.innerHTML = "<strong>Ash: </strong>"
                    fala = 'Don\'t be afraid Pichu!! We can do it!!!Collect all the pokeballs you can until the time is up!!'; 
                    break;
                }
                case 4:{
                    modalLeft.src = ""
                    modalRigth.src = "img/jessieTalk.png";
                    subs.innerHTML = "<strong>Jessie: </strong>"
                    fala = 'Let\'s see who will be de winner... he he he'; 
                    break;
                }
                default:{
                    modalRigth.src= "";
                    modalLeft.src = "img/ash.gif"
                    subs.innerHTML = "<strong>Ash: </strong>"
                    fala = 'Click on the LET\'S go button to continue our journey...'; 
                    var btnBegin = document.getElementById("btn-continue");
                    btnBegin.innerHTML = "<a href=\"singleplayer.html\">LET'S GO -></a>"
                    break;
                }
            }
            cena++;
            i = 0;
            typeWriter();
            audioClick.play();
        }        
        function typeWriter() {
            if (i < fala.length) {
                subs.innerHTML += fala.charAt(i);
                i++;
                setTimeout(typeWriter, 50);
            }
        }
    }
    btns[1].onclick = function () {
        var modal = document.getElementById("modal-play");
        var modalLeft = document.getElementById("img-left");
        var modalCenter = document.getElementById("img-center");
        var modalRigth = document.getElementById("img-right");
        modal.style.zIndex = "1";
        modal.style.opacity = "1";
        audioHome.pause();
        var subs = document.getElementById("modal-play-subs")
        var fala = "";
        var cena = 1;
        var i = 0;

        modal.style.backgroundColor = "rgb(0,0,0)"
        modal.style.backgroundImage = "url(img/scenery1.png)"
        subs.innerHTML = "<strong> </strong>"
        fala = 'WELCOME TO POKEHUNT MULTIPLAYER MODE!!!!!!!!'; 
        typeWriter();

        document.getElementById("btn-continue").onclick = function(){
            switch (cena) {
                case 1:{
                    modalLeft.src = "img/jessieTalk.png"
                    subs.innerHTML = "<strong>Jessie: </strong>"
                    fala = 'Hey brat!! What\'s your name??'; 
                    break;
                }
                case 2:{
                    modalLeft.src = ""
                    modalRigth.src = "img/LIXO/rod.png";
                    subs.innerHTML = "<strong>Rodrigo: </strong>"
                    fala = 'I\'M  NOT A BRAT YOUR FUC** BITC**!! My name is Rodrigo by the way!!'; 
                    break;
                }''
                case 3:{
                    modalRigth.src = "";
                    modalLeft.src = "img/ash.gif"
                    subs.innerHTML = "<strong>Ash: </strong>"
                    fala = 'Where\'s is your body??!!'; 
                    break;
                }
                case 4:{
                    modalLeft.src = ""
                    modalRigth.src = "img/LIXO/rod.png";
                    subs.innerHTML = "<strong>Rodrigo: </strong>"
                    fala = 'I lost it... Help me get my body back!!'; 
                    break;
                }
                default:{
                    modalRigth.src= "";
                    modalLeft.src = "img/ash.gif"
                    subs.innerHTML = "<strong>Ash: </strong>"
                    fala = 'Don\'t worry Rodrigo, we will find it and return it to you!! '; 
                    var btnBegin = document.getElementById("btn-continue");
                    btnBegin.innerHTML = "<a href=\"multiplayer.html\">LET'S GO -></a>"
                    break;
                }
            }
            cena++;
            i = 0;
            typeWriter();
            audioClick.play();
        }  
        function typeWriter() {
            if (i < fala.length) {
                subs.innerHTML += fala.charAt(i);
                i++;
                setTimeout(typeWriter, 50);
            }
        }      
    }
    
    btns[2].onclick = function () {
        var modal = document.getElementById("modal-option");
        modal.style.marginTop = "200px";
        modal.style.marginLeft = "45%";
        modal.style.width = "10%";
        audioClick.play();
    }
    btns[3].onclick = function () {
        var modal = document.getElementById("modal-instruction");
        modal.style.marginTop = "200px";
        modal.style.marginLeft = "30%";
        modal.style.width = "40%";
        audioClick.play();
    }
    btns[4].onclick = function () {
        var modal = document.getElementById("modal-info");
        modal.style.marginTop = "200px";
        modal.style.marginLeft = "38%";
        modal.style.width = "22%";
        audioClick.play();
    }

    logo.onclick = function () {
        audioHome.play()
        soundIcon.style.opacity = "1";
        logo.style.width = "440px";
        logo.style.margin = "0";
    }
    soundIcon.onclick = function () {
        if (soundIcon.className === "fas fa-volume-down") {
            soundIcon.className = "fas fa-volume-mute"
            audioHome.pause();
        } else {
            soundIcon.className = "fas fa-volume-down";
            audioHome.play();
        }
    }

    var btnNext = document.getElementById("inst-btn-next");
    var btnPrev = document.getElementById("inst-btn-prev");
    var instruction = document.getElementById("instruction");
    var instructionImg = document.getElementById("instruction-img");
    var PageNumInstr = 0;
    btnNext.onclick = function(){
        if(PageNumInstr < 3)
            PageNumInstr++;
        Instrucao();
    }
    btnPrev.onclick = function(){
        if(PageNumInstr > 0)
            PageNumInstr--;
        Instrucao();
    }

    function Instrucao(){
        switch(PageNumInstr){
            case 0:{
                instruction.innerHTML = "1. Click the red button to <i>START</i>";
                instructionImg.src = "img/instruction0.jpeg"
            }break;
            case 1:{
                instruction.innerHTML = "2. Move pikachu <img height=\"20px\" src=\"img/pichu.png\"> with the arrows in your keyboard";
                instructionImg.src = "img/instruction1.jpeg"
            }break;
            case 2:{
                instruction.innerHTML = "3. Collect how many Pokeballs you can <img height=\"15px\" src=\"img/pokebola.png\"> until the time is up";
                instructionImg.src = "img/instruction2.jpeg"
            }break;
            case 3:{
                instruction.innerHTML = "4. Run away from Team Rocket <img height=\"20px\" src=\"img/jessie.png\"><img height=\"20px\"src=\"img/james.png\">";
                instructionImg.src = "img/instruction3.jpeg"
            }break;
        }
    }
}
function Return() {
    var modalO = document.getElementById("modal-option");
    modalO.style.marginTop = "1200px";
    var modal = document.getElementById("modal-instruction");
    modal.style.marginTop = "1200px";
    var modalInfo = document.getElementById("modal-info");
    modalInfo.style.marginTop = "1200px";
}