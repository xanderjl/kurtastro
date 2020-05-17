import React from "react"
import {
  FaLinkedinIn,
  FaFacebook,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa"
import { GrSoundcloud } from "react-icons/gr"
import { useStaticQuery, graphql } from "gatsby"

const Socials = props => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      sanityHome {
        socials {
          facebook
          instagram
          linkedin
          soundcloud
          twitter
        }
      }
    }
  `)
  const socials = data.sanityHome.socials
  const { facebook, instagram, linkedin, soundcloud, twitter } = socials
  return (
    <>
      {linkedin ? (
        <SocialTag
          url={linkedin}
          icon={<FaLinkedinIn />}
          className={props.className}
        />
      ) : null}
      {twitter ? (
        <SocialTag
          url={twitter}
          icon={<FaTwitter />}
          className={props.className}
        />
      ) : null}
      {facebook ? (
        <SocialTag
          url={facebook}
          icon={<FaFacebook />}
          className={props.className}
        />
      ) : null}
      {instagram ? (
        <SocialTag
          url={instagram}
          icon={<FaInstagram />}
          className={props.className}
        />
      ) : null}
      {soundcloud ? (
        <SocialTag
          url={soundcloud}
          icon={<GrSoundcloud />}
          className={props.className}
        />
      ) : null}
    </>
  )
}

export const SocialTag = ({ url, icon, className }) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      {icon}
    </a>
  )
}

export default Socials
