import React, { useEffect, useState } from 'react';
import * as serviceWorker from './serviceWorker';
import { UpdateNotification } from 'components';

export default function PWAManager() {
  const [updateAvailable, setUpdateAvailable] = useState(false);
  const [waitingWorker, setWaitingWorker] = useState(null);

  const onSWUpdateAvailable = registration => {
    setUpdateAvailable(true);
    setWaitingWorker(registration.waiting);
  };

  const updateApp = () => {
    waitingWorker?.postMessage({ type: 'SKIP_WAITING' });
    setUpdateAvailable(false);
    window.location.reload();
  };

  useEffect(() => {
    serviceWorker.register({ onUpdate: onSWUpdateAvailable });
  }, []);

  return updateAvailable && <UpdateNotification onUpdate={updateApp} />;
}
