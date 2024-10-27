import {Breadcrumbs} from '@gravity-ui/uikit';
import {useParams} from 'react-router-dom';

export default function SubjectPage() {
    const {subjectId} = useParams();
    return (
        <>
            <Breadcrumbs
                items={[
                    {text: 'Все предметы', href: '/subjects/'},
                    {text: subjectId, href: `/subjects/${subjectId}/`},
                ]}
            />
        </>
    );
}
