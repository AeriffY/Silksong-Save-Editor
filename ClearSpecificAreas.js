function clear() {
    const container = document.getElementById("result");
    container.innerHTML = "";
}

const fileInput = document.getElementById('fileInput');
fileInput.addEventListener('change', function() {
        clear();
});
const outputTextarea = document.getElementById("output");
fileInput.addEventListener('change', function(){
    outputTextarea.value = "";
});


