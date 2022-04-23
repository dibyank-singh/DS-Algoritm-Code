//Binary Search is a search algorithm that finds the position of a target value within a sorted array

// Time Complexity 
// The time complexity of the binary search algorithm is O(log n).
// The best-case time complexity would be O(1) when the central index would directly match the desired value.


var data = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]


let finddata = function (array, val) {

    let min = 0;
    let max = array.length - 1;

    while (min <= max) {

      let  midindex = Math.floor((min + max) / 2)
        if (array[midindex] < val) {
            min = midindex + 1
        }
        else if (array[midindex] > val) {
            max = midindex - 1
        }
        else {
            return midindex;
        }
    } return -1;
}
const res = finddata(data, 4)
console.log(res);

