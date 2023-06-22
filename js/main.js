function toggleCrossHair(){
    $(".crosshair-options").slideToggle("fast");
    $(".crosshair-toggle a").toggleClass("active");
}


var menuPrevColor = "000";
var menuPrevStyle = "v1";
var crossHairSVG = "<svg width='50' height='50' viewBox='0 0 50 50' ill='none' xmlns='http://www.w3.org/2000/svg'><path d='M26 20H24V24H20V26H24V30H26V26H30V24H26V20Z' fill='#000'/></svg>";


$(".crosshair-option-color li a").mouseover(function(){
    $(".crosshair-option-style li a svg > *").attr("fill", "#" + $(this).attr("color"));
});

$(".crosshair-option-color li a").mouseout(function(){
    $(".crosshair-option-style li a svg > *").attr("fill", "#"+menuPrevColor);
});
function changeCrossHairColor(color){
    menuPrevColor = $(color).attr("color");
    switch(menuPrevStyle){
        case "v1":
            crossHairSVG = "<svg width='50' height='50' viewBox='0 0 50 50' ill='none' xmlns='http://www.w3.org/2000/svg'><path d='M26 20H24V24H20V26H24V30H26V26H30V24H26V20Z' fill='#" +menuPrevColor+"'/></svg>"
        break;
        case "v2":
            crossHairSVG = "<svg width='50' height='50' viewBox='0 0 50 50' fill='none' xmlns='http://www.w3.org/2000/svg'><path fill-rule='evenodd' clip-rule='evenodd' d='M26 18H24V23H26V18ZM26 27H24V32H26V27ZM27 26V24H32V26H27ZM18 24V26H23V24H18Z' fill='#"+menuPrevColor+"'/></svg>";
        break;
        case "v3":
            crossHairSVG = "<svg width='50' height='50' viewBox='0 0 50 50' fill='none' xmlns='http://www.w3.org/2000/svg'><path fill-rule='evenodd' clip-rule='evenodd' d='M27.5 22V22.5L28 22.5L28 27.5H27.5V28H22.5L22.5 27.5H22V22.5H22.5L22.5 22H27.5ZM24 24V26L26 26L26 24L24 24Z' fill='#" + menuPrevColor +"'/></svg>";
        break;
        case "v4":
            crossHairSVG = "<svg width='50' height='50' viewBox='0 0 50 50' ill='none' xmlns='http://www.w3.org/2000/svg'><path fill-rule='evenodd' clip-rule='evenodd' d='M24 18H26V22H27.5V22.5H28V24H32V26H28V27.5H27.5V28H26V32H24V28H22.5V27.5H22V26H18V24H22V22.5H22.5V22H24V18ZM24 26V24H26V26H24Z' fill='#"+menuPrevColor+"'/></svg>";
        break;
        case "v5":
            crossHairSVG = "<svg width='50' height='50' viewBox='0 0 50 50' fill='none' xmlns='http://www.w3.org/2000/svg'> <path fill-rule='evenodd' clip-rule='evenodd' d='M26 21H25V23H26V21ZM26 26H25V28H26V26ZM22 25V24H24V25H22ZM27 24V25H29V24H27Z' fill='#"+menuPrevColor+"'/></svg>";
        break;
        case "v6":
            crossHairSVG = "<svg width='50' height='50' viewBox='0 0 50 50' fill='none' xmlns='http://www.w3.org/2000/svg'><path fill-rule='evenodd' clip-rule='evenodd' d='M29.9997 25.7142C29.9941 27.744 29.9371 28.8124 29.3748 29.3748C28.8124 29.9371 27.744 29.9941 25.7142 29.9997C25.4883 30.0003 25.2504 29.9997 25 29.9997C24.7496 29.9997 24.5117 30.0003 24.2858 29.9997C22.256 29.9941 21.1876 29.9371 20.6252 29.3748C20.0629 28.8124 20.0059 27.744 20.0003 25.7142C19.9997 25.4883 20.0003 25.2504 20.0003 25C20.0003 24.7496 19.9997 24.5117 20.0003 24.2858C20.0059 22.256 20.0629 21.1876 20.6252 20.6252C21.1876 20.0629 22.256 20.0059 24.2858 20.0003C24.5117 19.9997 24.7496 20.0003 25 20.0003C25.2504 20.0003 25.4883 19.9997 25.7142 20.0003C27.744 20.0059 28.8124 20.0629 29.3748 20.6252C29.9371 21.1876 29.9941 22.256 29.9997 24.2858C30.0003 24.5117 29.9997 24.7496 29.9997 25C29.9997 25.2504 30.0003 25.4883 29.9997 25.7142ZM28.4998 25.7142C28.2158 27.1135 27.1135 28.2158 25.7142 28.4998V27.1427H24.2858V28.4998C22.8865 28.2158 21.7842 27.1135 21.5002 25.7142H22.8573V24.2858H21.5002C21.7842 22.8865 22.8865 21.7842 24.2858 21.5002V22.8573H25.7142V21.5002C27.1135 21.7842 28.2158 22.8865 28.4998 24.2858H27.1427V25.7142H28.4998Z' fill='#"+menuPrevColor+"'/></svg>";
        break;
        case "v7":
            crossHairSVG = "<svg width='50' height='50' viewBox='0 0 50 50' fill='none' xmlns='http://www.w3.org/2000/svg'>            <path fill-rule='evenodd' clip-rule='evenodd' d='M26 21H25V23H26V21ZM26 26H25V28H26V26ZM21 25V24H24V25L21 25ZM27 24V25L30 25V24H27Z' fill='#"+menuPrevColor+"'/>        </svg>";
        break;
        case "v8":
            crossHairSVG = "<svg width='50' height='50' viewBox='0 0 50 50' fill='none' xmlns='http://www.w3.org/2000/svg'>            <path d='M25 21H26V23.0853C26.4262 23.236 26.764 23.5738 26.9147 24H28V25H26.9147C26.764 25.4262 26.4262 25.764 26 25.9147V28H25V25.9147C24.5738 25.764 24.236 25.4262 24.0853 25H23V24H24.0853C24.236 23.5738 24.5738 23.236 25 23.0853V21Z' fill='#"+menuPrevColor+"'/>        </svg> ";
        break;
        case "v9" :
            crossHairSVG = "<svg width='50' height='50' viewBox='0 0 50 50' fill='none' xmlns='http://www.w3.org/2000/svg'>            <circle cx='25.5' cy='24.5' r='2.5' fill='#"+menuPrevColor+"'/>        </svg>";
        break;
        case "v10":
            crossHairSVG = "<svg width='50' height='50' viewBox='0 0 50 50' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M23.417 11.9998V20.3331H27.5837V11.9998L23.417 11.9998Z' fill='#"+menuPrevColor+"'/><path d='M13 22.4166H21.3333V26.5833H13V22.4166Z' fill='#"+menuPrevColor+"'/><path d='M29.667 22.4166H38.0003V26.5833H29.667V22.4166Z' fill='#"+menuPrevColor+"'/><path d='M23.417 36.9998V28.6665L27.5837 28.6665V36.9998H23.417Z' fill='#"+menuPrevColor+"'/><path d='M25.5 26.9998C26.8807 26.9998 28 25.8805 28 24.4998C28 23.1191 26.8807 21.9998 25.5 21.9998C24.1193 21.9998 23 23.1191 23 24.4998C23 25.8805 24.1193 26.9998 25.5 26.9998Z' fill='#"+menuPrevColor+"'/></svg>";
        break;
    }
    $("main").css("cursor", "url('data:image/svg+xml;base64,"+ window.btoa(crossHairSVG) +"') 25 25, crosshair");
}
function changeCrossHair(crossHair){
    $(".crosshair-option-style li").removeClass("active");
    $($(crossHair).parent()).addClass("active");
    menuPrevStyle = $(crossHair).attr("cross");
    switch(menuPrevStyle){
        case "v1":
            crossHairSVG = "<svg width='50' height='50' viewBox='0 0 50 50' ill='none' xmlns='http://www.w3.org/2000/svg'><path d='M26 20H24V24H20V26H24V30H26V26H30V24H26V20Z' fill='#" +menuPrevColor+"'/></svg>"
        break;
        case "v2":
            crossHairSVG = "<svg width='50' height='50' viewBox='0 0 50 50' fill='none' xmlns='http://www.w3.org/2000/svg'><path fill-rule='evenodd' clip-rule='evenodd' d='M26 18H24V23H26V18ZM26 27H24V32H26V27ZM27 26V24H32V26H27ZM18 24V26H23V24H18Z' fill='#"+menuPrevColor+"'/></svg>";
        break;
        case "v3":
            crossHairSVG = "<svg width='50' height='50' viewBox='0 0 50 50' fill='none' xmlns='http://www.w3.org/2000/svg'><path fill-rule='evenodd' clip-rule='evenodd' d='M27.5 22V22.5L28 22.5L28 27.5H27.5V28H22.5L22.5 27.5H22V22.5H22.5L22.5 22H27.5ZM24 24V26L26 26L26 24L24 24Z' fill='#" + menuPrevColor +"'/></svg>";
        break;
        case "v4":
            crossHairSVG = "<svg width='50' height='50' viewBox='0 0 50 50' ill='none' xmlns='http://www.w3.org/2000/svg'><path fill-rule='evenodd' clip-rule='evenodd' d='M24 18H26V22H27.5V22.5H28V24H32V26H28V27.5H27.5V28H26V32H24V28H22.5V27.5H22V26H18V24H22V22.5H22.5V22H24V18ZM24 26V24H26V26H24Z' fill='#"+menuPrevColor+"'/></svg>";
        break;
        case "v5":
            crossHairSVG = "<svg width='50' height='50' viewBox='0 0 50 50' fill='none' xmlns='http://www.w3.org/2000/svg'> <path fill-rule='evenodd' clip-rule='evenodd' d='M26 21H25V23H26V21ZM26 26H25V28H26V26ZM22 25V24H24V25H22ZM27 24V25H29V24H27Z' fill='#"+menuPrevColor+"'/></svg>";
        break;
        case "v6":
            crossHairSVG = "<svg width='50' height='50' viewBox='0 0 50 50' fill='none' xmlns='http://www.w3.org/2000/svg'><path fill-rule='evenodd' clip-rule='evenodd' d='M29.9997 25.7142C29.9941 27.744 29.9371 28.8124 29.3748 29.3748C28.8124 29.9371 27.744 29.9941 25.7142 29.9997C25.4883 30.0003 25.2504 29.9997 25 29.9997C24.7496 29.9997 24.5117 30.0003 24.2858 29.9997C22.256 29.9941 21.1876 29.9371 20.6252 29.3748C20.0629 28.8124 20.0059 27.744 20.0003 25.7142C19.9997 25.4883 20.0003 25.2504 20.0003 25C20.0003 24.7496 19.9997 24.5117 20.0003 24.2858C20.0059 22.256 20.0629 21.1876 20.6252 20.6252C21.1876 20.0629 22.256 20.0059 24.2858 20.0003C24.5117 19.9997 24.7496 20.0003 25 20.0003C25.2504 20.0003 25.4883 19.9997 25.7142 20.0003C27.744 20.0059 28.8124 20.0629 29.3748 20.6252C29.9371 21.1876 29.9941 22.256 29.9997 24.2858C30.0003 24.5117 29.9997 24.7496 29.9997 25C29.9997 25.2504 30.0003 25.4883 29.9997 25.7142ZM28.4998 25.7142C28.2158 27.1135 27.1135 28.2158 25.7142 28.4998V27.1427H24.2858V28.4998C22.8865 28.2158 21.7842 27.1135 21.5002 25.7142H22.8573V24.2858H21.5002C21.7842 22.8865 22.8865 21.7842 24.2858 21.5002V22.8573H25.7142V21.5002C27.1135 21.7842 28.2158 22.8865 28.4998 24.2858H27.1427V25.7142H28.4998Z' fill='#"+menuPrevColor+"'/></svg>";
        break;
        case "v7":
            crossHairSVG = "<svg width='50' height='50' viewBox='0 0 50 50' fill='none' xmlns='http://www.w3.org/2000/svg'>            <path fill-rule='evenodd' clip-rule='evenodd' d='M26 21H25V23H26V21ZM26 26H25V28H26V26ZM21 25V24H24V25L21 25ZM27 24V25L30 25V24H27Z' fill='#"+menuPrevColor+"'/>        </svg>";
        break;
        case "v8":
            crossHairSVG = "<svg width='50' height='50' viewBox='0 0 50 50' fill='none' xmlns='http://www.w3.org/2000/svg'>            <path d='M25 21H26V23.0853C26.4262 23.236 26.764 23.5738 26.9147 24H28V25H26.9147C26.764 25.4262 26.4262 25.764 26 25.9147V28H25V25.9147C24.5738 25.764 24.236 25.4262 24.0853 25H23V24H24.0853C24.236 23.5738 24.5738 23.236 25 23.0853V21Z' fill='#"+menuPrevColor+"'/>        </svg> ";
        break;
        case "v9" :
            crossHairSVG = "<svg width='50' height='50' viewBox='0 0 50 50' fill='none' xmlns='http://www.w3.org/2000/svg'>            <circle cx='25.5' cy='24.5' r='2.5' fill='#"+menuPrevColor+"'/>        </svg>";
        break;
        case "v10":
            crossHairSVG = "<svg width='50' height='50' viewBox='0 0 50 50' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M23.417 11.9998V20.3331H27.5837V11.9998L23.417 11.9998Z' fill='#"+menuPrevColor+"'/><path d='M13 22.4166H21.3333V26.5833H13V22.4166Z' fill='#"+menuPrevColor+"'/><path d='M29.667 22.4166H38.0003V26.5833H29.667V22.4166Z' fill='#"+menuPrevColor+"'/><path d='M23.417 36.9998V28.6665L27.5837 28.6665V36.9998H23.417Z' fill='#"+menuPrevColor+"'/><path d='M25.5 26.9998C26.8807 26.9998 28 25.8805 28 24.4998C28 23.1191 26.8807 21.9998 25.5 21.9998C24.1193 21.9998 23 23.1191 23 24.4998C23 25.8805 24.1193 26.9998 25.5 26.9998Z' fill='#"+menuPrevColor+"'/></svg>";
        break;
    }
    $("main").css("cursor", "url('data:image/svg+xml;base64,"+ window.btoa(crossHairSVG) +"') 25 25, crosshair");
}


var gameStarted = false;
var xMin = 40;
var xMax = $(".game-target").width() - 20;
var yMin = 40;
var yMax = $(".game-target").height() - 20;
var timer = 30;

function runGame(){
    timer = 30;
    gameStarted = true;
    finalScore = 0;
    $("#outScore").html(0);
    $("#outTimer").html(timer);
    $(".crosshair-options").slideUp("fast");
    $(".crosshair-toggle a").removeClass("active");
    $(".bGame #startGame").hide();
    $(".nHigh").hide();
    $(".bGame #startGame").html("Restart");
    $(".bGame").hide();
    runTarget();
    runTimer();
    
}
var finalScore;
var prevScores;
function endGame(){
    $("#hitBox").hide();
    gameStarted = false;
    console.log("Final Score is " + finalScore);
    $("#finalScore").html(finalScore);
    setTimeout(function(){
        $(".bGame").show();
        if(sessionStorage.getItem("playerName") === null){
            $(".nHigh").show();
            $("#finalScore").show();
            $("#playerName").show();
            $(".submitName").show();
        }
        else{
            // If Highscore show new highscore banner
            if(JSON.parse(sessionStorage.getItem("playerScores")).every(el => el < finalScore)){
                // $(".nHigh").show();
                // Send New Highscore to Db
                jQuery.ajax({
                    type : "post",
                    action: "contactForm",
                    url : "https://aimerlabs.edwardlin.ca/scoreboard/receivescore.php/",
                    data : {
                        action: "receiveScore",
                        dataType: "json",
                        playerName : playerName,
                        finalScore: finalScore
                    },
                    success: function(response) {
                        console.log(response);   
                        $(".nHigh").show(); 
                        $("#finalScore").show();
                        $(".bGame #startGame").show();
                        $("#playerName").hide();
                        $(".submitName").hide();
                        jQuery.ajax({
                            type : "post",
                            action: "contactForm",
                            url : "https://aimerlabs.edwardlin.ca/scoreboard/showscoreboard.php/",
                            data : {
                                dataType: "json",
                            },
                            success: function(response) {
                                response = JSON.parse(response);
                                console.log(response);
                                var html = "";
                                for(i=0;i<response.length;i++){
                                    if(response[i] !== null){
                                    html += `<li>
                                    <p class="scoreboard-placement">${i+1}</p>
                                    <p class="scoreboard-name">${response[i].playerName}</p>
                                    <p class="scoreboard-score">${response[i].playerHighScore}</p>
                                    </li>`
                                    }
                                }
                                $(".scoreboard").html(html);
                                $(".right-col").show("slide", { direction: "right" }, 1000);
                            }
                        });
                    },
                    error: function(response){
                        console.log("failed");
                        console.log(response);
                    }
        
                });
            }
            else{
                $("#finalScore").show();
                $(".bGame #startGame").show();
                $("#playerName").hide();
                $(".submitName").hide();
                $(".right-col").show("slide", { direction: "right" }, 1000);
            }
        }
        if(sessionStorage.getItem("playerName") === null){
            sessionStorage.setItem("playerScores", JSON.stringify([finalScore]));
        }
        else{
            prevScores = JSON.parse(sessionStorage.getItem("playerScores"));
            // console.log(prevScores);
            prevScores.push(finalScore);
            // console.log(prevScores);
            sessionStorage.setItem("playerScores", JSON.stringify(prevScores));
        }
    }, 500);
}
var targetOutTime;
function runTarget(){
    targetOutTime = Date.now();
    if(gameStarted){
        $("#hitBox").stop();
        $("#hitBox").css("scale", 1)
        $("#hitBox").css("left",getRandomInt(xMin, xMax)+"px");
        $("#hitBox").css("top",getRandomInt(yMin, yMax)+"px");
        $("#hitBox").show();
        setTimeout(function(){
            $( "#hitBox" ).animate({
                scale: 2
            }, 1500, function() {
                // Animation complete.
            })
        }, 200)
    }
    else{
        $("#hitBox").hide();
    }
}
var targetHitTime;
$("#hitBox").click(function(){
    targetHitTime = Date.now();
    var timeD = targetHitTime - targetOutTime;
    var scorePoint = ((((timeD)/1700) * 2000))
    console.log(timeD);
    if(timeD <= 750){
        $("#outScore").html(+($("#outScore").html())+2000);
        finalScore += 2000;
    }
    else if(timeD <= 1700){
        $("#outScore").html(+($("#outScore").html())+Math.round(scorePoint / 10) * 10);
        finalScore += Math.round(scorePoint / 10) * 10;
    }
    else{
        $("#outScore").html(+($("#outScore").html())+1000);
        finalScore += 1000;
    }
    $("#hitBox").hide();
    setTimeout(function(){
        runTarget();
    }, 100)
});
function runTimer(){
    function tick(){
        timer--;
        $("#outTimer").html(timer);
        if(timer > 0){
            setTimeout(tick, 1000);
        }
        else{
            endGame();
        }
    }
    tick();
}
var playerName;
if(sessionStorage.getItem("playerName") !== null){
    playerName = sessionStorage.getItem("playerName");
}
function linkNameToScore(){
    playerName = $("#playerName").val();

    if(playerName !== ""){
        sessionStorage.setItem("playerName" , playerName);
        jQuery.ajax({
            type : "post",
            action: "contactForm",
            url : "https://aimerlabs.edwardlin.ca/scoreboard/receivescore.php/",
            data : {
                action: "receiveScore",
                playerName : playerName,
                finalScore: finalScore
            },
            success: function(response) {
                console.log(response);
                $("#playerName").hide();
                $(".submitName").hide();
                $("#startGame").show();

                jQuery.ajax({
                    type : "post",
                    action: "contactForm",
                    url : "https://aimerlabs.edwardlin.ca/scoreboard/showscoreboard.php/",
                    data : {
                        dataType: "json",
                    },
                    success: function(response) {
                        response = JSON.parse(response);
                        console.log(response);
                        var html = "";
                        for(i=0;i<response.length;i++){
                            html += `<li>
                            <p class="scoreboard-placement">${i+1}</p>
                            <p class="scoreboard-name">${response[i].playerName}</p>
                            <p class="scoreboard-score">${response[i].playerHighScore}</p>
                            </li>`
                        }
                        $(".scoreboard").html(html);
                        $(".right-col").show("slide", { direction: "right" }, 1000);
                    }
                });

            },
            error: function(response){
                console.log(response);
            }

        });
    }
    else{
        $("#playerName").css("border", "1px solid red");
    }
}

$("#playerName").on("input", function(){
    $("#playerName").css("border", "none");
})



















function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}