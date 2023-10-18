class ClueInput{
    
    constructor(parentNode){
       this.parentNode = parentNode;
    }

    _onClickEventMenu(evt){
       console.log(evt.target.getAttribute("data-value"));
    }

    _onBtnSend(evt){
        
    }

    _onChangeInput(evt){
        this._removeList ();
    }

    _createList (list=['1','2','3','4','5']) {
        let listNode = this.parentNode.querySelector(".clue-menu")
        
        for (const itemText of list) {
            //create list item
            let listItem = document.createElement("li");
            listItem.classList.add("px-3","py-2");
            listItem.setAttribute("data-value",itemText);
            listItem.innerText = itemText;
            listNode.appendChild(listItem);
            listItem.addEventListener("click",this._onClickEventMenu.bind(this));  
            
        }
      
        return listNode;
    }

    _removeList () {
        let listNode = document.querySelector("ul.clue-menu");
        let arrayOfItems= Array.prototype.slice.call(listNode.childNodes);
        for(const item of arrayOfItems){
            item.removeEventListener("click",this._onClickEventMenu.bind(this));
            listNode.removeChild(item);
        }
    }

    createFramework () {
        //a container
        let container = document.createElement("section");
        container.classList.add("clue-container", "d-flex", "flex-column", "justify-content-center", "align-items-start");
        //unordered list (empty)
        let listNode = document.createElement('ul');
        listNode.classList.add ("clue-menu","p-0","m-0","d-block","w-100","rounded-2");
        //a html input
        let textInput = document.createElement("input");
        textInput.setAttribute("type","text");
        textInput.classList.add("clue-input");
        //a button with "send" title
        let btnSend = document.createElement("button");
        btnSend.setAttribute("type","button");
        btnSend.classList.add("clue-send", "m-2", "rounded-2");
        btnSend.innerText = "Select"
        //button and input wrapper
        let btnInpWrapper = document.createElement("div");
        btnInpWrapper.classList.add("d-flex", "flex-row", "justify-content-start", "align-items-center");
        //event listener for a button
        btnSend.addEventListener('click',this._onBtnSend.bind(this));
        //when user typing something into the Input
        textInput.addEventListener("input",this._onChangeInput.bind(this))
        //asign child elems
        btnInpWrapper.appendChild(textInput);
         btnInpWrapper.appendChild(btnSend);
        container.appendChild(btnInpWrapper);
      
        this.parentNode.appendChild(container);
          this.parentNode.appendChild(listNode)
        
    }

    addClueMenu (values=["ab","cd","ef"]) {
        let clues = this._createList(values);
        let container = this.parentNode.querySelector(".clue-container");
        container.appendChild(clues);
    }



    

}

window.onload=function(){
    let pNode = document.querySelector(".inserted_clue");
    let clue = new ClueInput(pNode);
    clue.createFramework();
    clue._createList();
    
}