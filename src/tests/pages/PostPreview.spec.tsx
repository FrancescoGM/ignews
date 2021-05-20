import { render, screen } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import Preview, { getStaticProps } from '../../pages/posts/preview/[slug]'
import dark from '../../styles/themes/dark'
import { mocked } from 'ts-jest/utils'
import { getPrismicClient } from '../../services/prismic'
import { getSession, useSession } from 'next-auth/client'
import { useRouter } from 'next/router'

const post = {
  slug: 'my-new-post',
  title: 'My New Post',
  content: '<p>Post excerpt</p>',
  updatedAt: '10 de Abril'
}

jest.mock('next-auth/client')
jest.mock('next/router')
jest.mock('../../services/prismic')

describe('Posts preview page', () => {
  it('renders correctly', () => {
    const useSessionMocked = mocked(useSession)

    useSessionMocked.mockReturnValueOnce([null, false])

    render(
      <ThemeProvider theme={dark}>
        <Preview post={post} />
      </ThemeProvider>
    )

    expect(screen.getByText('My New Post')).toBeInTheDocument()
    expect(screen.getByText('Post excerpt')).toBeInTheDocument()
    expect(screen.getByText('Wanna continue reading?')).toBeInTheDocument()
  })
  it('redirects user to full post when user is subscribed', async () => {
    const useSessionMocked = mocked(useSession)
    const useRouterMocked = mocked(useRouter)
    const pushMock = jest.fn()

    useRouterMocked.mockReturnValueOnce({
      push: pushMock
    } as any)

    useSessionMocked.mockReturnValueOnce([
      { activeSubscription: 'fake-active-subscription' },
      false
    ] as any)

    render(
      <ThemeProvider theme={dark}>
        <Preview post={post} />
      </ThemeProvider>
    )

    expect(pushMock).toHaveBeenCalledWith('/posts/my-new-post')
  })
  it('loads initial data', async () => {
    const getPrismicClientMocked = mocked(getPrismicClient)

    getPrismicClientMocked.mockReturnValueOnce({
      getByUID: jest.fn().mockResolvedValueOnce({
        data: {
          title: [
            {
              type: 'heading',
              text: 'My New Post'
            }
          ],
          content: [
            {
              type: 'paragraph',
              text: 'Post content'
            }
          ]
        },
        last_publication_date: '04-01-2021'
      })
    } as any)

    const response = await getStaticProps({
      params: { slug: 'my-new-post' }
    } as any)

    expect(response).toEqual(
      expect.objectContaining({
        props: {
          post: {
            slug: 'my-new-post',
            title: 'My New Post',
            content: '<p>Post content</p>',
            updatedAt: '01 de abril de 2021'
          }
        }
      })
    )
  })
})