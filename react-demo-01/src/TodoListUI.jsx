import React from 'react';
import 'antd/dist/antd.css';
import { Input, Button, List } from 'antd';

// 类组件
// class TodoListUI extends React.Component {
//   render() {
//     return(
//       <div style={{ margin: '20px' }}> 
//         <div>
//           <Input
//             placeholder={this.props.inputVal}
//             style={{ width: '250px', marginRight: '20px' }}
//             onChange={this.props.changeInputValue}
//             value={this.props.inputVal}
//           />
//           <Button type='primary' onClick={this.props.clickButton}>增加</Button>
//         </div>
//         <div style={{ margin: '10px', width: '300px' }}>
//           <List
//             bordered
//             dataSource={this.props.list}
//             renderItem={
//               (item, index) => (
//                 <List.Item
//                   onClick={this.props.deleteItem.bind(this, index)}
//                 >{item}</List.Item>
//               )
//             }
//           />
//         </div>
//       </div>
//     )
//   }
// }

/**
 * 无状态组件
 * 没有业务逻辑，只有UI层展示，和继承组件相比性能更高
 */
const TodoListUI = (props) => {
  return (
    <div style={{ margin: '20px' }}> 
      <div>
        <Input
          placeholder={props.inputVal}
          style={{ width: '250px', marginRight: '20px' }}
          onChange={props.changeInputValue}
          value={props.inputVal}
        />
        <Button type='primary' onClick={props.clickButton}>增加</Button>
      </div>
      <div style={{ margin: '10px', width: '300px' }}>
        <List
          bordered
          dataSource={props.list}
          renderItem={
            (item, index) => (
              <List.Item
                onClick={() => props.deleteItem(index)}
              >{item}</List.Item>
            )
          }
        />
      </div>
    </div>
  )
}

export default TodoListUI
