import api from "../http-common-kay";

export async function postLogin(login, password){
    return await api.post("realms/lmts/protocol/openid-connect/token",{
        client_id: "app_lmts",
        client_secret: "5KnIGJCK3d28PNgDRDIq9Siy0zQnf5Rr",
        username: login,
        password: password,
        grant_type: "password",
    })
} 