import style from './App.module.css';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import ContentContainer from './components/Content/Content';
import FriendsPageContainer from './components/Friends/FriendsPage/FriendsPage';
import {Route} from 'react-router';
import Sticky from 'react-stickynode';

function App(props) {
  return(
    <div>
        <Sticky enabled={true} top={0} bottomBoundary={0}>
          <Header/>
        </Sticky>
        <div className={style.content}>
            <Sticky enabled={true} top={54} bottomBoundary={0}>
              <Profile/>
            </Sticky>
            <div className={style.right_content}>
              <Route path='/home' render={()=> <ContentContainer/>} />
              <Route path='/friends' render={()=> <FriendsPageContainer/>}/>
            </div>
        </div>
    </div>
  )
}

export default App;
