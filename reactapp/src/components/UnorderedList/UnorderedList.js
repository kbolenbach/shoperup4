export const UnorderedList = ({arrayElements}) => {
    return (
      <ul>
        {arrayElements.map((element, index) =>
          <li key={`elem-${index}`} onClick={() => console.log(element)}>{element}</li>
        )}
      </ul>
    )};