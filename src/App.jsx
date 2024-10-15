import { useDispatch, useSelector } from "react-redux";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import { useEffect } from "react";
import { fetchContactsThunk } from "./redux/contactsOps";
import { selectIsError, selectIsLoading } from "./redux/contactsSlice";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContactsThunk());
  }, [dispatch]);
  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectIsError);

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {isLoading && <h2>Loading...</h2>}
      {isError && <h2>Error...</h2>}
      <ContactList />
    </>
  );
}

export default App;
