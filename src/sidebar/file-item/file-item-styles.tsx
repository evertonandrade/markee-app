import styled, { css } from "styled-components";
import { FileIcon, EditingIcon, SavedIcon, SavingIcon } from 'ui/icons'

type ListItemProps = {
  active: boolean
}

export const ListItem = styled.li<ListItemProps>`
  ${({ theme, active }) => css`
    color: ${theme.colors.white};
    font-size: ${theme.sizes.medium};
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.8rem 1.2rem;
    border-radius: 0.25rem;

    ${active && css`
      background: ${theme.colors.lightBlack};
      ${FileIcon} {
        color: ${theme.colors.primary};
      }
    `}

    ${!active && css`
      &:hover {
        background: ${theme.colors.lightBlack};
        ${CloseButton} {
          display: block;
        }
      }
    `}

  `}
`

export const Link = styled.a`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    display: flex;
    align-items: center;
    gap: 1rem;
    cursor: pointer;
  `}
`

export const CloseButton = styled.button`
  cursor: pointer;
  background: none;
  border: none;
  display: none;
`

export const statusIcons = {
	editing: <EditingIcon />,
	saving: <SavingIcon />,
	saved: <SavedIcon />,
}



