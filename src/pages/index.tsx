import Head from 'next/head'
import React from 'react'
import { SubscribeButton } from '../components/SubscribeButton'
import { Container, Content } from '../styles/pages/index'

export default function Home() {
  return (
    <>
      <Head>
        <title>ig.news</title>
      </Head>
      <Container>
        <Content>
          <span>👏 Hey, welcome</span>
          <h1>
            News about the <span>React</span> world.
          </h1>
          <p>
            Get access to all the publications <br />
            <span>for $9.90 month</span>
          </p>
          <SubscribeButton />
        </Content>
        <img src="/images/avatar.svg" alt="Girl Coding" />
      </Container>
    </>
  )
}
