
export const ListElement = ({children}) => {

  const handleClick = () => {
    console.log('element listy:', children);
  }

  return (
    <li onClick={handleClick}>
      {children}
    </li>
  );
}


