/**
 * 组合模式
 * 可以一致的对待组合对象(例如文件夹)和基本对象(例如文件)
 * Created by cyk on 15/10/6.
 */

"use strict";

/**
 * 文件夹
 * @param name
 * @constructor
 */
function Folder(name) {
    this.name = name;
    this.fileList = [];
}

/**
 * 向文件夹添加文件
 * @param {File} file
 */
Folder.prototype.add = function (file) {
    this.fileList.push(file);
    return this; // 链式调用
};

Folder.prototype.scan = function () {
    display('Folder scanning', this.name);
    this.fileList.forEach(function (item) {
        item.scan();
    });
};

/**
 * 文件类
 * @param {string} name
 * @constructor
 */
function File(name) {
    this.name = name;
}

File.prototype.add = function() {
    throw Error('cannot add file to file');
};


File.prototype.scan = function() {
    display('File scanning', this.name);
};


function display(content) {
    var join = [].join;
    console.log(join.call(arguments,' '));
}


var Root = new Folder('/');
var docs = new Folder('/document');
var download = new Folder('/download');

var file1 = new File('composite.js');
var file2 = new File('builder.js');

docs.add(file1);
download.add(file2);

Root.add(docs).add(download);
Root.scan();


