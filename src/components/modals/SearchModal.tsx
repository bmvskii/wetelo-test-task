import { useMediaQuery } from "../../hooks/useMediaQuery";
import { RecommendedTopics } from "../RecommendedTopics";
import { SearchInput } from "../SearchInput";
import styled from 'styled-components';
import closeIcon from '../../assets/close.svg';
import { FC, HTMLAttributes } from "react";

const ModalWrapper = styled.div`
    z-index: 10000 !important;

    &::before,
    &::after {
        position: absolute;
        content: '';
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
    }

    &::before {
        z-index: -2;
        background-color: rgba(0,0,0,.5);
    }

    &::after {
        z-index: -1;
        filter: blur(5px);
    }
`;

const ModalContainer = styled.div`
    position: fixed;
    top: 0;
    right: 50%;
    transform: translate3d(50%, 50%, 0);
    width: 696px;
    height: 330px;
    padding: 18px 8px;
    display: grid;
    grid-template: 56px auto 100px / 1fr;
    justify-content: center;
    border-radius: 16px;
    gap: 8px;
    background-color: var(--color-base-gray);

    @media (max-width: 768px) {
        display: grid;
        grid-template: 80px 204px 100px / 100%;
        width: 375px;
        height: 716px;
        padding: 16px;
        top: -25%;

        .search {
            visibility: hidden;
        }
    
        .altSearch {
            display: block;
        }
    }
`;

const BottomContent = styled.div`
	grid-column: 1;
	grid-row: 3;
	width: 100%;
	height: 81px;
	margin-bottom: 12px;

	font-family: Lato, sans-serif;
	font-size: 16px;
	font-weight: 400;
	letter-spacing: normal;

    p {
        margin: 8px;
    }
`;

const HeaderContent = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 768px) {
        justify-content: space-between;
    }
`;

const MobileSearch = styled.input`
    grid-column: 1;
    grid-row: 1;
    font-family: Robik, sans-serif;
    font-weight: 400;
    font-size: 16px;
    padding-left: 10px;
    color: rgb(246, 246, 246);
    padding: 10px;
    background: none;
    border: none;
    outline: none;
    transition: border-bottom .2s ease;
    font-family: Lato;
    font-size: 18px;

    &::placeholder {
        transition: color .2s ease;
        color: #fff;
    }

    &:focus {
        border-bottom: 1px solid rgba(255,255,255,.5);

        &::placeholder {
            color: rgba(255,255,255,.5);
        }
    }
`;

const CloseButton = styled.button`
    width: 36px;
    height: 36px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    cursor: pointer;
    background-color: var(--color-base-gray);
    border: none;
    outline: 0;

    position: absolute;
    right: -12px;
    top: 0;
    transform: translate3d(100%, 0, 0);

    @media (max-width: 768px) {
        position: static;
        transform: none;
    }

    img {
        transition: transform .2s ease;

        &:hover {
            transform: rotateZ(180deg);
        }
    }
`;

const CloseButtonIcon = styled.img`
    width: 16px;
`;

const BodyContent = styled.div`
    grid-column: 1;
    grid-row: 2;
    width: 100%;
    border-radius: 16px;
    background-color: var(--color-gray-dark);

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

type SearchModalProps = {
    onClose: () => void;
} & HTMLAttributes<HTMLElement>;

export const SearchModal: FC<SearchModalProps> = ({ onClose }) => {
    const isMobile = useMediaQuery('(max-width: 768px)');
    return <ModalWrapper>
        <ModalContainer>
            <HeaderContent>
                {!isMobile ? <SearchInput /> : <MobileSearch placeholder="SEARCH" />}
                <CloseButton onClick={onClose}>
                    <CloseButtonIcon src={closeIcon} />
                </CloseButton>
            </HeaderContent>
            <BodyContent>
                <h1>Oops, no results found.</h1>
                <p>Try a search or expolre recommended topics</p>
            </BodyContent>

            <BottomContent>
                <p>Recommended topics</p>
                <RecommendedTopics />
            </BottomContent>
        </ModalContainer>
    </ModalWrapper>;
}