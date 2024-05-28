import React, { useEffect, useState } from 'react'
import Main from '../components/section/Main'
import { Link, useParams } from 'react-router-dom'
import Loading from '../components/section/Loading'

const Search = () => {
  const { searchID } = useParams();
  const [videos, setVideos] = useState([]);
  const [loading , setLoading] = useState(true);




  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await fetch(
          `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=48&q=${searchID}&type=video&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`
        );
        const data = await response.json();
        setVideos(data.items);  

        // 최소 로딩은 1초 유지
        setTimeout(() => {
          setLoading(false);
        } , 1000)

      


      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };

    fetchVideos();
  }, [searchID]);

  return (
    <Main
      title={`{어트랙션 검색 페이지 : ${searchID}`}
      description={`유튜브 검색 페이지 - 검색 키워드 : ${searchID}}`}
    >
     {loading ? (
      <Loading />

     ) : (
      <section id="searchPage" className='fade-in'>
      <div className="video__inner search">
        {/* <h2><em>{searchID}</em>검색 결과</h2> */}
        {videos.map((video, index) => (
          <div className="video" key={index}>
            <div className="video__thumb play__icon">
              <Link
                to={`/video/${video.id.videoId}`}
                style={{
                  backgroundImage: `url(${video.snippet.thumbnails.high.url})`,
                }}
              ></Link>
            </div>
            <div className="video__info">
              <div className="title">
                <Link to="/">{video.snippet.title}</Link>
              </div>
              <div className="author">
                <Link to="/">{video.snippet.channelTitle}</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
     )}
    </Main>
  );
};

export default Search;
