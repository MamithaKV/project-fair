import commonAPI from "./commonAPI";
import SERVER_BASE_URL from "./serverUrl";

// register API
export const registerAPI=async(reqBody)=>{
    return await commonAPI("POST",`${SERVER_BASE_URL}/register`,reqBody)
}
// login
export const loginAPI=async(reqBody)=>{
    return await commonAPI("POST",`${SERVER_BASE_URL}/login`,reqBody)
}
// add-project
export const addProjectAPI=async(reqBody,reqHeader)=>{
    return await commonAPI("POST",`${SERVER_BASE_URL}/add-project`,reqBody,reqHeader)
}
// home project - get
export const homeProjectAPI=async()=>{
    return await commonAPI("GET",`${SERVER_BASE_URL}/home-project`,{})
}
// user project - get
export const userProjectAPI=async(reqHeader)=>{
    return await commonAPI("GET",`${SERVER_BASE_URL}/user-project`,{},reqHeader)
}
// all project - get
export const allProjectAPI=async(reqHeader,searchKey)=>{
    // query paramrter of url - ?search=${searchkey} & query stored in 'search'
    return await commonAPI("GET",`${SERVER_BASE_URL}/all-project?search=${searchKey}`,{},reqHeader)
}
