import React from 'react';
import Main from '../components/section/Main';

const Home = () => {
  return (
    <Main 
      title="Newsroom"
      description="News and resources from the frontlines of life science software and web applications."
    >
      <div className="newsroom">
        <header className="header">
          <h1>Welcome to TripTube!</h1>
          <p>TripTube에서 여행과 관련된 모든 소식을 확인해보세요!</p>
        </header>
        <div className="main-article">
          <div className="article-content">
            <h2>푸른 바다와 하얀 건축물이 어우러진 그리스 산토리니에서 꿈같은 휴가를 경험하세요!</h2>
            <p>June 17, 2024</p>
            <p>Experience a dream vacation in Santorini, Greece, where azure seas meet whitewashed architecture!</p>
          </div>
          <div className="article__main__img"></div>
        </div>
        <div className="newsletter">
          <p>다양한 채널을 구독하고 새로운 여행지를 확인하세요!</p>
        </div>
        <div className="articles">
          <div className="article">
            <div className='article__conts__img'></div>
            <h3>Role of Design in Making User-Friendly Apps</h3>
            <p className="date">March 17, 2023</p>
          </div>
          <div className="article">
          <div className='article__conts__img'></div>
            <h3>The Best Apps for a Creative Workday</h3>
            <p className="date">March 17, 2023</p>
          </div>
          <div className="article">
          <div className='article__conts__img'></div>
            <h3>Designing User-Friendly Apps for the Masses</h3>
            <p className="date">March 17, 2023</p>
          </div>
          <div className="article">
          <div className='article__conts__img'></div>
            <h3>The Future of Technology and Design</h3>
            <p className="date">March 17, 2023</p>
          </div>
          <div className="article">
          <div className='article__conts__img'></div>
            <h3>10 Innovative Apps to Simplify Your Life</h3>
            <p className="date">March 17, 2023</p>
          </div>
          <div className="article">
          <div className='article__conts__img'></div>
            <h3>The Impact of Technology on Modern Design</h3>
            <p className="date">March 17, 2023</p>
          </div>
        </div>
      </div>
    </Main>
  );
};

export default Home;
