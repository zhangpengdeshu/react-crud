import React, { Component } from 'react';
import { Collapse, Row, Col, Button } from 'antd';
import { connect } from 'react-redux'
/*
 * @class ListTodoMemos `新建事项`组件
 */
@connect(
  state => state.todoList,
  null
)
class ListTodo extends Component {
  render() {
    console.log(this.props)
    const collapseStyle = {
        width: '100%',
        maxWidth: '800px',
        margin: '0 auto',
    };
      const Panel = Collapse.Panel;
      const header = (
             <Row>
                 <Col span={22}>
                     <h3>新建事项</h3>
                 </Col>
                 <Col span={2}>
                     <Button  size="small" shape="circle">
                         0
                     </Button>
                 </Col>
             </Row>
         );
      return (
          <main>
              <Collapse style={collapseStyle}>
                  <Panel header={header}>
                    <ul>
                      <li>0</li>
                    </ul>
                  </Panel>
              </Collapse>
          </main>
      );
  }
}
export default ListTodo;
