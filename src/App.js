import style from './App.module.css';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import ContentContainer from './components/Content/Content';
import FriendsPageContainer from './components/Friends/FriendsPage/FriendsPage';
import {Route} from 'react-router';
import Sticky from 'react-stickynode';

function App(props) {
  return(
    <body>
        <Header/>
        <div className={style.content}>
            <Sticky enabled={true} top={50} bottomBoundary={1200}>
              <Profile/>
            </Sticky>
            <div className={style.right_content}><Route path='/home' render={()=> <ContentContainer/>} /></div>
            <Route path='/friends' render={()=> <FriendsPageContainer/>}/>
        </div>
    </body>
  )
}

export default App;
