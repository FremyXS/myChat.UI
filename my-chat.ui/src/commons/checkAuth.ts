export default function checkAuth(){
    const user = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')!) : null;

    return user !== null;
}