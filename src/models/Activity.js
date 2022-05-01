/** Class model for user's activity data */
class Activity {
  /**
   * @param {Object}
   */

  constructor({ sessions, userId }) {
    this.userId = userId;
    this.sessions = sessions;
  }
}

export default Activity;
