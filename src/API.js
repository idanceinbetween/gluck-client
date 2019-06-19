class API {
  static baseUrl = 'http://localhost:3000'
  static usersUrl = API.baseUrl + '/users'
  static giftsUrl = API.baseUrl + '/gifts'
  static exchangesUrl = API.baseUrl + '/exchanges'
  static signUpUrl = API.baseUrl + '/signup'
  static signInUrl = API.baseUrl + '/signin'
  static validateUrl = API.baseUrl + '/validate'

  static signUp(cred) {
    return fetch(this.signUpUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(cred)
    }).then(resp => resp.json())
  }

  static signIn(user) {
    return fetch(this.signInUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user)
    }).then(resp => resp.json())
  }

  static validate() {
    const token = localStorage.getItem('token')
    return fetch(this.validateUrl, {
      headers: { Authorization: token }
    }).then(resp => resp.json())
  }

  static fetchUsers() {
    return fetch(this.usersUrl).then(resp => resp.json())
  }

  static fetchGifts() {
    return fetch(this.giftsUrl).then(resp => resp.json())
  }

  static fetchOtherUser(id) {
    return fetch(this.usersUrl + `/${id}`).then(resp => resp.json())
  }

  static addGift(giftObj) {
    return fetch(this.giftsUrl, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(giftObj)
    }).then(resp => resp.json())
  }

  static editGift(giftObj) {
    return fetch(this.giftsUrl + `/${giftObj.id}`, {
      method: 'PATCH',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(giftObj)
    }).then(resp => resp.json())
  }

  static fetchSingleGift(id) {
    return fetch(this.giftsUrl + `/${id}`).then(resp => resp.json())
  }

  static updateExchangeStat(exchange) {
    return fetch(this.exchangesUrl + `/${exchange.id}`, {
      method: 'PATCH',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(exchange)
    }).then(resp => resp.json())
  }
}

export default API
