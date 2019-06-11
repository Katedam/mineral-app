import React from 'react';

export default function Mineral({ mineralItem }) {
  const { mineral, description, images } = mineralItem;
  const imageUrls = images.map((url, i) => {
    const key = `${url}${i}`
    return <img key={key} src={url} alt={mineral}/>
  })
  return(
    <li>
      <h1>{mineral}</h1>
      <ul>{imageUrls}</ul>
      <p>{description}</p>
    </li>
  )
}
