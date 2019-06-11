import React from 'react';
import Mineral from './Mineral';

export default function Minerals({ minerals }) {
  const mineralList = minerals.map((mineralItem, i) => {
    const key = `${mineralItem.mineral}${i}`
    return <Mineral key={key} mineralItem={mineralItem}/>
  })

  return(
    <ul>
      {mineralList}
    </ul>
  )
}
