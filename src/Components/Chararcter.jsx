import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getCharacters } from "../Redux/actions";

const Characters = () => {
  const dispatch = useDispatch();
  const allChararcters = useSelector((state) => state.character);

  useEffect(() => {
    dispatch(getCharacters());
  }, [allChararcters]);

  return (
    <div>
      <h1>Characters List</h1>
      {
      allChararcters.map(({ name }) => {
        return <p>Nombre: {name}</p>;
      })
      }
    </div>
  );
};

export default Characters;
