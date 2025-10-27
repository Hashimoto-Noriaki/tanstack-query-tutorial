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

    if(error){
        return <div>エラーが発生しました。</div>
    }

    // console.log(data)

    return (
        <div>
            <h1>投稿一覧</h1>
            <div>
                {status === "pending" ? (
                    <>読み込み中</>
                ) : (
                    <>
                        {data.map((post)=> (
                            <p key={post.id}>
                                <a href="/">{post.title}</a>
                            </p>
                        ))}
                    </>
                )}
            </div>
        </div>
    )
}

export default Posts