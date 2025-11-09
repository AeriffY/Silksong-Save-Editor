function changeFleaGamesScore() {
    const output = document.getElementById("output");
    if(!output){return;}
    let json;
    try {json = JSON.parse(output.value.trim());} catch(e) {return;}

    const juggling = document.getElementById("juggling").value.trim();
    const bouncing = document.getElementById("bouncing").value.trim();
    const dodging = document.getElementById("dodging").value.trim();
    json.playerData.fleaGames_juggling_played = true;
    json.playerData.fleaGames_bouncing_played = true;
    json.playerData.fleaGames_dodging_played = true;
    json.playerData.fleaGames_juggling_highscore = juggling;
    json.playerData.fleaGames_bouncing_highscore = bouncing;
    json.playerData.fleaGames_dodging_highscore = dodging;
    output.value = JSON.stringify(json, null, 2);
}

function syncFleaGamesScoreWithTextarea() {
    const output = document.getElementById("output");
    if(!output){return;}
    let json;
    try {json = JSON.parse(output.value.trim());} catch(e) {return;}

    const jugglingScore = parseInt(json.playerData.fleaGames_juggling_highscore);
    const bouncingScore = parseInt(json.playerData.fleaGames_bouncing_highscore);
    const dodgingScore = parseInt(json.playerData.fleaGames_dodging_highscore);

    if(!isNaN(jugglingScore) && !isNaN(bouncingScore) && !isNaN(dodgingScore)) {
        document.getElementById("juggling").value = jugglingScore;
        document.getElementById("bouncing").value = bouncingScore;
        document.getElementById("dodging").value = dodgingScore;
        
    } else {return;}
    
}