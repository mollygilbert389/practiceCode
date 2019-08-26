var length = 20;
var array = generate(length);

console.log(array)
console.log()

function generate(length) {
    var arr = [];
    for (var i=0;i<length;i++){
        arr.push(Math.floor(Math.random() * length))
    }
    return arr;
}

function selectionSort(array){
    var length = array.length;
    var min;
    for (var i=0;i<length;i++) {
        min = i;
        for (var j=i+1;j<length;j++){
            if(array[j] < array[min]){
                min = j
            }
        }
        if (i !=min) {
            var temp = array[i];
            array[i] = array[min]
            array[min] = temp
        }
    }
    return array
}