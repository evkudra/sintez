import './platform.css';
import Title from '../title/Title';
import logo_flag from '../../../images/icons/flag.svg';

function Plaform() {
  return (
    <div className='platform'>
      <Title text='Текущая площадка' src={logo_flag} alt='flag'/>
      <div className="platform-text-container">
      <p lassName='platform-text'>Название: i Синтез</p>
      <p lassName='platform-text'>Координаты: Ra:179.89023 Dec:29.235831</p>
      <p lassName='platform-text'>Текущее время экспозиции: 03:57:57.385</p>
      </div>
    </div>
  );
}

export default Plaform;