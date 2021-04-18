import React, { Component } from "react";
import { connect } from "react-redux";

class WorkList extends Component {

  componentDidMount(){
    fetch('/users')
    .then(res =>res.json())
    .then(customers => this.setState({customers},()=> console.log(customers)))
  }


  render() {
    const { works } = this.props;

    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>Nome</th>
          </tr>
        </thead>
        <tbody>
          {works.map((work) => (
            <tr key={work}>
              <td>{work}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

function mapStateToProps({ works }) {
  return {
    works: works.works,
  };
}

export default connect(mapStateToProps)(WorkList);
