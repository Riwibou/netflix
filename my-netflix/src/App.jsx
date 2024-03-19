
import './App.css'
import data from "./assets/data.json"

function App() {
  return (
    <>
    <header>
      <img src="./assets/netflix-logo.svg" alt="netflix-logo" />
    </header>
    <main>
      <div className="container">
      {data.map((category, index) => (
        <div key={index}>
          <h2 className='title'>{category.category}</h2>
          <div className="image-line">
            {category.images.map((imageUrl, i) => (
              <div key={i}>
                <img src={imageUrl} alt={`Image ${i + 1}`} />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
    </main>
  </>
);
}

export default App
