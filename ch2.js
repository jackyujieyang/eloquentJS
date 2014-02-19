#!/usr/bin/env node

/*
There are 6 basic types of values:
numbers,
strings,
booleans,
objects,
functions,
undefined values.
*/

// printTypeOf
function pt(value) {
    console.log("The type of " + value + " is: " + typeof value);
}

pt(37);
pt(3.14);
pt(Math.LN2);
pt(Infinity);
pt(NaN);

pt("");
pt("bla");
pt(typeof 1);

pt(true);
pt(false);

pt(undefined);
//pt(blabla);

pt({a:1});
pt([1,2,3]);
pt(new Date());
pt(null);

pt(function(){});
pt(Math.sin);
