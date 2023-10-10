export const ListElement = ({children}) => {

  const handleClick = ({children}) => {
    console.log(children);
  }

  return (
    <li onClick={handleClick}>
      {children}
    </li>
  );
}


