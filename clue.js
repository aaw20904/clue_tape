

window.onload=function(){
    let pNode = document.querySelector(".inserted_clue");
    let clue = new ClueInput(pNode,[
                                    { key_x: 1, value: "Oliver" },
                                    { key_x: 2, value: "Harry" },
                                    { key_x: 3, value: "Jack" },
                                    { key_x: 4, value: "Charlie" },
                                    { key_x: 5, value: "Noah" },
                                    { key_x: 6, value: "Thomas" },
                                    { key_x: 7, value: "William" },
                                    { key_x: 8, value: "James" },
                                    { key_x: 9, value: "Michael" },
                                    { key_x: 10, value: "George" },
                                    { key_x: 11, value: "Leo" },
                                    { key_x: 12, value: "Isla" },
                                    { key_x: 13, value: "Olivia" },
                                    { key_x: 14, value: "Amelia" },
                                    { key_x: 15, value: "Lily" },
                                    { key_x: 16, value: "Sophie" },
                                    { key_x: 17, value: "Mia" },
                                    { key_x: 18, value: "Ava" },
                                    { key_x: 19, value: "Ella" },
                                    { key_x: 20, value: "Florence" },
                                    { key_x: 21, value: "Emily" },
                                    { key_x: 22, value: "Anya" },
                                    { key_x: 23, value: "Maisie" },
                                    { key_x: 24, value: "Isabella" },
                                    { key_x: 25, value: "Evie" },
                            ], (x)=>{
                                alert(JSON.stringify(x));
                            });
    clue.createFramework();
    //clue._createList();
   //
    
}