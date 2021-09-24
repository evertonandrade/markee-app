import { ChangeEvent, RefObject } from 'react'
import { File } from 'resources/types/files'
import * as S from './content-styles'
import { FileIcon } from 'ui/icons'
import marked from 'marked'
import 'highlight.js/styles/vs.css'

import('highlight.js').then(hljs => {
  const h = hljs.default
  marked.setOptions({
    highlight: (code, language) => {
      if (language && h.getLanguage(language)) {
        return h.highlight(code, { language }).value
      }
      return h.highlightAuto(code).value
    },
  })
})

type ContentProps = {
  file?: File
  titleRef: RefObject<HTMLInputElement>
  onUpdateFileName: (id: string) => (event: ChangeEvent<HTMLInputElement>) => void
  onUpdateFileContent: (id: string) => (event: ChangeEvent<HTMLTextAreaElement>) => void
}

export function Content({ titleRef, file, onUpdateFileName, onUpdateFileContent }: ContentProps) {
  if (!file) return (
    <S.EmptyState>Adicione um arquivo</S.EmptyState>
  )
  
	return (
		<S.Wrapper>
			<S.Header>
				<S.InputGroup>
					<S.Label htmlFor="fileName">
						<FileIcon />
					</S.Label>
					<S.InputFile 
            id="fileName" 
            ref={titleRef} 
            value={file.name}
            onChange={onUpdateFileName(file.id)}
            autoFocus
          />
				</S.InputGroup>
			</S.Header>
			<S.MainContainer>
				<S.MarkdownEditor 
          placeholder="Digite aqui seu markdown"
          value={file.content}
          onChange={onUpdateFileContent(file.id)}
        />
				<S.Separator />
				<S.MarkdownPreview dangerouslySetInnerHTML={{ __html: marked(file.content) }} />
			</S.MainContainer>
		</S.Wrapper>
	)
}
