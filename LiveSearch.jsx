import {useState, useEffect} from "react";

function LiveSearch(){
    const [searchTerm, setSearchTerm] = useState("");
    const [results, setResults] = useState([]);
useEffect(()=>{
    const timerId = setTimeout(() => {
  console.log("Searching for:", searchTerm);

  if (searchTerm === "") {
    setResults([]);
  } else {
    setResults([
      searchTerm + " Result 1",
      searchTerm + " Result 2",
      searchTerm + " Result 3",
    ]);
  }
}, 500);

return () => {
  clearTimeout(timerId);
};

    return () => {
        clearTimeout(timeId);
    };
}, [searchTerm]);
return (
    <div>
        <h2>Live Search</h2>
        <input type="text"
         value={searchTerm} 
         onChange={(e)=> setSearchTerm(e.target.value)} 
         placeholder="Search..." />
        <ul>
            {results.map((result,index)=>(
                <li key={index}>{result}</li>
            ))}
        </ul>
    </div>
)  

}
export default LiveSearch;