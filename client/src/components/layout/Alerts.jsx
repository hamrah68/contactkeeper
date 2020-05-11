import React, { useContext, Fragment } from 'react';
import AlertContext from '../../context/alert/alertContext';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const Alerts = () => {
  const alertContext = useContext(AlertContext);
  return (
    <Fragment>
      <TransitionGroup>
        {alertContext.alerts.length > 0 &&
          alertContext.alerts.map((alert) => (
            <CSSTransition key={alert.id} timeout={500} classNames='item'>
              <div className={`alert alert-${alert.type}`}>
                <i className='fas fa-info-circle'></i> {alert.msg}
              </div>
            </CSSTransition>
          ))}
      </TransitionGroup>
    </Fragment>
  );
};

export default Alerts;
