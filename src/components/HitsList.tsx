import type {StoryDetailsProps} from "../interfaces/StoryDetailsProps.ts";
import StoryDetailsCard from "./StoryDetailsCard.tsx";

// @ts-ignore
export function HitsList({data}){
    data?.map((item: StoryDetailsProps, index: number) => {
        return item.title &&
            <StoryDetailsCard
                key={index}
                data={item}
            />
    });
}