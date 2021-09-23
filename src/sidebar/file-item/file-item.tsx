import { File } from 'resources/types/files'
import { FileIcon, CloseIcon } from 'ui/icons'
import * as S from './file-item-styles'

type FileItemProps = {
  file: File
}

export function FileItem({ file }: FileItemProps) {

	return (
		<S.ListItem active={file.active}>
			<S.Link>
				<FileIcon />
				{file.name}
			</S.Link>
			{file.active && <S.StatusIcon status={file.status} /> }
			<S.CloseButton>
				<CloseIcon />
			</S.CloseButton>
		</S.ListItem>
	)
}
