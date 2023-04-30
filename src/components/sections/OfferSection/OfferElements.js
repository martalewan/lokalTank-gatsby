import styled from 'styled-components'
import { Modal } from 'react-bootstrap';
import { FaCaretDown } from 'react-icons/fa'
import { colors } from '../../../colors'
import { Button } from '../Button'

export const OfferContainer = styled.div`
    color: ${(colors.white)};
    background: ${({ lightBg }) => (lightBg ? colors.white : colors.darkGray)};
    box-shadow: rgba(0, 0, 0, 0.09) 0px 3px 12px;
    padding: 0 10%;
    min-height: 500px;

    @media screen and (max-width: 768px) {
        padding: 0 1.8rem;
    };
`

export const AboutWrapper = styled.div`
    z-index: 1;
    width: 100%;
    padding-top: 40px;
    display: flex;
    flex-wrap: wrap;
    align-content: center;
`

export const ItemWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    gap: 1rem;
`

export const AboutRow = styled.div`
    display: grid;
    width:100%;
    grid-gap: 30px;
    grid-auto-columns: minmax(2fr, 1fr);
    align-items: start;
    grid-template-areas: ${({ imgStart }) => (imgStart ? '"col2 col1"' : '"col1 col2"')};

    @media screen and (max-width: 768px) {
        grid-template-areas: ${({ imgStart }) => (imgStart ? '"col1" "col2"' : '"col1 col1" "col2 col2"')}
    };
`

export const PageBtn = styled.button`
    border-radius: 2px;
    background: ${(colors.blue)};
    white-space: nowrap;
    padding: 2px 6px;
    width: 4rem;
    color: ${({ dark }) => (dark ? '#010606' : colors.white)};
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

export const Column1 = styled.div`
    margin-bottom: 15px;
    grid-area: col1;
    display: flex;
    direction: row;
    flex-direction: row;
    align-items: center;

    @media screen and (max-width: 420px) {
        margin: 0;
        padding: 10px;
        width: 100%;
        flex-direction: column;
        align-items: start;
    }
`

export const Column2 = styled.div`
    margin-bottom: 15px;
    grid-area: col2;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const TextWrapper = styled.div`
    padding-top: 0;
`

export const Heading = styled.h2`
    margin-bottom: 24px;
    font-size: 36px;
    line-height: 36px;
    font-weight: 600;
    color: ${({ lightText }) => (lightText ? colors.white : colors.darkGray)};

    @media screen and (max-width: 480px) {
        font-size: 28px;
    };
`

export const Text = styled.p`
    max-width: 800px;
    margin-bottom: 35px;
    font-size: 14px;
    line-height: 20px;
    color: ${({ lightText }) => (lightText ? colors.white : colors.darkGray)};

    @media screen and (max-width: 480px) {
        font-size: 14px;
        line-height: 20px;
    };
`

export const BtnWrap = styled.div`
    display: flex;
    justify-content: flex-start;
`

export const ImgWrap = styled.div`
    max-width: ${({ imgSize }) => (imgSize)};
    height: 100%;

    @media screen and (max-width: 768px) {
        display: none;
    };
`

export const Img = styled.img`
    width: 100%;
    margin: 0 0 10px 0;
    padding-right: 0;
`

export const ImgLeft = styled.img`
    width: 300px;
    margin: 0 30px 0 0;
    padding-right: 0;

    @media screen and (max-width: 480px) {
        padding-bottom: 20px;
    };

    @media screen and (max-width: 768px) {
        display: none;
    };
`
export const LinksWrapper = styled.div`
    display: flex;
    flex-direction: column;

    @media screen and (max-width: 820px) {
        flex-direction: column;
    }
`

export const OfferBtn = styled.button`
    color: ${(colors.darkGray)};
    background: ${(colors.lightGray)};
    text-decoration: none;
    margin-top: 0.4rem;
    width: 20rem;
    font-size: 14px;
    cursor: pointer;
    padding: 6px;
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

export const OfferBtnSecondaryWrapper = styled.div`

`

export const OfferBtnSecondary = styled.button`
    color: ${(colors.darkGray)};
    text-decoration: none;
    width: 20rem;
    font-size: 14px;
    background: none;
    cursor: pointer;
    padding: 8px;
    display: flex;
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
`

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
    margin-left: -35px;
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
  }
`;


export const StyledIcon = styled(FaCaretDown)`
    margin-left: 4px;
    pointer-events: none;
`;
