import './App.css';
import React, { useState, useEffect } from 'react';
import {Header, Footer, Contact, ArticleDetail, ArticleList, Home} from './components';
import CircularProgress from '@mui/material/CircularProgress';
import { Box } from '@mui/material';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import axios from './axios';

function App() {
    const [articles, setArticles] = useState([]);
    const [categories, setCategories] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        axios.get(`${axios.defaults.apiURL}/api/articles`)
            .then(res => {
                setArticles(res.data['hydra:member'])
                setIsLoaded(true)
            })
            .catch(err => {
                if (err.response) {
                    console.log(err.response.data)
                }
            })
    }, [isLoaded])

    useEffect(() => {
        axios.get(`${axios.defaults.apiURL}/api/categories`)
            .then(res => {
                setCategories(res.data['hydra:member'])
            })
            .catch(err => {
                if (err.response) {
                    console.log(err.response.data)
                }
            })
    }, [])

    let toShow = <Box sx={{ display: 'flex',height:"25vh", justifyContent:"center", alignItems:'center' }}>
        <CircularProgress />
    </Box>;

    if (isLoaded) {
        toShow = <Home articles={articles} />
    }

  return (
      <Router>
          <div>
              <Header />
              <Switch>
                  <Route path="/articles">
                      <ArticleList articles={articles} categories={categories}/>
                  </Route>
                  <Route path="/contact">
                      <Contact/>
                  </Route>
                  <Route path="/articleDetail">
                      <ArticleDetail/>
                  </Route>
                  <Route path="/">
                      {toShow}
                  </Route>
              </Switch>
              <Footer/>
          </div>
      </Router>
  );
}

export default App;
