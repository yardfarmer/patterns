/**
 * Created by cyk on 15/10/5.
 */

"use strict";


/**
 * 备忘模式, 缓存计算结果
 * @param {} param
 * @returns {*}
 */
var myFunc = function (param) {
    if (!myFunc.cache(param)) {
        var workResult;
        // do some expensive work
        // workResult =  ...
        myFunc.cache[param] = workResult;
    } else {
        return myFunc.cache[param];
    }
};

myFunc.cache = {};


