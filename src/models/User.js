/** Class model for user's main data */
class User {
  /**
   * @param {object}
   */
  constructor({ id, userInfos, score, todayScore, keyData }) {
    this.userId = id;
    this.userInfos = userInfos;
    this.todayScore = todayScore || score;
    this.keyData = keyData;
  }
}
export default User;
