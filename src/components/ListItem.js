export default function ListItem({ item, setInfo }) {
  
  return (
    <li><button className='list-item' onClick={() => setInfo(item)}>{item.name}</button></li>
    )
  }