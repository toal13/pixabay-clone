
import { useRef, useState } from 'react';
import './App.css';
import ImageGallery from './ImageGallery';

function App() {
  const [fetchData, setFetchData] = useState([]);
  const ref = useRef();

const handleSubmit = (e) => {
  e.preventDefault();
  console.log(ref.current.value)

  const endpointURL =
  `https://pixabay.com/api/?key=32916214-dc300ca6017840da88eb2baaf&q=${ref.current.value}&image_type=photo`
   fetch (endpointURL)
   .then((res) => {
    return res.json();
   })
   .then((data) => {
    setFetchData(data)
   });

}

  return (
    <div className="container">
      <h2>My Pixabay</h2>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input type="text" placeholder="search" ref={ref}/> 
      </form>
      <ImageGallery fetchData={fetchData} />
    </div>
    );
}

export default App;
