import React from "react";
import _ from "lodash";
import { useEffect } from 'react';
import '../App.css';
// import lodash from 'react-lodash'

function Lodash() {

    useEffect(() => {

        const tabs = document.querySelector(".tabs");
        const btns = document.querySelectorAll(".button");
        const articles = document.querySelectorAll(".content");
        tabs.addEventListener("click", function (e) {
          const id = e.target.dataset.id;
          if (id) {
            // remove selected from other buttons
            btns.forEach(function (btn) {
              btn.classList.remove("live");
            });
            e.target.classList.add("live");
            // hide other articles
            articles.forEach(function (article) {
              article.classList.remove("live");
            });
            const element = document.getElementById(id);
            element.classList.add("live");
          }
        });
    
      },[])

    var numbers = [1, 2, 3, 4, 9, 99, 45, 32,83, 101, 50];
 
    var listOfNumbers = _.chunk(numbers, 5);
    console.log(listOfNumbers);



    return (
      <div>
        <div className="lod__ash">
            <h2>Lodash Concepts</h2>
            <p>Lodash makes JavaScript easier by taking the hassle out of working with arrays, numbers, objects, strings, etc. 
                Lodash is a JavaScript library used for helping developers manipulate complex data structures. 
                Lodash provides you with a set of ready to use functions created to operate or modify JavaScript data structures 
                like arrays, numbers, objects, strings, and the rest.</p>
        </div>
        {/* <p> Lodash For Two characters: {listOfNumbers}</p> */}

        <div className="lodash__ui">
            <div className="section-center">
                <div className="tabs">
                    <div className="btn-container">
                        <button className="button live" data-id="step1">Array</button>
                        <button className="button" data-id="step2">Collection</button>
                        <button className="button" data-id="step3">Date</button>
                        <button className="button" data-id="step4">Function</button>
                        <button className="button" data-id="step5">Lang</button>
                        <button className="button" data-id="step6">Math</button>
                        <button className="button" data-id="step7">Number</button>
                        <button className="button" data-id="step8">Object</button>
                        <button className="button" data-id="step9">Seq</button>
                        <button className="button" data-id="step10">String</button>
                        <button className="button" data-id="step11">Util</button>
                        <button className="button" data-id="step12">Properties</button>
                        <button className="button" data-id="step13">Methods</button>
                    </div>
                    <div className="tabs-content">
                    
                        <div className="content live" id="step1">
                            <h4>Array Method</h4>
                            <p>Lodash has many useful methods which helps in processing Arrays. It provides various methods to 
                                process the Arrays as listed : 
                                <strong style={{color:'#000'}}>Chunk, compact, concat, difference, drop, fill, findIndex, flatten, fromPairs,
                                head, indexOf, initial, intersection, join, last, nth, pull, remove, reverse, slice, sortedIndex, tail, take,
                                Union, uniq, unzip, without, xor, zip..etc</strong></p>
                        </div>
                        
                        
                        <div className="content" id="step2">
                            <h4>Collection Methods</h4>
                            <p><strong style={{color:'#000'}}>countBy, every, filter, find, findLast, flatMap, flatMapDeep, flatMapDepth, 
                            forEach, forEachRight, groupBy, includes, invokeMap, keyBy,map, orderBy, partition, reduce, reduceRight, 
                            reject, sample, sampleSize, shuffle, size, some</strong></p>
                        </div>
                        
                        
                        <div className="content" id="step3">
                            <h4>Date Method</h4>
                            <p>Lodash provides a now function to get the current time in milliseconds.</p>
                            <strong style={{color:'#000'}}>e.g: _.now()</strong>
                        </div>

                        <div className="content" id="step4">
                            <h4>Function Methods</h4>
                            <p>Lodash has many useful methods which helps in creating and processing Functions.</p>
                            <p>E.g: <strong style={{color:'#000'}}>after, ary, before, bind, bindKey, curry, curryRight, debounce, defer, delay, flip, memoize, 
                                negate, once, overArgs, partial, partialRight, rearg, rest, spread, throttle, unary, wrap</strong></p>
                        </div>

                        <div className="content" id="step5">
                            <h4>Lang Methods</h4>
                            <strong style={{color:'#000'}}>castArray, clone, cloneDeep, cloneDeepWith, cloneWith, conformsTo, eq, gt, gte, isArguments, isArray, 
                                isArrayBuffer, isArrayLike, isArrayLikeObject, isBoolean, isBuffer, isDate, isElement, isEmpty, isEqual, 
                                isEqualWith, isError, isFinite, isFunction, isInteger, isLength, isMap, isMatch, isMatchWith, isNaN..etc 
                                {/* isNative, isNil, isNull, isNumber, isObject, isObjectLike, isPlainObject, isRegExp, isSafeInteger, isSet, 
                                isString, isSymbol, isTypedArray, isUndefined, isWeakMap, isWeakSet, lt, lte, toArray, toFinite, toInteger, 
                                toLength, toNumber, toPlainObject, toSafeInteger, toString */}
                            </strong>
                        </div>

                        <div className="content" id="step6">
                            <h4>Math Methods</h4>
                            <strong style={{color:'#000'}}>add, ceil, divide, floor, max, maxBy, mean, meanBy, min, minBy, multiply,
                                 round, subtract, sum, sumBy</strong>
                        </div>
                        
                        
                        <div className="content" id="step7">
                            <h4>Number Methods</h4>
                            <p>E.g: <strong style={{color:'#000'}}>clamp, inRange, random</strong></p>
                        </div>
                        
                        
                        <div className="content" id="step8">
                            <h4>Object Methods</h4>
                            <p>E.g: <strong style={{color:'#000'}}>assign, at, create, defaults, entries - toPairs, extend - assignIn, findKey, forIn, functions, 
                                get, has, invert, keys, mapKeys, merge, omit, pick, result, set, toPairs, transform, unset, update, values</strong></p>
                        </div>

                        <div className="content" id="step9">
                            <h4>Seq Methods</h4>
                            <p>E.g: <strong style={{color:'#000'}}>_ , chain, tap, thru, prototype[Symbol.iterator], prototype.at, prototype.chain, prototype.commit, 
                                prototype.next, prototype.plant, prototype.reverse, prototype.toJSON - value, prototype.value, 
                                prototype.valueOf - value</strong></p>
                        </div>

                        <div className="content" id="step10">
                            <h4>String Methods</h4>
                            <p>E.g: <strong style={{color:'#000'}}>camelCase, capitalize, deburr, endsWith, escape, escapeRegExp, kebabCase, lowerCase, lowerFirst, pad, 
                                padEnd, padStart, parseInt, repeat, replace, snakeCase, split, startCase, startsWith, template, toLower, 
                                toUpper, trim, trimEnd, trimStart, truncate, unescape, upperCase, upperFirst, words</strong></p>
                        </div>

                        <div className="content" id="step11">
                            <h4>Util Methods</h4>
                            <p>E.g: <strong style={{color:'#000'}}>attempt, bindAll, cond, conforms, constant, defaultTo, flow, flowRight, identity, iteratee, matches, 
                                matchesProperty, method, methodOf, mixin, noConflict, noop, nthArg, over, overEvery, overSome, property, 
                                propertyOf, range, rangeRight, runInContext, stubArray, stubFalse, stubObject, stubString, stubTrue, 
                                times, toPath, uniqueId</strong></p>
                        </div>

                        <div className="content" id="step12">
                            <h4>Properties Methods</h4>
                            <p>E.g: <strong style={{color:'#000'}}>VERSION, templateSettings, templateSettings.escape, templateSettings.evaluate, templateSettings.imports, 
                                templateSettings.interpolate, templateSettings.variable</strong></p>
                        </div>

                        <div className="content" id="step13">
                            <h4>Methods</h4>
                            <p>E.g: <strong style={{color:'#000'}}>_.templateSettings.imports._</strong></p>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
        
        {/* Array Method */}
        <div className="lodash__types">
            <div className="container">
                <h4>Array Methods</h4>
                <p className="l__para">Lodash has many useful methods which helps in processing Arrays. It provides various methods to process the Arrays</p>
                {/*********Chunk***********/}
                <div className="l__chunk">
                    <div className="row">
                        <h5>_.Chunk</h5>
                        <div className="col-md-4 l__col">
                            <span className="l__ex">Definition</span>
                            <p style={{paddingTop:'10px'}}>Creates an array of elements split into groups the length of size. If array can't be split evenly, the final chunk will be the remaining elements.</p>
                            <strong style={{paddingRight:'10px',fontFamily:'monospace'}}>Syntax:</strong>
                            <span className="l__syn">_.chunk(array, [size=1])</span>
                        </div>
                        <div className="col-md-4 l__col">
                            <span className="l__ex">Example</span>
                            <p className="l__pp">
                                import  _ from 'lodash';<br/>
                                var numbers = [1, 2, 3, 4];<br/>
                                var listOfNumbers = '';<br/>
                                <br/>
                                listOfNumbers = _.chunk(numbers, 2);<br/>
                                console.log(listOfNumbers);<br/>
                                <br/>
                                listOfNumbers = _.chunk(numbers, 3);<br/>
                                console.log(listOfNumbers);<br/>
                            </p>
                            
                        </div>
                        <div className="col-md-4">
                            <span className="l__ex">Output</span>
                            <p className="l__pp" style={{marginTop:'20px'}}>
                            [ [ 1, 2 ], [ 3, 4 ] ]<br/>
                            [ [ 1, 2, 3 ], [ 4 ] ]
                            </p>
                        </div>
                    </div>
                </div>
                {/* ******End***** */}

                {/*********Compact***********/}
                <div className="l__chunk">
                    <div className="row">
                        <h5>_.Compact</h5>
                        <div className="col-md-4 l__col">
                            <span className="l__ex">Definition</span>
                            <p style={{paddingTop:'10px'}}>
                                Creates an array with all falsey values removed. The values false, null, 0, "", undefined, and NaN are falsy.
                            </p>
                            <strong style={{paddingRight:'10px',fontFamily:'monospace'}}>Syntax:</strong>
                            <span className="l__syn">
                                 _.compact(array)
                            </span>
                        </div>
                        <div className="col-md-4 l__col">
                            <span className="l__ex">Example</span>
                            <p className="l__pp">
                                import  _ from 'lodash';<br/>
                                var numbers = [1, false, 3, 0];<br/>
                                var listOfNumbers = '';<br/>
                                listOfNumbers = _.compact(numbers);<br/>
                                console.log(listOfNumbers);<br/>
                            </p>
                            
                        </div>
                        <div className="col-md-4">
                            <span className="l__ex">Output</span>
                            <p className="l__pp" style={{marginTop:'20px'}}>
                                [ 1, 3 ]
                            </p>
                        </div>
                    </div>
                </div>
                {/* ******End***** */}

                 {/*********Difference***********/}
                 <div className="l__chunk">
                    <div className="row">
                        <h5>_.difference</h5>
                        <div className="col-md-4 l__col">
                            <span className="l__ex">Definition</span>
                            <p style={{paddingTop:'10px'}}>
                                Creates an array of array values not included in the other given arrays using SameValueZero for equality comparisons. 
                                The order and references of result values are determined by the first array.
                            </p>
                            <strong style={{paddingRight:'10px',fontFamily:'monospace'}}>Syntax:</strong>
                            <span className="l__syn">
                                _.difference(array, [values])
                            </span>
                        </div>
                        <div className="col-md-4 l__col">
                            <span className="l__ex">Example</span>
                            <p className="l__pp">
                                import  _ from 'lodash';<br/>
                                var numbers = [1, 2, 3, 4];<br/>
                                var listOfNumbers = '';<br/>

                                listOfNumbers = _.difference(numbers, [2]);<br/>
                                console.log(listOfNumbers);<br/>
                            </p>
                            
                        </div>
                        <div className="col-md-4">
                            <span className="l__ex">Output</span>
                            <p className="l__pp" style={{marginTop:'20px'}}>
                                [ 1, 3, 4 ]
                            </p>
                        </div>
                    </div>
                </div>
                {/* ******End***** */}

                 {/*********Drop***********/}
                 <div className="l__chunk">
                    <div className="row">
                        <h5>_.drop</h5>
                        <div className="col-md-4 l__col">
                            <span className="l__ex">Definition</span>
                            <p style={{paddingTop:'10px'}}>
                                Creates a slice of array with n elements dropped from the beginning.
                            </p>
                            <strong style={{paddingRight:'10px',fontFamily:'monospace'}}>Syntax:</strong>
                            <span className="l__syn">
                                _.drop(array, [n=1])
                            </span>
                        </div>
                        <div className="col-md-4 l__col">
                            <span className="l__ex">Example</span>
                            <p className="l__pp">
                                import  _ from 'lodash';<br/>
                                var dropNo = [1, 2, 3, 4];<br/>
                                var dropMethod = '';<br/>
                                var dropMethod1 = '';<br/>

                                dropMethod = _.drop(dropNo);<br/>
                                console.log(dropMethod);<br/>

                                dropMethod1 = _.drop(dropNo, 3);<br/>
                                console.log(dropMethod1);<br/>
                            </p>
                            
                        </div>
                        <div className="col-md-4">
                            <span className="l__ex">Output</span>
                            <p className="l__pp" style={{marginTop:'20px'}}>
                            [ 2, 3, 4 ]<br />
                            [ 4 ]

                            </p>
                        </div>
                    </div>
                </div>
                {/* ******End***** */}

                {/*********Zip ***********/}
                <div className="l__chunk">
                    <div className="row">
                        <h5>_.unzip</h5>
                        <div className="col-md-4 l__col">
                            <span className="l__ex">Definition</span>
                            <p style={{paddingTop:'10px'}}>
                                This method is like _.zip except that it accepts an array of grouped elements and creates an array regrouping the elements to their pre-zip configuration
                            </p>
                            <strong style={{paddingRight:'10px',fontFamily:'monospace'}}>Syntax:</strong>
                            <span className="l__syn">
                                _.unzip(array)
                            </span>
                        </div>
                        <div className="col-md-4 l__col">
                            <span className="l__ex">Example</span>
                            <p className="l__pp">
                                import  _ from 'lodash';<br/>
                                var resultZip = '';<br/>
                                var zipValue = ['a', 'b', 'c'], [1, 2, 3], ['Monday', 'Tuesday', 'Wednesday'];

                                var Zipresult = _.zip(zipValue);<br/>
                                console.log('Zip', Zipresult);<br/>

                                resultZip = _.unzip(Zipresult);<br/>
                                console.log('Unzip', resultZip);<br/>
                            </p>
                            
                        </div>
                        <div className="col-md-4">
                            <span className="l__ex">Output</span>
                            <p className="l__pp" style={{marginTop:'20px'}}>
                            [ [ 'a', 1, true ], [ 'b', 2, false ] ]<br />
                            [ [ 'a', 'b' ], [ 1, 2 ], [ true, false ] ]

                            </p>
                        </div>
                    </div>
                </div>
                {/* ******End***** */}

                 {/*********List ***********/}
                 <div className="l__chunk">
                    <div className="row">
                        <h5>_.join</h5>
                        <div className="col-md-4 l__col">
                            <span className="l__ex">Definition</span>
                            <p style={{paddingTop:'10px'}}>
                                Converts all elements in array into a string separated by separator.
                            </p>
                            <strong style={{paddingRight:'10px',fontFamily:'monospace'}}>Syntax:</strong>
                            <span className="l__syn">
                            _.join(array, [separator=','])
                            </span>
                        </div>
                        <div className="col-md-4 l__col">
                            <span className="l__ex">Example</span>
                            <p className="l__pp">
                                import  _ from 'lodash';<br/>
                                var listValue = [1, 2, 3, 4, 5, 6];<br/>

                                var listMethod = _.join(listValue,'*')<br/>
                                console.log(listMethod);
                            </p>
                            
                        </div>
                        <div className="col-md-4">
                            <span className="l__ex">Output</span>
                            <p className="l__pp" style={{marginTop:'20px'}}>
                            1*2*3*4*5*6

                            </p>
                        </div>
                    </div>
                </div>
                {/* ******End***** */}

                  {/*********Union ***********/}
                  <div className="l__chunk">
                    <div className="row">
                        <h5>_.union</h5>
                        <div className="col-md-4 l__col">
                            <span className="l__ex">Definition</span>
                            <p style={{paddingTop:'10px'}}>
                            Creates an array of unique values, in order, from all given arrays using SameValueZero for equality comparisons.
                            </p>
                            <strong style={{paddingRight:'10px',fontFamily:'monospace'}}>Syntax:</strong>
                            <span className="l__syn">
                                _.union([arrays])
                            </span>
                        </div>
                        <div className="col-md-4 l__col">
                            <span className="l__ex">Example</span>
                            <p className="l__pp">
                                import  _ from 'lodash';<br/>
                                var unionValue = [1, 2, 3, 4]<br/>

                                var unionMethod = _.union(unionValue, [1,4]);<br/>
                                console.log('Union', unionMethod);<br/>

                                var unionMethod2 = _.union(unionValue, [1, 8, 5]);<br/>
                                console.log('Union1', unionMethod2);<br/>
                            </p>
                            
                        </div>
                        <div className="col-md-4">
                            <span className="l__ex">Output</span>
                            <p className="l__pp" style={{marginTop:'20px'}}>
                            [ 1, 2, 3, 4 ]<br />
                            [ 1, 2, 3, 4, 5, 8 ]

                            </p>
                        </div>
                    </div>
                </div>
                {/* ******End***** */}

            </div>
        </div>

        {/* Collection Method */}
        <div className="lodash__types">
            <div className="container">
                <h4>Lodash - Collection Methods</h4>
                <p className="l__para">Lodash has many useful methods which helps in processing Collections. It provides various methods to process the Collections</p>
                {/*********CountBy***********/}
                <div className="l__chunk">
                    <div className="row">
                        <h5>_.countBy</h5>
                        <div className="col-md-4 l__col">
                            <span className="l__ex">Definition</span>
                            <p style={{paddingTop:'10px'}}>
                                Creates an object composed of keys generated from the results of running each element of collection thru iteratee. 
                                The corresponding value of each key is the number of times the key was returned by iteratee. The iteratee is invoked 
                                with one argument: (value).
                            </p>
                            <strong style={{paddingRight:'10px',fontFamily:'monospace'}}>Syntax:</strong>
                            <span className="l__syn">
                                _.countBy(collection,Math.floor)
                            </span>
                        </div>
                        <div className="col-md-4 l__col">
                            <span className="l__ex">Example</span>
                            <p className="l__pp">
                                import  _ from 'lodash';<br/>
                                var collectionValue = [1.1, 2.1, 2.3, 2.9, 1.0, 1.8, 1.5, 1.3, 3.0, 3];<br/>
 
                                var collectMethod = _.countBy(collectionValue, Math.floor);<br/>
                                console.log('Collection', collectMethod);
                            </p>
                            
                        </div>
                        <div className="col-md-4">
                            <span className="l__ex">Output</span>
                            <p className="l__pp" style={{marginTop:'20px'}}>
                            [ '1': 5, '2': 3, '3': 2 ]
                            </p>
                        </div>
                    </div>
                </div>
                {/* ******End***** */}

                {/*********Filter***********/}
                <div className="l__chunk">
                    <div className="row">
                        <h5>_.filter</h5>
                        <div className="col-md-4 l__col">
                            <span className="l__ex">Definition</span>
                            <p style={{paddingTop:'10px'}}>
                            Iterates over elements of collection, returning an array of all elements predicate returns truthy for. The predicate is invoked with three arguments: (value, index|key, collection).
                            </p>
                            <strong style={{paddingRight:'10px',fontFamily:'monospace'}}>Syntax:</strong>
                            <span className="l__syn">
                            _.filter(collection, [predicate=_.identity])
                            </span>
                        </div>
                        <div className="col-md-4 l__col">
                            <span className="l__ex">Example</span>
                            <p className="l__pp">
                                import  _ from 'lodash';<br/>
                                var filterValue = <br/>
                                [ 'user': 'Joe', 'age': 22, 'active': true ],<br/>
                                    [ 'user': 'Jake', 'age': 40, 'active': false ]<br/>
                                
  
                                var filterMethod = _.filter(filterValue, function(user) [  return user.active; ]);<br/>
                                console.log('Filter',filterMethod);
                            </p>
                            
                        </div>
                        <div className="col-md-4">
                            <span className="l__ex">Output</span>
                            <p className="l__pp" style={{marginTop:'20px'}}>
                            [ user: 'Joe', age: 36, active: true  ]
                            </p>
                        </div>
                    </div>
                </div>
                {/* ******End***** */}

                 {/*********Map***********/}
                 <div className="l__chunk">
                    <div className="row">
                        <h5>_.map</h5>
                        <div className="col-md-4 l__col">
                            <span className="l__ex">Definition</span>
                            <p style={{paddingTop:'10px'}}>
                                Creates an array of values by running each element in collection thru iteratee. The iteratee is invoked with three arguments: (value, index|key, collection).
                            </p>
                            <strong style={{paddingRight:'10px',fontFamily:'monospace'}}>Syntax:</strong>
                            <span className="l__syn">
                                _.map(collection, [iteratee=_.identity])
                            </span>
                        </div>
                        <div className="col-md-4 l__col">
                            <span className="l__ex">Example</span>
                            <p className="l__pp">
                                import  _ from 'lodash';<br/>
                                var list = [1, 2, 3, 4];<br/>
                                var users = [<br/>
                                    [ 'user': 'Joe', 'age': 24 ],<br/>
                                    [ 'user': 'Robert', 'age': 40 ]<br/>
                                ];<br/>
                                var methodTwo = '';<br/>
                                <br/>
                                var methodOne = _.map(list, function square(n) [<br/>
                                    return n * n;<br/>
                                ]);<br/>
                                console.log('Map', methodOne);<br/>
                                <br/>
                                methodTwo = _.map(users, 'user');<br/>
                                console.log('Map1', methodTwo);<br/>
                            </p>
                            
                        </div>
                        <div className="col-md-4">
                            <span className="l__ex">Output</span>
                            <p className="l__pp" style={{marginTop:'20px'}}>
                            [ 1, 4, 9, 16 ]<br/>
                            [ 'Joe', 'Robert' ]
                            </p>
                        </div>
                    </div>
                </div>
                {/* ******End***** */}

                 {/*********KeyBy***********/}
                 <div className="l__chunk">
                    <div className="row">
                        <h5>_.keyby</h5>
                        <div className="col-md-4 l__col">
                            <span className="l__ex">Definition</span>
                            <p style={{paddingTop:'10px'}}>
                                Creates an object composed of keys generated from the results of running each element of collection thru iteratee. 
                                The corresponding value of each key is the last element responsible for generating the key. The iteratee is invoked 
                                with one argument: (value).
                            </p>
                            <strong style={{paddingRight:'10px',fontFamily:'monospace'}}>Syntax:</strong>
                            <span className="l__syn">
                                 _.keyBy(collection, [iteratee=_.identity])
                            </span>
                        </div>
                        <div className="col-md-4 l__col">
                            <span className="l__ex">Example</span>
                            <p className="l__pp">
                                import  _ from 'lodash';<br/>
                                var keyValue = [<br/>
                                    [ 'dir': 'left', 'code': 97 ],<br/>
                                    [ 'dir': 'right', 'code': 100 ]<br/>
                                ];<br/>
                                <br/>
                                var keyMethod = _.keyBy(keyValue, 'code');<br/>
                                console.log('Key', keyMethod);<br/>
                            </p>
                            
                        </div>
                        <div className="col-md-4">
                            <span className="l__ex">Output</span>
                            <p className="l__pp" style={{marginTop:'20px'}}>
                            [ left: [ dir: 'left', code: 97 ], right: [ dir: 'right', code: 100 ] ]
                           

                            </p>
                        </div>
                    </div>
                </div>
                {/* ******End***** */}

                {/*********Size ***********/}
                <div className="l__chunk">
                    <div className="row">
                        <h5>_.size</h5>
                        <div className="col-md-4 l__col">
                            <span className="l__ex">Definition</span>
                            <p style={{paddingTop:'10px'}}>
                            Gets the size of collection by returning its length for array-like values or the number of own enumerable string keyed properties for objects.
                            </p>
                            <strong style={{paddingRight:'10px',fontFamily:'monospace'}}>Syntax:</strong>
                            <span className="l__syn">
                                _.size(collection)
                            </span>
                        </div>
                        <div className="col-md-4 l__col">
                            <span className="l__ex">Example</span>
                            <p className="l__pp">
                                import  _ from 'lodash';<br/>
                                var valueSize = '';<br/>
                                var methodsize = '';<br/>
                                <br/>
                                var sizeVal = _.size([1, 2, 3, 9, 5, 2]);<br/>
                                console.log('Size', sizeVal);<br/>
                                <br/>
                                valueSize = _.size([ 'a': 1, 'b': 2, 'c': '9' ]);<br/>
                                console.log('Size1', valueSize);<br/>
                                <br/>
                                methodsize = _.size('montreal');<br/>
                                console.log('Size2', methodsize);<br/>
                            </p>
                            
                        </div>
                        <div className="col-md-4">
                            <span className="l__ex">Output</span>
                            <p className="l__pp" style={{marginTop:'20px'}}>
                            6<br/>
                            3<br/>
                            8<br/>

                            </p>
                        </div>
                    </div>
                </div>
                {/* ******End***** */}

            </div>
        </div>

        {/* Date Method */}
        <div className="lodash__types">
            <div className="container">
                <h4>Lodash - Date Methods</h4>
                <p className="l__para">Lodash provides a now function to get the current time in milliseconds.</p>
                {/*********Now***********/}
                <div className="l__chunk">
                    <div className="row">
                        <h5>_.now</h5>
                        <div className="col-md-4 l__col">
                            <span className="l__ex">Definition</span>
                            <p style={{paddingTop:'10px'}}>
                            Gets the timestamp of the number of milliseconds that have elapsed since the Unix epoch (1 January 1970 00:00:00 UTC).
                            </p>
                            <strong style={{paddingRight:'10px',fontFamily:'monospace'}}>Syntax:</strong>
                            <span className="l__syn">
                            _.now()
                            </span>
                        </div>
                        <div className="col-md-4 l__col">
                            <span className="l__ex">Example</span>
                            <p className="l__pp">
                                import  _ from 'lodash';<br/>
                                var datValue = _.now();<br/>
                                console.log('Date', datValue);<br/>
                            </p>
                            
                        </div>
                        <div className="col-md-4">
                            <span className="l__ex">Output</span>
                            <p className="l__pp" style={{marginTop:'20px'}}>
                            1601614929848
                            </p>
                        </div>
                    </div>
                </div>
                {/* ******End***** */}

            </div>
        </div>

         {/* Function Method */}
         <div className="lodash__types">
            <div className="container">
                <h4>Lodash - Function Methods</h4>
                <p className="l__para">
                    Lodash has many useful methods which helps in creating and processing Functions.
                </p>
                {/*********Delay***********/}
                <div className="l__chunk">
                    <div className="row">
                        <h5>_.now</h5>
                        <div className="col-md-4 l__col">
                            <span className="l__ex">Definition</span>
                            <p style={{paddingTop:'10px'}}>
                                Invokes func after wait milliseconds. Any additional arguments are provided to func when it's invoked.
                            </p>
                            <strong style={{paddingRight:'10px',fontFamily:'monospace'}}>Syntax:</strong>
                            <span className="l__syn">
                                _.delay(func, wait, [args])
                            </span>
                        </div>
                        <div className="col-md-4 l__col">
                            <span className="l__ex">Example</span>
                            <p className="l__pp">
                                import  _ from 'lodash';<br/>
                                var startTimestamp = new Date().getTime();<br/>
                                <br/>
                                var add = function(a,b) [<br/>
                                console.log('Delay', (a + b));<br/>
                                var endTimestamp = new Date().getTime();<br/>
                                console.log('Delay2',((endTimestamp - startTimestamp)) + ' ms'); <br/>  
                                ];<br/>
                                _.delay(add, 10000, 115, 10);<br/>
                            </p>
                            
                        </div>
                        <div className="col-md-4">
                            <span className="l__ex">Output</span>
                            <p className="l__pp" style={{marginTop:'20px'}}>
                            125<br/>
                            10024 ms
                            </p>
                        </div>
                    </div>
                </div>
                {/* ******End***** */}
                {/*********Flip***********/}
                <div className="l__chunk">
                    <div className="row">
                        <h5>_.flip</h5>
                        <div className="col-md-4 l__col">
                            <span className="l__ex">Definition</span>
                            <p style={{paddingTop:'10px'}}>
                            Creates a function that invokes func with arguments reversed.
                            </p>
                            <strong style={{paddingRight:'10px',fontFamily:'monospace'}}>Syntax:</strong>
                            <span className="l__syn">
                            _.flip(func)
                            </span>
                        </div>
                        <div className="col-md-4 l__col">
                            <span className="l__ex">Example</span>
                            <p className="l__pp">
                                import  _ from 'lodash';<br/>
                                var flipped = _.flip(function() [<br/>
                                return _.toArray(arguments);<br/>
                                ];<br/>
                                <br/>
                                console.log('Flip', flipped(1, 2, 3, 4));
                            </p>
                            
                        </div>
                        <div className="col-md-4">
                            <span className="l__ex">Output</span>
                            <p className="l__pp" style={{marginTop:'20px'}}>
                            [ 4, 3, 2, 1 ]
                            </p>
                        </div>
                    </div>
                </div>
                {/* ******End***** */}

                 {/*********spread***********/}
                 <div className="l__chunk">
                    <div className="row">
                        <h5>_.spread</h5>
                        <div className="col-md-4 l__col">
                            <span className="l__ex">Definition</span>
                            <p style={{paddingTop:'10px'}}>
                                Creates a function that invokes func with the this binding of the create function and an array of arguments much like Function#apply.
                            </p>
                            <strong style={{paddingRight:'10px',fontFamily:'monospace'}}>Syntax:</strong>
                            <span className="l__syn">
                            _.spread(func, [start=0])
                            </span>
                        </div>
                        <div className="col-md-4 l__col">
                            <span className="l__ex">Example</span>
                            <p className="l__pp">
                                import  _ from 'lodash';<br/>
                                var say = _.spread(function(who, what) [<br/>
                                    return who + ' says ' + what;<br/>
                                ]);<br/>
                                console.log('Spread:', say(['Joe', 'Hi']));
                            </p>
                            
                        </div>
                        <div className="col-md-4">
                            <span className="l__ex">Output</span>
                            <p className="l__pp" style={{marginTop:'20px'}}>
                            Joe says Hi
                            </p>
                        </div>
                    </div>
                </div>
                {/* ******End***** */}

            </div>
        </div>

         {/* Lang Method */}
         <div className="lodash__types">
            <div className="container">
                <h4>Lodash - Lang Methods</h4>
                <p className="l__para">
                    Lodash has many useful methods which helps in processing Lang.
                </p>
                {/*********Clone***********/}
                <div className="l__chunk">
                    <div className="row">
                        <h5>_.clone</h5>
                        <div className="col-md-4 l__col">
                            <span className="l__ex">Definition</span>
                            <p style={{paddingTop:'10px'}}>
                            Creates a shallow clone of value.
                            </p>
                            <strong style={{paddingRight:'10px',fontFamily:'monospace'}}>Syntax:</strong>
                            <span className="l__syn">
                            _.clone(value)
                            </span>
                        </div>
                        <div className="col-md-4 l__col">
                            <span className="l__ex">Example</span>
                            <p className="l__pp">
                                import  _ from 'lodash';<br/>
                                var objects = [2, 5, 2, 3];<br/>
                                var shallowCopy = _.clone(objects);<br/>
                                <br/>
                                console.log('Clone', shallowCopy[0] === objects[0]);<br/>
                            </p>
                            
                        </div>
                        <div className="col-md-4">
                            <span className="l__ex">Output</span>
                            <p className="l__pp" style={{marginTop:'20px'}}>
                           true
                            </p>
                        </div>
                    </div>
                </div>
                {/* ******End***** */}
                {/*********Conform***********/}
                <div className="l__chunk">
                    <div className="row">
                        <h5>_.conformsTo</h5>
                        <div className="col-md-4 l__col">
                            <span className="l__ex">Definition</span>
                            <p style={{paddingTop:'10px'}}>
                                 Checks if object conforms to source by invoking the predicate properties of source with the corresponding property values of object.
                            </p>
                            <strong style={{paddingRight:'10px',fontFamily:'monospace'}}>Syntax:</strong>
                            <span className="l__syn">
                            _.conformsTo(object, source)
                            </span>
                        </div>
                        <div className="col-md-4 l__col">
                            <span className="l__ex">Example</span>
                            <p className="l__pp">
                                import  _ from 'lodash';<br/>
                                var object = [ 'a': 1, 'b': 2 ];<br/>
                                <br/>
                                console.log(_.conformsTo(object, [ 'a': function(n) [ return n = 0; ] ]));<br/>
                                console.log(_.conformsTo(object, [ 'b': function(n) [ return n = 2; ] ]));<br/>
                            </p>
                            
                        </div>
                        <div className="col-md-4">
                            <span className="l__ex">Output</span>
                            <p className="l__pp" style={{marginTop:'20px'}}>
                                true<br/>
                                false
                            </p>
                        </div>
                    </div>
                </div>
                {/* ******End***** */}

                 {/*********Boolean***********/}
                 <div className="l__chunk">
                    <div className="row">
                        <h5>_.isBoolean</h5>
                        <div className="col-md-4 l__col">
                            <span className="l__ex">Definition</span>
                            <p style={{paddingTop:'10px'}}>
                                Checks if value is classified as a boolean primitive or object.
                            </p>
                            <strong style={{paddingRight:'10px',fontFamily:'monospace'}}>Syntax:</strong>
                            <span className="l__syn">
                            _.isBoolean(value)
                            </span>
                        </div>
                        <div className="col-md-4 l__col">
                            <span className="l__ex">Example</span>
                            <p className="l__pp">
                                import  _ from 'lodash';<br/>
                                console.log(_.isBoolean(true));<br/>
                                console.log(_.isBoolean(null));
                            </p>
                            
                        </div>
                        <div className="col-md-4">
                            <span className="l__ex">Output</span>
                            <p className="l__pp" style={{marginTop:'20px'}}>
                            true<br/>
                            false
                            </p>
                        </div>
                    </div>
                </div>
                {/* ******End***** */}

                {/*********Empty***********/}
                <div className="l__chunk">
                    <div className="row">
                        <h5>_.isEmpty</h5>
                        <div className="col-md-4 l__col">
                            <span className="l__ex">Definition</span>
                            <p style={{paddingTop:'10px'}}>
                                Checks if value is an empty object, collection, map, or set.
                            </p>
                            <strong style={{paddingRight:'10px',fontFamily:'monospace'}}>Syntax:</strong>
                            <span className="l__syn">
                                _.isEmpty(value)
                            </span>
                        </div>
                        <div className="col-md-4 l__col">
                            <span className="l__ex">Example</span>
                            <p className="l__pp">
                                import  _ from 'lodash';<br/>
                                console.log(_.isEmpty());<br/>
                                console.log(_.isEmpty([1, 2, 3]));
                            </p>
                            
                        </div>
                        <div className="col-md-4">
                            <span className="l__ex">Output</span>
                            <p className="l__pp" style={{marginTop:'20px'}}>
                            true<br/>
                            false
                            </p>
                        </div>
                    </div>
                </div>
                {/* ******End***** */}

                 {/*********Integer***********/}
                 <div className="l__chunk">
                    <div className="row">
                        <h5>_.isInteger</h5>
                        <div className="col-md-4 l__col">
                            <span className="l__ex">Definition</span>
                            <p style={{paddingTop:'10px'}}>
                                Checks if value is an integer.
                            </p>
                            <strong style={{paddingRight:'10px',fontFamily:'monospace'}}>Syntax:</strong>
                            <span className="l__syn">
                                _.isInteger(value)
                            </span>
                        </div>
                        <div className="col-md-4 l__col">
                            <span className="l__ex">Example</span>
                            <p className="l__pp">
                                import  _ from 'lodash';<br/>
                                console.log(_.isInteger(3));<br/>
                                console.log(_.isInteger('3'));
                            </p>
                            
                        </div>
                        <div className="col-md-4">
                            <span className="l__ex">Output</span>
                            <p className="l__pp" style={{marginTop:'20px'}}>
                            true<br/>
                            false
                            </p>
                        </div>
                    </div>
                </div>
                {/* ******End***** */}

            </div>
        </div>

          {/* Math Method */}
          <div className="lodash__types">
            <div className="container">
                <h4>Lodash - Math Methods</h4>
                <p className="l__para">
                    Lodash has many useful methods which helps in processing Math.
                </p>
                {/*********Add***********/}
                <div className="l__chunk">
                    <div className="row">
                        <h5>_.add</h5>
                        <div className="col-md-4 l__col">
                            <span className="l__ex">Definition</span>
                            <p style={{paddingTop:'10px'}}>
                                Adds two numbers.
                            </p>
                            <strong style={{paddingRight:'10px',fontFamily:'monospace'}}>Syntax:</strong>
                            <span className="l__syn">
                                _.add(augend, addend)
                            </span>
                        </div>
                        <div className="col-md-4 l__col">
                            <span className="l__ex">Example</span>
                            <p className="l__pp">
                                import  _ from 'lodash';<br/>
                                console.log(_.add(3,6));
                            </p>
                            
                        </div>
                        <div className="col-md-4">
                            <span className="l__ex">Output</span>
                            <p className="l__pp" style={{marginTop:'20px'}}>
                                9
                            </p>
                        </div>
                    </div>
                </div>
                {/* ******End***** */}
                {/*********Ceil***********/}
                <div className="l__chunk">
                    <div className="row">
                        <h5>_.ceil</h5>
                        <div className="col-md-4 l__col">
                            <span className="l__ex">Definition</span>
                            <p style={{paddingTop:'10px'}}>
                            Creates a function that invokes func, with the this binding and arguments of the created function, while it's called less than n times. 
                            Subsequent calls to the created function return the result of the last func invocation.
                            </p>
                            <strong style={{paddingRight:'10px',fontFamily:'monospace'}}>Syntax:</strong>
                            <span className="l__syn">
                            _.ceil(value)
                            </span>
                        </div>
                        <div className="col-md-4 l__col">
                            <span className="l__ex">Example</span>
                            <p className="l__pp">
                                import  _ from 'lodash';<br/>
                                console.log('Ceil', _.ceil(5.004));<br/>
                                console.log('Ceil2', _.ceil(5.004,2));
                            </p>
                            
                        </div>
                        <div className="col-md-4">
                            <span className="l__ex">Output</span>
                            <p className="l__pp" style={{marginTop:'20px'}}>
                                6<br/>
                                5.01
                            </p>
                        </div>
                    </div>
                </div>
                {/* ******End***** */}

                 {/*********Mean***********/}
                 <div className="l__chunk">
                    <div className="row">
                        <h5>_.mean</h5>
                        <div className="col-md-4 l__col">
                            <span className="l__ex">Definition</span>
                            <p style={{paddingTop:'10px'}}>
                            Computes the mean of the values in array.
                            </p>
                            <strong style={{paddingRight:'10px',fontFamily:'monospace'}}>Syntax:</strong>
                            <span className="l__syn">
                                _.mean(array)
                            </span>
                        </div>
                        <div className="col-md-4 l__col">
                            <span className="l__ex">Example</span>
                            <p className="l__pp">
                                import  _ from 'lodash';<br/>
                                var meanvalues = [11, 12, 13, 14, 15, 16];<br/>
                                var meanMethod = _.mean(meanvalues);<br/>
                                <br/>
                                console.log('Mean', meanMethod);
                            </p>
                            
                        </div>
                        <div className="col-md-4">
                            <span className="l__ex">Output</span>
                            <p className="l__pp" style={{marginTop:'20px'}}>
                            13.5
                            </p>
                        </div>
                    </div>
                </div>
                {/* ******End***** */}


            </div>
        </div>

          {/* Numbers Method */}
          <div className="lodash__types">
            <div className="container">
                <h4>Lodash - Numbers Methods</h4>
                <p className="l__para">
                    Lodash has many useful methods which helps in processing Numbers.
                </p>
                  {/*********Clamp***********/}
                  <div className="l__chunk">
                    <div className="row">
                        <h5>_.clamp</h5>
                        <div className="col-md-4 l__col">
                            <span className="l__ex">Definition</span>
                            <p style={{paddingTop:'10px'}}>
                                Clamps number within the inclusive lower and upper bounds. If num falls within the range, return num. Otherwise, return the nearest number in the range.
                            </p>
                            <strong style={{paddingRight:'10px',fontFamily:'monospace'}}>Syntax:</strong>
                            <span className="l__syn">
                                _.clamp(number, [lower], upper)
                            </span>
                        </div>
                        <div className="col-md-4 l__col">
                            <span className="l__ex">Example</span>
                            <p className="l__pp">
                                import  _ from 'lodash';<br/>
                                var valuClamp = '';<br/>
                                var clampVal = _.clamp(-1, -2, 2);<br/>
                                <br/>
                                console.log(clampVal);<br/>
                                <br/>
                                valuClamp = _.clamp(1, -2, 2);<br/>
                                console.log(valuClamp);<br/>
                            </p>
                            
                        </div>
                        <div className="col-md-4">
                            <span className="l__ex">Output</span>
                            <p className="l__pp" style={{marginTop:'20px'}}>
                                -1<br/>
                                1
                            </p>
                        </div>
                    </div>
                </div>
                {/* ******End***** */}

                 {/*********Numbers***********/}
                 <div className="l__chunk">
                    <div className="row">
                        <h5>_.clamp</h5>
                        <div className="col-md-4 l__col">
                            <span className="l__ex">Definition</span>
                            <p style={{paddingTop:'10px'}}>
                            Clamps number within the inclusive lower and upper bounds.
                            </p>
                            <strong style={{paddingRight:'10px',fontFamily:'monospace'}}>Syntax:</strong>
                            <span className="l__syn">
                                _.clamp(number, [lower], upper)
                            </span>
                        </div>
                        <div className="col-md-4 l__col">
                            <span className="l__ex">Example</span>
                            <p className="l__pp">
                                import  _ from 'lodash';<br/>
                                var valuClamp = '';<br/>
                                var clampVal = _.clamp(-12, -2, 2);<br/>
                                <br/>
                                console.log(clampVal);<br/>
                                <br/>
                                valuClamp = _.clamp(12, -2, 2);<br/>
                                console.log(valuClamp);
                            </p>
                            
                        </div>
                        <div className="col-md-4">
                            <span className="l__ex">Output</span>
                            <p className="l__pp" style={{marginTop:'20px'}}>
                            -2<br/>
                            2
                            </p>
                        </div>
                    </div>
                </div>
                {/* ******End***** */}

                {/*********Random***********/}
                <div className="l__chunk">
                    <div className="row">
                        <h5>_.random</h5>
                        <div className="col-md-4 l__col">
                            <span className="l__ex">Definition</span>
                            <p style={{paddingTop:'10px'}}>
                                Produces a random number between the inclusive lower and upper bounds. If only one argument is provided a number between 0 and the given number is returned. 
                                If floating is true, or either lower or upper are floats, a floating-point number is returned instead of an integer.
                            </p>
                            <strong style={{paddingRight:'10px',fontFamily:'monospace'}}>Syntax:</strong>
                            <span className="l__syn">
                                _.random([lower=0], [upper=1], [floating])
                            </span>
                        </div>
                        <div className="col-md-4 l__col">
                            <span className="l__ex">Example</span>
                            <p className="l__pp">
                                import  _ from 'lodash';<br/>
                                var ranValue = _.random( 1, 4);<br/>
                                var randomValue = '';<br/>
                                console.log(ranValue);<br/>
                                <br/>
                                randomValue = _.random(1, 4, true);<br/>
                                console.log(randomValue);<br/>
                            </p>
                            
                        </div>
                        <div className="col-md-4">
                            <span className="l__ex">Output</span>
                            <p className="l__pp" style={{marginTop:'20px'}}>
                            2<br/>
                            2.486341743797542
                            </p>
                        </div>
                    </div>
                </div>
                {/* ******End***** */}
              

                


            </div>
        </div>

          {/* Object Method */}
          <div className="lodash__types">
            <div className="container">
                <h4>Lodash - Object Methods</h4>
                <p className="l__para">
                    Lodash has many useful methods which helps in processing Objects.
                </p>
                  {/*********At***********/}
                  <div className="l__chunk">
                    <div className="row">
                        <h5>_.at</h5>
                        <div className="col-md-4 l__col">
                            <span className="l__ex">Definition</span>
                            <p style={{paddingTop:'10px'}}>
                                Creates an array of values corresponding to paths of object.
                            </p>
                            <strong style={{paddingRight:'10px',fontFamily:'monospace'}}>Syntax:</strong>
                            <span className="l__syn">
                                _.at(object, [paths])
                            </span>
                        </div>
                        <div className="col-md-4 l__col">
                            <span className="l__ex">Example</span>
                            <p className="l__pp">
                                import  _ from 'lodash';<br/>
                                var objectValue = [ 'a': [[ 'b': [ 'c': 3 ] ], 4, 99, 11, 88, 55] ];<br/>
                                <br/>
                                console.log('Objects', _.at(objectValue, ['a[0].b.c', 'a[2]']));<br/>
                            </p>
                            
                        </div>
                        <div className="col-md-4">
                            <span className="l__ex">Output</span>
                            <p className="l__pp" style={{marginTop:'20px'}}>
                                [ 3, 99 ]
                            </p>
                        </div>
                    </div>
                </div>
                {/* ******End***** */}
                
                 {/*********Defaults***********/}
                 <div className="l__chunk">
                    <div className="row">
                        <h5>_.defaults</h5>
                        <div className="col-md-4 l__col">
                            <span className="l__ex">Definition</span>
                            <p style={{paddingTop:'10px'}}>
                                Assigns own and inherited enumerable string keyed properties of source objects to the destination object for all destination 
                                properties that resolve to undefined. Source objects are applied from left to right. Once a property is set, additional values 
                                of the same property are ignored.
                            </p>
                            <strong style={{paddingRight:'10px',fontFamily:'monospace'}}>Syntax:</strong>
                            <span className="l__syn">
                                _.defaults(object, [sources])
                            </span>
                        </div>
                        <div className="col-md-4 l__col">
                            <span className="l__ex">Example</span>
                            <p className="l__pp">
                                import  _ from 'lodash';<br/>
                                var defValue = _.defaults([ 'a': 1 ], [ 'b': 2 ], [ 'c': 3 ], [ 'c': 9 ], [ 'b': 6 ]);<br/>
                                <br/>
                                console.log('Default', defValue);
                            </p>
                            
                        </div>
                        <div className="col-md-4">
                            <span className="l__ex">Output</span>
                            <p className="l__pp" style={{marginTop:'20px'}}>
                                [a: 1, b: 2, c: 3]
                            </p>
                        </div>
                    </div>
                </div>
                {/* ******End***** */}

                {/*********Random***********/}
                <div className="l__chunk">
                    <div className="row">
                        <h5>_.findKey</h5>
                        <div className="col-md-4 l__col">
                            <span className="l__ex">Definition</span>
                            <p style={{paddingTop:'10px'}}>
                                This method is like _.find except that it returns the key of the first element predicate returns truthy for instead of the element itself.
                            </p>
                            <strong style={{paddingRight:'10px',fontFamily:'monospace'}}>Syntax:</strong>
                            <span className="l__syn">
                            _.findKey(object, [predicate=_.identity])
                            </span>
                        </div>
                        <div className="col-md-4 l__col">
                            <span className="l__ex">Example</span>
                            <p className="l__pp">
                                import  _ from 'lodash';<br/>
                                var keyUsers = [<br/>
                                'Joe': ['age': 36, 'active': true ],<br/>
                                'Robert': ['age': 40, 'active': false ],<br/>
                                'Stefan': ['age': 10,   'active': true ]<br/>
                                ];<br/>
                                <br/>
                                var keyResult = _.findKey(keyUsers, function(o) [ return o.age = 10; ]);<br/>
                                console.log(keyResult);
                            </p>
                            
                        </div>
                        <div className="col-md-4">
                            <span className="l__ex">Output</span>
                            <p className="l__pp" style={{marginTop:'20px'}}>
                                Stefan
                            </p>
                        </div>
                    </div>
                </div>
                {/* ******End***** */}

                 {/*********Has***********/}
                 <div className="l__chunk">
                    <div className="row">
                        <h5>_.has</h5>
                        <div className="col-md-4 l__col">
                            <span className="l__ex">Definition</span>
                            <p style={{paddingTop:'10px'}}>
                            Checks if path is a direct property of object.
                            </p>
                            <strong style={{paddingRight:'10px',fontFamily:'monospace'}}>Syntax:</strong>
                            <span className="l__syn">
                            _.has(object, path)
                            </span>
                        </div>
                        <div className="col-md-4 l__col">
                            <span className="l__ex">Example</span>
                            <p className="l__pp">
                                import  _ from 'lodash';<br/>
                                var object1 = [ 'a': [[ 'b': [ 'c': 3 ]]]];<br/>
                                var object1Value = _.has(object1, 'a');<br/>
                                var object2Va = '';<br/>
                                console.log('Has', object1Value);<br/>
                                <br/>
                                object2Va = _.has(object1,   ['c']);<br/>
                                console.log('Has2', object2Va);
                            </p>
                            
                        </div>
                        <div className="col-md-4">
                            <span className="l__ex">Output</span>
                            <p className="l__pp" style={{marginTop:'20px'}}>
                                true<br/>
                                false
                            </p>
                        </div>
                    </div>
                </div>
                {/* ******End***** */}
              

                


            </div>
            </div>

        
          {/* Seq Method */}
          <div className="lodash__types">
            <div className="container">
                <h4>Lodash - Seq Methods</h4>
                <p className="l__para">
                    Lodash has many useful methods which helps in processing Sequence related methods.
                </p>
                  {/*********Chain***********/}
                  <div className="l__chunk">
                    <div className="row">
                        <h5>_.chain</h5>
                        <div className="col-md-4 l__col">
                            <span className="l__ex">Definition</span>
                            <p style={{paddingTop:'10px'}}>
                                Creates a lodash wrapper instance that wraps value with explicit method chain sequences enabled. The result of such sequences must be unwrapped with _#value.
                            </p>
                            <strong style={{paddingRight:'10px',fontFamily:'monospace'}}>Syntax:</strong>
                            <span className="l__syn">
                                _.chain(value)
                            </span>
                        </div>
                        <div className="col-md-4 l__col">
                            <span className="l__ex">Example</span>
                            <p className="l__pp">
                                import  _ from 'lodash';<br/>
                                var chainUsers = [<br/>
                                [ 'user': 'Joe', 'age': 36, 'id': 3 ],<br/>
                                [ 'user': 'Julie', 'age': 40, 'id': 9 ],<br/>
                                [ 'user': 'Robert', 'age': 10, 'id': 5 ]<br/>
                                ];<br/>
                                <br/>
                                var youngest = _<br/>
                                .chain(chainUsers)<br/>
                                .sortBy('id')<br/>
                                .map(function(o) [<br/>
                                    return o.user + ' is ' + o.age + ' and his ID is' + o.id;<br/>
                                ])<br/>
                                .head()<br/>
                                .value();<br/>
                                console.log(youngest);
                                
                            </p>
                            
                        </div>
                        <div className="col-md-4">
                            <span className="l__ex">Output</span>
                            <p className="l__pp" style={{marginTop:'20px'}}>
                            Joe is 36 and his ID is 3
                            </p>
                        </div>
                    </div>
                </div>
                {/* ******End***** */}
                
                 {/*********PrototypeChain***********/}
                 <div className="l__chunk">
                    <div className="row">
                        <h5>_.prototype.chain()</h5>
                        <div className="col-md-4 l__col">
                            <span className="l__ex">Definition</span>
                            <p style={{paddingTop:'10px'}}>
                                Creates a lodash wrapper instance with explicit method chain sequences enabled.
                            </p>
                            <strong style={{paddingRight:'10px',fontFamily:'monospace'}}>Syntax:</strong>
                            <span className="l__syn">
                            _.prototype.chain()
                            </span>
                        </div>
                        <div className="col-md-4 l__col">
                            <span className="l__ex">Example</span>
                            <p className="l__pp">
                                import  _ from 'lodash';<br/>
                                var prousers = [<br/>
                                [ 'user': 'Jack', 'age': 36 ],<br/>
                                [ 'user': 'Holland', 'age': 40 ]<br/>
                                ];<br/>
                                <br/>
                                var Proresult = _(prousers)<br/>
                                .chain()<br/>
                                .head()<br/>
                                .pick('user')<br/>
                                .value();<br/>
                                <br/>
                                var prototypeWithoutExplicit=   _(prousers).head();<br/>
                                <br/>
                                console.log('PrototypeChain:', Proresult);<br/>
                                console.log('prototypeWithoutChaining:', prototypeWithoutExplicit);
                            </p>
                            
                        </div>
                        <div className="col-md-4">
                            <span className="l__ex">Output</span>
                            <p className="l__pp" style={{marginTop:'20px'}}>
                                [user: 'Jack']    {/* A sequence with explicit chaining. */}<br/>
                                [user: 'Jack', age: 36]    {/* A sequence without explicit chaining. */}
                            </p>
                        </div>
                    </div>
                </div>
                {/* ******End***** */}

                {/*********PrototypePlant***********/}
                <div className="l__chunk">
                    <div className="row">
                        <h5>_.prototype.plant</h5>
                        <div className="col-md-4 l__col">
                            <span className="l__ex">Definition</span>
                            <p style={{paddingTop:'10px'}}>
                                Creates a clone of the chain sequence planting value as the wrapped value.
                            </p>
                            <strong style={{paddingRight:'10px',fontFamily:'monospace'}}>Syntax:</strong>
                            <span className="l__syn">
                                _.prototype.plant(value)
                            </span>
                        </div>
                        <div className="col-md-4 l__col">
                            <span className="l__ex">Example</span>
                            <p className="l__pp">
                                import  _ from 'lodash';<br/>
                                function square(n) [<br/>
                                return n * n;<br/>
                                ]<br/>
                                <br/>
                                var wrapped = _([1, 2]).map(square);<br/>
                                var other = wrapped.plant([3, 4]);<br/>
                                <br/>
                                console.log(other.value());<br/>
                                console.log(wrapped.value());
                            </p>
                            
                        </div>
                        <div className="col-md-4">
                            <span className="l__ex">Output</span>
                            <p className="l__pp" style={{marginTop:'20px'}}>
                            [9, 16]<br/>
                            [1, 4]
                            </p>
                        </div>
                    </div>
                </div>
                {/* ******End***** */}
              

                


            </div>
        </div>

        
          {/* String Method */}
          <div className="lodash__types">
            <div className="container">
                <h4>Lodash - String Methods</h4>
                <p className="l__para">
                    Lodash has many useful methods which helps in processing String.
                </p>
                  {/*********CamelCase***********/}
                  <div className="l__chunk">
                    <div className="row">
                        <h5>_.camelCase</h5>
                        <div className="col-md-4 l__col">
                            <span className="l__ex">Definition</span>
                            <p style={{paddingTop:'10px'}}>
                                Creates a lodash wrapper instance that wraps value with explicit method chain sequences enabled. The result of such sequences must be unwrapped with _#value.
                            </p>
                            <strong style={{paddingRight:'10px',fontFamily:'monospace'}}>Syntax:</strong>
                            <span className="l__syn">
                            _.camelCase([string=''])
                            </span>
                        </div>
                        <div className="col-md-4 l__col">
                            <span className="l__ex">Example</span>
                            <p className="l__pp">
                                import  _ from 'lodash';<br/>
                                var CamelInput = 'SnehllTechnology';<br/>
                                var Camelresult = _.camelCase(CamelInput);<br/>
                                <br/>
                                console.log('CamelCase:', Camelresult);
                                
                            </p>
                            
                        </div>
                        <div className="col-md-4">
                            <span className="l__ex">Output</span>
                            <p className="l__pp" style={{marginTop:'20px'}}>
                            snehllTechnology
                            </p>
                        </div>
                    </div>
                </div>
                {/* ******End***** */}
                
                 {/*********Escape String***********/}
                 <div className="l__chunk">
                    <div className="row">
                        <h5>_.escape</h5>
                        <div className="col-md-4 l__col">
                            <span className="l__ex">Definition</span>
                            <p style={{paddingTop:'10px'}}>
                                Converts the characters "&", """, and "'" in string to their corresponding HTML entities.
                            </p>
                            <strong style={{paddingRight:'10px',fontFamily:'monospace'}}>Syntax:</strong>
                            <span className="l__syn">
                                _.escape([string=''])
                            </span>
                        </div>
                        <div className="col-md-4 l__col">
                            <span className="l__ex">Example</span>
                            <p className="l__pp">
                                import  _ from 'lodash';<br/>
                                var escapeValue = _.escape('Joe , Robert , Julie');<br/>
                                console.log(escapeValue);
                            </p>
                            
                        </div>
                        <div className="col-md-4">
                            <span className="l__ex">Output</span>
                            <p className="l__pp" style={{marginTop:'20px'}}>
                                Joe &gt; Robert &lt; Julie
                            </p>
                        </div>
                    </div>
                </div>
                {/* ******End***** */}

                {/*********kebabCase***********/}
                <div className="l__chunk">
                    <div className="row">
                        <h5>_.kebabCase</h5>
                        <div className="col-md-4 l__col">
                            <span className="l__ex">Definition</span>
                            <p style={{paddingTop:'10px'}}>
                            Converts string to kebab case.
                            </p>
                            <strong style={{paddingRight:'10px',fontFamily:'monospace'}}>Syntax:</strong>
                            <span className="l__syn">
                            _.kebabCase([string=''])
                            </span>
                        </div>
                        <div className="col-md-4 l__col">
                            <span className="l__ex">Example</span>
                            <p className="l__pp">
                                import  _ from 'lodash';<br/>
                                kebabValue = _.kebabCase('LearnLodash');<br/>
                                <br/>
                                console.log(kebabValue);
                            </p>
                            
                        </div>
                        <div className="col-md-4">
                            <span className="l__ex">Output</span>
                            <p className="l__pp" style={{marginTop:'20px'}}>
                           learn-lodash
                            </p>
                        </div>
                    </div>
                </div>
                {/* ******End***** */}

                 {/*********Pad***********/}
                 <div className="l__chunk">
                    <div className="row">
                        <h5>_.pad</h5>
                        <div className="col-md-4 l__col">
                            <span className="l__ex">Definition</span>
                            <p style={{paddingTop:'10px'}}>
                                Pads string on the left and right sides if it's shorter than length. Padding characters are truncated if they can't be evenly divided by length.
                            </p>
                            <strong style={{paddingRight:'10px',fontFamily:'monospace'}}>Syntax:</strong>
                            <span className="l__syn">
                                _.pad([string=''], [length=0], [chars=' '])
                            </span>
                        </div>
                        <div className="col-md-4 l__col">
                            <span className="l__ex">Example</span>
                            <p className="l__pp">
                                import  _ from 'lodash';<br/>
                                var padValue = _.pad('foo', 10, '-_');<br/>
                                <br/>
                                console.log('Pad', padValue);
                            </p>
                            
                        </div>
                        <div className="col-md-4">
                            <span className="l__ex">Output</span>
                            <p className="l__pp" style={{marginTop:'20px'}}>
                                -_-foo-_-_
                            </p>
                        </div>
                    </div>
                </div>
                {/* ******End***** */}

                {/*********Repeat***********/}
                <div className="l__chunk">
                    <div className="row">
                        <h5>_.repeat</h5>
                        <div className="col-md-4 l__col">
                            <span className="l__ex">Definition</span>
                            <p style={{paddingTop:'10px'}}>
                            Repeats the given string n times.
                            </p>
                            <strong style={{paddingRight:'10px',fontFamily:'monospace'}}>Syntax:</strong>
                            <span className="l__syn">
                                _.repeat([string=''], [n=1])
                            </span>
                        </div>
                        <div className="col-md-4 l__col">
                            <span className="l__ex">Example</span>
                            <p className="l__pp">
                                import  _ from 'lodash';<br/>
                                var repeatVal = _.repeat('*', 5);<br/>
                                <br/>
                                console.log(repeatVal);
                            </p>
                            
                        </div>
                        <div className="col-md-4">
                            <span className="l__ex">Output</span>
                            <p className="l__pp" style={{marginTop:'20px'}}>
                                *****
                            </p>
                        </div>
                    </div>
                </div>
                {/* ******End***** */}

                 {/*********Replace***********/}
                 <div className="l__chunk">
                    <div className="row">
                        <h5>_.replace</h5>
                        <div className="col-md-4 l__col">
                            <span className="l__ex">Definition</span>
                            <p style={{paddingTop:'10px'}}>
                                Replaces matches for pattern in string with replacement.
                            </p>
                            <strong style={{paddingRight:'10px',fontFamily:'monospace'}}>Syntax:</strong>
                            <span className="l__syn">
                            _.replace([string=''], pattern, replacement)
                            </span>
                        </div>
                        <div className="col-md-4 l__col">
                            <span className="l__ex">Example</span>
                            <p className="l__pp">
                                import  _ from 'lodash';<br/>
                                <br/>
                                var replaceVal = _.replace('Hi Taylor', 'Taylor', 'Selena Gomez');<br/>
                                <br/>
                                console.log(replaceVal);
                            </p>
                            
                        </div>
                        <div className="col-md-4">
                            <span className="l__ex">Output</span>
                            <p className="l__pp" style={{marginTop:'20px'}}>
                                Hi Selena Gomez
                            </p>
                        </div>
                    </div>
                </div>
                {/* ******End***** */}

                {/*********Snake Case***********/}
                <div className="l__chunk">
                    <div className="row">
                        <h5>_.snakeCase</h5>
                        <div className="col-md-4 l__col">
                            <span className="l__ex">Definition</span>
                            <p style={{paddingTop:'10px'}}>
                            Converts string to snake case.
                            </p>
                            <strong style={{paddingRight:'10px',fontFamily:'monospace'}}>Syntax:</strong>
                            <span className="l__syn">
                            _.snakeCase([string=''])
                            </span>
                        </div>
                        <div className="col-md-4 l__col">
                            <span className="l__ex">Example</span>
                            <p className="l__pp">
                                import  _ from 'lodash';<br/>
                                <br/>
                                var snakeCase = _.snakeCase('Do Or Die');<br/>
                                <br/>
                                console.log('snakeCase:', snakeCase);
                            </p>
                            
                        </div>
                        <div className="col-md-4">
                            <span className="l__ex">Output</span>
                            <p className="l__pp" style={{marginTop:'20px'}}>
                                do_or_die
                            </p>
                        </div>
                    </div>
                </div>
                {/* ******End***** */}
              

                


            </div>
        </div>

        {/* Utility Method */}
        <div className="lodash__types">
            <div className="container">
                <h4>Lodash - Utility Methods</h4>
                <p className="l__para">
                    Lodash has many useful methods which helps in processing Utility.
                </p>
                  {/*********Flow***********/}
                  <div className="l__chunk">
                    <div className="row">
                        <h5>_.flow</h5>
                        <div className="col-md-4 l__col">
                            <span className="l__ex">Definition</span>
                            <p style={{paddingTop:'10px'}}>
                                Creates a function that returns the result of invoking the given functions with the this binding of the created function, 
                                where each successive invocation is supplied the return value of the previous.
                            </p>
                            <strong style={{paddingRight:'10px',fontFamily:'monospace'}}>Syntax:</strong>
                            <span className="l__syn">
                            _.flow([funcs])
                            </span>
                        </div>
                        <div className="col-md-4 l__col">
                            <span className="l__ex">Example</span>
                            <p className="l__pp">
                                import  _ from 'lodash';<br/>
                                function square(n) [<br/>
                                return n * n;<br/>
                                ]<br/>
                                <br/>
                                var addAndSquare = _.flow([_.add, square]);<br/>
                                var result = addAndSquare(3, 2);<br/>
                                console.log(result);
                                
                            </p>
                            
                        </div>
                        <div className="col-md-4">
                            <span className="l__ex">Output</span>
                            <p className="l__pp" style={{marginTop:'20px'}}>
                            25
                            </p>
                        </div>
                    </div>
                </div>
                {/* ******End***** */}
                
                 {/*********Matches***********/}
                 <div className="l__chunk">
                    <div className="row">
                        <h5>_.matches</h5>
                        <div className="col-md-4 l__col">
                            <span className="l__ex">Definition</span>
                            <p style={{paddingTop:'10px'}}>
                                Creates a function that performs a partial deep comparison between a given object and source, returning true if the given object has equivalent property values, else false.
                            </p>
                            <strong style={{paddingRight:'10px',fontFamily:'monospace'}}>Syntax:</strong>
                            <span className="l__syn">
                            _.matches(source)
                            </span>
                        </div>
                        <div className="col-md-4 l__col">
                            <span className="l__ex">Example</span>
                            <p className="l__pp">
                                import  _ from 'lodash';<br/>
                                var mathobjects = [<br/>
                                [ 'a': 1, 'b': 2, 'c': 3 ],<br/>
                                [ 'a': 4, 'b': 5, 'c': 6 ]<br/>
                                ];<br/>
                                <br/>
                                var mathResult = _.filter(mathobjects, _.matches([ 'a': 1]));<br/>
                                <br/>
                                console.log('Matches:', mathResult);
                            </p>
                            
                        </div>
                        <div className="col-md-4">
                            <span className="l__ex">Output</span>
                            <p className="l__pp" style={{marginTop:'20px'}}>
                                [a: 1, b: 2, c: 3]
                            </p>
                        </div>
                    </div>
                </div>
                {/* ******End***** */}

                {/*********Mixin***********/}
                <div className="l__chunk">
                    <div className="row">
                        <h5>_.mixin</h5>
                        <div className="col-md-4 l__col">
                            <span className="l__ex">Definition</span>
                            <p style={{paddingTop:'10px'}}>
                            Adds all own enumerable string keyed function properties of a source object to the destination object. If object is a function, then methods are added to its prototype as well.
                            </p>
                            <strong style={{paddingRight:'10px',fontFamily:'monospace'}}>Syntax:</strong>
                            <span className="l__syn">
                            _.mixin([object=lodash], source, [options={}])
                            </span>
                        </div>
                        <div className="col-md-4 l__col">
                            <span className="l__ex">Example</span>
                            <p className="l__pp">
                                import  _ from 'lodash';<br/>
                                function vowels(string) [<br/>
                                return _.filter(string, function(v) [<br/>
                                    return /[aeiou]/i.test(v);<br/>
                                ]);<br/>
                            ]<br/>
                                _.mixin([ 'vowels': vowels ], [ 'chain': false ]);<br/>
                                console.log('Mixin:', _('Julie').vowels());
                            </p>
                            
                        </div>
                        <div className="col-md-4">
                            <span className="l__ex">Output</span>
                            <p className="l__pp" style={{marginTop:'20px'}}>
                            [ 'u', 'i', 'e' ]
                            </p>
                        </div>
                    </div>
                </div>
                {/* ******End***** */}

                 {/*********Noop***********/}
                 <div className="l__chunk">
                    <div className="row">
                        <h5>_.noop</h5>
                        <div className="col-md-4 l__col">
                            <span className="l__ex">Definition</span>
                            <p style={{paddingTop:'10px'}}>
                            This method returns undefined.
                            </p>
                            <strong style={{paddingRight:'10px',fontFamily:'monospace'}}>Syntax:</strong>
                            <span className="l__syn">
                            _.noop()
                            </span>
                        </div>
                        <div className="col-md-4 l__col">
                            <span className="l__ex">Example</span>
                            <p className="l__pp">
                                import  _ from 'lodash';<br/>
                                console.log('Noop:', _.times(2, _.noop));
                            </p>
                            
                        </div>
                        <div className="col-md-4">
                            <span className="l__ex">Output</span>
                            <p className="l__pp" style={{marginTop:'20px'}}>
                            [undefined, undefined]
                            </p>
                        </div>
                    </div>
                </div>
                {/* ******End***** */}

                {/*********Over***********/}
                <div className="l__chunk">
                    <div className="row">
                        <h5>_.over</h5>
                        <div className="col-md-4 l__col">
                            <span className="l__ex">Definition</span>
                            <p style={{paddingTop:'10px'}}>
                            Creates a function that invokes iteratees with the arguments it receives and returns their results.
                            </p>
                            <strong style={{paddingRight:'10px',fontFamily:'monospace'}}>Syntax:</strong>
                            <span className="l__syn">
                            _.over([iteratees=[_.identity]])
                            </span>
                        </div>
                        <div className="col-md-4 l__col">
                            <span className="l__ex">Example</span>
                            <p className="l__pp">
                                import  _ from 'lodash';<br/>
                                var func = _.over([Math.max, Math.min]);<br/>
                                <br/>
                                console.log('Over:', func(1, 2, 3, 4, 8, 6));
                            </p>
                            
                        </div>
                        <div className="col-md-4">
                            <span className="l__ex">Output</span>
                            <p className="l__pp" style={{marginTop:'20px'}}>
                            [8, 1]
                            </p>
                        </div>
                    </div>
                </div>
                {/* ******End***** */}

                 {/*********Range***********/}
                 <div className="l__chunk">
                    <div className="row">
                        <h5>_.range</h5>
                        <div className="col-md-4 l__col">
                            <span className="l__ex">Definition</span>
                            <p style={{paddingTop:'10px'}}>
                                Creates an array of numbers (positive and/or negative) progressing from start up to, but not including, end. A step of -1 is used if a negative start is specified without an end or step. If end is not specified, it's set to start with start then set to 0.
                            </p>
                            <strong style={{paddingRight:'10px',fontFamily:'monospace'}}>Syntax:</strong>
                            <span className="l__syn">
                            _.range([start=0], end, [step=1])
                            </span>
                        </div>
                        <div className="col-md-4 l__col">
                            <span className="l__ex">Example</span>
                            <p className="l__pp">
                                import  _ from 'lodash';<br/>
                                <br/>
                                console.log(_.range(4));<br/>
                                console.log(_.range(0, 20, 9));
                            </p>
                            
                        </div>
                        <div className="col-md-4">
                            <span className="l__ex">Output</span>
                            <p className="l__pp" style={{marginTop:'20px'}}>
                            [0, 1, 2, 3]<br/>
                            [0, 9, 18]
                            </p>
                        </div>
                    </div>
                </div>
                {/* ******End***** */}

                {/*********Snake Case***********/}
                <div className="l__chunk">
                    <div className="row">
                        <h5>_.stubArray</h5>
                        <div className="col-md-4 l__col">
                            <span className="l__ex">Definition</span>
                            <p style={{paddingTop:'10px'}}>
                            This method returns a new empty array.
                            </p>
                            <strong style={{paddingRight:'10px',fontFamily:'monospace'}}>Syntax:</strong>
                            <span className="l__syn">
                            _.stubArray()
                            </span>
                        </div>
                        <div className="col-md-4 l__col">
                            <span className="l__ex">Example</span>
                            <p className="l__pp">
                                import  _ from 'lodash';<br/>
                                <br/>
                                var stubarrays = _.times(2, _.stubArray);<br/>
                                <br/>
                                console.log('StubArray:', stubarrays);
                            </p>
                            
                        </div>
                        <div className="col-md-4">
                            <span className="l__ex">Output</span>
                            <p className="l__pp" style={{marginTop:'20px'}}>
                            [ [], [] ]
                            </p>
                        </div>
                    </div>
                </div>
                {/* ******End***** */}
              

                


            </div>
        </div>

      </div>
    );
  }
  
  export default Lodash;