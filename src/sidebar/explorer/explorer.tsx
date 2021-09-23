import { MouseEvent } from 'react'
import * as S from './explorer-styles'
import { FileItem } from "sidebar/file-item"
import { File } from 'resources/types/files'


type ExplorerProps = {
  files: File[]
  onSelectFile: (id: string) => (event: MouseEvent) => void
  onRemoveFile: (id: string) => (event: MouseEvent) => void
}

export function Explorer ({ files, onSelectFile, onRemoveFile }: ExplorerProps) {
  return (
    <S.ContainerExplorer>
      <S.List>
        {files.map((file) => (
          <FileItem 
            key={file.id}
            file={file}
            onSelectFile={onSelectFile}
            onRemoveFile={onRemoveFile}
          />
        ))}
      </S.List>
    </S.ContainerExplorer>
  )
}
