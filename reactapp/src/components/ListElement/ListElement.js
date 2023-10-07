export const ListElement = ({children}) => {

  const handleClick = () => {
    console.log(children);
  }

  return (
    <li onClick={handleClick}>
      {children}
    </li>
  );
}


