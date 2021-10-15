import React from 'react'
import { Avatar, Button } from "@material-ui/core";
import './TweetBox.css'
const TweetBox = () => {
    return (
        <div className="tweetbox">
                      <Avatar src="https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/284832/settings_images/rLlCifhXRJiT0RoN2FjK_Logo_roundbackground_black.png" />

<div className="tweet_input">
    

    <input className='entry' type="text"
    placeholder="What's happening"
    />

</div>

        </div>
    )
}

export default TweetBox
