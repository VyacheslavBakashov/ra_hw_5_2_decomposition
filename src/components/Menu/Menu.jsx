import { MenuLink } from './MenuLink';

const menuData = [
  {
    id: 1,
    title: 'Видео',
    link: '#',
  },
  {
    id: 2,
    title: 'Картинки',
    link: '#',
  },
];

//Создание списка навигации меню

export const Menu = () => {
  return (
    <ul className="menu-nav">
      {menuData.map((data) => (
        <MenuLink {...data} key={data.id} />
      ))}
    </ul>
  );
};
