import type {StoryDetailsProps} from "./StoryDetailsProps.ts";

export interface HackerNewsResponse {
    hits: StoryDetailsProps[];
    nbHits:number;
    page: number;
    nbPages: number;
}