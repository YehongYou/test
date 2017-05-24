import generateData from './libs/generateData';

import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const earliest = new Date(2017,0,1,0,0,0);
const latest = new Date(2017,0,27,0,0,0);

class ItemList extends React.Component {
   constructor(props){
     super(props);

     this.state={
       items: []
     };
   }

   componentWillMount() {
     this._createItems();
     this.setState({items: [123,123,123]});
     console.log(this.state.items);
   }

   _createItems(){
     let items400 = [];
     while(items400.length<400){
      let orginalItems = generateData();
      orginalItems.map((item)=>{
        if(item.timestamp>=earliest && item.timestamp<latest){
           items400.push(item);
          if(items400.length==400){
            console.log(items400);
            // this.setState({items:items400});
          }
        }
      })
     }
   };
   render(){
     return (
       <ul>
         <li>wawawawa</li>
       </ul>
     )
   }
}

ReactDOM.render(
  <ItemList />
, document.querySelector('.container'));
