import { useState, useRef, ChangeEvent, MouseEvent } from 'react'
import { Container } from 'app-styles'
import { Content } from 'content'
import { Sidebar } from 'sidebar'
import { File } from 'resources/types/files'
import { v4 as uuidv4 } from 'uuid'

export function App() {
	const [files, setFiles] = useState<File[]>([])
	const inputRef = useRef<HTMLInputElement>(null)

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
		event.preventDefault();
		setFiles((files) =>
			files.map((file) => ({ ...file, active: file.id === id })),
		)
		inputRef.current?.focus();
	}

	const handleUpdateFileName =
		(id: string) => (event: ChangeEvent<HTMLInputElement>) => {
			setFiles((files) =>
				files.map((file) => {
					if (file.id === id) {
						return { ...file, name: event.target.value }
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
						return { ...file, content: event.target.value }
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
