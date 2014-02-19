#!/usr/bin/env node

/*
 *Functions
 */

function add(a, b) {
    return a + b;
}

function power(base, exponent) {
    var result = 1;
    for (var count = 0; count < exponent; count++)
	result *= base;
    return result;
}

console.log("3+5 is: " + add(3, 5));
console.log("3 to the 3 is: " + power(3, 3));

/*
 * Scope
 */

function scope1() {
    
    var variable = "top-level";

    function printVariable() {
	console.log("inside printVariable, the variable holds '" + variable + 
		    "'.");
    }

    function test() {
	var variable = "local";
	console.log("inside test, the variable holds '" + variable + "'.");
	printVariable();
    }

    test();
}

scope1();


// An example of closure!
var variable = "top-level";
function parentFn() {

    var variable = "local";
    function childFn() {
	console.log(variable);
    }

    childFn()

}

parentFn();

var variable = "top-level";
function parentFunction() {
    var variable = "local";
    function childFunction() {
	console.log(variable);
    }
    return childFunction;
}
var child = parentFunction();
child();

// You can even make a function to make a function

function makeAddFunction(amount) {
    function add(number) {
	return number + amount;
    }
    return add;
}

var addTwo = makeAddFunction(2);
console.log(addTwo(5));

/* 
 * Recursion
 */

function findSequence(goal) {
    function find(start, history) {
	if (start == goal)
	    return history;
	else if (start > goal)
	    return null;
	else
	    return find(start + 5, "(" + history + " + 5)") ||
	           find(start * 3, "(" + history + " * 3)");
    }
    return find(1, "1");
}

console.log(findSequence(24));

/*
 * Find the first N primes
 */

function firstKPrimes(k) {
    function prime(n) {
	for (var i = 2; i < n; i++) {
	    if (n%i == 0)
		return false;
	    else
		return true;
	}
    }
    var result = [];
    var cur = 2;
    while (result.length < k) {
	//console.log("entered the loop once");
	if (prime(cur)) {
	    result.push(cur);
	    //console.log(cur + "\n");
	}
	cur++;
    }
    return result;
}

var array = firstKPrimes(24);
console.log(array.join(','));
