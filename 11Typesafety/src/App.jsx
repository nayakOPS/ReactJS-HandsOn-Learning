import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Person from './Person'
function App() {
  return (
    <div className="App">
      <Person
        name={"pedro"}
        email="pedro@gmail.com"
        age={21}
        isMarried={true}
        friends={["jessica","jake","jerry","jasmine"]}
        // friends={null}
        // the friends type is not strictly type there will be issue , when the friend is passed as null
        // the app will break
      />
    </div>
  )
}

export default App
