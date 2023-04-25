export default class UserInfo {
  constructor({profileName, profileJob, inputName, inputJob}) {
    this.profileName = profileName;
    this.profileJob = profileJob;
    this.inputName = inputName;
    this.inputJob = inputJob;
  }

  getUserInfo() {
    this.inputName.value = this.profileName.textContent;
    this.inputJob.value = this.profileJob.textContent;
  }

  setUserInfo() {
    this.profileName.textContent = this.inputName.value;
    this.profileJob.textContent = this.inputJob.value;
  }
} 