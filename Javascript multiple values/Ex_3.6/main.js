//Manipulating an array

const theList = ['Laurence', 'Svekis', true, 35, null, undefined, {test: 'one', score: 55}, ['one', 'two']];

theList.shift();
theList.pop();
console.log(theList);
theList.splice(0,0,'First');
console.log(theList);
theList[3] = "Hello world";
console.log(theList);
theList[2] = "MIDDLE";
console.log(theList);
theList[theList.length - 1] = "LAST";
console.log(theList);

theList.splice(4,2);
console.log(theList);