import React, { useState } from 'react'
import { FaGithub } from 'react-icons/fa'
import { FiX } from 'react-icons/fi'
import { Button } from './styles'

export const SignInButton: React.FC = () => {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(true)

  return isUserLoggedIn ? (
    <Button type="button">
      <FaGithub color="#04d361" />
      FrancescoGM
      <FiX color="#737380" className="closeIcon" />
    </Button>
  ) : (
    <Button type="button">
      <FaGithub color="#eba417" />
      Sign in with github
    </Button>
  )
}
