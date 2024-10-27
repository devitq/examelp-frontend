import {Card} from '@gravity-ui/uikit';

export default function SubjectCard({subject}) {
    const style = {
        width: '120px',
        height: '120px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    };
    return (
        <a href={`/subjects/${subject}`}>
            <Card style={style} view="raised" type="container" size="l">
                {subject}
            </Card>
        </a>
    );
}
