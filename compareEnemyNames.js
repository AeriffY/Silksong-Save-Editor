
const ALL_NAMES = [
    "MossBone Crawler",
    "MossBone Fly",
    "Bone Roller",
    "Mossbone Mother",
    "Bone Goomba",
    "Bone Goomba Large",
    "Bone Flyer",
    "Bone Circler",
    "Bone Crawler",
    "Bone Thumper",
    "Pilgrim 03",
    "Pilgrim 01",
    "Aspid Collector",
    "Pilgrim Moss Spitter",
    "Bone Hunter Throw",
    "Bone Hunter Buzzer",
    "Bone Hunter Tiny",
    "Bone Hunter",
    "Bone Hunter Child",
    "Bone Hunter Fly",
    "Bone Circler Vicious",
    "Bone Flyer Giant",
    "Dock Worker",
    "Bone Beast",
    "Roof Crab",
    "Pilgrim 02",
    "Dock Flyer",
    "Shield Dock Worker",
    "Pilgrim StaffWielder",
    "Tar Slug",
    "Lace",
    "Fields Goomba",
    "Fields Flock Flyers",
    "Dock Bomber",
    "Spine Floater",
    "Pilgrim Fly",
    "Bone Spitter",
    "Pilgrim 04",
    "Song Golem",
    "Mite",
    "Crow",
    "Rhino",
    "Skull King",
    "Bell Goomba",
    "Bell Fly",
    "Pilgrim Fisher",
    "Mitefly",
    "Gnat Giant",
    "Rock Roller",
    "Crypt Worm",
    "Pilgrim Bellthrower Fly",
    "Pond Skater",
    "Rosary Pilgrim",
    "Shellwood Gnat",
    "Shellwood Wasp",
    "Bloom Puncher",
    "Flower Drifter",
    "Stick Insect Flyer",
    "Splinter Queen",
    "Stick Insect Charger",
    "Stick Insect",
    "Bloom Shooter",
    "Farmer Scissors",
    "Farmer Catcher",
    "Farmer Centipede",
    "Spinner Boss",
    "Pilgrim Bell Thrower",
    "Weaver Servitor",
    "Blade Spider Hang",
    "Bone Goomba Bounce Fly",
    "Crowman",
    "Crowman Dagger",
    "Bone Worm",
    "Pilgrim 05",
    "Bone Hopper",
    "Bone Hopper Giant",
    "Shell Fossil Mimic",
    "Dustroach",
    "Roachfeeder Short",
    "Roachfeeder Tall",
    "Roachkeeper",
    "Roachkeeper Chef Tiny",
    "Roachkeeper Chef",
    "Swamp Goomba",
    "Swamp Mosquito",
    "Rosary Thief",
    "Swamp Muckman",
    "Mite Heavy",
    "Slab Prisoner Leaper New",
    "Slab Prisoner Fly New",
    "Slab Fly Mid",
    "Slab Fly Small",
    "Slab Fly Large",
    "Wraith",
    "Citadel Bat",
    "Phantom",
    "Peaks Drifter",
    "Crystal Drifter",
    "Crystal Drifter Giant",
    "Weaver Servitor Large",
    "Bone Hunter Trapper",
    "Bloat Roach",
    "Swamp Drifter",
    "Dustroach Pollywog",
    "Swamp Muckman Tall",
    "Swamp Shaman",
    "Swamp Barnacle",
    "Coral Judge",
    "Blade Spider",
    "Pilgrim Hiker",
    "Coral Conch Shooter",
    "Coral Conch Driller Giant",
    "Last Judge",
    "Seth",
    "Vampire Gnat",
    "Song Pilgrim 01",
    "Song Reed",
    "Pilgrim 01 Song",
    "Song Pilgrim 03",
    "Pilgrim 04 Song",
    "Song Automaton Fly",
    "Pilgrim 02 Song",
    "Pilgrim 03 Song",
    "Song Reed Grand",
    "Swamp Mosquito Skinny",
    "Swamp Ductsucker",
    "Coral Goomba Large",
    "Coral Conch Shooter Heavy",
    "MossBone Crawler Fat",
    "Giant Flea",
    "Arborium Keeper",
    "Pilgrim Stomper Song",
    "Song Handmaiden",
    "First Weaver",
    "Song Threaded Husk",
    "Song Creeper",
    "Understore Mite Giant",
    "Understore Automaton",
    "Pilgrim 03 Understore",
    "Understore Automaton EX",
    "Understore Small",
    "Understore Heavy",
    "Understore Thrower",
    "Understore Poker",
    "Pilgrim Staff Understore",
    "Coral Spike Goomba",
    "Coral Warrior Grey",
    "Coral Conch Stabber",
    "Coral Conch Driller",
    "Zap Core Enemy",
    "Dock Charger",
    "Fields Flyer",
    "Dock Guard Thrower",
    "Tar Slug Huge",
    "Song Pilgrim 02",
    "Song Threaded Husk Spin",
    "Conductor Boss",
    "Farmer Wisp",
    "Wisp Pyre Effigy",
    "Wisp",
    "Song Pilgrim Maestro",
    "Song Administrator",
    "Song Heavy Sentry",
    "Clockwork Dancer",
    "Song Automaton Goomba",
    "Song Automaton 01",
    "Song Automaton Fly Spike",
    "Song Automaton 02",
    "Song Automaton Shield",
    "Song Automaton Ball",
    "Scholar",
    "Scrollkeeper",
    "Lightbearer",
    "Song Scholar Acolyte",
    "Trobbio",
    "Citadel Bat Large",
    "Slab Fly Small Fresh",
    "Slab Fly Broodmother",
    "Silk Boss",
    "Spike Lazy Flyer",
    "Surface Scuttler",
    "Giant Centipede",
    "Bone Worm BlueBlood",
    "Bone Worm BlueTurret",
    "Blue Assistant",
    "Crowman Juror Tiny",
    "Pinstress Boss",
    "Abyss Crawler",
    "Gloomfly",
    "Gloom Beast",
    "Abyss Crawler Large",
    "Void Tendrils",
    "Black Thread Core",
    "Bone Hunter Chief",
    "Hunter Queen",
    "Flower Queen",
    "Coral Goombas",
    "Coral Swimmer Small",
    "Coral Warrior",
    "Coral Flyer Throw",
    "Coral Swimmer Fat",
    "Coral Flyer",
    "Coral Hunter",
    "Coral Big Jellyfish",
    "Coral Brawler",
    "Spike Swimmer",
    "Coral Bubble Brute",
    "Poke Swimmer",
    "Coral King",
    "White Palace Fly",
    "Garmond",
    "Crowman Juror",
    "Crowman Dagger Juror",
    "Crawfather",
    "Tormented Trobbio",
    "Grass Goomba",
    "Grasshopper Fly",
    "Hornet Dragonfly",
    "Dragonfly Large",
    "Grasshopper Slasher",
    "Grasshopper Child",
    "Cloverstag White",
    "Cloverstag",
    "Lilypad Fly",
    "Clover Dancer",
    "Lilypad Trap",
    "Small Crab",
    "Maggots",
    "Sand Centipede",
    "Coral Judge Child",
    "Song Knight",
    "Lifeblood Fly",
    "Abyss Mass",
    "Centipede Trap",
    "Shakra",
    "Garmond_Zaza",
    "Lost Lace"
];
const NORMAL_NAMES = [
    "MossBone Crawler",
    "MossBone Fly",
    "Bone Roller",
    "Mossbone Mother",
    "Bone Goomba",
    "Bone Goomba Large",
    "Bone Flyer",
    "Bone Circler",
    "Bone Crawler",
    "Bone Thumper",
    "Pilgrim 03",
    "Pilgrim 01",
    "Aspid Collector",
    "Pilgrim Moss Spitter",
    "Bone Hunter Throw",
    "Bone Hunter Buzzer",
    "Bone Hunter Tiny",
    "Bone Hunter",
    "Bone Hunter Child",
    "Bone Hunter Fly",
    "Bone Circler Vicious",
    "Bone Flyer Giant",
    "Dock Worker",
    "Bone Beast",
    "Roof Crab",
    "Pilgrim 02",
    "Dock Flyer",
    "Shield Dock Worker",
    "Pilgrim StaffWielder",
    "Tar Slug",
    "Lace",
    "Fields Goomba",
    "Fields Flock Flyers",
    "Dock Bomber",
    "Spine Floater",
    "Pilgrim Fly",
    "Bone Spitter",
    "Pilgrim 04",
    "Song Golem",
    "Mite",
    "Crow",
    "Rhino",
    "Skull King",
    "Bell Goomba",
    "Bell Fly",
    "Pilgrim Fisher",
    "Mitefly",
    "Gnat Giant",
    "Rock Roller",
    "Crypt Worm",
    "Pilgrim Bellthrower Fly",
    "Pond Skater",
    "Rosary Pilgrim",
    "Shellwood Gnat",
    "Shellwood Wasp",
    "Bloom Puncher",
    "Flower Drifter",
    "Stick Insect Flyer",
    "Splinter Queen",
    "Stick Insect Charger",
    "Stick Insect",
    "Bloom Shooter",
    "Farmer Scissors",
    "Farmer Catcher",
    "Farmer Centipede",
    "Spinner Boss",
    "Pilgrim Bell Thrower",
    "Weaver Servitor",
    "Blade Spider Hang",
    "Bone Goomba Bounce Fly",
    "Crowman",
    "Crowman Dagger",
    "Bone Worm",
    "Pilgrim 05",
    "Bone Hopper",
    "Bone Hopper Giant",
    "Shell Fossil Mimic",
    "Dustroach",
    "Roachfeeder Short",
    "Roachfeeder Tall",
    "Roachkeeper",
    "Roachkeeper Chef Tiny",
    "Roachkeeper Chef",
    "Swamp Goomba",
    "Swamp Mosquito",
    "Rosary Thief",
    "Swamp Muckman",
    "Mite Heavy",
    "Slab Prisoner Leaper New",
    "Slab Prisoner Fly New",
    "Slab Fly Mid",
    "Slab Fly Small",
    "Slab Fly Large",
    "Wraith",
    "Citadel Bat",
    "Phantom",
    "Peaks Drifter",
    "Crystal Drifter",
    "Crystal Drifter Giant",
    "Weaver Servitor Large",
    "Bone Hunter Trapper",
    "Bloat Roach",
    "Swamp Drifter",
    "Dustroach Pollywog",
    "Swamp Muckman Tall",
    "Swamp Shaman",
    "Swamp Barnacle",
    "Coral Judge",
    "Blade Spider",
    "Pilgrim Hiker",
    "Coral Conch Shooter",
    "Coral Conch Driller Giant",
    "Last Judge",
    "Seth",
    "Vampire Gnat",
    "Song Pilgrim 01",
    "Song Reed",
    "Pilgrim 01 Song",
    "Song Pilgrim 03",
    "Pilgrim 04 Song",
    "Song Automaton Fly",
    "Pilgrim 02 Song",
    "Pilgrim 03 Song",
    "Song Reed Grand",
    "Swamp Mosquito Skinny",
    "Swamp Ductsucker",
    "Coral Goomba Large",
    "Coral Conch Shooter Heavy",
    "MossBone Crawler Fat",
    "Giant Flea",
    "Arborium Keeper",
    "Pilgrim Stomper Song",
    "Song Handmaiden",
    "First Weaver",
    "Song Threaded Husk",
    "Song Creeper",
    "Understore Mite Giant",
    "Understore Automaton",
    "Pilgrim 03 Understore",
    "Understore Automaton EX",
    "Understore Small",
    "Understore Heavy",
    "Understore Thrower",
    "Understore Poker",
    "Pilgrim Staff Understore",
    "Coral Spike Goomba",
    "Coral Warrior Grey",
    "Coral Conch Stabber",
    "Coral Conch Driller",
    "Zap Core Enemy",
    "Dock Charger",
    "Fields Flyer",
    "Dock Guard Thrower",
    "Tar Slug Huge",
    "Song Pilgrim 02",
    "Song Threaded Husk Spin",
    "Conductor Boss",
    "Farmer Wisp",
    "Wisp Pyre Effigy",
    "Wisp",
    "Song Pilgrim Maestro",
    "Song Administrator",
    "Song Heavy Sentry",
    "Clockwork Dancer",
    "Song Automaton Goomba",
    "Song Automaton 01",
    "Song Automaton Fly Spike",
    "Song Automaton 02",
    "Song Automaton Shield",
    "Song Automaton Ball",
    "Scholar",
    "Scrollkeeper",
    "Lightbearer",
    "Song Scholar Acolyte",
    "Trobbio",
    "Citadel Bat Large",
    "Slab Fly Small Fresh",
    "Slab Fly Broodmother",
    "Silk Boss",
    "Spike Lazy Flyer",
    "Surface Scuttler",
    "Giant Centipede",
    "Bone Worm BlueBlood",
    "Bone Worm BlueTurret",
    "Blue Assistant",
    "Crowman Juror Tiny",
    "Pinstress Boss",
    "Abyss Crawler",
    "Gloomfly",
    "Gloom Beast",
    "Abyss Crawler Large",
    "Void Tendrils",
    "Black Thread Core",
    "Bone Hunter Chief",
    "Hunter Queen",
    "Flower Queen",
    "Coral Goombas",
    "Coral Swimmer Small",
    "Coral Warrior",
    "Coral Flyer Throw",
    "Coral Swimmer Fat",
    "Coral Flyer",
    "Coral Hunter",
    "Coral Big Jellyfish",
    "Coral Brawler",
    "Spike Swimmer",
    "Coral Bubble Brute",
    "Poke Swimmer",
    "Coral King",
    "White Palace Fly",
    "Garmond",
    "Crowman Juror",
    "Crowman Dagger Juror",
    "Crawfather",
    "Tormented Trobbio",
    "Grass Goomba",
    "Grasshopper Fly",
    "Hornet Dragonfly",
    "Dragonfly Large",
    "Grasshopper Slasher",
    "Grasshopper Child",
    "Cloverstag White",
    "Cloverstag",
    "Lilypad Fly",
    "Clover Dancer",
    "Lilypad Trap",
    "Small Crab",
    "Maggots",
    "Sand Centipede",
    "Coral Judge Child",
    "Song Knight",
    "Lifeblood Fly",
    "Centipede Trap",
    "Shakra",
    "Garmond_Zaza",
    "Lost Lace"
];


function compareEnemyNames() {
    const output = document.getElementById("output").value.trim();
    if (!output) {return;}

    let json;
    try {json=JSON.parse(output)} catch(e) {return;}

    const mode = json.playerData.permadeathMode;
    // console.log(mode);
    if(mode == 0) {
        const gotNames = (json.playerData?.EnemyJournalKillData?.list || [])
        .map(x => x.Name);

        const foundSet = new Set(gotNames);
        const missing = NORMAL_NAMES.filter(name => !foundSet.has(name));
        showMissing(missing);
    } else if(mode == 1 || mode == 2) {
        const gotNames = (json.playerData?.EnemyJournalKillData?.list || [])
        .map(x => x.Name);

        const foundSet = new Set(gotNames);
        const missing = ALL_NAMES.filter(name => !foundSet.has(name));
        showMissing(missing);
    } else {
        return;
    }
    
    
    
}


function showMissing(list) {
    const container = document.getElementById("result");
    container.innerHTML = "";

    if(list.length == 0) {
        container.textContent = "No missing enemies";
        return;
    }

    list.forEach(name => {
        const id = "chk_" + name.replace(/\s+/g, "_");
        const div = document.createElement("div");
        div.innerHTML = `
            <label>
                <input type="checkbox" class="misschk" value="${name}">
                ${name}
            </label>
        `;
        container.appendChild(div);
    });
}


function selectAll() {
    const selectAllcheck = document.getElementById("selectAll");
    const misschk = document.querySelectorAll(".misschk");
    
    const isChecked = selectAllcheck.checked;
    if(isChecked) {
        misschk.forEach(i=>i.checked=true);
    } else {
        misschk.forEach(i=>i.checked=false);
    }
}
document.getElementById("selectAll").onclick = selectAll;


function applyBackEnemies() {
    const kills = document.getElementById("kills").value;
    if (kills != "default") {
        killnum = parseInt(kills);
        if(isNaN(killnum)) {
            return;
        }

        const selected = Array.from(document.querySelectorAll(".misschk")).filter(ch=>ch.checked).map(ch=>ch.value);
        if(selected.length == 0) {return;}

        const output = document.getElementById("output").value.trim();
        if (!output) {return;}
        let json;
        try {json=JSON.parse(output)} catch(e) {return;}

        if (!json.playerData) {json.playerData = {};}
        if (!json.playerData.EnemyJournalKillData) {json.playerData.EnemyJournalKillData = {};}
        if (!Array.isArray(json.playerData.EnemyJournalKillData.list)) {
            json.playerData.EnemyJournalKillData.list = [];
        }

        const msg = `Are you sure to add these enemies to the journal with the kill count of ${killnum}?`;
        if (!confirm(msg)) {
            return;
        }

        const list = json.playerData.EnemyJournalKillData.list;


        selected.forEach(name => {
            list.push({
                Name: name,
                Record: {
                    Kills: killnum,
                    HasBeenSeen: true
                }
            });
        });

        document.getElementById("output").value = JSON.stringify(json, null, 2);

        const checkedCheckboxes = document.querySelectorAll(".misschk:checked");

        checkedCheckboxes.forEach(checkbox => {
            if (checkbox.parentNode) {
                checkbox.parentNode.removeChild(checkbox);
            }
            
        });
            
    } else {
        return;
        //I'll write the logic later.
    }
}


