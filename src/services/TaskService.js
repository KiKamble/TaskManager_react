import axios from "axios"
import {taskURL} from'../config/api'


export const getTask=()=>{
return axios.get(taskURL).then(res=>res.data)
}
/**
 * @param {CardTitle,description} data
 */
export const addTask=(data)=>{
    return axios.post(taskURL,data).then(res=>res.data)

}
export const deletTask=(id)=>{
    return axios.delete(taskURL+ '/' + id).then(res=>res.data)

}