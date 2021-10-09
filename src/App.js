import profileImage from './img/image-from-rawpixel-id-2895685-jpeg.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>MY REACT APP</h1>
      <h2>AUTHOR: PRATIBHA PRADHAN</h2>
      <img src={profileImage} alt="profile-image" className='img1'/>
    </div>
  );
}

export default App;
