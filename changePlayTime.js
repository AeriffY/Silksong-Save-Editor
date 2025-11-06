function changePlayTime() {
    const output = document.getElementById("output");
    if(!output){return;}
    let json;
    try {json = JSON.parse(output.value.trim());} catch(e) {return;}

    if(!json.playerData) {return;}

    const h = parseInt(document.getElementById("hour").value.trim());
    const m = parseInt(document.getElementById("minute").value.trim());
    if(isNaN(h) || isNaN(m)) {return;}
    // console.log(1);
    const total = 60*60*h + 60*m;
    json.playerData.playTime = total;
    output.value = JSON.stringify(json, null, 2);
}