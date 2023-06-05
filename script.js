const h2 = document.createElement("h2");
h2.textContent = "This content added by Javascript";
document.querySelector("body").appendChild(h2);
function clickMe() {
    alert("This is absolutely exciting to do! And I am still learning. Can't wait!, I will make a second Button Which counts numbers up to 10!")
};
function countNumbers() {
    for (let i = 0; i <= 10; i++) {
      alert(i);
    }
};
