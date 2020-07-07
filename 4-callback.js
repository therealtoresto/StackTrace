'use strict';

const f1 = callback => {
    setTimeout(() => {
        callback(new Error('Where am i?'));
    }, 0);
};

const f2 = callback => {
    f1(callback);
};

const f3 = callback => {
    f2(callback);
};

f3(err => {
    console.log('Catch', err);
});