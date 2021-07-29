import S from './styles.module.css'
import Table from '../Table'

export default function App() {
  return (
    <div className={S.app}>
      <span className={S.todos}>todos</span>
      <Table />
      <span>Double-click to edit a todo</span>
    </div>
  )
}
