import { create } from "zustand";

const useStore = create((set) => ({
  data: null,
  loading: true,
  fetchData: async () => {
    try {
      const response = await fetch("/mockData.json");
      const result = await response.json();
      set({ data: result, loading: false });
    } catch (error) {
      console.error("Error fetching data:", error);
      set({ loading: false });
    }
  },
}));

export default useStore;
