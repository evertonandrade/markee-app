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
        {files.map((file) => (
          <FileItem 
            key={file.id}
            file={file}
          />
        ))}
      </S.List>
    </S.ContainerExplorer>
  )
}
