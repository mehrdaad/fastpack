/* Babel: default parameters */
function foo(numVal) {
  
};
function foo(numVal = 2) {
  
};
function foo(numVal) {
  
};
function foo(numVal) {
  
};
function foo(numVal = 2) {
  
};
function foo(numVal = 2) {
  
};
/* Babel: strip-type-casts */
xxx;
{xxx: 0, yyy: "hey"};
(xxx) =>  (xxx + 1);
(xxx, yyy);
/* Babel:  def-site-variance */
class C1 {
  
};
function f() {
  
};
;
;
;
;
;
;
;
;
;
;
;
;
;
class C2 {
  constructor() {
    Object.defineProperty(this, "p", {"configurable": true, "enumerable": true, "writable": true, "value": void 0})
  }
};
class C3 {
  constructor() {
    Object.defineProperty(this, "p", {"configurable": true, "enumerable": true, "writable": true, "value": void 0})
  }
};
/* Babel: strip-call-properties */
var a;
var a;
var a;
var a;
;
/* Babel: strip-array-types */
var a;
var a;
var a;
var a;
var a;
var a;
/* Babel: strip-declare-exports */
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
/* Babel: strip-declare-module */
;
;
;
;
;
/* Babel: strip-declare-statements */
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
/* Babel: strip-interfaces-module-and-script */
;
;
;
;
;
class Foo {
  
};
class Foo2 extends Bar {
  
};
class Foo3 extends class Bar {
  
} {
  
};
class Foo4 extends class Bar {
  
} {
  
};
/* Babel: strip-qualified-generic-type */
var a;
var a;
var a;
var a;
/* Babel: strip-string-literal-types */
function createElement(tagName) {
  
};
function createElement(tagName) {
  
};
/* Babel: strip-tuples */
var a = [];
var a = [foo];
var a = [123];
var a = [123, "duck"];
/* Babel: strip-type-alias*/
;
;
;
;
;
/* Babel: strip-type-annotations */
function foo(numVal) {
  
};
function foo(numVal) {
  
};
function foo(numVal, strVal) {
  
};
function foo(numVal, untypedVal) {
  
};
function foo(untypedVal, numVal) {
  
};
function foo(nullableNum) {
  
};
function foo(callback) {
  
};
function foo(callback) {
  
};
function foo(callback) {
  
};
function foo(callback) {
  
};
function foo(callback) {
  
};
function foo() {
  
};
function foo() {
  
};
function foo() {
  
};
function foo() {
  
};
function foo() {
  
};
function foo() {
  
};
function foo() {
  
};
a = function () {
  
};
// TODO: bug in printer - check printer for the next 3 tests
a = {set fooProp(value) {
  
}};
a = {set fooProp(value) {
  
}};
a = {get fooProp() {
  
}};
a = {id: function (x) {
  
}};
a = {id: function *(x) {
  
}};
a = {id: async function (x) {
  
}};
a = {123: function (x) {
  
}};
class Foo {
  set fooProp(value) {
    
  }
};
class Foo2 {
  set fooProp(value) {
    
  }
};
class Foo3 {
  get fooProp() {
    
  }
};
var numVal = otherNumVal;
var a;
var a;
var a;
var a;
var a;
var a;
var a;
var a;
var a;
var a;
var a;
var a;
var a;
var a = [1, 2, 3];
a = class Foo {
  
};
a = class Foo extends Bar {
  
};
class Foo4 {
  
};
class Foo5 extends Bar {
  
};
class Foo6 extends mixin(Bar) {
  
};
class Foo7 {
  bar() {
    return 42
  }
};
class Foo8 {
  "bar"() {
    
  }
};
function foo(requiredParam, optParam) {
  
};
class Foo9 {
  constructor() {
    Object.defineProperty(this, "prop1", {"configurable": true, "enumerable": true, "writable": true, "value": void 0});
    Object.defineProperty(this, "prop2", {"configurable": true, "enumerable": true, "writable": true, "value": void 0})
  }
};
let Foo10 = $fpack.defineClass(class Foo10 {
    constructor() {
      Object.defineProperty(this, "prop2", {"configurable": true, "enumerable": true, "writable": true, "value": void 0})
    }
  }, [{"name": "prop1", "value": void 0}], [], []);
var x = 4;
class Array {
  concat(items) {
    
  }
};
var x = fn;
var x = Y;
var x = Y;
var {x} = {x: "hello"};
var {x} = {x: "hello"};
var [x] = ["hello"];
function foo({x}) {
  
};
function foo([x]) {
  
};
function foo( ...rest) {
  
};
function ( ...rest) {
  
};
( ...rest) =>  (rest);
var a;
var a;
var a;
var a;
var a;
var a;
var identity;
var identity;
;
;
;
import type from "foo";
import type2, {foo3} from "bar";
;
;
;
;
import {V1} from "foo";
;
import {V4} from "foo";
;
;
import 'foo';
