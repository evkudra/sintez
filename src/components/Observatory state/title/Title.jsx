import './title.css';


function Title(props) {

  return (
    <div className='title-container'>
        <img className='img' src={props.src} alt={props.alt} />
        <h2 className='title'>
            {props.text}
        </h2>
    </div>
    
  );
}

export default Title