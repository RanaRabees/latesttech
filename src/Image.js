
// import image from './image.jpg' 
import './App.css';
import './Index.scss'
// import styles from './App.css';
import Adeema from './rana.module.css';


function Photo (){
    return (
        <div id='imagephoto' >
     
        {/* <img src={image} alt="PICS" /> */}
        <p >
          <b className={Adeema.blue} >
            RANA BROTHERS AND SONS INTERNATIONAL MASS COMMUNICATIONS
                YOUR ALL PHOTOS WILL BE PUBLISHED HERE
            
          </b>
        </p>

        </div>
    )
}
export default Photo;