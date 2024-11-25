import './App.css'
import CreateFolder from './components/CreateFolder'
import { data } from './utils/data'

function App() {

  return (
    <>
      <CreateFolder data={data} />
    </>
  )
}

export default App
