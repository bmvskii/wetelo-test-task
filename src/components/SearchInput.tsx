import search from "../assets/magnify.svg";
import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
    position: relative;
    cursor: pointer;
    z-index: 1;
    width: 99%;
    padding: 0 16px;

    &::before,
    &::after {
        transition: border-color .2s ease;
    }

    &::before,
    &::after {
      display: block;
      position: absolute;
      content: '';
      top: 0;
      height: calc(100% - 2px);
      width: 50%;
      z-index: -1;
      border: 1px solid var(--color-gray-light);
    }

    &::before {
        border-top-left-radius: 10px;
        border-bottom-left-radius: 10px;
        border-right: 0;
        left: 0;
        transform: skewX(-15deg);
        background-color: black;
    }
    
    &::after {
        border-top-right-radius: 10px;
        border-bottom-right-radius: 10px;
        border-left: 0;
        right: 0;
        transform: skewX(-15deg);
        background-color: var(--color-gray-dark);
    }

    &:hover {
        &::before,
        &::after {
          border-color: var(--color-gray-dark);
        }
    }
`;


const Input = styled.input`
    background-color: black;
    border: 0;
    width: 90%;
    height: calc(100% - 2px);
    outline: none;
    border-right: 1px solid var(--color-gray-light);
    font-family: Lato;
    font-size: 18px;
`;

const SearchButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: calc(100% - 2px);
    background-color: var(--color-gray-dark);
    padding: 14px 22px;
`;

export const SearchInput = () => {
    return <Wrapper>
        <Input placeholder="Enter name" defaultValue='Andrew Abrahamm' />
        <SearchButton>
            <img src={search} alt="search tool" />
        </SearchButton>
    </Wrapper>
};