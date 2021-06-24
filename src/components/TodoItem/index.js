import './index.css'

const TodoItem = props => {
  const {list, deleteUser} = props
  const {title, id} = list
  const onDelete = () => {
    deleteUser(id)
  }
  return (
    <li className="list-Container">
      <h1 className="title-heading">{title}</h1>
      <button type="button" className="btn" onClick={onDelete}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
