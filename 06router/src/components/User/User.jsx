import React from 'react'
import { useParams } from 'react-router-dom'

// User page ma aauna lai chai user pachi slash dinuh paracha
function User() {
    const { userid } = useParams();
  return (
    <div>
        {/* userid is got from the useParams hook */}
        <h5>Welcome!{userid}</h5>
    </div>
  )
}
export default User