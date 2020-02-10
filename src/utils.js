function isLogin() {
    let userInfo = window.localStorage.getItem("mochi-userInfo");
    if (userInfo == null) return false;
    let info = JSON.parse(userInfo);
    return info.token !== '' && info.token != null;
}

function setUserInfo(userInfo) {
    window.localStorage.setItem("mochi-userInfo", JSON.stringify(userInfo));
}

function getUserInfo() {
    let userInfo = window.localStorage.getItem("mochi-userInfo");
    if (userInfo == null) return false;
    return JSON.parse(userInfo);
}

function getToken() {
    let userInfo = getUserInfo();
    if (userInfo == null)
        return '';
    return userInfo.token;
}

function getTimeStr(timestamp) {
    if (timestamp === 0) return '';
    let d = new Date(timestamp * 1000),	// Convert the passed timestamp to milliseconds
        yyyy = d.getFullYear(),
        mm = ('0' + (d.getMonth() + 1)).slice(-2),	// Months are zero based. Add leading 0.
        dd = ('0' + d.getDate()).slice(-2),			// Add leading 0.
        h = d.getHours(),
        min = ('0' + d.getMinutes()).slice(-2),		// Add leading 0.
        time;

    time = yyyy + '-' + mm + '-' + dd + ' ' + h + ':' + min + ' ';

    return time;
}

export {isLogin, setUserInfo, getUserInfo, getToken, getTimeStr}