import { useQuery } from  "@tanstack/react-query";
import Axios from 'axios'

 export const useCatFact = () => {

    // const{ data, refetch, isLoading:isCatLoading, error } = useQuery(['cat'], async() => {
    //     return Axios.get("https://catfact.ninja/fact").then((res) => res.data);
    // });
    const { data, refetch, isLoading: isCatLoading, error } = useQuery({
        queryKey: ['cat'],
        queryFn: async () => {
            const response = await Axios.get("https://catfact.ninja/fact");
            return response.data;
        }
    });

    const refetchData = () => {
        alert("Data Refetched");
        refetch();
    };
    // if(error){

    // }
    return{ data, refetch:refetchData, isCatLoading };
}
