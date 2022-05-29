import React from 'react';

// Components
import UserStatus from './UserStatus';

export default function StatusContainer() {

  return (

    <div className='userStatus'>

      <UserStatus status={true} firstName='Luis' lastName='Gonzalez' />
      
    </div>

  )
  
}
