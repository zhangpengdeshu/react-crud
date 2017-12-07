import React from 'react'
import { Input, Button } from 'antd';
class Header extends React.Component{
  handleChange (v) {
    let values = v.target.value;
    console.log(values)
  }
  render(){
    return (
      <header>
        <section>
           <form>
              <label htmlFor="new-todo">备忘录</label>
              <Input placeholder="新建事项(20字以内)" onChange={v => this.handleChange(v)}/>
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
