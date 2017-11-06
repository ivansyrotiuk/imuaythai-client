import React from 'react';
import PropTypes from 'prop-types';
import InstitutionRow from "./InstitutionRow";

const InstitutionsTable = (props) => {
    const institutionRows = props.institutions.map((institution, i) => <InstitutionRow {...institution} {...props.actions}/>);
    return (
        <table className="table table-hover mb-0 hidden-sm-down">
            <thead>
                <th className="col-1">Id</th>
                <th className="col-5">Name</th>
                <th className="col-3">Continent</th>
                <th className="col-2 text-center">Actions</th>
            </thead>
            <tbody>
                {institutionRows}
            </tbody>
        </table>
    );
};

InstitutionsTable.defaultProps = {
    institutions: []
};

InstitutionsTable.propTypes = {
    institutions: PropTypes.array
};

export default InstitutionsTable;
