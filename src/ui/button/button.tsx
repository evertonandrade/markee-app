import styled, { css } from "styled-components";

export const Button = styled.button`
  ${({ theme }) => css`

    border: none;
    border-radius: 0.25rem;
    cursor: pointer;
    color: ${theme.colors.black};
    background: ${theme.colors.primary};
    padding: 1rem 2rem;
    font-size: ${theme.sizes.medium};
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.2rem;

    transition: 0.3s ease-in-out;

    &:hover {
      filter: brightness(90%);
    }

  `}
`