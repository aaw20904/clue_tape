

window.onload=function(){
    let pNode = document.querySelector(".inserted_clue");
    let clue = new ClueInput(pNode,[
                                    { key_x: 1, value_x: "Люся" },
                                    { key_x: 2, value_x: "Harry" },
                                    { key_x: 3, value_x: "Jack" },
                                    { key_x: 4, value_x: "Charlie" },
                                    { key_x: 5, value_x: "Noah" },
                                    { key_x: 6, value_x: "Thomas" },
                                    { key_x: 7, value_x: "William" },
                                    { key_x: 8, value_x: "James" },
                                    { key_x: 9, value_x: "Michael" },
                                    { key_x: 10, value_x: "George" },
                                    { key_x: 11, value_x: "Leo" },
                                    { key_x: 12, value_x: "Isla" },
                                    { key_x: 13, value_x: "Olivia" },
                                    { key_x: 14, value_x: "Amelia" },
                                    { key_x: 15, value_x: "Lily" },
                                    { key_x: 16, value_x: "Sophie" },
                                    { key_x: 17, value_x: "Mia" },
                                    { key_x: 18, value_x: "Ava" },
                                    { key_x: 19, value_x: "Ella" },
                                    { key_x: 20, value_x: "Florence" },
                                    { key_x: 21, value_x: "Emily" },
                                    { key_x: 22, value_x: "Anya" },
                                    { key_x: 23, value_x: "Maisie" },
                                    { key_x: 24, value_x: "Isabella" },
                                    { key_x: 25, value_x: "Evie" },
                            ], (x)=>{
                                alert(JSON.stringify(x));
                            });
    clue.createFramework();
    //clue._createList();
   //
    
}