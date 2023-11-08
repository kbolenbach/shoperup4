import { ListElement } from "../ListElement/ListElement";
import { useFetch } from "../../hooks/useFetch";

export const UnorderedList = () => {

  const [ data ] = useFetch ( "https://jsonplaceholder.typicode.com/todos" );

    return (
      <ul>
        {data.map((element, id) =>
          <ListElement key={`elem-${id}`}>{element.title}</ListElement>
        )}
      </ul>
    )};