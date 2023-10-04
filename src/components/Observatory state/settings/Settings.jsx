import './settings.css';
import Title from '../title/Title';
import logo_settings from '../../../images/icons/logo_settings.svg';

const Settings = () => {
    return (
        <div className='settings'>
            <Title text='Настройки' src={logo_settings} alt='settings'/>
            <div className='setting-container'>
                <h3 className='setting-title'>Крыша + телескоп</h3>
                <div className='setting-items-container'>
                    <div className='setting-item'>
                        <label className='item-label' >
                            <input name='close_roof' className='checkbox' type='checkbox' />
                            Закрыть
                            <span className='custom-checkbox'></span>
                        </label>
                    </div>
                    <div className='setting-item'>
                        <label className='item-label' >
                            <input name='close_roof' className='checkbox' type='checkbox' />
                            Открыть
                            <span className='custom-checkbox'></span>
                        </label>
                    </div>
                    <div className='setting-item'>
                        <label className='item-label' >
                            <input name='close_roof' className='checkbox' type='checkbox' />
                            Стоп
                            <span className='custom-checkbox'></span>
                        </label>
                    </div>
                    <div className='setting-item'>
                        <label className='item-label' >
                            <input name='close_roof' className='checkbox' type='checkbox' />
                            Парковка
                            <span className='custom-checkbox'></span>
                        </label>
                    </div>
                </div>
                <h3 className='setting-title'>Питание монтировки</h3>
                <div className='setting-items-container'>
                    <div className='setting-item'>
                        <label className='item-label' >
                            <input name='mount_power' className='checkbox' type='checkbox' />
                                Включить
                            <span className='custom-checkbox-switch'></span>
                        </label>
                    </div>
                    <div className='setting-item'>
                        <label className='item-label' >
                            <input name='unlock_mount' className='checkbox' type='checkbox' />
                                Разблокировать
                            <span className='custom-checkbox'></span>
                        </label>
                    </div>
                </div>
                <h3 className='setting-title'>Питание аппаратуры</h3>
                <div className='setting-items-container'>
                    <div className='setting-item'>
                        <label className='item-label' >
                            <input name='equipment_power' className='checkbox' type='checkbox' />
                                Включить
                            <span className='custom-checkbox-switch'></span>
                        </label>
                    </div>
                    <div className='setting-item'>
                        <label className='item-label' >
                            <input name='reload_equipment' className='checkbox' type='checkbox' />
                                Перезапуск
                            <span className='custom-checkbox'></span>
                        </label>
                    </div>
                </div>
                
            </div>
        </div>
    );
}
 
export default Settings;