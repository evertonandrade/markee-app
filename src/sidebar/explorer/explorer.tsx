import * as S from './explorer-styles'
import { File } from "sidebar/file"

type file = {
  id: string
  name: string
  content: string
  active: boolean
  status: 'editing' | 'saving' | 'saved',
}

type ExplorerProps = {
  files: file[]
}

export function Explorer ({ files }: ExplorerProps) {
  return (
    <S.ContainerExplorer>
      <S.List>
        {files.map(({ id, name, active, status }) => (
          <File 
            key={id} 
            name={name}
            active={active} 
            status={status} 
          />
        ))}
      </S.List>
    </S.ContainerExplorer>
  )
}
