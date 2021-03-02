import React from "react";
import { animateScroll as scroll } from "react-scroll";
import {
  FooterContainer,
  FooterWrap,
  FooterLinkContainer,
  FooterLinkItems,
  FooterLinkTile,
  FooterLink,
  FooterLinksWrapper,
  FooterSocialMediaContainer,
  SocialIconLink,
  SocialIcons,
  SocialLogo,
  SocialMediaWrpper,
  WebsiteRights,
  SocialIconWrapper,
} from "./FooterElements";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
  const toggleTop = () => {
    scroll.scrollToTop();
  };

  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinkContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTile>About Us</FooterLinkTile>
              <FooterLink to="/">About us</FooterLink>
              <FooterLink to="/">How it works</FooterLink>
              <FooterLink to="/">Testomonials</FooterLink>
              <FooterLink to="/">Careers</FooterLink>
              <FooterLink to="/">investors</FooterLink>
              <FooterLink to="/">Term of Service</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTile>Contact Us</FooterLinkTile>
              <FooterLink to="/">Contact</FooterLink>
              <FooterLink to="/">Support</FooterLink>
              <FooterLink to="/">Destinations</FooterLink>
              <FooterLink to="/">Sponsorship</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTile>Videos</FooterLinkTile>
              <FooterLink to="/">Submit Videos</FooterLink>
              <FooterLink to="/">Ambassadors</FooterLink>
              <FooterLink to="/">Agency</FooterLink>
              <FooterLink to="/">Influencers</FooterLink>
              <FooterLink to="/">investors</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTile>Social Media</FooterLinkTile>
              <FooterLink to="/">Facebook</FooterLink>
              <FooterLink to="/">Youtube</FooterLink>
              <FooterLink to="/">Linkdin</FooterLink>
              <FooterLink to="/">Github</FooterLink>
              <FooterLink to="/">Twitter</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinkContainer>
        <FooterSocialMediaContainer>
          <SocialMediaWrpper>
            <SocialLogo to="/" onClick={toggleTop}>
              Wallet
            </SocialLogo>
            <WebsiteRights>
              ©️ {new Date().getFullYear()} All Right Reserved.
            </WebsiteRights>
            <SocialIconWrapper>
              <SocialIcons>
                <SocialIconLink
                  href="https://www.facebook.com/"
                  target="_blank"
                  aria-label="Facebook"
                >
                  <FaFacebook />
                </SocialIconLink>
              </SocialIcons>
              <SocialIcons>
                <SocialIconLink
                  href="https://www.instagram.com/"
                  target="_blank"
                  aria-label="Instagram"
                >
                  <FaInstagram />
                </SocialIconLink>
              </SocialIcons>
              <SocialIcons>
                <SocialIconLink
                  href="https://www.youtube.com/"
                  target="_blank"
                  aria-label="Youtube"
                >
                  <FaYoutube />
                </SocialIconLink>
              </SocialIcons>
              <SocialIcons>
                <SocialIconLink
                  href="https://www.twitter.com/"
                  target="_blank"
                  aria-label="Twitter"
                >
                  <FaTwitter />
                </SocialIconLink>
              </SocialIcons>
              <SocialIcons>
                <SocialIconLink
                  href="https://www.linkedin.com/"
                  target="_blank"
                  aria-label="Linkdin"
                >
                  <FaLinkedin />
                </SocialIconLink>
              </SocialIcons>
            </SocialIconWrapper>
          </SocialMediaWrpper>
        </FooterSocialMediaContainer>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
