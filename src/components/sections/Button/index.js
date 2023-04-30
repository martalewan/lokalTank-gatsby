import styled, { css } from 'styled-components';
import { Link } from 'react-scroll';
import { colors } from '../../../colors'

const primaryStyles = css`
  background-color: ${(colors.blue)};
  border-radius: 8px;
  font-size: 16px;
  padding: 9px 0;
  font-weight: 500;
  letter-spacing: 1px;

`;

const secondaryStyles = css`
  background: "none";
  background-color: "none";
  color: ${(colors.blue)};
  border: 2px solid;
  border-color: ${(colors.blue)};
  border-radius: 4px;
  font-size: 14px;
  height: 2rem;
  padding: 0;
  font-weight: 700;

  &:hover,
  &:focus {
    color: white
  }
`;

export const Button = styled(Link)`
    color: ${(colors.white)};
    width: 7rem;
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
    background: ${(colors.darkBlue)};
  }

  &:active {
    transform: translateY(1px);
  }
`;

export default Button;
