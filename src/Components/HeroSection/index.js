import React from 'react'
import HeroBgAnimation from '../HeroBackground';
import { HeroContainer, HeroBg, HeroLeftContainer, Img, HeroRightContainer, HeroInnerContainer, TextLoop, Title, Span, SubTitle, SocialMediaIcons, SocialMediaIcon } from './HeroStyledComponent'
import HeroImg from '../../Images/me.jpeg'
import Typewriter from 'typewriter-effect';
import { Bio } from '../../Data/constants';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHub from '@mui/icons-material/GitHub';
import ContactPageIcon from '@mui/icons-material/ContactPage';

const HeroSection = () => {
    return (
        <div id="about">
            <HeroContainer>
                <HeroBg>
                    <HeroBgAnimation />
                </HeroBg>
                <HeroInnerContainer >
                    <HeroLeftContainer id="Left">
                        <Title><span style={{fontWeight: 'bold' }}>{Bio.name}</span></Title>
                        <TextLoop>
                            <Span>
                                <Typewriter
                                    options={{
                                        strings: Bio.roles,
                                        autoStart: true,
                                        loop: true,
                                    }}
                                />
                            </Span>
                        </TextLoop>
                        <SubTitle><span style={{ color: '#f2f3f4', fontWeight: 'bold' }}>+2 años de experiencia como Desarrollador FullStack</span>{Bio.description}</SubTitle>
                        <SocialMediaIcons>
                            <SocialMediaIcon href={Bio.resume} target="display"><ContactPageIcon /></SocialMediaIcon>
                            <SocialMediaIcon href={Bio.github} target="display"><GitHub /></SocialMediaIcon>
                            <SocialMediaIcon href={Bio.linkedin} target="display"><LinkedInIcon /></SocialMediaIcon>
                        </SocialMediaIcons>
                    </HeroLeftContainer>

                    <HeroRightContainer id="Right">
                        <Img src={HeroImg} alt="hero-image" />
                    </HeroRightContainer>
                </HeroInnerContainer>

            </HeroContainer>
        </div>
    )
}

export default HeroSection