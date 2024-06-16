import React, { useEffect, useState } from 'react'
import Main from '../components/section/Main'
import { useParams } from 'react-router-dom'
import { CiBadgeDollar, CiMedal, CiRead } from 'react-icons/ci'

const Channel = () => {
    const { channelID } = useParams()
    const [channelDetail, setChannelDetail] = useState(null)
    const [channelVideo, setChannelVideo] = useState([])
    const [nextPageToken, setNextPageToken] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchResults = async () => {
            try {
                const detail = await fetch(`https://youtube.googleapis.com/youtube/v3/channels?part=snippet,brandingSettings,statistics&id=${channelID}&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`)
                const detailData = await detail.json()
                setChannelDetail(detailData.items[0])

                const video = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelID}&order=date&maxResults=48&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`)
                const videoData = await video.json()
                setChannelVideo(videoData.items)
                console.log(videoData.items)
                setNextPageToken(videoData.nextPageToken)

            } catch (error) {
                console.log(error)
            } finally {
                setLoading(false)
            }
        }
        fetchResults()
    }, [channelID])

    return (
        <Main title="영화 페이지" description="영화 어쩌구">
            <section id='channelPage'>
                {loading ? (
                    <div className='loading'>Loading...</div>
                ) : (
                    channelDetail && (
                        <div className='channel__inner'>
                            <div className="channel__header" style={{ backgroundImage: `url(${channelDetail.brandingSettings.image.bannerExternalUrl})` }}>
                                <div className="circle">
                                    <img src={channelDetail.snippet.thumbnails.high.url} alt={channelDetail.snippet.title} />
                                </div>
                            </div>
                            <div className="channel__info">
                                <h3 className='title'>{channelDetail.snippet.title}</h3>
                                <p className='desc'>{channelDetail.snippet.description}</p>
                                <div className='info'>
                                    <span><CiBadgeDollar />{channelDetail.statistics.subscriberCount}</span>
                                    <span><CiMedal />{channelDetail.statistics.videoCount}</span>
                                    <span><CiRead />{channelDetail.statistics.viewCount}</span>
                                </div>
                            </div>
                            <div className='channel__videos'>
                              {channelVideo.map((video, idx)=> (
                                <div key={idx} className='channel__video'>
                                  {/* <div className='video__img' style={{ backgroundImage: `url(${video.brandingSettings.image.bannerExternalUrl})` }}></div> */}
                                </div>
                              ))}
                            </div>
                        </div>
                    )
                )}
            </section>
        </Main>
    )
}

export default Channel
