import './App.css';
import Home from './components/Home';
import ContactUs from './components/ContactUs';
import Feedback from './components/Feedback';
import ChangeProfilePhoto from './components/ChangeProfilePhoto';
import BookAppointment from './components/BookAppointment';
import DownloadReport from './components/Report/Report'

 function App() {
  return (
    <>
      <Home/>
      <DownloadReport />
      <ContactUs />
      <Feedback/>
      
      <ChangeProfilePhoto/>
      <BookAppointment/>
    </>

  );
}

export default App;
