"use strict";
exports.__esModule = true;
exports.LinkedListNode = void 0;
// Linked list class that takes the value of a node and pointer that will point to the other nodes back and forth 
var LinkedListNode = /** @class */ (function () {
    function LinkedListNode(val) {
        this.val = val;
        this.prev = null;
        this.next = null;
    }
    return LinkedListNode;
}());
exports.LinkedListNode = LinkedListNode;
