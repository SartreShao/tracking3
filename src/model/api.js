import AV from "leancloud-storage";

export default {
  test: async () => {
    try {
      const eventList = await new AV.Query("event").find();
      console.log("test successful", eventList);
      return eventList;
    } catch (error) {
      throw error;
    }
  }
};
