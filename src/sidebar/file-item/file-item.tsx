import { FileIcon, CloseIcon } from 'ui/icons'
import * as S from './file-item-styles'

type FileProps = {
	name: string
	active: boolean
	status: 'editing' | 'saving' | 'saved'
}

export function FileItem({ name, active, status }: FileProps) {
	return (
		<S.ListItem active={active}>
			<S.Link>
				<FileIcon />
				{name}
			</S.Link>
			{active && <S.StatusIcon status={status} /> }
			<S.CloseButton>
				<CloseIcon />
			</S.CloseButton>
		</S.ListItem>
	)
}
