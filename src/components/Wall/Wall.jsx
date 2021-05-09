import style from './Wall.module.css';
import PostElement from './PostElement/PostElement';
import React from 'react'
import {connect} from 'react-redux'
import {getPostTC} from './../../Redux/reducers/postsReducer';
import postsData from './../../Redux/reducers/JSONtest/JSONtest';

class Wall extends React.Component {
    componentDidMount() {
        this.props.getPostTC(postsData.posts);
    }

    getPosts = () => {
        let postsItem = this.props.postsData.map(p => <PostElement name={p.name} photos={p.photos} text={p.text} image={p.image} />)

        return postsItem;
    }

    render() {
        return(
            <div className={style.section}>
                {this.getPosts()}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        postsData: state.postsData.posts
    }
}

let WallContainer = connect(mapStateToProps, {getPostTC})(Wall);

export default WallContainer;