import React from "react";
import styled from "styled-components";

const FooterMain = styled.footer`
background-color: #F4DCD9;
width: 100%;
padding: 0.5rem;
`
const CopyRight = styled.h3`
    font-size: 1rem;
`
const Footer = () => {
return (
    <FooterMain>
        <CopyRight>
        All materials © Christina Gorton 2020
        </CopyRight>
    </FooterMain>
)
}

export default Footer