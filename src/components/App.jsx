import { useEffect, useState } from 'react';
import axios from 'axios';

import './App.css';
import SearchBar from './SearchBar/SearchBar';
import ImageGallery from './ImageGallery/ImageGallery';
import { fetchImg } from '../services/api';
import Loader from './Loader/Loader';

function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const getData = async () => {
      try {
        // 1. Встановлюємо індикатор loading в true перед запитом
        setIsLoading(true);
        setIsError(false);
        const { results } = await fetchImg();
        // console.log(response);
        setImages(results);
        console.log(results);
      } catch (error) {
        console.error(error);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    getData();
  }, []);

  return (
    <>
      <SearchBar />

      <main>
        <ImageGallery images={images} />
        {isLoading && <Loader />}
        {isError && <h3>От халепа! Щось сталося. Онови Сторінку!</h3>}
      </main>
    </>
  );
}

export default App;
