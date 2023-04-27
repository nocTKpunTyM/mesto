export default class UserInfo {
  constructor({profileName, profileJob}) {
    this.profileName = profileName;
    this.profileJob = profileJob;
  }

  getUserInfo() {
    return {
      profileName: this.profileName.textContent,
      profileJob: this.profileJob.textContent
    }
  }

  setUserInfo(inputName, inputJob) {
   this.profileName.textContent = inputName;
   this.profileJob.textContent = inputJob;
  }
} 