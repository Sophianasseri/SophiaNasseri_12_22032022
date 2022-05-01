/** Class model for user's average session length data */
class AverageSessions {
  /**
   * @param {Object}
   */
  constructor({ userId, sessions }) {
    this.userId = userId;
    this.sessions = sessions;
  }
}
export default AverageSessions;
