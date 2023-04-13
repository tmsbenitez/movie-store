import { useState } from 'react'
import { useSignIn } from '../hooks/useAuth'

function LoginForm () {
  const [email, setEmail] = useState('')

  return (
    <form onSubmit={() => useSignIn(email)}>
      <input
        type='email'
        name='email'
        placeholder='youremail@site.com'
        onChange={(e) => setEmail(e.target.value)}
      />
      <button type='submit'>Sign In</button>
    </form>
  )
}

export default LoginForm
