export const fetchUserRepos = (username, methods) =>
  fetch(`https://api.github.com/users/${username}/repos`)
    .then(response => {
      if (response.status === 200) {
        methods.updateError('')
        return response.json()
      }

      if (response.status === 404) {
        methods.updateError('No se encontró ese nombre de usuario.')
      }

      if ([200, 404].indexOf(response.status) < 0) {
        methods.updateError('Ocurrió algún otro error.')
      }

      return null
    })
    .then(response => {
      if (!response) {
        methods.updateCurrentUser(null)
        methods.updateRepos([])
        return
      }

      if (response.length === 0) {
        fetchUser(username, methods)
        methods.updateRepos(response)
      } else {
        methods.updateCurrentUser(response[0].owner)
        methods.updateRepos(response)
        methods.updateIsLoading(false)
      }
    })

export const fetchUser = (username, methods) =>
  fetch(`https://api.github.com/users/${username}`)
    .then(response => response.json())
    .then(user => {
      methods.updateCurrentUser(user)
      methods.updateIsLoading(false)
    })
