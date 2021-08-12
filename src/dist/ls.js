function ls(key, obj) {
    if (obj) {
        localStorage.setItem(key, JSON.stringify(obj));
    }
    if (localStorage.getItem(key) != null) {
        return JSON.parse(localStorage.getItem(key));
    } else {
        return [];
    }
}

export default ls;