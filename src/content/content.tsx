import { FileIcon } from 'ui/icons'
import * as S from './content-styles'

export function Content() {
	return (
		<S.Wrapper>
			<S.Header>
				<S.InputGroup>
					<S.Label htmlFor="fileName">
						<FileIcon />
					</S.Label>
					<S.InputFile id="fileName" defaultValue="Sem Título" />
				</S.InputGroup>
			</S.Header>
			<S.MainContainer>
				<S.MarkdownEditor placeholder="Digite aqui seu markdown" />
				<S.Separator />
				<S.MarkdownPreview>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
					deserunt ad et sunt amet explicabo illo ab repellendus. Quam ex odit
					culpa ratione laboriosam cupiditate officia facilis dolor quaerat
					quas.
				</S.MarkdownPreview>
			</S.MainContainer>
		</S.Wrapper>
	)
}
