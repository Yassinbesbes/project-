import React from 'react';

function ConnectionMessage({ downloadSpeed, uploadSpeed }) {
  const getConnectionMessage = (downloadSpeed, uploadSpeed) => {
    if (downloadSpeed !== null && uploadSpeed !== null) {
      if (downloadSpeed >= 50 && uploadSpeed >= 50) {
        return 'Your connection is stable and operational. You can now connect to your social networks, without any interruptions';
      } else {
        return 'Votre connexion est faible.';
      }
    } else {
      return 'Test de connexion en cours...';
    }
  };

  return (
    <p className="connection-message" style={{ 
      color: 'black',
      textAlign: 'left',
      fontSize: '35px',
      marginRight: '77px',
      marginTop: '150px',
      marginLeft: '35px'
    }}>
      {getConnectionMessage(downloadSpeed, uploadSpeed)}
    </p>
  );
}

export default ConnectionMessage;
