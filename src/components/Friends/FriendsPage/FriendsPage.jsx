import style from './FriendsPage.module.css';
import FriendItem from './../FriendItem/FriendsItem';
import React from 'react';
import {getFriendsTC, changePageAC, showLoading} from './../../../Redux/reducers/friendsReducer';
import {connect} from 'react-redux';
import {SyncLoader} from 'react-spinners';

function FriendsPage(props) {
    return(
        <div className={style.section}>
            {props.getPages()}
            {props.getFriends()}
        </div>
    );
}

class FriendsAPI extends React.Component {
    componentDidMount() {
        this.props.getFriendsTC(this.props.currentPage, this.props.count);
    }

    changePage = (currentPage) => {
        this.props.changePageAC(currentPage);
        this.props.getFriendsTC(currentPage, this.props.count);
        this.props.showLoading(true);
    }

    getPages = () => {
        let pagesCount = Math.ceil(this.props.totalCount / this.props.count);
        let pages_arr = [];
        for(let i = 1; i <= pagesCount; ++i) {
            pages_arr.push(i);
        }
        let pages = pages_arr.map(p => <span onClick={() => this.changePage(p)} className={this.props.currentPage === p ? style.selectedPage : style.pageNumber}>{p}</span>);

        return pages;
    }

    getFriends = () => {
        let friends = this.props.friendsList.map(f => <FriendItem name={f.name} status={f.status} photos={f.photos} />);

        return friends;
    }

    render() {
        return this.props.isLoading ? <div className={style.loader}><SyncLoader loading={true} /></div> : <FriendsPage getFriends={this.getFriends} getPages={this.getPages} {...this.props} />
    }
}

const mapStateToProps = (state) => {
    return {
        totalCount: state.friendsData.totalCount,
        count: state.friendsData.count,
        isLoading: state.friendsData.isLoading,
        currentPage: state.friendsData.currentPage,
        friendsList: state.friendsData.friendsList
    }
}

let FriendsPageContainer = connect(mapStateToProps, {getFriendsTC, changePageAC, showLoading})(FriendsAPI);

export default FriendsPageContainer;