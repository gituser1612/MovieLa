import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import MovieDetail from './Components/MovieDetail/MovieDetail';
import MovieListing from './Components/MovieListing/MovieListing';
import { Footer } from './Components/Footer/Footer';
import Review from './Components/Review/Review';
import Bookmark from './Components/Bookmark/Bookmark';
import ErrorWindow from './Components/ErrorWindow/ErrorWindow';

const AppContent: React.FC = () => {
  const [searchText, setSearchText] = useState<string>("");
  const location = useLocation();

  const hideLayout = location.pathname === "/error";
  const hideGlobalReview = location.pathname === "/review";

  return (
    <div className='container'>
      {!hideLayout && <Navbar setSearchText={setSearchText} />}

      <Routes>
        <Route path='/latest' element={<MovieListing />} />
        <Route path='/review' element={<Review />} />
        <Route path='/bookmark' element={<Bookmark />} />
        <Route path='/login' element={""} />
        <Route path='/movie/:id' element={<MovieDetail />} />

        <Route
          path='/'
          element={
            <>
              <Hero />
              <MovieListing searchText={searchText} />
            </>
          }
        />

        {/* Error Page */}
        <Route path="/error" element={<ErrorWindow />} />

        {/* Redirect ANY unknown route to /error */}
        <Route path="*" element={<Navigate to="/error" />} />
      </Routes>

      {!hideLayout && !hideGlobalReview && <Review />}
      {!hideLayout && <Footer />}
    </div>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;
