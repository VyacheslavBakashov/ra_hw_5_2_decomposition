
const bannerData = {
  src: 'https://images.wallpaperscraft.ru/image/single/derevia_vetki_more_1059051_1280x720.jpg',
  link: '#',
};

// Создаёт баннер рекламы

export const Banner = () => {
  return (
    <a className="banner-link" href={bannerData.link}>
      <img className="banner-img" src={bannerData.src} alt="" />
    </a>
  );
};
