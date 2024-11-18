import haibaraImage from './assets/fr_haibara.png';
import './App.css'

function App() {
  return (
    <>
      <div>
      <img className="logo" src={haibaraImage} alt="灰原哀" />
      </div>
      <h1>welcome to 灰原哀's website</h1>
      <div className="card">
        <p>
          QQ：328830204 wx: sky-sherry-ai .
        </p>
      </div>
      <p className="read-the-docs">
        try to follow my github account to know more about skyhaibara.
      </p>
    </>
  )
}

export default App
