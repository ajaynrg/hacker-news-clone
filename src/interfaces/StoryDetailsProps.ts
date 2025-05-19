export interface StoryDetailsProps {
    _highlightResult: {
        author: object;
        title: object;
        url: object;
    },
    author: string;
    title: string;
    created_at: string;
    points: number;
    story_id: number;
}