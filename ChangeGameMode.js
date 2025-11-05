function updatePermadeathMode() {
        const selector = document.getElementById('permadeathModeSelector');
        const outputTextarea = document.getElementById('output');
        if(!outputTextarea) {
            return;
        }

        const jsonString = outputTextarea.value.trim();
        if(!jsonString) {
            return;
        }

        try {
            let currentData = JSON.parse(jsonString);
            const newModeValue = parseInt(selector.value);
            if (currentData && currentData.playerData) {
                currentData.playerData.permadeathMode = newModeValue;
                outputTextarea.value = JSON.stringify(currentData, null, 2);
            } else {
                return;
            }

        } catch(e) {
            alert("permadeathModeSelector error: " + e.message);
        }
    }

function syncSelectorWithTextarea() {
    const outputTextarea = document.getElementById('output');
    const selector = document.getElementById('permadeathModeSelector');
    const jsonString = outputTextarea.value.trim();

    try {
        const currentData = JSON.parse(jsonString);
        if (currentData && currentData.playerData && currentData.playerData.permadeathMode !== undefined) {
            const currentMode = currentData.playerData.permadeathMode;
            selector.value = currentMode.toString();
        }
    } catch(e) {
        console.error("Sync failed: ", e);
    }
}