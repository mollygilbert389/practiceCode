var arr = [1, 23, 43, 56, 77, 89, 211, 212, 789, 972, 1001, 4567, 4599, 83784]

function binarySearch(arr, searchElement) {
    var currentElement;
    var currentIndex;
    var maxIndex = arr.length-1;
    var minIndex = 0;

    while(minIndex <= maxIndex) {
        currentIndex = Math.floor((minIndex+maxIndex)/2)
        currentElement = arr[currentIndex]

        if (currentElement < searchElement) {
            minIndex = currentIndex+1;
        }

        else if(currentElement > searchElement) {
            maxIndex = currentIndex-1;
        }

        else if (currentElement == searchElement) {
            return currentIndex
        }
    }
    return false;
}

console.log(binarySearch(arr, 1001))