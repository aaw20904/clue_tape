

window.onload=function(){
    let pNode = document.querySelector(".inserted_clue");
    let clue = new ClueInput(pNode,[
                                    { key: 1, value: "Oliver" },
                                    { key: 2, value: "Harry" },
                                    { key: 3, value: "Jack" },
                                    { key: 4, value: "Charlie" },
                                    { key: 5, value: "Noah" },
                                    { key: 6, value: "Thomas" },
                                    { key: 7, value: "William" },
                                    { key: 8, value: "James" },
                                    { key: 9, value: "Michael" },
                                    { key: 10, value: "George" },
                                    { key: 11, value: "Leo" },
                                    { key: 12, value: "Isla" },
                                    { key: 13, value: "Olivia" },
                                    { key: 14, value: "Amelia" },
                                    { key: 15, value: "Lily" },
                                    { key: 16, value: "Sophie" },
                                    { key: 17, value: "Mia" },
                                    { key: 18, value: "Ava" },
                                    { key: 19, value: "Ella" },
                                    { key: 20, value: "Florence" },
                                    { key: 21, value: "Emily" },
                                    { key: 22, value: "Anya" },
                                    { key: 23, value: "Maisie" },
                                    { key: 24, value: "Isabella" },
                                    { key: 25, value: "Evie" },
                            ], (x)=>{
                                alert(JSON.stringify(x));
                            });
    clue.createFramework();
    //clue._createList();
   //
    
}