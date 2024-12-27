import './App.css'
import { Person , Course } from './Person'

function App() {
  return (
   <>
    <div className="App">
      <Person
        name="Binayak"
        email="brianocn@578.com"
        post="Front-end Intern"
        course={Course.BIM}
        age={21}
        isMarried={false}
        friends={['jake','jessica','jeryy']}
      />
    </div>
   </>
  )
}

export default App
