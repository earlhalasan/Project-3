import CategoryList from "../../components/CategoryList/CategoryList";

export default function NoteIndexPage({allCats, setAllCats,setUpdated}) {
  return (
    <>
      <div>
        <h1>Category List</h1>
        <CategoryList allCats={allCats} setAllCats={setAllCats} setUpdated={setUpdated} />
      </div>
    </>
  );
}
