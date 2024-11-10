import { useState, useRef, useCallback, useEffect } from "react";
import searchImages from "./api";
import "./App.css";
import ImageList from "./Components/ImageList";
import SearchBar from "./Components/SearchBar";
import Loader from "./Components/Loader";

function App() {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const observerRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [isActive, setIsActive] = useState(false);

  const handleSubmit = async (term) => {
    setSearchTerm(term);
    setIsActive(true);
    setImages([]);
    setPage(1);
    fetchData(term, 1);
  };

  const fetchData = async (term, pageNum) => {
    setLoading(true);
    const result = await searchImages(term, pageNum);
    setImages((prevImages) => [...prevImages, ...result]);
    setLoading(false);
  };

  const lastElementref = useCallback(
    (node) => {
      if (loading || !isActive) return;
      if (observerRef.current) observerRef.current.disconnect();

      observerRef.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          setPage((prevPage) => prevPage + 1);
        }
      });

      if (node) observerRef.current.observe(node);
    },
    [loading]
  );

  useEffect(() => {
    if (page > 1 && searchTerm) {
      fetchData(searchTerm, page);
    }
    console.log(page, "page");
  }, [page]);

  return (
    <div>
      <div className="App">
        <SearchBar onSubmit={handleSubmit} />
        <ImageList images={images} />
        
      </div>
      {loading && <Loader />}
      {/* OBSERVER ELEMENT */}
      <div
        ref={lastElementref}
        style={{ height: "20px"}}
      />
    </div>
  );
}

export default App;
