import S from './styles.module.css'
import cn from 'classnames'
import {useState} from 'react'

export default function Todo({
  text,
  done,
  onDelete,
  onDone,
  onUndone,
  onEdit,
}) {
  const [editing, setEditing] = useState(false)
  const [newText, setNewText] = useState('')
  return (
    <div className={cn(S.root, [done && S.done])}>
      {!editing && (
        <>
          <button onClick={done ? onUndone : onDone}>
            v
          </button>
          <span
            onDoubleClick={() => {
              setEditing(true)
              setNewText(text)
            }}>
            {text}
          </span>
          <button onClick={onDelete}>X</button>
        </>
      )}
      {editing && (
        <input
          value={newText}
          onChange={(e) => setNewText(e.target.value)}
          onBlur={() => setEditing(false)}
          autoFocus
          onKeyDown={(e) => {
            if (e.key !== 'Enter') return
            if (!newText) onDelete()
            else onEdit(newText)
            setEditing(false)
          }}
        />
      )}
    </div>
  )
}
