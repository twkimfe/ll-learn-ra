import Reaction from '../reaction.js'

//Footer component
function Footer(){
  return(
    Reaction.createElement('footer', null,
      Reaction.createElement('p', null, '멋쟁이 사자처럼 FrontEnd BootCamp'))
  );
}

export default Footer