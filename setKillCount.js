function setKillCount(){
    const output = document.getElementById("output");
    if(!output){return;}
    let json;
    try {json = JSON.parse(output.value.trim());} catch(e) {return;}

    const kills = parseInt(document.getElementById("globalKillCount").value.trim());
    if(isNaN(kills) || kills < 1) return;

    json.playerData.EnemyJournalKillData.list.forEach(entry => {
        if (entry.Record) {
            entry.Record.Kills = kills;
        }
    });
    output.value = JSON.stringify(json, null, 2);

}