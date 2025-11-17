import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero';
import MovieDetail from './Components/MovieDetail/MovieDetail';
import MovieListing from './Components/MovieListing/MovieListing';
import { Footer } from './Components/Footer/Footer';
import Review from './Components/Review/Review';
import Bookmark from './Components/Bookmark/Bookmark';

const App:React.FC = () => {
  const[searchText,setSearchText]=useState<string>("");

  return (
    <Router>
      <div className='container'>
        <Navbar setSearchText={setSearchText} />
        <Routes>
          <Route path='/latest' element={<MovieListing/>}/>
          <Route path='/review' element={<Review/>}/>
          <Route path='/bookmark'element={<Bookmark/>}/>
          <Route path='/login' element={""}/>
          <Route path='/movie/:id' element={<MovieDetail />} />
          <Route path='/' element={
            <>
              <Hero />
              <MovieListing searchText={searchText} />
            </>
            }
          />
        </Routes>
        <Review/>
        <Footer />
      </div>
    </Router>
  );
};

export default App