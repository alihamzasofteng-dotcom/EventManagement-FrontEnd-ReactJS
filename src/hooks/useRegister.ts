import { useState } from "react";
import APIClient from "../services/api-client";
import { RegisterData, RegisterResponse } from "../entities/Register";
import axios from "axios";


// Initialize APIClient for user registration
const apiClient = new APIClient<RegisterResponse>("/users");

const useRegister = () => {
  const [loading, setLoading] = useState(false);
  const [errors, setError] = useState<string | null>(null);

  const register = async (data: RegisterData): Promise<RegisterResponse | undefined> => {
    setLoading(true);
    setError(null);
    //console.log("resgiter ka data jo bej rhy", data);

    try {
      const response = await apiClient.register(data);
      console.log("response aya ha", response);
      return response;
     
    } catch (err: any) {
      // const errorMessage = err.response?.data?.message || "An unexpected error occurred.";
      // setError(errorMessage);
      console.log("err", err);
    //  const errors = err.response?.data?.errors || {}; // Assuming API returns field-specific errors
      const errors = err.response?.data || {}; // Assuming API returns field-specific errors
      console.log("use register error", errors);
      setError(errors);
     // return errors; 
     // ye throw krwao gy to pecgt catch main mily ga
     throw err;
    } finally {
      setLoading(false);
    }

   };

  return { register, loading, errors };
};

export default useRegister;
