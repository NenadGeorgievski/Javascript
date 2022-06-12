let str1 = "How's it going?";

let str2 = "How's%20it%20going%3F";

console.log(encodeURIComponent(str1));

console.log(decodeURIComponent(str2));

let uri = "https://basescripts.com?=Hello World";

console.log(encodeURI(uri));