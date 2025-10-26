import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

const Posts = () => {
    const { data, status, error, isFetching } = useQuery({
        queryKey: ["posts"],
        queryFn: async () => {
            const { data } = await axios.get(
                "https://jsonplaceholder.typicode.com/posts"
            );

            return data;
        },
    });

    // console.log(data)

    return (
        <div>
            <h1>投稿一覧</h1>
            <div>{}</div>
        </div>
    )
}

export default Posts