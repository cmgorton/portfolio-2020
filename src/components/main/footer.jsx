import React from "react"
import styled from "styled-components"
import Twitter from "../../images/twitter-color.svg"
import Linkedin from "../../images/linkedin-color.svg"
import Github from "../../images/github-color.svg"
import CodePen from "../../images/codepen.svg"

const FooterMain = styled.footer`
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    width: 100%;
    height: 20vh
    padding: 0.5rem;
    background-color: #F4DCD9;

`
const CopyRight = styled.h3`
  font-size: 2rem;
  margin: 1rem;
  align-self: center;
  justify-self: center;
  @media (max-width: 46rem) {
    font-size: 1rem;
  }
`
const FooterIcons = styled.div`
  justify-self: center;
`
const IconLink = styled.a`
  text-underline: none;
`
const Icon = styled.img`
  width: 7.5rem;
  height: 7.5rem;
  @media (max-width: 46rem) {
    width: 4.5rem;
    height: 4.5rem;
  }
`
const Footer = () => {
  return (
    <FooterMain>
      <CopyRight>All materials © Christina Gorton 2020</CopyRight>
      <FooterIcons className="footer-icons">
        <IconLink
          href="https://codepen.io/cgorton"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon src={CodePen} alt="CodePen icon" />
        </IconLink>
        <IconLink
          href="https://twitter.com/coffeecraftcode"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon src={Twitter} alt="twitter icon" />
        </IconLink>
        <IconLink
          href="https://github.com/cmgorton"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon src={Github} alt="github icon" />
        </IconLink>
        <IconLink
          href="https://www.linkedin.com/in/christinagorton/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon src={Linkedin} alt="linked-in icon" />
        </IconLink>
      </FooterIcons>
    </FooterMain>
  )
}

export default Footer
