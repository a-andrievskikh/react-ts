import React, { useState } from 'react'

export default {
  title: 'React.memo Demo',
}

const NewMessagesCounter = (props: { count: number }) => {
  return <div>{props.count}</div>
}

const SecretUsers = (props: { users: string[] }) => {
  return (
    <div>
      {props.users.map((u, i) => <div key={i}>{u}</div>)}
    </div>
  )
}

const Users = React.memo(SecretUsers)

export const Example1 = () => {

  const [counter, setCounter] = useState<number>(0)
  const [users, setUsers] = useState<string[]>(['Mike', 'John', 'Sarah'])

  const addUser = () => {
    setUsers([...users, 'Mark ' + new Date().getTime()])
  }

  return (
    <>
      <button onClick={() => setCounter(counter + 1)}>+</button>
      <button onClick={addUser}>Add User</button>
      <NewMessagesCounter count={counter} />
      <SecretUsers users={users} />
    </>
  )
}

