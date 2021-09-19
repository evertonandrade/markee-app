import styled, { css } from "styled-components/macro";

export const Wrapper = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.white};
  `}
`

export const Header = styled.header`
  padding: 1rem 2rem;
  height: 10%;
`

export const InputGroup = styled.div`
  display: flex;
  align-items: center;
`

export const Label = styled.label`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
    cursor: pointer;
  `}
`

export const InputFile = styled.input`
   ${({ theme }) => css`
    border: 0;
    outline: none;
    background: none;
    color: ${theme.colors.black};
    font-size: ${theme.sizes.large};
    font-weight: 500;
    padding: 0.2rem 1.6rem;
  `}
`

export const MainContainer = styled.main`
  display: flex;
  height: 90%;
`

export const MarkdownEditor = styled.textarea`
  ${({ theme }) => css`
    border: 0;
    outline: none;
    resize: none;
    color: ${theme.colors.black};
    background: ${theme.colors.white};
    font-family: "Inconsolata", monospace;
    font-size: ${theme.sizes.medium};
    line-height: 1.8rem;
    padding: 2rem;
    width: 50%;
  `}
`

export const Separator = styled.hr`
  ${({ theme }) => css`
    background: ${theme.colors.lightBlack};
    height: 90%;
    align-self: center;
    margin: 1rem;
  `}
`

export const MarkdownPreview = styled.output`
  ${({ theme }) => css`
    padding: 2rem;
    width: 50%;
    color: ${theme.colors.black};
    background: ${theme.colors.white};
    font-size: ${theme.sizes.medium};
  `}
`