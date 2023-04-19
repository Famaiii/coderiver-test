import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './Components/Sections/Header/Header';
import Main from './Components/Sections/Main/Main';
import ProgressBar from './Components/Sections/ProgressBar/ProgressBar';

function App() {
    return (
        <>
            <ProgressBar />
            <Header />
            <Main />
        </>
    );
}

export default App;
