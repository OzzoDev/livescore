import axios, { AxiosRequestConfig } from "axios";

export interface FetchRespone<T>{
    results: T[];    
}

const axiosInstance = axios.create({
    baseURL: "https://api-football-v1.p.rapidapi.com/v3",
    params:{
        key: "371f3a3923mshd7c1b5aa7dce86ep17b1b0jsn9fcd770bb9ee",
    },
});

class APIClient<T>{

    endpoint: string;

    constructor(endpoint: string){
        this.endpoint = endpoint;
    }

    getAll = (config?: AxiosRequestConfig)=>{
        return axiosInstance
        .get<FetchRespone<T>>(this.endpoint, config)
        .then((res) => res.data);
    }

    get=(id:number|string)=>{
        return axiosInstance
        .get<T>(this.endpoint+"/"+id)
        .then((res)=>res.data)
    }

}

export default APIClient;