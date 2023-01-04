window.onload = () => {
   generateCourses();
}

const generateCourses = () => {
    
    if(document.querySelector(`#htmlcourse`) == null) {console.error("htmlcourse id missing");createToast("toastAlertMissingCourse1","Missing","Missing HTML");return}
    const inputfield = document.querySelector(`#htmlcourse`);

    if(document.querySelector(`#csscourse`) == null) {console.error("csscourse id missing");createToast("toastAlertMissingCourse2","Missing","Missing CSS");return}
    const inputfield2 = document.querySelector(`#csscourse`);

    if(document.querySelector(`#jscourse`) == null) {console.error("jscourse id missing");createToast("toastAlertMissingCourse3","Missing","Missing JS");return}
    const inputfield3 = document.querySelector(`#jscourse`);

    //                        <li><a class="dropdown-item" href="#">Action</a></li>


    for(file of htmlcourse)
    generateListEntry(inputfield,file,file);

    
}


const generateListEntry = (appendElement,text,path) => {
    if(path == undefined || path == null) return;

    const li = document.createElement("li");
    let el = document.createElement("a");
    el.classList.add("dropdown-item");
    el.href = `lessons/html/${path}.html`;
    el.innerText = text;

    li.appendChild(el);
    appendElement.appendChild(li);
}


const sendToast = (toastID) => {
    let toastElement = document.querySelector(`#${toastID}`)

    const toast = new bootstrap.Toast(toastElement)
    toast.show()
}

const createElement = (elementTag,...classes) => {
    let element = document.createElement(elementTag);
    if(classes.length > 0)
        element.classList.add(...classes);
    return element;
} 

const createToast = (toastID,toastTitle,toastMessage) => {

    if(document.querySelector("#"+toastID) != null) {deleteRecursive(document.querySelector("#"+toastID))}

    if(toastTitle == undefined || toastTitle == null) toastTitle = "Unkown Title";
    if(toastMessage == undefined || toastMessage == null) toastMessage = "Unkown Error";

    let toastContainer = document.querySelector("#toastContainer");
    if(!toastContainer) {console.error("No Toast container found");return}


    let toastWrapper = createElement("div","toast");
        toastWrapper.setAttribute("role","alert");
        toastWrapper.setAttribute("aria-live","assertive");
        toastWrapper.setAttribute("aria-atomic","true");
        toastWrapper.id = toastID;


    let toastHeader = createElement("div","toast-header");
    let toastHeaderText = createElement("strong","me-auto");
        toastHeaderText.innerText = toastTitle;
    let toastHeaderCloseButton = createElement("button","btn-close");
        toastHeaderCloseButton.setAttribute("type","button");
        toastHeaderCloseButton.setAttribute("data-bs-dismiss","toast");
        toastHeaderCloseButton.setAttribute("aria-label","Close");
    let toastBody = createElement("div","toast-body");
        toastBody.innerText = toastMessage;


        toastWrapper.appendChild(toastHeader);
        toastHeader.appendChild(toastHeaderText);
        toastHeader.appendChild(toastHeaderCloseButton);
        toastWrapper.appendChild(toastBody);
        toastContainer.appendChild(toastWrapper);

        sendToast(toastID);


    /*
        <div class="toast" role="alert" aria-live="assertive" aria-atomic="true"  id="toastError">
            <div class="toast-header">
                <strong class="me-auto">MOIN'ZEN</strong>
                <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
            </div>
            <div class="toast-body">
            Ooops, there was an unknown Error!
            </div>
      </div>
      */

}

const deleteRecursive = (element) => {
    element.firstChild.remove();
    if(element.children.length > 0) {
        deleteRecursive(element);
    } else
    element.remove();
}