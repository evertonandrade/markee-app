import { ChangeEvent, useState } from 'react'
import { FileIcon } from 'ui/icons'
import * as S from './content-styles'
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

export function Content() {
  const [content, setContent] = useState('');

  const handleContent = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setContent(event.target.value)
  }

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
				<S.MarkdownEditor 
          placeholder="Digite aqui seu markdown"
          value={content}
          onChange={handleContent}
        />
				<S.Separator />
				<S.MarkdownPreview dangerouslySetInnerHTML={{ __html: marked(content) }} />
			</S.MainContainer>
		</S.Wrapper>
	)
}
