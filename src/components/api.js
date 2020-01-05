export const fetchUserRepos = (username, methods) =>
  fetch(`https://api.github.com/users/${username}/repos`)
    .then(response => {
      if (response.status === 200) {
        methods.updateError('')
        return response.json()
      }

      if (response.status === 404) {
        methods.updateError('User not found.')
      }

      if ([200, 404].indexOf(response.status) < 0) {
        methods.updateError('There\'s something wrong ! D:')
      }

      return null
    })
    .then(repos => {
      if (!repos) {
        methods.updateCurrentUser(null)
        methods.updateRepos([])
        methods.updateIsLoading(false)
        return
      }

      fetchUser(username, methods)
      methods.updateRepos(repos)
    })

export const fetchUser = (username, methods) =>
  fetch(`https://api.github.com/users/${username}`)
    .then(response => response.json())
    .then(user => {
      methods.updateCurrentUser(user)
      methods.updateIsLoading(false)
    })
