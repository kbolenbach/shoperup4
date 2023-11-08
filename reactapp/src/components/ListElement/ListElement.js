import '../ListElement/styles.scss';
import { useState, useEffect } from "react";

export const ListElement = ({children}) => {

  const [ pageTitle, setPageTitle ] = useState('');
  const [ isActive, setIsActive ] = useState('');


  const handleOnClick = (event) => {
    setPageTitle(event.target.innerText);
    setIsActive(isActive ? '' : 'mark-as-read');
  }

  useEffect(() => {
    document.title = `${pageTitle}`;
  }, [ pageTitle ]);

  return (
    <li className={isActive} onClick={handleOnClick}>
      {children}
    </li>
  );
}


