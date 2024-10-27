import {SubjectModel} from '@/models/SubjectModel';
import {Card} from '@gravity-ui/uikit';

export default function SubjectCard(subject: SubjectModel) {
    const style = {
        width: '120px',
        height: '120px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    };
    return (
        <a href={`/subjects/${subject.id}`}>
            <Card style={style} view="raised" type="container" size="l">
                {subject.name}
            </Card>
        </a>
    );
}
