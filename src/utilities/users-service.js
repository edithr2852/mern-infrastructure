import * as usersAPI from './users-api'


export async function signUp(userData) {
  try {
    // Delegate the network request code to the users-api.js API module
    // which will ultimately return a JWT
    const token = await usersAPI.signUp(userData)
    return token
  } catch {
    throw new Error('Invalid Sign Up')
  }
}