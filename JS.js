// JavaScript source code

function subscribe() {
    let user = document.getElementsByTagName("input")[0].value;
    let storage = getStorage();
    if (user == "")
        alert("Inserire un username");
    else {
        try {
            storage.setItem("username", user);
        } catch (e) {
            alert("Impossibile salvare i dati richiesti");
        }
    }
}

function getStorage() {
    let storageName = "localStorage";
    try {
        return (storageName in window && window[storageName] != null) ? window[storageName] : null;
    } catch (e) {
        return null;
    }
}


function deleteAll() {
    let storage = getStorage();
    try {
        storage.clear();
    } catch (e) {
        alert("Impossibile cancellare le informazioni");
    }
}

function welcome() {
    let storage = getStorage();
    let subButton = document.getElementById("subscribeButton");
    let unsubButton = document.getElementById("unsubscribeButton");
    if (storage.username != null) 
        alert("Che piacere rivederti " + storage.username + "!");  
}


function whichButton() {
    let storage = getStorage();
    let subButton = document.getElementById("subscribeButton");
    let unsubButton = document.getElementById("unsubscribeButton");
    if (storage.username != null) {
        subButton.style.visibility = "hidden";
    } else {
        unsubButton.style.visibility = "hidden";
    }
}