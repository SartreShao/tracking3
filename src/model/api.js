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
  },

  /**
   * 根据 EventList 查询其无限集的 value
   * @param {*} eventList 
   * @returns 
   */
  getEventFiniteFieldValueList: async eventList => {
    try {
      const eventFiniteFieldValueList = await new AV.Query(
        "event_mtm_finite_field_value"
      )
        .containedIn("event", eventList)
        .find();

      const result = eventFiniteFieldValueList.map(eventFiniteFieldValue =>
        eventFiniteFieldValue.toFullJSON()
      );
      console.log("getEventFiniteFieldValueList successful", result);
      return result;
    } catch (error) {
      console.log("getEventFiniteFieldValueList failed", error);
      throw error;
    }
  }
};
