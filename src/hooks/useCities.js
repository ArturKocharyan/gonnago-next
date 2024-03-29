import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCitiesStatus, getCities } from "../../src/redux/slices/citiesSlice";

function useCities() {
  const dispatch = useDispatch();
  const citiesStatus = useSelector(getCitiesStatus);
  const citiesList = useSelector((state) => state.cities);

  useEffect(() => {
    if (citiesStatus === "idle") {
      dispatch(getCities());
    }
  }, [citiesStatus, dispatch]);

  return { citiesStatus, citiesList };
}

export default useCities;