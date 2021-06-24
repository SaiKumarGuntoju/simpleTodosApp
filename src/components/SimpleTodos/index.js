import {Component} from 'react'
import TodoItem from '../TodoItem'

import './index.css'

const initialTodosList = [
  {
    id: 1,
    title: 'Book the ticket for today evening',
  },
  {
    id: 2,
    title: 'Rent the movie for tomorrow movie night',
  },
  {
    id: 3,
    title: 'Confirm the slot for the yoga session tomorrow morning',
  },
  {
    id: 4,
    title: 'Drop the parcel at Bloomingdale',
  },
  {
    id: 5,
    title: 'Order fruits on Big Basket',
  },
  {
    id: 6,
    title: 'Fix the production issue',
  },
  {
    id: 7,
    title: 'Confirm my slot for Saturday Night',
  },
  {
    id: 8,
    title: 'Get essentials for Sunday car wash',
  },
]

class SimpleTodos extends Component {
  state = {userDetailsList: initialTodosList}

  deleteUser = id => {
    const {userDetailsList} = this.state
    const filteredList = userDetailsList.filter(each => each.id !== id)
    this.setState({userDetailsList: filteredList})
  }

  render() {
    const {userDetailsList} = this.state
    return (
      <div className="page-container">
        <div className="todo-card">
          <h1>Simple Todos</h1>
          <ul className="list-todo">
            {userDetailsList.map(element => (
              <TodoItem
                key={element.id}
                list={element}
                deleteUser={this.deleteUser}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default SimpleTodos
