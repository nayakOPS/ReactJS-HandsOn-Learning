import { useCatFact } from "./useCatFact";

export const Cat = () => {
    const { data, isCatLoading, refetch } = useCatFact();

    if(isCatLoading) return <h1>Loading...</h1>;

    return(
        <div>
            <button onClick={refetch}>refetch</button>
            <h1>{data?.fact}</h1>
        </div>
    )
}