/** Class model for user's performance data */
class Performance {
  /**
   * @param {Object}
   */
  constructor({ userId, kind, data }) {
    this.userId = userId;
    this.kind = kind;
    this.data = data;
  }
}
export default Performance;
