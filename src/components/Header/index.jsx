import React from 'react'
import { Input, Button } from 'antd';
class Header extends React.Component{
  render(){
    return (
      <header>
        <section>
           <form>
              <label htmlFor="new-todo">备忘录</label>
              <Input placeholder="新建事项(20字以内)"/>
              <div>
                <Button type="default">添加</Button>
                <Button type="default" icon="search">搜索</Button>
              </div>
           </form>
        </section>
      </header>
    )
  }
}

export default Header
