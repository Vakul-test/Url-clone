import axiosInstance from "../utils/axiosInstance.js"

export const loginUser = async (email, password) =>{
    const {data} = await axiosInstance.post("/user/auth/login",{email,password})
    return data
}

export const registerUser = async (name,password,email) =>{
    const {data} = await axiosInstance.post("/user/auth/register",{name,email,password})
    return data
}

export const logoutUser = async () =>{
    const {data} = await axiosInstance.post("/user/auth/logout")
    return data
}

export const getUser = async () =>{
    const {data} = await axiosInstance.get("/user/auth/me")
    return data
}

export const getAllUsersUrl = async () =>{
    const {data} = await axiosInstance.post("/users/urls")
    return data
}