import { useMutation } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import Login from "../entities/Login";

const apiClient = new APIClient<Login>("/auth");

const useLogin = () =>
  useMutation({
    mutationFn: (data: { email: string; password: string }) => apiClient.login(data),
  });

export default useLogin;
