import MoviesBox from "./containers/MoviesBox"
import './App.css';
import poster from "./images/poster.png"

function App() {
  return (
    <div className="App">
      {/* <div  styles={{ backgroundImage:`url(${poster})` }}> </div> */}
      {/* <div style={{backgroundImage: `https://www.istockphoto.com/vector/marquee-and-curtain-background-gm1208666888-349453916`}}>
      </div> */}
      <MoviesBox/>
    
 
    </div>
  );
}

export default App;
