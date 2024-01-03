import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Video } from 'gatsby-video'
import * as React from "react"
import {
  Box,
  ButtonList,
  Container,
  Flex,
  Heading,
  Kicker,
  Section,
  Subhead,
  Text,
  // Add a Video component or use an existing one if you have
} from "./ui"

export default function Hero(props) {
  return (
    <Section>
      <Container>
        <Flex gap={4} variant="responsive">
          <Box width="half">

          <h1>{props.video.url}</h1>
            {props.video ? (
              // Assuming props.video has a src attribute for the video source
             
              <Video poster={props.video.poster}
              autoPlay
              muted
              loop
              sources={props.video}/>
            ) : props.image ? (
              <GatsbyImage
                alt={props.image.alt}
                image={getImage(props.image.gatsbyImageData)}
              />
            ) : null}
          </Box>
          <Box width="half">
            <Heading as="h1">
              {props.kicker && <Kicker>{props.kicker}</Kicker>}
              {props.h1}
            </Heading>
            <Subhead as="h2">{props.subhead}</Subhead>
            <Text as="p">{props.text}</Text>
            <ButtonList links={props.links} />
          </Box>
        </Flex>
      </Container>
    </Section>
  )
}

export const query = graphql`
  fragment HomepageHeroContent on HomepageHero {
    id
    kicker
    h1: heading
    subhead
    text
    links {
      id
      href
      text
    }
    image {
      id
      gatsbyImageData
      alt
    }
    video {
      id
      url
    }

  }
  
`
