
//OOP
/**
 * Created by simba on 21/07/2016.
 */

function Car() {
    var speed = 100;

    this.setSpeed = function (d) {
        return speed = d;
    };
    this.getSpeed = function () {
        return speed;
    };
}

var myCar = new Car();

myCar.setSpeed(400);
//console.log(myCar.getSpeed());


var module = {
    data: 2,
    d: function (d) {
        var name;
        name = "Saminu Salisu " + d;
        return name;
    }
};

//console.log(module.d(40));


//determine array location
function findArrayLoc(arr, targ) {
    for (var i in arr) {
        if (arr[i] == targ) {
            //console.log([i])
            return [i];
        }
    }
    return undefined;
}

//test = findArrayLoc(['saminu','umar','bj','olowo'],'bj');
//console.log(test);

//add values of an array
function addArrayVal(arr) {
    var total = 0;
    for (var item in arr) {
        total += arr[item]
    }
    return total;
}

//test = addArrayVal([5,5,5,5]);
//console.log(test);

//concate two arrays
function concateArray(arr, arr2) {
    var total;
    total = arr.concat(arr2);
    return total;
}

//test = concateArray([1, 4, 5, 3], [6, 8, 9, 5, 4]);
//console.log(test);

//add value to an array
function addToArray(arr, value) {
    var total;
        total = arr.push[value];
    return total;
}

function removeArray(arr, value){
    for(i in arr){
        if(arr[i] == value){
             arr.splice(i,1)
        }
    }
    return arr;
}

//test = removeArray(['saminu','yaman','mallam','maman','danteni','usman'],'yaman')
//console.log(test);


// creating native methods

String.prototype.repitify = String.prototype.repitify || function(times){
    var str = '';
    for(var i = 0; i < times ; i++){
        str += this + ' ';
    }
    return str;
};
//
var str_example = "Saminated",
test = str_example.repitify(5);

console.log(test);

//console.log(typeof test);

//closures
var nodes = document.getElementsByTagName('button');

for (var i=0; i<nodes.length; i++){
    nodes[i].addEventListener('click', (function(i){
        return function () {
            console.log('The button clicked is :' + i)
        }
    })(i))
}


//test variable has array

var myArray = [];

if(myArray instanceof Array){
    console.log('Yes its an array')
} else {
    console.log('Not an array')
}

//prime function algorithm

function isPrime(d){

}