import React from 'react';
import AddButton from '../../Components/Buttons/AddButton';
import Page from '../../../components/Page/Page';
import PageHeader from '../../../components/Page/PageHeader';
import PageContent from '../../../components/Page/PageContent';
import Right from '../../../components/Common/Right';
import SuspensionTypesTable from '../../../components/Dictionaries/SuspensionTypes/SuspensionTypesTable';

const SuspensionTypesView = props => {
    return (
        <Page>
            <PageHeader>
                Suspension types
                <Right>
                    <AddButton click={props.actions.addClick} />
                </Right>
            </PageHeader>
            <PageContent>
                <SuspensionTypesTable suspensionTypes={props.suspensionTypes}  actions={props.actions}/>
            </PageContent>
        </Page>
    );
};

export default SuspensionTypesView;
