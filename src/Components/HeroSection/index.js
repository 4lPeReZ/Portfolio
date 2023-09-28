import React from 'react'
/* import HeroBgAnimation from '../HeroBgAnimation' */
import { HeroContainer, HeroBg, HeroLeftContainer, Img, HeroRightContainer, HeroInnerContainer, TextLoop, Title, Span, SubTitle, SocialMediaIcons, SocialMediaIcon, ResumeButton } from './HeroStyledComponent'
import HeroImg from '../../Images/me.jpeg'
import Typewriter from 'typewriter-effect';
import { Bio } from '../../Data/constants';

const HeroSection = () => {
    return (
        <div id="about">
            <HeroContainer>
{/*                 <HeroBg>
                    <HeroBgAnimation />
                </HeroBg> */}
                <HeroInnerContainer >
                    <HeroLeftContainer id="Left">
                        <Title>Hi, I am <span style={{ color: '#854CE6', fontWeight: 'bold' }}>{Bio.name}</span></Title>
                        <TextLoop>
                            I am a
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
                        <SubTitle>{Bio.description}</SubTitle>
                        <ResumeButton href={Bio.resume} target='display'>Check Resume</ResumeButton>
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