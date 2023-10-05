import { PopularItem } from './PopularItem';

//Создание блока с наиболее посещаемыми ссылками

export const PopularItems = () => {
  return (
    <div className="info-block">
      <PopularItem title="Погода">
        <p>Утром +17, днём +20</p>
      </PopularItem>
      <PopularItem title="Посещаемое">
        <p>Недвижимость - о сталинках</p>
        <p>Маркет - люстры и светильники</p>
        <p>Авто.ру - привод 4х4 до 500 000</p>
      </PopularItem>
    </div>
  );
};
