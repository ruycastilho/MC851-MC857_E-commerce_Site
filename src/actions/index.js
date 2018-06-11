export const userTodo = username => ({
    type: 'CHANGE_USER',
    payload: username
  })

export const statusTodo = status => ({
    type: 'CHANGE_STATUS',
    payload: status
})