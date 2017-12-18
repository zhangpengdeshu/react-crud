import React from 'react'
import { Input, Button } from 'antd';
import { connect } from 'react-redux'
import { addToDo } from '../../redux/action'

@connect(
   null,
  { addToDo }
)
class Header extends React.Component{
  constructor(props){
  	super(props);
  	this.state = {};
  }
  handleChange (k,v) {
    let values = v.target.value;
    this.setState({
      [k]: values
    })
    console.log(k,values)
  }

  handleAdd(){
     console.log(this.state.newAdd)
     let text = [];
     text.push(this.state.newAdd)
     this.props.addToDo(text)
  }

  render(){
    return (
      <header>
        <section>
           <form>
              <label htmlFor="new-todo">备忘录</label>
              <Input placeholder="新建事项(20字以内)" onChange={v => this.handleChange('newAdd',v)}/>
              <div>
                <Button type="default" onClick={ () => { this.handleAdd() } }>添加</Button>
                <Button type="default" icon="search">搜索</Button>
              </div>
           </form>
        </section>
      </header>
    )
  }
}

export default Header
