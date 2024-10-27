import {SubjectModel} from '@/models/SubjectModel';
import {Card} from '@gravity-ui/uikit';

export default function SubjectCard(subject: SubjectModel) {
    return (
        <a href={`/subjects/${subject.id}/`}>
            <Card
                style={{
                    width: '120px',
                    height: '120px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
                view="raised"
                type="container"
                size="l"
            >
                {subject.title}
            </Card>
        </a>
    );
}
