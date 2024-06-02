const storeInSession = (key, value) => {
    return sessionStorage.setItem(key, value);
}

// retrieve data from session
const retrieveData = (key) => {
    return sessionStorage.getItem(key);
}

const removeData = (key) => {
    return sessionStorage.removeItem(key);
}

const logoutUser = () => {
    sessionStorage.clear();
}

export { storeInSession, retrieveData, removeData, logoutUser };