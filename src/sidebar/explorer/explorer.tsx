import * as S from './explorer-styles'
import { FileItem } from "sidebar/file-item"
import { File } from 'resources/types/files'

type ExplorerProps = {
  files: File[]
}

export function Explorer ({ files }: ExplorerProps) {
  return (
    <S.ContainerExplorer>
      <S.List>
        {files.map(({ id, name, active, status }) => (
          <FileItem 
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
