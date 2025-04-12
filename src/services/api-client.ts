import axios, { AxiosRequestConfig,AxiosError } from "axios";

export interface FetchResponse<T>{
    count: number;
    next: string |null;
    results: T[];
  }   
// for events array /events
export interface ServerEventResponse<T> {  
    total: number;  
    page: number;  
    limit: number;  
    events: T[];  
  } 

//export type ApiResponseEvents<T>= ServerEventResponse<T> | T[];;

export type ApiResponse<T> = FetchResponse<T> | T[]; // Union type for different response structures  

   const axiosInstance = axios.create({
    baseURL: 'http://localhost:3000/api', // Change this to your local API base URL
   });

class APIClient<T>{
    endPoint: string;

    constructor(endPoint: string){
        this.endPoint= endPoint
    }
   // original 
    // getAll =  (config?: AxiosRequestConfig) => { // this parameter only need in game hook thats why optional 
    //     return axiosInstance
    //             .get<FetchResponse<T>>(this.endPoint, config) // in uor games hook we need a config object for passing query string to backend
    //             .then(res => res.data);
    // }

    //modified for those who does not comes under result 

    // jis sy kam chal rha tha 
    // getAll = (config?: AxiosRequestConfig) => {
    //     return axiosInstance
    //         .get<FetchResponse<T> | T[]>(this.endPoint, config)
    //         .then(res => {
    //             // If 'results' exists, return it; otherwise, return the response data directly
    //             return "results" in res.data ? (res.data as FetchResponse<T>): (res.data as T[]);
    //         });
    // };

    
    getAll = (config?: AxiosRequestConfig): Promise<ApiResponse<T>> => {  
        return axiosInstance  
            .get<ApiResponse<T>>(this.endPoint, config)  
            .then(res => res.data);  
    };
    

    getAllEvents = (config?: AxiosRequestConfig): Promise<ServerEventResponse<T> > => {  
        return axiosInstance  
            .get<ServerEventResponse<T> >(this.endPoint, config)  
            .then(res => res.data);  
    };  

    // get = async (id: number | string): Promise<T | null> => { // improved return type  
    //     try {  
    //         const response = await axiosInstance.get<T>(this.endPoint + '/' + id);  
    //         return response.data;  
    //     } catch (error: any) {  
    //         const axiosError = error as AxiosError;  
    //         console.error("Error fetching single item:", axiosError.message, axiosError.response?.data);  
    //         return null; //Return null to indicate error  
    //     }  
    // };
    // The APIClient get() method is used for fetching a single event by its ID
 get = async (id: number | string): Promise<T | null> => {
    try {
      const response = await axiosInstance.get<T>(this.endPoint + '/' + id); // API call to fetch a single event
      return response.data;
    } catch (error: any) {
      const axiosError = error as AxiosError;
      console.error("Error fetching single item:", axiosError.message, axiosError.response?.data);
      return null; // Return null to indicate error
    }
  };


  login = async (data: any): Promise<T> => {
    try {
      console.log("data login", data);
      console.log("end point", this.endPoint);
      const response = await axiosInstance.post<T>(this.endPoint, data);
      console.log("login ", response.data)
      return response.data;
      
    } catch (error: any) {
      const axiosError = error as AxiosError;
      console.error("Error posting data:", axiosError.message, axiosError.response?.data);
      throw axiosError;
    }
  };

  register = async (data: any): Promise<T> => {
    try {
      const response = await axiosInstance.post<T>(this.endPoint, data, {
        headers: { "Content-Type": "application/json" },
      });
      return response.data;
    } catch (error: any) {
      const axiosError = error as AxiosError;
      console.error("Error during registration:", axiosError.message, axiosError.response?.data);
      throw axiosError;
    }
  };

} 

export default APIClient;