import React from "react";


function NumberList(props) {
    const numbers = props.numbers;
    const listItems = numbers.map((number, index) =>
      <li key={index}>{number}</li>
    );
    return (
      <ul>{listItems}</ul>
    );
  }

  function NumberTable(props){
      const numbers = props.numbers;
      const tableNumbers = numbers.map((n, i) =>
      <tr key={i}><td>{n}</td></tr>
      
      );
      return (
         <td>{tableNumbers}</td>
      )
  }

export default class ListDemo extends React.Component{
    constructor(props){
        super();
        this.state = {ListNumbers: [1, 2, 3, 4, 5]};

    }
    render(){
        return(
            <div>
                <NumberList numbers={this.state.ListNumbers}/>
                {/* <NumberTable numbers={this.state.ListNumbers}/> */}
            </div>

        )
    }
}