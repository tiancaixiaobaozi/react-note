import React from "react";
import { Link } from "react-router-dom";

class NotFound extends React.Component {
  constructor(props) {
    super(props);
    // 编程式重定向
    this.props.history.push('/')
  }

  render() {
    return (
      <div>
        <p>404 not found</p>
        {/* <Redirect to='/' /> 组件自动重定向*/}
        <Link to='/'>返回首页</Link>
      </div>
    )
  }
}

export default NotFound
