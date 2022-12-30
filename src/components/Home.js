import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Home() {
    const navigate = useNavigate()
    const onClick = () => {
        navigate('/signin')
    }
  return (
    <>
    <h3>Login to continue</h3>
    <button type="button" class="btn btn-secondary" onClick={onClick}>Signin</button>
    </>
  )
}
