import React from 'react'
import { Row, Col } from 'antd'
import { Link } from 'react-router-dom'
class Navigation extends React.Component {
  render(){
    return (
      <div className="navigation">
          <Row className="className" type="flex" align="middle" justify="space-around">
              <Col span={6}>
                  <Link to="/app">
                      全部&nbsp;
                      0
                  </Link>
              </Col>
              <Col span={6}>
                  <Link to="/app/todo">
                      新建事项&nbsp;
                      <span>0</span>
                  </Link>
              </Col>
              <Col span={6}>
                  <Link to="/app/doing">
                      正在进行
                      <span>0</span>
                  </Link>
              </Col>
              <Col span={6}>
                  <Link to="/app/done">
                      已完成
                      <span>0</span>
                  </Link>
              </Col>
          </Row>
      </div>
    )
  }
}
export default Navigation
