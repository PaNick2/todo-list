// Create a "close" button and append it to each list item
var inp = document.getElementById("myInput")
inp.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        newElement();
        console.log("enter")
    }
})

const xCreator = () => {
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    return span;
}

const addDelOnClick = () => {
    var close = document.getElementsByClassName("close");
    for (var i = 0 ; i < close.length; i++) {
        close[i].onclick = function() {
            var div = this.parentElement;
            div.style.display = "none"
        }
    }   
}

var myNodeList = document.getElementsByTagName("LI");
for (var i = 0; i < myNodeList.length; i++) {
    myNodeList[i].appendChild(xCreator());
}


addDelOnClick();

var list = document.querySelector("UL");
list.addEventListener("click", function(event) {
    if (event.target.tagName === "LI") {
        event.target.classList.toggle("checked");
    }
})

function newElement() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("myInput").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === ""){
        alert("You must write something")
    } else {
        document.getElementById("myUL").appendChild(li);
    }
    document.getElementById("myInput").value = "";

    li.appendChild(xCreator());

    addDelOnClick()

}
