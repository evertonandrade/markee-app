import { MouseEvent } from 'react'
import * as S from 'sidebar/sidebar-styles'
import { Logo } from 'ui/logo'
import { Button } from 'ui/button'
import { PlusIcon } from 'ui/icons'
import { Explorer } from './explorer'
import { File } from 'resources/types/files'


type SidebarProps = {
  files: File[]
  onAddFile: () => void
  onSelectFile: (id: string) => (event: MouseEvent) => void
}

export function Sidebar({ files, onAddFile, onSelectFile }: SidebarProps) {
	return (
		<S.Wrapper>
			<Logo />
			<S.Title>Arquivos</S.Title>
			<Button onClick={onAddFile}>
				<PlusIcon />
				Adicionar arquivo
			</Button>
			<Explorer 
        files={files}
        onSelectFile={onSelectFile}
      />
		</S.Wrapper>
	)
}
