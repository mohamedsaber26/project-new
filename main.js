function getInputValue(){
    const value = document.querySelector(".number-input").value
    const heading =  document.querySelector("p")
    heading.textContent = value /39.37
}
document.querySelector("button").onclick = getInputValue



