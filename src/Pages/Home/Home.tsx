import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchItems } from "../../services/itemsApi/fetchItems";
import { IAppState } from "../../services/interfaces/interfaces";

const HomePage = (): JSX.Element => {
  const dispatch = useDispatch();
  const appData = useSelector((state: IAppState) => state);

  useEffect(() => {
    fetchItems("https://reqres.in/api/products", dispatch);
  }, []);

  return (
    <section>
      <>
        <button onClick={() => console.log(appData)} />
        <h3>Homepage</h3>
      </>
    </section>
  );
};

export default HomePage;
