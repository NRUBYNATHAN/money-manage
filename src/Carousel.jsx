import Slider from 'react-slick';

export function Carousel({ images }){
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <Slider {...settings}>
      {images.map(image => (
        <div key={image.id}>
          <img className='img' src={image.url} alt={image.alt} />
        </div>
      ))}
    </Slider>
  );
};