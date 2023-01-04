window.onload = () => {
    let button = document.createElement("a");
    button.id = "returnHome";
    button.classList.add("btn","btn-primary");
    button.setAttribute("type","button");
    button.href = "../../";
    button.innerText = "Go home"

    document.body.appendChild(button);
}