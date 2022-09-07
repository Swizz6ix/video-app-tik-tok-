import React, {useState, useEffect} from 'react';
import './App.css';
import Video from "./Video"
import db from './firebase';
import { collection, query, onSnapshot, } from 'firebase/firestore';
import HomeButton from './HomeButton';
import Data from "./VideoDB.json"

function App() {
  const [videos, setVideos] = useState([]);
  let hq = []
  useEffect(() => {
  
    const watch = query(collection(db, "videos"));
    console.log('wida', watch)
    onSnapshot(watch, (snapshot) => {
      setVideos(
        snapshot.docs.map((doc) => doc.data())
      )
      // setVideos(hq)
    })
    console.table("Playboi", hq)
  }, [videos])
  console.log("Damn",videos)
  
  return (
    <div className="app">
      <div className='app__containier'>
        <div className='app__videos'>
          {Data.map(({url, channel, description, song, likes, messages, shares, avatar}, index) => 
            <Video url={url} channel={channel} description={description} song={song} likes={likes} messages={messages} shares={shares} avatar={avatar} key={index}/>
            
          )} 
        
          {/* <Video url="/Videos\31d7f5119d7147218f617e8f6d6b6ffc.mp4" />
          <Video url="/Videos\VID_53130714_121905_638.mp4" />
          <Video url="/Videos\43c6f8eaf7034c6da1b1a741b011fe7f.mp4"/>
          <Video url="/Videos\f822365c3d5e493ca8349ee92eb4dc20.mp4" />
          <Video url="/Videos\a270728012db9a92cd2e0f4ba14cc0b6.mp4" song="Uwaila Julia   Overloading(cover)" />
          <Video url="/Videos\ca1b90be59784c4eabf155c04d71d99c.mp4"/>
          <Video url="/Videos\45d7e0b1ce9aca943c34b01d51aceb56.mp4" />
          <Video url="/Videos\FD4B537B423E38FF8B39B88B0907EEA2_video_dashinit.mp4" />
          <Video url="/Videos\d86708ae19ae4fee4b188faf2d25b8d7.mp4" />
          <Video url="/Videos\199024093_1138286346690725_243161738441027714_n.mp4" />
          <Video url="/Videos\aqWzwdBDOV05vQ-p.mp4" />
          <Video url="/Videos\5a27549bc42742498fd3e50b77fee2ee.mp4" />
          <Video url="/Videos\5811e839c99e41478f9ae0d625f16e2d.mp4" />
          <Video url="/Videos\c94879064cdb4aa4a2c6acfa47ea8229.mp4" />
          <Video url="/Videos\bf4083baaf58443ea526260b2b9c9b26.mp4" />
          <Video url="/Videos/b851f8944aa641b7b68fd2dd7812f63b.mp4" />
          <Video url="/Videos\795c928e69034b93be612c422105bf3a.mp4" />
          <Video url="" />
          <Video url="" />
          <Video url="" />
          <Video url="" />
          <Video url="" />
          <Video url="" /> */}
        </div>
        <HomeButton />
      </div>
    </div>
  );
}

export default App;
