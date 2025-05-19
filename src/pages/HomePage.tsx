import {useQuery} from "@tanstack/react-query";
import { searchStories} from "../apis/storiesApi.ts";
import type {StoryDetailsProps} from "../interfaces/StoryDetailsProps.ts";
import StoryDetailsCard from "../components/StoryDetailsCard.tsx";

export default function HomePage() {
    const query: string = '';
    const hitsPerPage: number = 10;
    const page: number = 1

    const {data, isFetching , error} = useQuery({
        queryKey:['stories'],
        queryFn: () => searchStories(query,hitsPerPage,page)
    });
    let content;
    if (isFetching) {
        content = <div>Loading... </div>
    }else if(error){
        console.error(error);
        content = <div>Error: {error.message}</div>;
    }else{
        //@ts-ignore
        const hits: StoryDetailsProps[] = !data ? [] : data.hits;
        content = hits.map((item: StoryDetailsProps, index: number) => {
            return item.title &&
                <StoryDetailsCard
                    key={index}
                    data={item}
                />
        });
    }

    return (
        <div className="flex flex-wrap gap-3 mx-5 my-5 md:mx-[3rem]">
            {content}
        </div>
    );
}