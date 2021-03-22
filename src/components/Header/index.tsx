import React from 'react'
import { SignInButton } from '../SignInButton'
import { Container, Content } from './styles'

export const Header: React.FC = () => {
  return (
    <Container>
      <Content>
        <img src="/images/logo.svg" alt="ig.news" />
        <nav>
          <a className="active">Home</a>
          <a>Posts</a>
        </nav>
        <SignInButton />
      </Content>
    </Container>
  )
}
