// import genres from "../data/genres";
import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import ms from 'ms';
import Category  from "../entities/Categories";
import HomeCategories from "../data/HomeCategories";

const apiClient  = new APIClient<Category>('/categories');

const useCategories = () => useQuery({
  queryKey: ['categories'],
  queryFn: apiClient.getAll,
  staleTime: ms('24h'),
 initialData: HomeCategories // Only include properties that exist in FetchResponse
});
export default useCategories;
