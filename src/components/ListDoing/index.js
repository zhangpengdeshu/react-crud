import React, { Component } from 'react';
import { Collapse, Row, Col, Icon, Button } from 'antd';
/*
 * @class ListTodoMemos `新建事项`组件
 */
class ListDoing extends Component {

    render() {
        const Panel = Collapse.Panel;
        return (
            <main>
                <Collapse style={collapseStyle}>
                    <Panel header={
                        <Row>
                            <Col span={22}>
                                <h3>正在进行</h3>
                            </Col>
                            <Col span={2}>
                                <Button
                                    size="small"
                                    shape="circle"
                                >{number}</Button>
                            </Col>
                        </Row>
                    }
                    <ul></ul>
                    </Panel>
                </Collapse>
            </main>
        );
    }
}
export default ListDoing;
