import React from 'react';
import PropTypes from 'prop-types';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import SvgIcon from '@mui/material/SvgIcon';
//import IconButton from 'material-ui/IconButton';
//import ZoomIn from 'material-ui/svg-icons/action/zoom-in';
// import { Dialog } from '@mui/material';
// import Button from '@material-ui/core/Button';

function ImageResults(props) {
  const data = props.images;
  console.log(data)
  return(
    <ImageList 
    variant="masonry"
    cols={4}    
   gap={10} sx={{ p: 2, bgcolor: 'rgba(60, 60, 60, 0.5)'}}>
     {      
      data.map((img)=> { 
        return (
          <ImageListItem title={img.tags} key={img.id} >
          <img src={img.largeImageURL} loading="lazy"/>
          <ImageListItemBar title={img.tags.split(',')[0]}  actionIcon={
            <SvgIcon sx={{ color: 'white' }}><svg fill='white' data-testid="ZoomIcon"></svg></SvgIcon>
            
          }/>
         </ImageListItem>
         

        ) 
       })
       }
    </ImageList>
  )
}

ImageResults.propTypes={
  data:PropTypes.array.isRequired
}
export default ImageResults;
