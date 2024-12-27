import { useSelector } from "react-redux"

function Home() {
  const username = useSelector((state : any) => state.user.value.username);
  return (
    <div>Welcome to Home for : {username}</div>
  )
}

export default Home 