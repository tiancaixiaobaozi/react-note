import React from "react";
import { Link } from 'react-router-dom'

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        { id: 111, title: '文章1' },
        { id: 222, title: '文章2' },
        { id: 333, title: '文章3' }
      ]
    }
  }
  render() {
    return (
      <div>
        <ul>
          {this.state.list.map(item => {
            return (<li key={item.id} >
              <Link to={`/main/` + item.id}>{item.title}</Link>
            </li>)
          })}
        </ul>
      </div>
    )
  }
}

export default List
