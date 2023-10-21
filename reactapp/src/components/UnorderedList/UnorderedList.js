import { ListElement } from "../ListElement/ListElement";

export const UnorderedList = ({arrayElements}) => {
    return (
      <ul>
        {arrayElements.map((element, index) =>
          <ListElement key={`elem-${index}`}>{element}</ListElement>
        )}
      </ul>
    )};