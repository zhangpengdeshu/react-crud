import React, { Component } from 'react';
import { Collapse, Row, Col, Button } from 'antd';
/*
 * @class ListTodoMemos `新建事项`组件
 */
class ListDone extends Component {
  render() {
    const collapseStyle = {
        width: '100%',
        maxWidth: '800px',
        margin: '0 auto',
    };
      const Panel = Collapse.Panel;
      const header = (
             <Row>
                 <Col span={22}>
                     <h3>已完成</h3>
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
export default ListDone;
