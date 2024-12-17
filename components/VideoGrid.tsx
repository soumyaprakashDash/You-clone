import { VideoCard } from "./VideoCard"

const VIDEOS = [{
    title : "How to learn coding in 30 days | 30 day plan ",
    image : "photo.png",
    thumbImage : "thumb.png",
    author : "chai with code",
    views : "100k",
    timestamp : "2 days ago"
},{
    title : "How to learn coding in 30 days | 30 day plan ",
    image : "photo.png",
    thumbImage : "thumb.png",
    author : "chai with code",
    views : "100k",
    timestamp : "2 days ago"
},{
    title : "How to learn coding in 30 days | 30 day plan ",
    image : "photo.png",
    thumbImage : "thumb.png",
    author : "chai with code",
    views : "100k",
    timestamp : "2 days ago"  
},{
    title : "How to learn coding in 30 days | 30 day plan ",
    image : "photo.png",
    thumbImage : "thumb.png",
    author : "chai with code",
    views : "100k",
    timestamp : "2 days ago"
},{
    title : "How to learn coding in 30 days | 30 day plan ",
    image : "photo.png",
    thumbImage : "thumb.png",
    author : "chai with code",
    views : "100k",
    timestamp : "2 days ago"
},{
    title : "How to learn coding in 30 days | 30 day plan ",
    image : "photo.png",
    thumbImage : "thumb.png",
    author : "chai with code",
    views : "100k",
    timestamp : "2 days ago"
}]

export const VideoGrid = () => {
    return <div className="grid grid-cols-1
    md:grid-cols-2 lg:grid-cols-3">
     {VIDEOS.map(video => <div>
     <VideoCard 
        title = {video.title}
       image = {video.image}
       thumbImage = {video.thumbImage}
       author = {video.author}
       views = {video.views}
       timestamp = {video.timestamp}
     ></VideoCard>
       </div> )}
    </div>
}