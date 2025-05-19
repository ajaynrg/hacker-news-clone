import StoryDetailsCard from "../../components/StoryDetailsCard.tsx";
import {SearchBar} from "../../components/SearchBar.tsx";
import {useQuery} from "@tanstack/react-query";
import {searchStories} from "../../apis/storiesApi.ts";
import {useState} from "react";

export default function ThreadsPage() {
    let content;
    const [query, setQuery] = useState<string | null>(null);

    const { data , isFetching, error} = useQuery({
        queryKey:["threads", query],
        queryFn: () => searchStories(query,10,1),
    });

    if(isFetching){
        content = <div>Loading... </div>
    }else if(error){
        console.error(error);
    }else{
        //@ts-ignore
        const hits: object[] = data?.hits;
        content = hits?.map((item, index)=>{
            return <StoryDetailsCard
                data={item}
                key={index}
            />
        });
    }
    const onHandleSearch = (value: string) => {
        console.log(value);
        setQuery(value);
    }

    return (
        <div>
            <div className="mt-5 mx-10 md:mx-[10rem]">
                <SearchBar handleSearch={onHandleSearch} className="h-10"/>
            </div>
            {content || 'No data available.'}
        </div>
    );
}