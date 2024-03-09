 import React from 'react'
 import axios from 'axios';
 import App from './App';
 
 function Search() {
    
   const SearchComponent = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);
  
    const handleSearchChange = (event) => {
      setSearchQuery(event.target.value);
    };
  
    const handleSearchSubmit = () => {
      axios.get(`http://localhost:5000/api/search?query=${searchQuery}`)
        .then(response => {
          setSearchResults(response.data);
        })
        .catch(error => {
          console.error('Error searching data:', error);
        });
    };
   return (
     <div>Search</div>
   )
 }
 
 export default Search;
