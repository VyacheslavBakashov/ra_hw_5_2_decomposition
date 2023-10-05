//Создание одного элемента наиболее посещаемых ссылок

export const PopularItem = ({ title, children }) => {
  return (
    <div className="info-block__item">
      <h4>{title}</h4>
      {children}
    </div>
  );
};
