import logo from './logo.png';
import './App.css';
import InfoComponent from './components/info';
import  Jobs  from './components/jobs.js';
const App = ({ personalInfo, text }) => {
  const { name } = personalInfo;
 
  
  return (
   <>

    <div className="App">
      <header className="App-header"> 
        <img src={logo} className="App-logo" alt="logo.png" />
        <h2>{name}</h2>
        <p>{text}</p>
        

        <info name={name} text={text}></info>
        </header>
    <main className="App-main">
       
         <Jobs jobTitle="Heilbrigðisstofnun Suðurlands" jobTime="May 2018 - August 2018" jobDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "/>
         <Jobs jobTitle="Frederiksen Ale House" jobTime=" september 2018 - september 2019" jobDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "/>
         <Jobs jobTitle="Búsetuþjónustan"jobTime=" july 2020 - Present" jobDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. " />
       </main>
       </div>

       
</>
      
    
  );
}

export default App;
