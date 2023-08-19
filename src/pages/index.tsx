import * as React from 'react'
import type { HeadFC, PageProps } from 'gatsby'
import { Section } from '../components/Section'
import { RSVPForm } from '../components/RSVPForm'

const pageStyles = {
  color: '#232129',
  fontFamily: '-apple-system, Roboto, sans-serif, serif',
}

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main style={pageStyles}>
      <Section className="min-h-[100vh] bg-cream flex items-center">
        <h1 className="w-full text-center text-5xl text-plum">Porter Trunick</h1>
      </Section>
      <Section>
        <h2 className="text-2xl">RSVP</h2>
        <RSVPForm />
      </Section>
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
