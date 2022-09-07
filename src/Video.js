import React, {useEffect, useRef, useState} from 'react'
import "./Video.css"
import VideoFooter from './VideoFooter';
import VideoSidebar from './VideoSidebar'

function Video({url, channel, description, song, likes, messages, shares, avatar}) {

    const [playing, setPlaying] = useState(false)
    const videoRef = useRef(null);

    const onVideoPress = () => {
        if (playing) {
            videoRef.current.pause();
            setPlaying(false)
        } else {

            videoRef.current.play();
            setPlaying(true)
        }
    };

    useEffect(() => {
        let options = {
            rootMargin: "0px",
            threshold: [0.25, 1.0]
        };

        let handlePlay = (entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    videoRef.current.play();
                }
                else {
                    videoRef.current.pause();
                }
            });
        };
        let observer = new IntersectionObserver(handlePlay, options);
        observer.observe(videoRef.current);
    });
  return (
    <div className='video'>
        <video className='video__player'
        loop
        playsInline
        onClick={onVideoPress}
        ref={videoRef}
        src={url}>
        

        </video>
        <div className='video__top'>
            <h5>Following <span className='video__topSpan'>For You</span></h5>
        </div>
        <VideoFooter channel={channel} description={description} song={song} />

        <VideoSidebar likes ={likes} messages={messages} shares={shares} avatar={avatar} />

    </div>
  )
}

export default Video