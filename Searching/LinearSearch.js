// A linear search is the simplest method of searching a data set.
//  Starting at the beginning of the data set, each item of data is examined until a match is made.
//  Once the item is found, the search ends.

// time complexity is of the order of n O(n)


let list=[2,3,4,5,6,7]

var findnum=function(num,values){

    for(items of num){
        // console.log(items)
        if(items[num]==values){
            return true; 
        }

    }
    return false;

}
let res=findnum(list ,2) 
console.log(res)

// This is simple problem based on linear search , Time complexity is O(n) for using one loop ..


// Using array of objects

let data=[{name:"dibyank",Job:"Mern Stack"},
{name:"vijay",job:"frontend"},
{name:"ashutosh", job:"backend"},
{name:"ravi",job:"testing"}]

var finddata=function(data,val){
    for(item of data){
        if(item["name"]===val){
            return true
        }
    } return false;

}
const result=finddata(data,"dibyank")
console.log(result)
