import AV from "leancloud-storage";

export default {
  /**
   * 获取 Event 事件列表
   * @param {*} prd_link
   * @returns
   */
  getEventList: async prd_link => {
    try {
      const eventList = await new AV.Query("event")
        .equalTo("prd_link", prd_link)
        .find();

      const result = eventList.map(event => event.toFullJSON());
      console.log("getEventList successful", result);
      return result;
    } catch (error) {
      console.log("getEventList failed", error);
      throw error;
    }
  }
};
