import './App.css';
import ShoppingList from './component/ShoppingList';
import Title from './component/Header';
import ReactToPrint from 'react-to-print';
import { Component } from 'react';

class App extends Component{
  render(){
    return (
    <div className="App">
      <Title/>
        <div ref={el=>this.componentRef=el} className='tableDiv table_container'>
            <ShoppingList/>
        </div>
        <ReactToPrint
        trigger={()=>{
          return <button>Print the page</button>
        }}
        content = {()=>this.componentRef}
        documentTitle = "new document"
        pageStyle="print"
      />
    </div>
  );
  }
}

export default App;
