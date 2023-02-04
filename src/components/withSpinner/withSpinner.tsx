import './withSpinner.style.scss';
import React from 'react';
import {useSelector} from 'react-redux';
import {AppStateType} from '../../redux/store';

const withSpinner = (WrappedComponent: any) => {
  return () => {
    const shouldShowSpinner = useSelector((state: AppStateType) => state.spinner.shouldShowSpinner);
    return (
      <>
        <WrappedComponent />
        <div className={`activity-indicator ${shouldShowSpinner ? '' : 'hidden'}`}>
          <div className='activity-indicator--wrap'>
            <div className='activity-indicator--items'>
              <div>
                <div>
                  <ul>
                    <div className='activity-indicator--spinner'>
                      <i className='fa-solid fa-circle-notch' />
                    </div>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
};

export default withSpinner;