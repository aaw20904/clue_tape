class ClueInput{
    
    constructor(parentNode){
       this.parentNode = parentNode;
    }

    _onClickEventMenu(evt){
       console.log(evt.target.getAttribute("data-value"));
    }

    _onBtnSend(evt){
       
    }

    _createList (list=['1','2','3']) {
        let listNode = document.createElement('ul');
        for(const item of list){
            //create list item
            let listItem = document.createElement("li");
            listItem.classList.add("px-3","py-2");
            listItem.setAttribute("data-value",item);
            listItem.innerText = item;
            listNode.appendChild(listNode);
            listItem.addEventListener("click",this._onClickEventMenu);
        }

        return listNode;
    }

    _removeList () {
        let listNode = this.parentNode.querySelector("ul");
        for(const item of listNode.childNodes){
            item.removeEventListener(this._clickEventMenu);
            listNode.removeChild(item);
        }
    }

    createFramework () {
        //a container
        let container = document.createElement("section");
        container.classList.add("clue-container", "d-flex", "flex-column", "justify-content-center", "align-items-start");
        //a html input
        let textInput = document.createElement("input");
        textInput.setAttribute("type","text");
        textInput.classList.add("clue-input");
        //a button with "send" title
        let btnSend = document.createElement("button");
        btnSend.setAttribute("type","button");
        btnSend.classList.add("clue-send", "m-2", "rounded-2");
        //button and input wrapper
        let btnInpWrapper = document.createElement("div");
        btnInpWrapper.classList.add("d-flex", "flex-row", "justify-content-start", "align-items-center");
        //asign child elems
        btnInpWrapper.appendChild(textInput,btnSend);
        container.appendChild(btnInpWrapper);
        this.parentNode.appendChild(container);
        //event listener for a button
        btnSend.addEventListener(this._onBtnSend);
        
    }

    addClueMenu (values=["ab","cd","ef"]) {
        let clues = this._createList(values);
        let container = this.parentNode.querySelector(".clue-container");
        container.appendChild(clues);
    }



    

}

window.onload=function(){
    let pNode = document.querySelector(".clue-container");
}