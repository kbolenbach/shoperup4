import '../ListElement/styles.scss';
import { useState, useEffect } from "react";

export const ListElement = ({children}) => {

  const [ pageTitle, setPageTitle ] = useState('');
  const [ changeClass, setChangeClass ] = useState('');
  // const [ removeClass, setRemoveClass ] = useState('mark-as-read');


  const handleOnClick = (event) => {
    setPageTitle(event.target.innerText);
    setChangeClass('mark-as-read');
    // setRemoveClass = () => {
    //   if(removeClass === 'mark-as-read'){
    //     removeClass = ' '
    //   } else {
    //     removeClass = 'mark-as-read'
    //   }
    // }
  }

  useEffect(() => {
    document.title = `${pageTitle}`;
  });

  return (
    <li className={changeClass} onClick={handleOnClick}>
      {children}
    </li>
  );
}


