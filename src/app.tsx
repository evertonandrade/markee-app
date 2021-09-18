import styled from 'styled-components'

export function App() {
	return (
		<div>
			<Title>App</Title>
		</div>
	)
}

const Title = styled.h1`
	color: ${(props) => props.theme.colors.primary}
`
