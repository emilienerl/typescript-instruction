"use strict";
var Friend = /** @class */ (function () {
    //constructor
    function Friend(fname, pNumber, email) {
        this.fname = fname;
        this.pNumber = pNumber;
        this.email = email;
    }
    Friend.prototype.print = function () {
        console.log(this.fname + "|" + this.pNumber + "|" + this.email);
    };
    return Friend;
}());
var friends = [
    new Friend("Julie", "951-216-4486", "julesdietsch@fioptics.com"),
    new Friend("Monroe", "513-254-9374", "monroekimmel@gmail.com"),
    new Friend("Rick", "513-371-1666", "richardbeck083@gmail.com"),
    new Friend("Margaret", "513-943-0934", "margaretnerll@gmail.com"),
    new Friend("Claire", "513-207-0784", "clairemnerl@gmail.com")
];
for (var _i = 0, friends_1 = friends; _i < friends_1.length; _i++) {
    var friend = friends_1[_i];
    friend.print();
}
