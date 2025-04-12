import { useQuery, QueryKey } from "@tanstack/react-query";
import APIClient, { FetchResponse } from "../services/api-client";
import ms from "ms";
import Event from "../entities/Events";


const apiClient = new APIClient<Event>("/events");

// const useEvents = (type: string) =>
//   useQuery({
//     queryKey: ["events", type], // Explicitly cast queryKey to QueryKey
//     queryFn: () => apiClient.getAll({ params: { type } }),
//     staleTime: ms("24h"),
//   });

const useEvents = (type?: string,budget?: string, page?: number) =>
  useQuery({
    queryKey: ["events",type, budget, page], // Explicitly cast queryKey to QueryKey
    queryFn: () => apiClient.getAllEvents({ params: { type,budget, page  } }),
  });





export default useEvents;
