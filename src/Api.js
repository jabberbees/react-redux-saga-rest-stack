var __token = null;
var __tokenExpired = false;
var __error = false;

const Api = {
    fakeTokenExpiry: (tokenExpired) => {
        __tokenExpired = tokenExpired;
    },

    fakeError: (error) => {
        __error = error;
    },

    signIn: (login, password) => {
        return new Promise((resolve, reject) => {
            if (login === password) {
                __token = 'secret-token';
                resolve({ ok: true, token: 'secret-token' });
            } else {
                reject({ status: 401 });
            }
        });
    },

    doSomething: () => {
        return new Promise((resolve, reject) => {
            if (__error) {
                reject({ status: 500 });
            } else if (!__token || __tokenExpired) {
                reject({ status: 401 });
            } else {
                setTimeout(function() { 
                    resolve({ ok: true });
                }, 1000);
            }
        });
    },

    doSomethingWithPromise: () => {
        return new Promise((resolve, reject) => {
            if (__error) {
                setTimeout(function() {
                    reject({ status: 500 });
                }, 1000);
            } else if (!__token || __tokenExpired) {
                reject({ status: 401 });
            } else {
                setTimeout(function() { 
                    resolve({ ok: true });
                }, 1000);
            }
        });
    }

};

export default Api;
