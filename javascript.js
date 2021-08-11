
var audioA = new Audio("msc/sea.mp3")           //musica do jogo
var audioClick = new Audio('msc/click.mp3')         //som do click do botão
var audioEvol = new Audio('msc/evoluir.mp3')        //som da evolução do persongem
var audioFim = new Audio('msc/fim.mp3')             //som do fim de jogo
var audioPok = new Audio('msc/pokebola.mp3')

var objCanvas = null;           
var objContexto = null;

var imgFundo = new Image();     //gramado
imgFundo.src = "img/fundo.png";

var xHeroi = 70;        //pichu
var yHeroi = 370;
var imgHeroi = new Image();
//imgHeroi.src = "img/pichu.png";

var xMonstro1 = 40;    //monstro 1
var yMonstro1 = 340;
var imgMonstro1 = new Image();
imgMonstro1.src = "img/jessie.png";

var xMonstro2 = 100;      //monstro 2
var yMonstro2 = 100;
var imgMonstro2 = new Image();
imgMonstro2.src = "img/james.png";

var xMonstro3 = 50;    //monstro 3
var yMonstro3 = 50;
var imgMonstro3 = new Image();
imgMonstro3.src = "img/jessie.png";

var xMonstro4 = 400;    //monstro 4
var yMonstro4 = 400;
var imgMonstro4 = new Image();
imgMonstro4.src = "img/james.png";

/********** Falas personagens  ******************* */
var stars, persTalk, falaTalk;
var talk;
var myTime;

/************************************************** */
function IniciarJogo(){                                 //carregao canvas
    
    objCanvas = document.getElementById("meuCanvas");
    objContexto = objCanvas.getContext("2d");
    objContexto.drawImage(imgFundo,0,0);

    
}

function AtualizarTela(){                   //atualiza a posição dos personagens
    objContexto.drawImage(imgFundo,0,0);
    objContexto.drawImage(pokebola,xPok,yPok)
    objContexto.drawImage(imgHeroi,xHeroi,yHeroi);
    objContexto.drawImage(imgMonstro1,xMonstro1,yMonstro1);
    objContexto.drawImage(imgMonstro2,xMonstro2,yMonstro2);
    objContexto.drawImage(imgMonstro3,xMonstro3,yMonstro3);
    objContexto.drawImage(imgMonstro4,xMonstro4,yMonstro4);
    if(Encontrou(xHeroi,yHeroi)){  //caso o personagem for pego
        document.body.style.backgroundPositionY = "top"
        document.body.style.backgroundPositionX = "left"
        document.body.style.backgroundColor = "rgba(0, 0, 0, 0)";
        clearTimeout(myTime);
        myTime = setTimeout(function(){  
            talk.style.opacity = "1";
            persTalk.src = "img/teamrocketTalk.png";
            falaTalk.innerHTML = "Team Rocket <br>smashed you!!!"
            Recorde(numpokebola)         //confere se a pontuação foi recorde
            audioFim.play()                                    
            imgHeroi.src = "img/pikachuM.png"                  
            numpokebola = 0;                       //zera a pontuação
            audioA.pause();                        //pause a musica do jogo
            xPok = -50                             //tira a pokebola da tela
            atualizarRel=false                     //impedi de continuar a contagem do relogio
            relogio.innerHTML = "Game Over" 
        });
        myTime = setTimeout(function(){
            talk.style.opacity = "0";
        },2000);
        
    } 
    else if(min == 0 & seg == 1){               //tempo acabou
        document.body.style.backgroundColor = "rgba(0, 0, 0, 0)";
        document.body.style.backgroundPositionY = "top"
        document.body.style.backgroundPositionX = "left"
        relogio.innerHTML = "You survived!"
        Recorde(numpokebola)                 
        numpokebola = 0;                 
        audioA.pause();               
        xPok = -50                            
        atualizarRel=false
        seg = 2;
        imgHeroi.src = "img/ditto.png" 

        clearTimeout(myTime);
        myTime = setTimeout(function(){  
            talk.style.opacity = "1";
            persTalk.src = "img/brockTalk.png";
            falaTalk.innerHTML = "Congratulations!!!! <br> You survived Dito!!!"
        });
        setTimeout(function(){
            talk.style.opacity = "0";
        },3000)
        // 3:10 começa
        // 1:26 acaba
    }else if(min == 1 && seg == 39)
        document.body.style.backgroundColor = "rgba(0, 0, 0, 0.486)";

    if(xHeroi==xPok&&yHeroi==yPok){     //coletar pokebola
        numpokebola++;
        document.getElementById('numpokebola').innerHTML = "x"+numpokebola
        Pokebola(1);            //coloca nova pokebola na tela
        Evolucao(numpokebola);  //conferi se o pokemon ja pode evoluir
        audioPok.load()
        audioPok.play()
    }
}

setInterval(() => {      // movimentos automaticos dos montros
   MovimentoMonstro1(); MovimentoMonstro2(); MovimentoMonstro3(); MovimentoMonstro4();
}, 100);

setInterval(() => {    
    if(resetar){     //reseta o tempo no click do btn Iniciar
        min = 4
        seg = 41
        resetar = false
    }                        
    if(atualizarRel == true)  //atualiza o tempo do relogio durante a partida
        Tempo();
}, 1000);

function MovimentoMonstro1(){ 
    var num = Math.floor(Math.random() * 4)
       if(num == 0 && yMonstro1 > 10){
           yMonstro1 += -10;
       }else if(num == 1 && yMonstro1 < 410){
           yMonstro1 += +10;
       }else if(num == 2 && xMonstro1 > 30){
           xMonstro1 += -10
       }else if(num == 3 && xMonstro1 < 450){
           xMonstro1 += +10;
       }
    AtualizarTela();
}
function MovimentoMonstro2(){ //////////////
    var num = Math.floor(Math.random() * 4)
       if(num == 0 && yMonstro2 > 10){
           yMonstro2 += -10;
       }else if(num == 1 && yMonstro2 < 410){
           yMonstro2 += +10;
       }else if(num == 2 && xMonstro2 > 30){
           xMonstro2 += -10
       }else if(num == 3 && xMonstro2 < 450){
           xMonstro2 += +10;
       }
    AtualizarTela();
}
function MovimentoMonstro3(){ //////////////
    var num = Math.floor(Math.random() * 4)
       if(num == 0 && yMonstro3 > 10){
           yMonstro3 += -10;
       }else if(num == 1 && yMonstro3 < 410){
           yMonstro3 += +10;
       }else if(num == 2 && xMonstro3 > 30){
           xMonstro3 += -10
       }else if(num == 3 && xMonstro3 < 450){
           xMonstro3 += +10;
       }
    AtualizarTela();
}
function MovimentoMonstro4(){ //////////////
    var num = Math.floor(Math.random() * 4)
       if(num == 0 && yMonstro4 > 10){
           yMonstro4 += -10;
       }else if(num == 1 && yMonstro4 < 410){
           yMonstro4 += +10;
       }else if(num == 2 && xMonstro4 > 30){
           xMonstro4 += -10
       }else if(num == 3 && xMonstro4 < 450){
           xMonstro4 += +10;
       }
    AtualizarTela();
}
function Andar(event) {                     // controle do personagem   <------
    var tecla = event.keyCode;
    if (tecla == 38 && yHeroi > 10){
        yHeroi += -10;
    } else if(tecla == 40 && yHeroi < 410){
        yHeroi += +10
    }else if(tecla == 39 && xHeroi < 450){
        xHeroi += +10
    }else if(tecla == 37 && xHeroi > 30){
        xHeroi += -10
    }
    AtualizarTela();
}

function Encontrou(x,y){                      // confere se a posição do heroi 
    if( x == xMonstro1 && y == yMonstro1 ||   // é a mesma de um dos monstros
        x == xMonstro2 && y == yMonstro2 ||
        x == xMonstro3 && y == yMonstro3 ||
        x == xMonstro4 && y == yMonstro4){ 
        return true;
    }
}

var pokebola = new Image();
pokebola.src = "img/pokebola.png"
var xPok = -50      //posição fora da partida para q não apareça na tela
var yPok = -50
var numpokebola = 0   // <-- pontuação
var atualizarRel = false;   //atualiza durante a partida
var resetar = true          //resetar fica true no click do botão Iniciar e depois fica false durante a partida

function Pokebola(aux){                                        //   INICIO DA PARTIDA   <-----------
    if(aux == 0){   //reiniciar o jogo       //aux = 0 reiniciar/iniciar uma partida   
        document.getElementById('numpokebola').innerHTML = "x0"
        imgHeroi.src = "img/pichu.png"
        numpokebola = 0
        atualizarRel = true
        resetar = true
        audioA.load();
        audioA.play();
        audioClick.play()

        persTalk = document.getElementById("imgTalk");
        falaTalk = document.getElementById("fala");
        talk = document.getElementById("imgAnim");
        talk.style.opacity = "0";
        stars = [document.getElementById("star1"),document.getElementById("star2"),document.getElementById("star3")];
        stars[0].style.opacity = "1";
        stars[1].style.opacity = "0";
        stars[2].style.opacity = "0";
        document.body.style.backgroundPositionY = "bottom"
        document.body.style.backgroundPositionX = "right"
        clearTimeout(myTime);
        myTime = setTimeout(function(){
            talk.style.opacity = "1";
            persTalk.src = "img/jessieTalk.png";
            falaTalk.innerHTML = "Hey brat!!<br>Are you ready for <br>being smashed??"
        }, 1000);
        myTime = setTimeout(function(){persTalk.src = "img/jamesTalk.png";
        falaTalk.innerHTML = "Ha ha ha!!<br>We will not let <br>you collect those <br>pokeballs, so be<br> prepared to lose!!"
        }, 6000);
        myTime = setTimeout(function(){  
            persTalk.src = "img/ash.gif";
            falaTalk.innerHTML = "Don't be afraid <br>Pichu!! We can <br>do it!!!Collect all the<br>pokeballs you can <br>until the time is up!!"
        }, 12000);
        myTime = setTimeout(function(){  
            persTalk.src = "";
            falaTalk.innerHTML = "<br><br><br><br> .  .  .  .Pichu pichu!!!"
        }, 18000);
        myTime = setTimeout(function(){
            talk.style.opacity = "0";
        },20000)
    }    
    xPok = Math.floor(Math.random()*(440 - 30)) +30     //gera uma posição aleatória para a pokebola
    yPok = Math.floor(Math.random()*(410 - 10)) + 10
    xPok = xPok - (xPok%10)
    yPok = yPok - (yPok%10)
    objContexto.drawImage(pokebola,xPok,yPok)
    AtualizarTela();
}

var min = 4
var seg = 40
function Tempo(){                                       
    var relogio = document.getElementById("relogio")//  00:00
    seg = seg -1;
    if(seg == 0){              //troca um minuto por 60 segundos
        seg = 60;
        min = min - 1
    }
    if(seg <10)
        relogio.innerHTML = "0"+min+":0"+seg    // não deixa que fique assim 01:2
    else
        relogio.innerHTML = "0"+min+":"+seg
}

var melhorpont = 0                              // Melhor pontuação <-------------
function Recorde(numpokebola){
    if(numpokebola > melhorpont){
        melhorpont = numpokebola
        document.getElementById("melhorScore").innerHTML = melhorpont
        
        clearTimeout(myTime);
        myTime = setTimeout(function(){  
            talk.style.opacity = "1";
            persTalk.src = "img/mistyTalk.png";
            falaTalk.innerHTML = "Amazing!!!<br> You got "+melhorpont+" <br> pokeballs!!!!! <br> The best score until now!!"
        }, 3000)
        myTime = setTimeout(function(){
            talk.style.opacity = "0";
        },6000)
    }
}

function Evolucao(numpokebola){              // 30 pokebolas = 1º evolução (pikachu)
    if(numpokebola == 30){                   // 50 pokebolas = 2º evolução (raichu)
        audioEvol.play()
        imgHeroi.src = "img/pikachu.png"
        stars[1].style.opacity = "1";
        document.body.style.backgroundPositionY = "center"
        document.body.style.backgroundPositionX = "left"
        myTime = setTimeout(function(){  
            talk.style.opacity = "1";
            persTalk.src = "img/pikachuTalk.png";
            falaTalk.innerHTML = "Pika pika chuuu!"
        });
        myTime = setTimeout(function(){
            talk.style.opacity = "0";
        },6000)
    }else if(numpokebola == 50){
        audioEvol.play()
        imgHeroi.src = "img/pikachu2.png"
        stars[2].style.opacity = "1";
        document.body.style.backgroundPositionY = "center"
        document.body.style.backgroundPositionX = "right"
        myTime = setTimeout(function(){  
            talk.style.opacity = "1";
            persTalk.src = "img/raichuTalk.png";
            falaTalk.innerHTML = "Finally, Raichu!!!"
        });
        myTime = setTimeout(function(){
            talk.style.opacity = "0";
        },6000)
    }
}


