/**
 * Created by cyk on 15/10/7.
 */

//"use strict";

var Chain = function (fn) {
    this.fn = fn;
    this.successor = null;
};

Chain.prototype.setNextSuccessor = function (successor) {
    return this.successor = successor;
};

Chain.prototype.run = function () {

    /**
     * 这里可能是异步方法, 所以后续的执行会受到影响
     */
    this.fn.apply(this, arguments);
    //return this.successor && this.successor.run.apply(this.successor, arguments);
};

/**
 * 检测
 */
Chain.prototype.next = function () {
    return this.successor && this.successor.run.apply(this.successor, arguments);
};


var job1 = new Chain(function () {
    console.log('job1 worked');
    var self = this;
    setTimeout(function() {
        self.next();
    }, 1000)
});

var job2 = new Chain(function () {
    console.log('job2 worked');
    this.next();
});

var job3 = new Chain(function () {
    console.log('job3 worked');
    this.next();
});


job1.setNextSuccessor(job2).setNextSuccessor(job3);

job1.run();