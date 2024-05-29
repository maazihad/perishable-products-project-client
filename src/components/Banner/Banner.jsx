const Banner = () => {
  return (
    <div className=''>
      <div className='carousel w-full'>
        <div id='slide1' className='carousel-item relative w-full'>
          <img
            src='https://verybamboo.com/wp-content/uploads/2017/06/Patio-Set-AdobeStock_23438874-1000x667-1.jpeg'
            className='w-full object-cover h-96'
          />
          <div className='absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2'>
            <a href='#slide4' className='btn btn-circle'>
              ❮
            </a>
            <a href='#slide2' className='btn btn-circle'>
              ❯
            </a>
          </div>
        </div>
        <div id='slide2' className='carousel-item relative w-full'>
          <img
            src='https://a-z-animals.com/media/2022/07/shutterstock_371672548-1024x614.jpg'
            className='w-full object-cover h-96'
          />
          <div className='absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2'>
            <a href='#slide1' className='btn btn-circle'>
              ❮
            </a>
            <a href='#slide3' className='btn btn-circle'>
              ❯
            </a>
          </div>
        </div>
        <div id='slide3' className='carousel-item relative w-full'>
          <img
            src='https://miro.medium.com/v2/resize:fit:1400/1*SMWBPqqbNKOymTT_FVjDsg.jpeg'
            className='w-full object-cover h-96'
          />
          <div className='absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2'>
            <a href='#slide2' className='btn btn-circle'>
              ❮
            </a>
            <a href='#slide4' className='btn btn-circle'>
              ❯
            </a>
          </div>
        </div>
        <div id='slide4' className='carousel-item relative w-full'>
          <img
            src='https://img.zcdn.com.au/lf/50/hash/38182/20111823/4/2+Piece+Casper+Bamboo+%26+Rattan+Coffee+Tables+Set.jpg'
            className='w-full object-cover h-96'
          />
          <div className='absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2'>
            <a href='#slide3' className='btn btn-circle'>
              ❮
            </a>
            <a href='#slide1' className='btn btn-circle'>
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
