var arr = new Array(10);

fillArray();
replaceFromArray();
addToArray();

arr.forEach(element => {
    console.log(element); 
})


function fillArray(){
    for (let i=0; i<arr.length; i++){
        arr[i]=Math.round((Math.random() * (100-(-100))-100));
    }
}


function replaceFromArray(){
    for (let i=0; i<arr.length; i++){
        if (arr[i]<0){
            arr[i]=0
        }
    }
}


function addToArray(){
    let count = 0;
    for (let i=0; i<arr.length; i++){
        if (arr[i]==0){
            count++;
            if (count==2){
                arr.splice(i+1, 0, -1);
                count=0;
            }
        }
    }
}



