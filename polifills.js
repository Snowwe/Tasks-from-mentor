// bind
Function.prototype.myBind = function (context, ...arg1) {
    const thisF = this;
    return function (...arg2) {
        return thisF.apply(context, arg1.concat(arg2));
    }
};
Function.prototype.myBind2 = function (context) {
    const thisF = this;
    return function (...arg) {
        return thisF.apply(context, arg);
    }
};

const user = {
    firstName: "Вася",
    sayHi: function () {
        console.log(this.firstName);
    }
};

setTimeout(user.sayHi, 1000);
setTimeout(user.sayHi.bind(user), 1000);
setTimeout(user.sayHi.myBind(user), 1000);
setTimeout(user.sayHi.myBind2(user), 1000);
setTimeout(user.sayHi.bindMy(user), 1000);

// Object.create
Object.prototype.myCreate1 = function (proto) {
    function F() {
    }

    F.prototype = proto;
    return new F();
};

Object.prototype.myCreate2 = function (proto) {
    const obj = {};
    obj.__proto__ = proto;
    return obj;
};


// reducer


// map

//console.log(hoist); // Output: ReferenceError: hoist is not defined …
//let hoist = 'The variable has been hoisted.';
// function fff(ii) {
//     return console.log(ii);
// }
//
// for (let i = 0; i < 5; i++) {
//     setTimeout(function () {
//             fff(i);
//         }
//         , 1000)
// }

