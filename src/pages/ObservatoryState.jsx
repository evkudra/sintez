import './ObservatoryState.css'
import Header from '../components/header/Header';
import Plaform from '../components/Observatory state/platform/Platform';
import Settings from '../components/Observatory state/settings/Settings';
import Status from '../components/Observatory state/status/Status';


function ObservatoryState() {
  return (
    <div className='ObservatoryState'>
      <Header/>
      <div className='wrapper'>
        <div className='platform-container'>
          <Plaform className='platform' />
          <Settings className='settings' />
          <Status className='status'/>
        </div>
      </div>
    </div>
  );
}

export default ObservatoryState;