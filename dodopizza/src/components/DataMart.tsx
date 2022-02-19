import React, {FC, useState, useEffect} from 'react';
import Entity from "./Entity";
import {IEntity} from '../types/types';


interface IDataMartProps {
  slug: string
}

const DataMart: FC<IDataMartProps> = props => {
  const {slug} = props;
  const [dmName, setDmName] = useState<string>("");
  const [data, setData] = useState<IEntity[]>([]);

  useEffect(() => {
    fetch(`/api/data-marts/${slug}/entities.json`)
      .then(response => response.json())
      .then(response => {
        setDmName(response.meta.data_mart.name)
        setData(response.results)
      })
  }, []);

  return (
    <div id={slug} className="row mb-5">
      <h2 className="mb-4">{dmName}</h2>
      {data.map(item => <Entity item={item} key={item.id}/>)}
    </div>
  );
};

export default DataMart;