import axiosInstance from "../utils/axiosInstance"

export const createShortUrl = async (url,slug) =>{
    const {data} = await axiosInstance.post("/user/create",{url,slug})
    return data.shortUrl
}
