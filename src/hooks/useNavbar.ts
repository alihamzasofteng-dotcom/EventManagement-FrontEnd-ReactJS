import { useQuery,UseQueryOptions  } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import ms from 'ms';
import Navbar from './../entities/Navbar';
import navbar from "../data/navbar";

const apiClient  = new APIClient<Navbar>('/navbar');
// useQuery<Navbar[]> indicates that this query will return an array of Navbar items. 
//This should help TypeScript understand the data shape correctly and prevent mismatched types.
const useNavbar = () => useQuery({
  queryKey: ['navbar'],
 queryFn: apiClient.getAll,
 //queryFn: () => apiClient.getAll(), // Ensure this is a function
  staleTime: ms('24h'),
 initialData: navbar // Only include properties that exist in FetchResponse
});
export default useNavbar;

