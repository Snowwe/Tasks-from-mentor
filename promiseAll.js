// promiseAll
Promise.all1 = function (promises) {
    return new Promise(function (resolve, reject) {
        // let count = promises.length;
        let result = [];
        let checkDone = function () {
            console.log(promises.length);
            if (--promises.length === 0)
                resolve(result)
        };
        promises.forEach(function (p, i) {
            p.then(function (x) {
                result[i] = x
            }, reject).then(checkDone)
        });
        console.log(result);
    })
};

Promise.all2 = function (promises) {
    return new Promise(function (resolve, reject) {
        let result = [], pending, i, processPromise;

        if (!promises.length) {
            resolve(result);
            return;
        }

        processPromise = function (i) {
            promises[i].then(function (value) {
                result[i] = value;

                if (!--pending) {
                    resolve(result);
                }
            }, reject);
        };

        pending = i = promises.length;
        while (i--) {
            processPromise(i);
        }
    });
};
let p1 = Promise.resolve("one");
let p2 = Promise.resolve("two");
let p3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, "three");
});
let p4 = new Promise((resolve, reject) => {
    setTimeout(resolve, 2000, "four");
});
let p5 = new Promise((resolve, reject) => {
// Это обещание прервет Promise.all
    reject("reject");
});

// console.log(Promise.all1([p1, p2, p3, p4]));
Promise.all1([p1, p2, p5, p3, p4]).then(
    value => {
        console.log(value);
    }, reason => {
        console.log(reason)
    });
Promise.all2([p1, p2, p3, p4]).then(
    value => {
        console.log(value);
    }, reason => {
        console.log(reason)
    });
