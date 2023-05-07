import styled from 'styled-components';
import { primaryStyles, secondaryStyles } from '../Button'

export const Link = styled('a')`
    text-decoration: none;
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

export default Link;
