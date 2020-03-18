function printTriangle(){
    let str ="# ";
    let space ='     ';
    for (let i = 0; i < 5; i++){
        console.log(space + str);
        space = space.slice(0, -1);
        str+="# ";
    }
}

printTriangle();
