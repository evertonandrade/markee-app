import * as S from 'sidebar/sidebar-styles'
import { Logo } from "ui/logo";
import { Button } from 'ui/button';
import { PlusIcon } from 'ui/icons';
import { Explorer } from './explorer';
import { File } from 'resources/types/files'

const files: File[] = [
  {
    id: '1',
    name: 'Readme.md',
    content: '',
    active: false,
    status: 'saved',
  },
  {
    id: '2',
    name: 'CONTRIBUT.md',
    content: '',
    active: false,
    status: 'saved',
  },
  {
    id: '3',
    name: 'LICENSE.md',
    content: '',
    active: false,
    status: 'saved',
  },
  {
    id: '4',
    name: 'Links.md',
    content: '',
    active: false,
    status: 'saved',
  },
  {
    id: '5',
    name: 'roadmap.md',
    content: '',
    active: true,
    status: 'editing',
  },
]

export function Sidebar() {
	return (
    <S.Wrapper>
      <Logo />
      <S.Title>Arquivos</S.Title>
      <Button>
        <PlusIcon />
        Adicionar arquivo
      </Button>
      <Explorer files={files} />
    </S.Wrapper>
  )
}
