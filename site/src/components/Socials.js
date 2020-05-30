import React, { useState } from "react"
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
          icon={<FaLinkedinIn className={props.iconClassName} />}
          className={props.className}
          hoverColor="#0073b1"
        />
      ) : null}
      {twitter ? (
        <SocialTag
          url={twitter}
          icon={<FaTwitter className={props.iconClassName} />}
          className={props.className}
          hoverColor="rgba(29,161,242,1.00)"
        />
      ) : null}
      {facebook ? (
        <SocialTag
          url={facebook}
          icon={<FaFacebook className={props.iconClassName} />}
          className={props.className}
          hoverColor="#2D88FF"
        />
      ) : null}
      {instagram ? (
        <SocialTag
          url={instagram}
          icon={<FaInstagram className={props.iconClassName} />}
          className={props.className}
          hoverColor="#E1306C"
        />
      ) : null}
      {soundcloud ? (
        <SocialTag
          url={soundcloud}
          icon={<GrSoundcloud className={props.iconClassName} />}
          className={props.className}
          hoverColor="#f50"
        />
      ) : null}
    </>
  )
}

export const SocialTag = ({ url, icon, className, hoverColor }) => {
  const [hover, setHover] = useState(false)
  const style = {
    background: hoverColor,
  }

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      onMouseEnter={() => setHover(!hover)}
      onMouseLeave={() => setHover(!hover)}
      style={hover ? style : null}
    >
      {icon}
    </a>
  )
}

export default Socials
