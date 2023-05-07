import styled from 'styled-components'
import { Modal } from 'react-bootstrap';
import { FaCaretDown } from 'react-icons/fa'
import { colors } from '../../../colors'
import { Button } from '../../common/Button';

export const OfferContainer = styled.div`
    color: ${(colors.white)};
    background: ${(colors.white)};
    box-shadow: rgba(0, 0, 0, 0.09) 0px 3px 12px;
    padding: 0 10%;
    min-height: 700px;
    display: flex;
    justify-content: center;
    flex-direction: column;

    @media screen and (max-width: 768px) {
        padding: 0 1.8rem;
    };
`

export const OffersWrapper = styled.div`
    z-index: 1;
    display: flex;
    flex-wrap: wrap;
    gap: 3rem;
    padding-bottom: 2rem;
`

export const Column1 = styled.div`
    margin-bottom: 15px;
    grid-area: col1;
    display: flex;
    direction: row;
    flex-direction: row;
    align-items: center;
    width: 100%;

    @media screen and (min-width: 1350px) {
        width: 60%;
    }; 
`

export const Column2 = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: start;
    margin-top: -30px;

    @media screen and (min-width: 1350px) {
        width: 35%;
    }; 
`

export const ItemWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    gap: 1rem;
    margin-bottom: .7rem;
    width: 100%;

    a {
        @media screen and (max-width: 768px) {
            display: none;
        }; 
    }
`

export const TextWrapper = styled.div`
    width: 100%;
`

export const Heading = styled.h2`
    margin: 3rem 0;
    font-size: 1.6rem;
    font-weight: 600;
    color: ${colors.darkGray};
`

export const Text = styled.p`
    font-size: 16px;
    line-height: 1.75;
    color: ${colors.darkGray};
    font-weight: 600;
    margin: 0;
    width: 100%;

    @media screen and (max-width: 480px) {
        font-size: 14px;
        line-height: 20px;
    };
`

export const BtnWrap = styled.div`
    display: flex;
    justify-content: flex-start;
    width: 100%;

`

export const LinksWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;

    @media screen and (max-width: 820px) {
        flex-direction: column;
    }
`

export const OfferBtn = styled('button')`
    color: ${(colors.darkGray)};
    background: ${(colors.lightGray)};
    text-decoration: none;
    width: 100%;
    min-width: 13rem;
    font-size: 14px;
    cursor: pointer;
    padding: 8px;
    text-align: left;
    border: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: 550;

    &:hover {
        color: ${(colors.darkBlue)};
        transform: scale(1.01);
        transition: all 0.2 ease-in-out;
        cursor: pointer;
        text-decoration: underline;
    }
`

export const OfferBtnSecondaryWrapper = styled.div``

export const OfferBtnSecondary = styled('button')`
    color: ${(colors.darkGray)};
    text-decoration: none;
    width: 100%;
    min-width: 14rem;
    font-size: 14px;
    background: none;
    cursor: pointer;
    padding: 8px;
    display: flex;
    justify-content: space-between;
    border: none;
    background: ${(colors.lightGrayLt)};
    font-weight: 550;

    &:hover {
        color: ${(colors.darkBlue)};
        cursor: pointer;
        transform: scale(1.01);
        transition: all 0.2 ease-in-out;
        text-decoration: underline;
    }

    ul{
      text-align: left;
    }
`


export const StyledIcon = styled(FaCaretDown)`
    margin-left: 4px;
    pointer-events: none;
`;

export const ModalBtn = styled(Button)`

`
export const PDFModal = styled(Modal)`
    z-index: 9;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

  .modal-content {
    border-radius: 3px;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
    max-width: 538px;
    max-height: 98vh;
  }

  .modal-footer {
    display: flex;
    justify-content: center;
    position: absolute;
    position: absolute;
    bottom: 5px;
    width: 100%;
    font-family: Arial, Helvetica, sans-serif;

  }
  .modal-header {
    position: absolute;
    z-index: 9;
    margin-left: -30px;
    padding: 2px 5px;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
    cursor: pointer;
    border-radius: 15px;
    padding: 0px 6px;
    background-color: white;
  }

  .react-pdf__Page {
    max-width: 539px !important;
    min-width: 300px !important;
  }

  .annotationLayer {
    height: 0 !important;
  }
  canvas {
    width: 537px !important;
    height: auto !important;

    @media screen and (max-width: 768px) {
      max-width: 83vw;
    }
  }
`;

export const PopupBtn = styled.button`
    border-radius: 2px;
    background: ${(colors.blue)};
    white-space: nowrap;
    padding: 2px 6px;
    width: 4rem;
    color: ${(colors.white)};
    font-size: 12px;
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;
    margin: .4rem 2px;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: ${(colors.darkBlue)};
    }

    :disabled {
        background: ${(colors.lightGray)};
    }
`;


export const Img = styled.img`
  width: 100%;
  margin: 0;
  padding-right: 0;
`;

export const ImgWrap = styled.div`
  max-width: 200px;
  animation: move 8s infinite alternate;

  @keyframes move {
    0% {
      transform: translateX(0);
    }
    50% {
      transform: translateX(10%);
    }
    100% {
      transform: translateX(10%);
    }
  }
  @media screen and (max-width: 1200px) {
    display: none;
  };
`;
