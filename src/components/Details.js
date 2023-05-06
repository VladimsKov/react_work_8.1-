import { useState, useEffect, useContext } from "react";
import { v4 as uuidv4 } from 'uuid';
import {LinkContext} from '../contexts/LinkContext';

export default function Details({info }) {
  const [itemDetails, setItemDetails] = useState('');
  const [loading, setLoading] = useState(false);
  const {baseUrl} = useContext(LinkContext);
  
  useEffect(() => {
    if (Number.isInteger(info.id)) {
      setLoading(true);
      fetch(`${baseUrl}/${info.id}.json`)
      .then(response => response.json())
      .then(data => {
        setItemDetails(() => {
          data.avatar += `/#${uuidv4()}`; setLoading(false); return data
        })
      })
    }
  }, [info.id]);
  
  return (
    <div className="list">
    {
      loading && <div className="loading">загрузка ...</div>
    }
    {
      itemDetails ? <>
      <img className="photo" src={`${itemDetails.avatar}`} alt="" />
      <div className="text">{itemDetails.name}</div>
      <div className="text">{itemDetails.details.city}</div>
      <div className="text">{itemDetails.details.company}</div>
      <div className="text">{itemDetails.details.position}</div>
      </> : null
    }
    </div>
    )
  }
  