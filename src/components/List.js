import ListItem from "./ListItem"
export default function List({ list, setInfo }) {
  
  return (
    <ul className="list">
    {
      list.map((item) => <ListItem key={item.id} item={item} setInfo={setInfo} />)
    }
    </ul>
    )
  }
  