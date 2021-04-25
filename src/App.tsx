import React, { ChangeEvent, useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { v1 } from 'uuid';
import { EditableSpan } from './HW1/EditableSpan';
import { AddUser } from './HW1/AddUser';
import HW1 from './HW1/HW1';
import { CardComponent } from './CardComponent';
export type UsersType = {
  id: string
  name: string
  age: number
}

export type PhotosType = {
  img: string
  isClicked: boolean
  id: string
  status: 'done' | 'active'
}
type PhotosLimiterType = {id: string, img: string}
function App() {
  const [photos, setPhotos] = useState<Array<PhotosType>>([
    {
      id: v1(),
      img: 'https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/other/cat_relaxing_on_patio_other/1800x1200_cat_relaxing_on_patio_other.jpg',
      isClicked: false,
      status: 'active'
    },
    {
      id: v1(),
      img: 'https://i.guim.co.uk/img/media/8a13052d4db7dcd508af948e5db7b04598e03190/0_294_5616_3370/master/5616.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=bcaa4eed2c1e6dab61c41a61e41433d9',
      isClicked: false,
      status: 'active'
    },
    {
      id: v1(),
      img: 'https://i.guim.co.uk/img/media/8a13052d4db7dcd508af948e5db7b04598e03190/0_294_5616_3370/master/5616.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=bcaa4eed2c1e6dab61c41a61e41433d9',
      isClicked: false,
      status: 'active'
    },
    {
      id: v1(),
      img: 'data:image/jpeg;base64,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',
      isClicked: false,
      status: 'active'
    },
    {
      id: v1(),
      img: 'https://artcityvets.com/wp-content/uploads/2019/03/animal-sitting-animals-inside.jpg',
      isClicked: false,
      status: 'active'
    },
    {
      id: v1(),
      img: 'https://static01.nyt.com/images/2020/04/22/science/22VIRUS-PETCATS1/22VIRUS-PETCATS1-mediumSquareAt3X.jpg',
      isClicked: false,
      status: 'active'
    },
    {
      id: v1(),
      img: 'https://artcityvets.com/wp-content/uploads/2019/03/animal-sitting-animals-inside.jpg',
      isClicked: false,
      status: 'active'
    },
    {
      id: v1(),
      img: 'data:image/jpeg;base64,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',
      isClicked: false,
      status: 'active'
    },
    {
      id: v1(),
      img: 'https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/other/cat_relaxing_on_patio_other/1800x1200_cat_relaxing_on_patio_other.jpg',
      isClicked: false,
      status: 'active'
    },
    {
      id: v1(),
      img: 'https://static01.nyt.com/images/2020/04/22/science/22VIRUS-PETCATS1/22VIRUS-PETCATS1-mediumSquareAt3X.jpg',
      isClicked: false,
      status: 'active'
    }
  ])
 const shuffle = (arr: Array<PhotosType>) => {
    var j, temp;
    for(var i = arr.length - 1; i > 0; i--){
      j = Math.floor(Math.random()*(i + 1));
      temp = arr[j];
      arr[j] = arr[i];
      arr[i] = temp;
    }
    return [...arr];
  }

  useEffect(() => {
    setPhotos(shuffle(photos)) 
  }, [])

  const [photosLimiter, setPhotosLimiter] = useState<Array<PhotosLimiterType>>([
    {id: '', img: 'df'}
  ])

  const setVision = (id: string, img: string) => {
    const newPhotos = [...photos]
    const newObj = {id, img}
    const newLimit = [...photosLimiter, newObj]
    if (newLimit.length >= 3) {
      newLimit.splice(0, 1)
    }
    // setPhotos(photos.map(e => {
    //   if (e.id === newLimit[0] || e.id === newLimit[1]) {
    //     return { ...e, isClicked: true }
    //   }
    //   else { return { ...e, isClicked: false } }
    // }))
    newPhotos.forEach(e => {
      if (e.id == newLimit[0]['id'] || e.id == newLimit[1]['id']) {
        console.log(newLimit)
        
        // if (newLimit[0] === newLimit[1]) {
        //   const firstPhoto = newPhotos.find(e => e.id === newLimit[0])
        //   const secondPhoto = newPhotos.find(e => e.id === newLimit[0])
        //   if(firstPhoto) firstPhoto.status = 'done'
        //   if(secondPhoto) secondPhoto.status = 'done'
        // }
        if(newLimit[0]['img'] === newLimit[1]['img']) e.status = 'done'
        e.isClicked = true 
      }
      else { e.isClicked = false  }
    })
    
    setPhotos(newPhotos)
    // console.log(photos);
    
    setPhotosLimiter(newLimit)
  }

  return (
    <div className="App">
      {/* <HW1 /> */}
      <div className='photosGrid'>
        {photos.map(e => (
          <CardComponent
            key={e.id}
            img={e.img}
            isClicked={e.isClicked}
            id={e.id}
            status= {e.status}
            setVision={setVision}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
