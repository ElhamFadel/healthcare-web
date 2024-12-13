class UserAuth {
    constructor() {
      this.tokenKey = 'authToken';  
    }
  
    setToken(token) {
      if (!token) {
        return;
      }
      try {
        localStorage.setItem(this.tokenKey, token);
      } catch (error) {
        console.error('Error saving token:', error);
      }
    }
    getToken() {
      try {
        const token = localStorage.getItem(this.tokenKey);
        if (!token) {
          console.warn('No token found in localStorage.');
          return null;
        }
        return token;
      } catch (error) {
        console.error('Error retrieving token:', error);
        return null;
      }
    }
    clearToken() {
      try {
        localStorage.removeItem(this.tokenKey);
        console.log('Token removed successfully.');
      } catch (error) {
        console.error('Error removing token:', error);
      }
    }
  }
  
  export default UserAuth = new UserAuth();
  
  