export const UnorderedList = ({arrayElements}) => {
    return (
      <ul>
        {arrayElements.map((arrayElements, index) =>
          <li key={`elem-${index}`}>{arrayElements}</li>
        )}
      </ul>
    )};