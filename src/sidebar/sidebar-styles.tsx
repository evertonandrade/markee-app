import styled, { css } from 'styled-components'
import { Button } from 'ui/button'
import { Logo } from 'ui/logo'
import { Heading } from 'ui/typography/heading'

export const Wrapper = styled.aside`
	${({ theme }) => css`
		background: ${theme.colors.black};
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 2rem;

		${Logo} {
			margin: 1rem 0;
		}

		${Title} {
			margin: 2rem 0;
		}

    ${Button} {
      width: 100%;
      margin: 1rem 0;
    }

	`}
`

export const Title = styled(Heading)`
	${({ theme }) => css`
		width: 100%;
		display: flex;
		align-items: center;
		gap: 0.8rem;

		::before {
			content: '';
			flex: 2;
			height: 0.2rem;
			width: 1.6rem;
			background: ${theme.colors.primary};
		}

		::after {
			content: '';
			flex: 8;
			height: 0.2rem;
			background: ${theme.colors.primary};
		}
	`}
`
