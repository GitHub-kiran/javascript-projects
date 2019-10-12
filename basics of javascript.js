// Type corsion 
temp = 10 + "kkk";
temp = "10kkk"     // if two variable's type is not compatible then js converts all variables type to string and concate it


// confuse ? assign Nan
temp2 = "str1" - "str2";
temp2 = NaN       // if js is not able to understand that what is the meaning of statement, then it returns NaN


// type hoisting, if we have only declared the variable and trying to rint the value, then we will get undefined(not error) only in var and let
let temp3
console.log(temp3)   // undefined


//function declaration are hoisted
test()  // no error
function test() {
    console.log("undef declaration...");
}

// are hoisted
test1()  // will give you error
let v = function test1() {
    console.log("undef definition...");
}

































