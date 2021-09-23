import { MouseEvent } from 'react'
import { File } from 'resources/types/files'
import { FileIcon, CloseIcon } from 'ui/icons'
import * as S from './file-item-styles'

type FileItemProps = {
	file: File
	onSelectFile: (id: string) => (event: MouseEvent) => void
}

export function FileItem({ file, onSelectFile }: FileItemProps) {
	return (
		<S.ListItem active={file.active} onClick={onSelectFile(file.id)}>
			<S.Link>
				<FileIcon />
				{file.name}
			</S.Link>
			{file.active && <S.StatusIcon status={file.status} />}
			<S.CloseButton>
				<CloseIcon />
			</S.CloseButton>
		</S.ListItem>
	)
}
