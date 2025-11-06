function changeRosary() {
    const output = document.getElementById("output");
    if(!output){return;}
    let json;
    try {json = JSON.parse(output.value.trim());} catch(e) {return;}

    const num = document.getElementById("rosaryNum").value.trim();
    const numVal = Number(num);
    if(!isNaN(numVal) && numVal!="" && numVal>=0) {
        // json.playerData?.PreMemoryState?.Rosaries = numVal;
        // rosary = numVal;
        const rosary = json.playerData; 
        if(!rosary) {return;}
        json.playerData.geo = numVal; //666, 祖宗之法不可变, 找老子半天
        output.value = JSON.stringify(json, null, 2);
    } else {
        return;
    }

}