import { login, logout } from "./authType";

export const onLogin = (payload) => ({type: login, payload});
export const onLogout = (payload) => ({type: logout, payload});