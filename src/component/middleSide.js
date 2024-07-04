import React from 'react';
import './middleSide.css';
import storyData from '../story.json';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import InsertCommentIcon from '@mui/icons-material/InsertComment';
import SendIcon from '@mui/icons-material/Send';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';

const Post = ({ imgSrc, userName, timing, postImgSrc, likes, comment, commentsCount }) => (
    <div className="post">
        <div className="postInfo">
            <img className='postInfoImg' src={imgSrc} alt={userName} />
            <div className="postInfoUserName">{userName}</div>
            <div className="timingInfo">. {timing}</div>
        </div>
        <div className="postImg">
            <img className='postImage' src={postImgSrc} alt="Post" />
        </div>
        <div className="iconsBlock">
            <div className="leftIcon">
                <FavoriteBorderIcon sx={{ fontSize: "25px" }} />
                <InsertCommentIcon sx={{ fontSize: "25px" }} />
                <SendIcon sx={{ fontSize: "25px" }} />
            </div>
            <BookmarkBorderIcon className="bookmarkIcon" sx={{ fontSize: "25px" }} />
        </div>
        <div className="likeSection">
            <div className="imagesLike">
                <img className='likeImg' src={imgSrc} alt="Like" />
                <img className='likeImg' src={imgSrc} alt="Like" />
            </div>
            <div className="noOfLikes">{likes} likes</div>
        </div>
        <div className="postAbout">
            <div className="postAboutName">{userName}</div>
            <div className="infoComment">{comment}</div>
        </div>
        <div className="noOfComment">view All {commentsCount} Comments</div>
        <div className="AddComment">Add a Comment...</div>
    </div>
);

const MiddleSide = () => {
    return (
        <div className="middleHomeSide">
            <div className="storyBlock">
                {storyData.story?.map((item, index) => (
                    <div className="storyParticular" key={index}>
                        <div className="imageDiv">
                            <img className='statusImg' src={item.img} alt={item.name} />
                        </div>
                        <div className="profileName">{item.name}</div>
                    </div>
                ))}
            </div>
            <div className="postSection">
                <Post
                    imgSrc="https://wallpaperaccess.com/full/6050002.jpg"
                    userName="jaspritBumrah"
                    timing="36 min"
                    postImgSrc="https://wallpaperaccess.com/full/6050002.jpg"
                    likes="112,456"
                    comment="Happy mother's day to My Angel !..."
                    commentsCount="467"
                />
                <Post
                    imgSrc="https://wallpaperaccess.com/full/6050002.jpg"
                    userName="jaspritBumrah"
                    timing="36 min"
                    postImgSrc="https://wallpaperaccess.com/full/6050002.jpg"
                    likes="112,456"
                    comment="Happy mother's day to My Angel !..."
                    commentsCount="467"
                />
                <Post
                    imgSrc="https://wallpaperaccess.com/full/6050002.jpg"
                    userName="jaspritBumrah"
                    timing="36 min"
                    postImgSrc="https://wallpaperaccess.com/full/6050002.jpg"
                    likes="112,456"
                    comment="Happy mother's day to My Angel !..."
                    commentsCount="467"
                />
            </div>
        </div>
    );
}

export default MiddleSide;
