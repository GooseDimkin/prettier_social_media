import style from './Content.module.css';
import WallContainer from './../Wall/Wall';
import FriendsMiniature from '../Friends/FriendsMiniature';
import React from 'react';
import {connect} from 'react-redux';
import {getFriendsTC} from './../../Redux/reducers/friendsReducer';
import FriendItem from './../Friends/FriendItem/FriendsItem';
import {SyncLoader} from 'react-spinners';
import {changePageAC} from './../../Redux/reducers/friendsReducer';
import Sticky from 'react-stickynode';

function Content(props) {
    return(
        <div className={style.content}>
            <WallContainer/>
            <Sticky enabled={true} top={54} bottomBoundary={1200}>
                <FriendsMiniature getFriends={props.getFriends}/>
            </Sticky>
        </div>
    );
}

class ContentAPI extends React.Component {
    componentDidMount() {
        let pagesCount = Math.ceil(this.props.totalCount / this.props.count);
        let randomPage = Math.ceil(Math.random() * (pagesCount - 1) + 1)
        
        this.props.getFriendsTC(randomPage, 3);

        this.props.changePageAC(1);
    }

    getFriends = () => {
        let friends = this.props.friendsList.map(f => <FriendItem name={f.name} status={f.status} photos={f.photos}/>);

        return friends;
    }

    render() {
        return this.props.isLoading ? <div className={style.loader}><SyncLoader loading={true} /></div> : <Content getFriends={this.getFriends}/> 
    }
}

const mapStateToProps = (state) => {
    return {
        totalCount: state.friendsData.totalCount,
        count: state.friendsData.count,
        friendsList: state.friendsData.friendsList,
        isLoading: state.friendsData.isLoading
    }
}

let ContentContainer = connect(mapStateToProps, {getFriendsTC, changePageAC})(ContentAPI);

export default ContentContainer;