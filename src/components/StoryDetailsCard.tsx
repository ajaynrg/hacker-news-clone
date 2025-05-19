
export default function StoryDetailsCard({data}: any) {
    // console.log(data)
    const title = data.title;
    const url = data.url;
    const author = data.author;
    const points = data.points;
    const createdAt = new Date(data.created_at);
    const curDate = new Date();
    const dayAgo =  (curDate.getTime() - createdAt.getTime()) / (1000 * 3600 * 24);

    return (
        <div className="border border-gray-200 rounded-lg px-5 py-4 w-full shadow-sm sm:rounded-lg">
            <div className="cursor-pointer max-w-fit hover:text-blue-500 hover:underline"
                onClick={() => {
                window.open(url, "_blank")
            }}>
                {title}
            </div>
            <div className="mt-2 flex flex-row gap-x-1 text-xs text-gray-500">
                <span>
                    {points} points by <span className="font-bold text-black-700"> {author}</span>
                </span>
                <span>
                    {Math.floor(dayAgo)} days ago
                </span>
            </div>
        </div>
    )
}