import React from 'react'
import Card from './Card'


function UserList(props) {
    return (
      <Card className='user'>
          <ul>
              {props.users.map(user => (
                  <li>
                      {user.name} ({user.age} years ago)
                  </li>
              ))}
          </ul>
      </Card>
    )
}

export default UserList
