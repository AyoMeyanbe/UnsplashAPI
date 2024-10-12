import { useState } from 'react';
import searchImages from './api';
import './App.css';
import ImageList from './Components/ImageList';
import SearchBar from './Components/SearchBar';

function App() {
  const [images, setImages] = useState([]);

  const handleSubmit = async (term) => {
    const result = await searchImages(term);
    setImages(result);
  }
  return (
    <div className="App">
      <SearchBar onSubmit={handleSubmit} />
      <ImageList images={images}/>
    </div>
  );
}

export default App;
