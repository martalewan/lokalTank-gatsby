import styled, { css } from 'styled-components';
import { Link } from 'react-scroll';
import { colors } from '../../../colors'

const primaryStyles = css`
  background-color: ${(colors.blue)};
  border-radius: 4px;
  font-size: 16px;
  padding: 12px 0;
  font-weight: 500;
  letter-spacing: 1px;
  color: ${(colors.white)};
  transition: background 0.5s;
  background-image: linear-gradient(to left, transparent 50%, ${colors.darkBlue} 50%);
  background-position: 100% 0;
  background-size: 200% 100%;

  &:hover,
  &:focus {
    background-color: ${(colors.darkBlue)};
    background-position: 0 0;
    transition: background 0.5s;
    background-image: linear-gradient(to left, transparent 50%, ${colors.darkBlue} 50%);
    background-size: 200% 100%;
  }

  &:hover:before {
    transform: scaleX(1);
  }
`;

const secondaryStyles = css`
  background: "none";
  background-color: "none";
  color: ${(colors.darkGray)};
  border: 2px solid;
  border-color: ${(colors.darkGray)};
  border-radius: 2px;
  font-size: 14px;
  height: 2.3rem;
  padding: 0;
  font-weight: 700;

  &:hover,
  &:focus {
    color: ${(colors.lightBlue)};
    border-color: ${(colors.lightBlue)};

  }
`;

export const Button = styled(Link)`
    width: 8rem;
    white-space: nowrap;
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;
    margin-right: 10px;
  ${(props) => (props.secondary ? secondaryStyles : primaryStyles)};

  &:hover,
  &:focus {
    transition: all 0.2s ease-in-out;
  }

  &:active {
    transform: translateY(1px);
  }
`;

export default Button;
