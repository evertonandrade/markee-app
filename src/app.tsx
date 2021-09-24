import { useState, useEffect, useRef, ChangeEvent, MouseEvent } from 'react'
import { Container } from 'app-styles'
import { Content } from 'content'
import { Sidebar } from 'sidebar'
import { File } from 'resources/types/files'
import { v4 as uuidv4 } from 'uuid'

export function App() {
	const [files, setFiles] = useState<File[]>([])
	const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>

    (() => {
      const fileActive = getActiveFile(files)
      if (!fileActive) return undefined
      if (fileActive.status === 'saving' || fileActive.status === 'saved') return undefined
  
      timer = setTimeout(() => {
        setFiles(files => files.map(file => {
          if (file.active) return { ...file, status: 'saving' }
          else return file
        }))
  
        setTimeout(() => {
          setFiles(files => files.map(file => {
            if (file.active) return { ...file, status: 'saved' }
            else return file
          }))
        }, 300)
  
      }, 300)
    })()

    return () => clearTimeout(timer)
  }, [files])

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
		inputRef.current?.focus()
	}

  const handleSelectFile = (id: string) => (event: MouseEvent) => {
		event.preventDefault()
		setFiles((files) =>
			files.map((file) => ({ ...file, active: file.id === id })),
		)
		inputRef.current?.focus()
	}

  const handleRemoveFile = (id: string) => (event: MouseEvent) => {
		event.preventDefault()
    setFiles(files => files.filter(file => file.id !== id))
  }

	const handleUpdateFileName =
		(id: string) => (event: ChangeEvent<HTMLInputElement>) => {
			setFiles((files) =>
				files.map((file) => {
					if (file.id === id) {
						return { ...file, name: event.target.value, status: 'editing' }
					}
					return file
				}),
			)
		}

	const handleUpdateFileContent =
		(id: string) => (event: ChangeEvent<HTMLTextAreaElement>) => {
			setFiles((files) =>
				files.map((file) => {
					if (file.id === id) {
						return { ...file, content: event.target.value, status: 'editing' }
					}
					return file
				}),
			)
		}

	const getActiveFile = (files: File[]) => {
		return files.find((file) => file.active)
	}

	return (
		<Container>
			<Sidebar 
        files={files}
        onAddFile={handleAddFile}
        onSelectFile={handleSelectFile}
        onRemoveFile={handleRemoveFile}
      />
			<Content
				file={getActiveFile(files)}
				titleRef={inputRef}
				onUpdateFileName={handleUpdateFileName}
				onUpdateFileContent={handleUpdateFileContent}
			/>
		</Container>
	)
}
