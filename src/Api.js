var __token = null;

const Api = {
    fakeTokenExpiry: () => {
        __token = 'obsolete';
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
            if (!__token || __token === 'obsolete') {
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
