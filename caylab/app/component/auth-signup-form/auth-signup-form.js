'use strict'

module.exports = {
  template: require('./auth-signup-form.html'),
  controllerAs: 'authSignupFormCtrl',
  controller: ['$log', '$location','$authService', AuthSignupFormController]
}

function AuthSignupFormController($log, $location, authService){
  $log.debug('#AuthSignupFormController')
  this.$onInit = () => {
    this.user = {
      username: '',
      password: '',
      email: ''
    }

    this.handleSubmit = () => {
      return authService.signup(this.user)
      .then(token => {
        $log.log('token: ', token)
        // $location.path('/home')
      })
      .catch($log.error)
    }
  }
}
