/**
 * Created by cyk on 15/10/5.
 */

//"use strict";

var curryMaker = function (func) {
    var slice = Array.prototype.slice,
        storedArgs = slice.call(arguments, 1);

    return function(newArg) {
        storedArgs.concat(slice.apply(arguments));
        return func.call(this, storedArgs);
    };
};


function output() {
    console.log('ok');
}

var func1 = curryMaker(output, 'nice');

func1('job');
