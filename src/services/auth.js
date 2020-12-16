const users = [
    {
        'email': "sosama@nisum.com",
        'password': "12345"
    }
]

export function login (email,password){
    const user = users.find(user => { if(user.email === email && user.password === password) return user});
    
    if(user){
        localStorage.setItem("user",user.email);
        return user.email;
    }
    
    throw new Error("User not found.");
}

export function getUser(){
    return localStorage.getItem("user");
}

export default {
    login,
    getUser
}