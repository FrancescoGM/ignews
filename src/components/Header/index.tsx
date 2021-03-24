import React from 'react'
import Link from 'next/link'
import { SignInButton } from '../SignInButton'
import { Container, Content } from './styles'
import { useRouter } from 'next/dist/client/router'
import { ActiveLink } from '../ActiveLink'

export const Header: React.FC = () => {
  const { asPath } = useRouter()

  return (
    <Container>
      <Content>
        <Link href="/">
          <img src="/images/logo.svg" alt="ig.news" />
        </Link>
        <nav>
          <ActiveLink activeClassName="active" href="/">
            <a>Home</a>
          </ActiveLink>
          <ActiveLink activeClassName="active" href="/posts" prefetch>
            <a>Posts</a>
          </ActiveLink>
        </nav>
        <SignInButton />
      </Content>
    </Container>
  )
}
