function isLogin() {
    let token = window.localStorage.getItem("mochi-token");
    return token !== '' && token != null;
}

function setUserInfo(userInfo) {
    window.localStorage.setItem("mochi-userId", userInfo.userId);
    window.localStorage.setItem("mochi-username", userInfo.username);
    window.localStorage.setItem("mochi-token", userInfo.token);
}

function getToken() {
    return window.localStorage.getItem("mochi-token");
}


export {isLogin, setUserInfo, getToken}