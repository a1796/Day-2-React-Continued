import React from "react";



function Members(props){
    const members = props.members;
    const membersList = members.map((m, i) =>
    <tr key={i}><td>{i}</td><td>{m.name}</td></tr>

    );
    return(
    <table>
    {membersList}
    </table>
    )
    }

export default class ListDemo2 extends React.Component {
    constructor(props) {
        super();
        this.state = {
            members: [{ name: "Peter", age: 18 },
            { name: "Jan", age: 35 },
            { name: "Janne", age: 25 },
            { name: "Martin", age: 22 }
            ]
        };

    }

    render() {
        return (
            <Members members={this.state.members} />


        )
    }
}