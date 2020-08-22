let loggedIn = false;

export default {
    login(email, password) {
        return new Promise((resolve, reject) => {
            if (email === 'user@example.com' && password === 'password') {
                loggedIn = true;
                resolve();
            } else {
                reject();
            }
        });
    },
    logout() {
        loggedIn = false;
    },
    isAuthenticated() {
        return loggedIn;
    }
};