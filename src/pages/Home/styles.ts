import styled from "styled-components";
import  Background  from './assets/Background.jpg'


export const BackgroundStyled = styled.div`
  background-image: url(${Background});
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100vh;
  z-index: 1;
`;

export const Main = styled.div`
  position: relative;
  height: 100vh;
`;

export const MainContent = styled.div`
  position: absolute;
  top: 350px;
  transform: translateY(-50%);
  display: grid;
  grid-template-columns: 2fr 1fr;
  z-index: 999;

  img {
    width: 29.75rem;
    height: 22.5rem;
    margin-right: 15rem;
  }
`;


export const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 15rem;
`


export const Content_Text = styled.div`
  h1{
    font-family: ${props => props.theme["title-font"]};
    font-size: 48px;
    line-height: 1.3;
    font-weight: 900;
    -webkit-text-stroke: 2.5px ${props => props.theme["brown-900"]};
    margin-bottom: 1rem;
    letter-spacing: 0.2rem;
  }

  p{
    font-family: ${props => props.theme["default-font"]};
    font-size: 1.25rem;
    line-height: 1.3;
    font-weight: normal;
    color: ${props => props.theme["brown-700"]};
    margin-bottom: 4rem;
  }
`


export const Advantages_Section = styled.div`
  display: grid;
  grid-template-columns: 2fr 2fr;
  margin-right: 22rem;
`

export const Advantages = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.25rem;

  p{
    color: ${props => props.theme["brown-500"]};
    font-family: ${props => props.theme["default-font"]};
    font-size: 1rem;
    font-weight: normal;
  }
`

const ICONS_BACKGROUND_COLOR = {
  orange: 'orange-500', 
  yellow: 'orange-800', 
  brown: 'brown-700',    
  purple: 'purple-500'   
} as const;

interface BGColorProps {
  $bgcolor: keyof typeof ICONS_BACKGROUND_COLOR;
}

export const AdvantagesIcon = styled.div<BGColorProps>`
  box-sizing: border-box;
  height: 32px;
  width: 32px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 0.75rem;
  color: ${props => props.theme["white-100"]};
  background-color: ${({ $bgcolor, theme }) => theme[ICONS_BACKGROUND_COLOR[$bgcolor]]};
`;
