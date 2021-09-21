import { useState } from 'react'
import * as S from 'sidebar/sidebar-styles'
import { Logo } from 'ui/logo'
import { Button } from 'ui/button'
import { PlusIcon } from 'ui/icons'
import { Explorer } from './explorer'
import { File } from 'resources/types/files'
import { v4 as uuidv4 } from 'uuid'

export function Sidebar() {
	const [files, setFiles] = useState<File[]>([])

	const handleAddFile = () => {
		const newFile: File = {
			id: uuidv4(),
			name: 'Sem título',
			content: '',
			active: true,
			status: 'saved',
		}
		setFiles((prevFiles) => [
			...prevFiles.map((file) => ({ ...file, active: false })),
			newFile,
		])
	}

	return (
		<S.Wrapper>
			<Logo />
			<S.Title>Arquivos</S.Title>
			<Button onClick={handleAddFile}>
				<PlusIcon />
				Adicionar arquivo
			</Button>
			<Explorer files={files} />
		</S.Wrapper>
	)
}
