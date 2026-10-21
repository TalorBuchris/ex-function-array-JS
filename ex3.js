let family = { parents: {}, children: [{ name: "Ali" }, { name: "Lea" }, { name: "Mona" }] };

printFamily(family);

function printFamily(family){
    console.log("The third boy: " + family.children[2].name);
    console.log(`All the children:`);
    let text = "";
    for(let i=0; i<family.children.length; i++){
        text += family.children[i].name + ", "
    }
    console.log(text);
    
}