import React from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import { Link } from 'react-router-dom';
import Avatar from 'react-avatar';
import EditButton from '../../../views/Components/Buttons/EditButton';
import PreviewButton from '../../../views/Components/Buttons/PreviewButton';
import { userCanSeeInstitutions, userCanEditInstitutions, userCanDeleteInstitutions } from '../../../auth/auth';

const InstitutionGymsTable = props => {
    return (
        <ReactTable
            data={props.gyms}
            columns={[
                {
                    Header: '',
                    id: 'photo',
                    accessor: d => {
                        return {
                            name: d.name,
                            photo: d.photo
                        };
                    },
                    maxWidth: 60,
                    Cell: row => <Avatar size={40} name={row.value.name} src={row.value.photo} round={true} />
                },
                {
                    Header: 'Name',
                    accessor: 'name'
                },
                {
                    Header: 'Country',
                    accessor: 'countryName'
                },
                {
                    Header: 'Actions',
                    accessor: 'id',
                    Cell: row => {
                        const PreviewInstitution = userCanSeeInstitutions(() => (
                            <Link to={'/institutions/gyms/' + row.value}>
                                <PreviewButton id={row.value} />
                            </Link>
                        ));

                        const EditInstitution = userCanEditInstitutions(() => (
                            <Link to={'/institutions/gyms/edit/' + row.value}>
                                <EditButton id={row.value} />
                            </Link>
                        ));

                        return (
                            <div className="row justify-content-around">
                                <PreviewInstitution />
                                <EditInstitution />
                            </div>
                        );
                    }
                }
            ]}
            defaultPageSize={10}
            className="-striped -highlight"
        />
    );
};

InstitutionGymsTable.defaultProps = {
    gyms: []
};

export default InstitutionGymsTable;
