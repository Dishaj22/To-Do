function SearchInput({city, setCity}) {
  return  <input type="text"
   placeholder="Enter city name"
   value={city}
   onChange={(e)=> setCity(e.target.value)} 
   />;
}
export default SearchInput;