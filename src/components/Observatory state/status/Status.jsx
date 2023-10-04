import './status.css';
import Title from '../title/Title';
import logo_status from './../../../images/icons/logo_status.svg';

const Status = () => {
    return ( 
    <div className='status'>
        <Title text='Состояние' src={logo_status} alt='status' />
        <div className="status-container">
            <div className="radio-container">
                <label for="status" className='label'>
                    <input type="radio" className='radiobutton' id="work" name="status" value="work" />
                    Работает
                    <span className='custom-radiobutton'></span>
                </label>
                
            </div>
            
            <div className="radio-container">
                <label for="status" className='label'>
                    <input type="radio" className='radiobutton' id="parking" name="status" value="parking" />
                    В паркинге
                    <span className='custom-radiobutton'></span>
                </label>
            </div>

            <div className="radio-container">
                <label for="status" className='label'>
                    <input type="radio" className='radiobutton' id="service" name="status" value="service" />
                    На сервисе
                    <span className='custom-radiobutton'></span>
                </label>
            </div>

            <div className="radio-container">
                <label for="status" className='label'>
                    <input type="radio" className='radiobutton' id="vacation" name="status" value="vacation" />
                    В отпуске
                    <span className='custom-radiobutton'></span>
                </label>
            </div>
        </div>
    </div> 
    );
}
 
export default Status;