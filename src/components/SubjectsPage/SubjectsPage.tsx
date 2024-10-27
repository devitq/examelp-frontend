import {Breadcrumbs, Tabs} from '@gravity-ui/uikit';
import React from 'react';
import SubjectCard from '../SubjectCard/SubjectCard';

export default function SubjectsPage() {
    const [activeTab, setActiveTab] = React.useState('oge');
    const renderContent = () => {
        switch (activeTab) {
            case 'oge':
                return <SubjectCard subject={{id: 1, name: 'math'}} />;
            case 'ege':
                return <SubjectCard subject={{id: 2, name: 'russian'}} />;
            default:
                return null;
        }
    };
    return (
        <>
            <Breadcrumbs items={[{text: 'Все предметы', href: '/subjects/'}]} />
            <Tabs activeTab={activeTab} size="xl">
                <Tabs.Item id={'oge'} title="ОГЭ" onClick={(tabId) => setActiveTab(tabId)} />
                <Tabs.Item id={'ege'} title="ЕГЭ" onClick={(tabId) => setActiveTab(tabId)} />
            </Tabs>
            <div>{renderContent()}</div>
        </>
    );
}
