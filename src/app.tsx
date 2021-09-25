import { Container } from 'app-styles'
import { Content } from 'content'
import { Sidebar } from 'sidebar'
import { useFiles } from 'resources/hooks/use-files'

export function App() {
	const {
		files,
		inputRef,
		getActiveFile,
		handleAddFile,
		handleSelectFile,
		handleRemoveFile,
		handleUpdateFileName,
		handleUpdateFileContent,
	} = useFiles()

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
