export const tokenCheck = () => {
    let token = window.localStorage.getItem('myToken');

    if (token) {
        token = JSON.parse(token);

        const id = token.id;
        const email = token.email;

        if (!id || !email) {
            return false;
        }
        return { id, email };
    }
    else {
        return false;
    }
}