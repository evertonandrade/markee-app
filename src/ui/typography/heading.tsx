import { theme } from 'resources/theme'
import styled, { css } from 'styled-components'

export type HeadingProps = {
	color?: keyof typeof theme.colors
	size?: keyof typeof theme.sizes
	fontWeight?: 100 | 400 | 700
	lineHeight?: string | number
	level?: 1 | 2 | 3 | 4 | 5 | 6
}

export const Heading = styled('h1').attrs<HeadingProps>(({ level = 1 }) => ({
	as: `h${level}`,
}))<HeadingProps>`
	${({
		color = 'white',
		size = 'medium',
		fontWeight = 700,
		lineHeight = 1.5,
	}) => css`
		font-size: ${theme.sizes[size]};
		color: ${theme.colors[color]};
		font-weight: ${fontWeight};
		line-height: ${lineHeight};
	`}
`
