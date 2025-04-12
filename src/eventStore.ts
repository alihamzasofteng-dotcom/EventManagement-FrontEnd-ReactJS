////not used this file yet

import { create } from "zustand";

interface EventQuery {
  type?: string;
  budget?: string;
  page?: number;
}

interface EventQueryStore {
  eventQuery: EventQuery;
  setType: (type: string) => void;
  setBudget: (budget: string) => void;
  setPage: (page: number) => void;
}

const useEventQueryStore = create<EventQueryStore>((set) => ({
  eventQuery: {},
  setType: (type) => set((store) => ({ eventQuery: { ...store.eventQuery, type } })),
  setBudget: (budget) => set((store) => ({ eventQuery: { ...store.eventQuery, budget } })),
  setPage: (page) => set((store) => ({ eventQuery: { ...store.eventQuery, page } })),
}));

export default useEventQueryStore;
