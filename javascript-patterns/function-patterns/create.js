/**
 * Created by cyk on 15/10/5.
 */

"use strict";

Object.create = Object.create || function (obj) {
        var F = function() {};
        F.prototype = obj;
        return new F();
    };

var Foo = function () {
    this.x = 1
};

Foo.prototype.out = function() {
    console.log(this.x);
};

var foo = new Foo();

var cloneFoo = Object.create(foo);

cloneFoo.out();