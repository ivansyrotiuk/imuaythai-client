import React, { Component } from 'react';
import { Table } from 'reactstrap'
import UserAvatar from 'react-user-avatar'
import RemoveButton from '../Components/Buttons/RemoveButton'
import EditButton from '../Components/Buttons/EditButton'
import AddButton from '../Components/Buttons/AddButton'
import PreviewButton from '../Components/Buttons/PreviewButton'
import TablePage from '../Components/TablePage'
import { Link } from 'react-router-dom'

class ContestsPage extends Component {
  render() {

    const {contests} = this.props;

    const pageHeader = <div><strong>Contests</strong>
                         <div className="pull-right">
                           <AddButton click={ this.props.addContestClick } />
                         </div>
                       </div>;

    const headers = <tr>
                      <th className="col-md-1">
                        No.
                      </th>
                      <th className="col-md-9">
                        Contest name
                      </th>
                      <th className="col-md-2 text-center">
                        Action
                      </th>
                    </tr>

    const mappedContests = contests.map((contest, i) => <tr key={ i }>
                                                          <td>
                                                            <UserAvatar size="40" name={ contest.name } src="http://localhost:3000/img/contest_poster.jpg" />
                                                          </td>
                                                          <td>
                                                            { contest.name }
                                                          </td>
                                                          <td>
                                                            <div className="row justify-content-between">
                                                              <Link to={ "/contests/" + contest.id }>
                                                              <PreviewButton/>
                                                              </Link>
                                                              <Link to={ "/contests/" + contest.id + "/edit" }>
                                                              <EditButton/>
                                                              </Link>
                                                              <RemoveButton/>
                                                            </div>
                                                          </td>
                                                        </tr>);

    return <TablePage pageHeader={ pageHeader } headers={ headers } content={ mappedContests } />
  }
}

export default ContestsPage;