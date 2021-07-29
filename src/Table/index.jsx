import React from 'react'
import S from './styles.module.css'
import Todo from './Todo'

function useForceUpdate() {
  const [i, setI] = React.useState(0)
  return () => setI(i + 1)
}

function useLocalStorage(key, obj) {
  const [local, setLocal] = React.useState(() => {
    const t = localStorage.getItem(key)
    if (!t) return obj
    try {
      return JSON.parse(t)
    } catch (e) {
      return obj
    }
  })
  return [
    local,
    (newValue) => {
      localStorage.setItem(key, JSON.stringify(newValue))
      setLocal(newValue)
    },
  ]
}

export default function Table() {
  const forceUpdate = useForceUpdate()
  const [todos, setTodos] = useLocalStorage('todos', [])
  const [newTodo, setNewTodo] = React.useState('')
  const [filter, setFilter] = React.useState(null)

  const undone = todos.filter((t) => !t.done)
  const isAllDone = undone.length === 0

  return (
    <div className={S.root}>
      {!!todos.length && (
        <button
          onClick={() => {
            todos.forEach((t) => (t.done = !isAllDone))
            forceUpdate()
          }}>
          v
        </button>
      )}
      <input
        className={S.input}
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        onKeyDown={(e) => {
          if (e.key !== 'Enter' || !newTodo) return
          setTodos([
            ...todos,
            {id: Math.random(), text: newTodo, done: false},
          ])
          setNewTodo('')
        }}
      />
      {todos
        .filter((t) => t.done !== filter)
        .map((t) => (
          <Todo
            key={t.id}
            text={t.text}
            done={t.done}
            onDelete={() =>
              setTodos(todos.filter((todo) => todo !== t))
            }
            onDone={() => {
              t.done = true
              forceUpdate()
            }}
            onUndone={() => {
              t.done = false
              forceUpdate()
            }}
            onEdit={(text) => {
              t.text = text
              forceUpdate()
            }}
          />
        ))}
      {todos.length > 0 && (
        <div className={S.footer}>
          {undone.length} items left
          <button onClick={() => setFilter(null)}>
            All
          </button>
          <button onClick={() => setFilter(true)}>
            Active
          </button>
          <button onClick={() => setFilter(false)}>
            Completed
          </button>
          {todos.length !== undone.length && (
            <button onClick={() => setTodos(undone)}>
              Delete all done
            </button>
          )}
        </div>
      )}
    </div>
  )
}
