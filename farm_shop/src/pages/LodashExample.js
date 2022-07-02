import React from "react";
import _ from "lodash";
// import { useEffect } from 'react';


export default function LodashExample() {

// Chunk Method
var numbers = [1, 2, 3, 4];
var chunkMethod = '';

chunkMethod = _.chunk(numbers, 2);
console.log('Chunk',chunkMethod);

// Compact Method

var compactNumbers = [1, false, 3, 0];
var compactValue = '';

compactValue = _.compact(compactNumbers);
console.log('Compact',compactValue);

//Difference

var diffValue = [1, 2, 3, 4];
var diffMethod = '';

diffMethod = _.difference(diffValue, [2]);
console.log('Difference',diffMethod);

//Drop

var dropNo = [1, 2, 3, 4];
var dropMethod = '';
var dropMethod1 = '';

dropMethod = _.drop(dropNo);
console.log('Drop', dropMethod);

dropMethod1 = _.drop(dropNo, 3);
console.log('Drop-1', dropMethod1);

//Zip & Unzip

var resultZip = '';

var Zipresult = _.zip(['a', 'b', 'c'], [1, 2, 3], ['Monday', 'Tuesday', 'Wednesday']);
console.log('Zip', Zipresult);

resultZip = _.unzip(Zipresult);
console.log('Unzip', resultZip);

//Join

var listValue = [1, 2, 3, 4, 5, 6];

var listMethod = _.join(listValue,'_')
console.log('List', listMethod);

//Union

var unionValue = [1, 2, 3, 4]

var unionMethod = _.union(unionValue, [1,4]);
console.log('Union', unionMethod);

var unionMethod2 = _.union(unionValue, [1, 8, 5]);
console.log('Union1', unionMethod2);

//////////////////////////////////////////////////////
///////////////Collection Methods////////////////////

//CountBy

var collectionValue = [1.1, 2.1, 2.3, 2.9, 1.0, 1.8, 1.5, 1.3, 3.0, 3]
 
var collectMethod = _.countBy(collectionValue, Math.floor);
console.log('Collection', collectMethod);

//filter

var filterValue = [
    { 'user': 'Joe', 'age': 22, 'active': true },
    { 'user': 'Jake', 'age': 40, 'active': false }
 ];
  
 var filterMethod = _.filter(filterValue, function(user) { return user.active; });
 console.log('Filter',filterMethod);

 //Map Method

 var list = [1, 2, 3, 4];
 var users = [
    { 'user': 'Joe', 'age': 24 },
    { 'user': 'Robert', 'age': 40 }
 ];
 var methodTwo = '';

 var methodOne = _.map(list, function square(n) {
    return n * n;
 });
 console.log('Map', methodOne);
 
 methodTwo = _.map(users, 'user');
 console.log('Map1', methodTwo);

 //KeyBy

 var keyValue = [
    { 'dir': 'left', 'code': 97 },
    { 'dir': 'right', 'code': 100 }
 ];
  
 var keyMethod = _.keyBy(keyValue, 'code');
 console.log('Key', keyMethod);

//Size
var valueSize = '';
var methodsize = '';

var sizeVal = _.size([1, 2, 3, 9, 5, 2]);
console.log('Size', sizeVal);
 
valueSize = _.size({ 'a': 1, 'b': 2, 'c': '9' });
console.log('Size1', valueSize);
 
methodsize = _.size('montreal');
console.log('Size2', methodsize);

///////////////////////////////////
///////////Date Method////////////

//Date

var datValue = _.now();
console.log('Date', datValue);

/////////////////////////////////
/////////Function Method////////

//Delay

var startTimestamp = new Date().getTime();

var add = function(a,b) {
   console.log('Delay', (a + b));
   var endTimestamp = new Date().getTime();
   console.log('Delay2',((endTimestamp - startTimestamp)) + ' ms');   
};
_.delay(add, 10000, 1000, 10);


//Fliped

var flipped = _.flip(function() {
    return _.toArray(arguments);
 });
  
 console.log('Flip', flipped(1, 2, 3, 4));
 
// /Spread

var say = _.spread(function(who, what) {
    return who + ' says ' + what;
 });
 console.log('Spread:', say(['Joe', 'Hi']));

 //Clone

 var objects = [2, 5, 2, 3];
var shallowCopy = _.clone(objects);

console.log('Clone', shallowCopy[0] === objects[0]);

//cloneDeep

var cloneValue = [{ 'a': 1 }, { 'b': 2 }];
var deepCopy = _.cloneDeep(cloneValue);

console.log(deepCopy[0],'Deepcopy', deepCopy)
console.log(cloneValue[0],'cloneValue', cloneValue)
console.log('CloneDeep', deepCopy[0] === cloneValue[0]);


//Conform
var object = { 'a': 1, 'b': 2 };
 
console.log('Conform:', _.conformsTo(object, { 'a': function(n) { return n > 0; } }));
console.log('Conform2:',_.conformsTo(object, { 'b': function(n) { return n > 2; } }));
 


///Boolean

console.log('Boolean', _.isBoolean(true));
console.log('Boolean2', _.isBoolean(null));

//Empty

console.log('Empty', _.isEmpty(1));
console.log('Empty2', _.isEmpty([1, 2, 3]));

//Integer

console.log('Integer', _.isInteger(3));
console.log('Integer2', _.isInteger('3'));

//////////////////////////////////
///////////Math Methods///////////
/////////////////////////////////

//Ceil

console.log('Ceil', _.ceil(5.004));
console.log('Ceil2', _.ceil(5.004,2));

//Mean

var meanvalues = [11, 12, 13, 14, 15, 16];
var meanMethod = _.mean(meanvalues);

console.log('Mean', meanMethod);

//////////////////////////////////
///////////Numbers///////////////

//Clamp      (Doubt)

var valuClamp = '';
var clampVal = _.clamp(-1, -2, 2);

console.log('Clamp', clampVal);

valuClamp = _.clamp(1, -2, 2);
console.log('Clamp2', valuClamp);


//Random

var ranValue = _.random( 1, 4);
var randomValue = '';
console.log('Random', ranValue);

randomValue = _.random(1, 4, true);
console.log('Random2', randomValue);


//inRange

var rangeValue = _.inRange(-12, -22, 2);
var rValue2 = '';
console.log(rangeValue);

rValue2 = _.inRange(-2, -22, 2);
console.log(rValue2);

///////////////////////////////////////
///////////Object/////////////////////

//AT

var objectValue = { 'a': [{ 'b': { 'c': 3 } }, 4, 99, 11, 88, 55] };

console.log('Objects', _.at(objectValue, ['a[0].b.c', 'a[2]']));

//Default

var defValue = _.defaults({ 'a': 1 }, { 'b': 2 }, { 'c': 3 }, { 'c': 9 }, { 'b': 6 });

console.log('Default', defValue);

//FindKey

var keyUsers = {
   'Joe': {'age': 36, 'active': true },
   'Robert': {'age': 40, 'active': false },
   'Stefan': {'age': 10,   'active': true }
};

var keyResult = _.findKey(keyUsers, function(o) { return o.age < 30; });
console.log('FindKey:', keyResult);


//Has

var object1 = { 'a': [{ 'b': { 'c': 3 } }] };
var object1Value = _.has(object1, 'a');
var object2Va = '';
console.log('Has', object1Value);

object2Va = _.has(object1,   ['c']);
console.log('Has2', object2Va);

/////////////////////////////////////////
//////////////Seq///////////////////////

//Chain

var chainUsers = [
   { 'user': 'Joe', 'age': 36, 'id': 3 },
   { 'user': 'Julie', 'age': 40, 'id': 9 },
   { 'user': 'Robert', 'age': 10, 'id': 5 }
];

var youngest = _
   .chain(chainUsers)
   .sortBy('id')
   .map(function(o) {
      return o.user + ' is ' + o.age + ' his ID is' + o.id;
   })
   .head()
   .value();

console.log('Chain', youngest);

//Prototype Chain
var prousers = [
   { 'user': 'Jack', 'age': 36 },
  { 'user': 'Holland', 'age': 40 }
   
];
 
var Proresult = _(prousers)
   .chain()
   .head()
   .pick('user')
   .value();

var prototypeWithoutExplicit=   _(prousers).head();

console.log('PrototypeChain:', Proresult);
console.log('prototypeWithoutChaining:', prototypeWithoutExplicit);

//Prototype Plant

function square(n) {
   return n * n;
}
 
var wrapped = _([1, 2]).map(square);
var other = wrapped.plant([3, 4]);
 
console.log('proPlant', other.value());
console.log('proPlant2', wrapped.value());

///////////////////////////////
/////////String///////////////

//camelCase

var CamelInput = 'SnehllTechnology';
var Camelresult = _.camelCase(CamelInput);

console.log('CamelCase:', Camelresult);

//Escape String

var escapeValue = _.escape('Joe > Robert < Julie');
console.log('Escape:', escapeValue);

//Kebab case

var kebabValue = _.kebabCase('LearnLodash');

console.log('Kebab', kebabValue);


//Pad

var padValue = _.pad('foo', 10, '-_');

console.log('Pad', padValue);

//Repeat

var repeatVal = _.repeat('*', 5);

console.log('Repeat', repeatVal);

//Replace

var replaceVal = _.replace('Hi Taylor', 'Taylor', 'Selena Gomez');

console.log('Replace:', replaceVal);

//Snake Case

var snakeCase = _.snakeCase('Do Or Die');

console.log('snakeCase:', snakeCase);


/////////////////////////////////////
///////////Utility Method////////////

//Flow

function squareFlow(n) {
   return n * n;
}
 
var addAndSquare = _.flow([_.add, squareFlow]);
var flowResult = addAndSquare(3, 2);
console.log('Flow', flowResult);

//Matches

var mathobjects = [
   { 'a': 1, 'b': 2, 'c': 3 },
   { 'a': 4, 'b': 5, 'c': 6 }
];
 
var mathResult = _.filter(mathobjects, _.matches({ 'a': 1}));

console.log('Matches:', mathResult);


//Mixin


function vowels(string) {
   return _.filter(string, function(v) {
      return /[aeiou]/i.test(v);
   });
}
_.mixin({ 'vowels': vowels }, { 'chain': false });
console.log('Mixin:', _('Julie').vowels());


//Noop

console.log('Noop:', _.times(2, _.noop));

//Over

var func = _.over([Math.max, Math.min]);
 
console.log('Over:', func(1, 2, 3, 4, 8, 6));

//Range

console.log('Range', _.range(4));
console.log('Range', _.range(0, 20, 9));

//stubArray

var stubarrays = _.times(2, _.stubArray);
 
console.log('StubArray:', stubarrays);


  return (
    <div>
        <h4 style={{padding:'90px 0'}}>Lodash Example Page</h4>
        <h5>Chunk: {chunkMethod}</h5>
        <h5>Compact: {compactValue}</h5>
    </div>
  )
}

