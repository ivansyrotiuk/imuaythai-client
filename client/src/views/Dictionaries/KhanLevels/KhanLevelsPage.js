import React, { Component } from 'react';
import { host } from "../../../global"
import { saveLevel, fetchLevels, deleteLevel } from "../../../actions/Dictionaries/KhanLevelsActions"
import RemoveButton from "../../Components/Buttons/RemoveButton"
import EditButton from "../../Components/Buttons/EditButton"
import { Link } from 'react-router-dom'
import { connect } from "react-redux"
import axios from "axios";
import Spinner from "../../Components/Spinners/Spinner"

connect((store) => {
  return {
    levels: store.KhanLevels.levels,
    fetching: store.KhanLevels.fetching,
    fetched: store.KhanLevels.fetched
  };
})
export default class KhanLevelsPage extends Component {
  constructor(props) {
    super(props);
    this.fetchLevels();
  }

  fetchLevels() {
    this
      .props
      .dispatch(fetchLevels())
  }

  deleteLevel(id) {
    this
      .props
      .dispatch(deleteLevel(id))
  }

  removeLevel(id) {
    var self = this;
    axios
      .post(host + 'api/dictionaries/levels/remove', {
        Id: id
      })
      .then(function(response) {
        self.deleteLevel(response.data)
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  render() {

    const {levels, fetching} = this.props;
    if (fetching) {
      return <Spinner />
    }
    const mappedLevels = levels.map((level, i) => <tr key={ i }>
                                                    <td>
                                                      { level.id }
                                                    </td>
                                                    <td>
                                                      { level.name }
                                                    </td>
                                                    <td>
                                                      { level.level }
                                                    </td>
                                                    <td>
                                                      <Link to={ "/dictionaries/levels/" + level.id }>
                                                      <EditButton id={ level.id } />
                                                      </Link>
                                                      <RemoveButton id={ level.id } click={ this.removeLevel.bind(this, level.id) } />
                                                    </td>
                                                  </tr>);


    return (

      <div className="animated fadeIn">
        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-header">
                <strong>Levels</strong>
                <div class="pull-right">
                  <Link to={ "/dictionaries/levels/new" }><i class="fa fa-plus-square-o" aria-hidden="true"> Create</i></Link>
                </div>
              </div>
              <div className="card-block">
                <table className="table">
                  <thead>
                    <tr>
                      <th>Id</th>
                      <th className="col-md-9">Name</th>
                      <th>Level</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    { mappedLevels }
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      );
  }
}