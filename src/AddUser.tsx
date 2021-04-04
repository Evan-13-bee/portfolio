import React, { ChangeEvent, useState } from 'react';
import { v1 } from 'uuid';
import { UsersType } from './App';

type AddUserType = {
  setUsers: (arg0: Array<UsersType>) => void
  users: Array<UsersType>
}

export const AddUser = (props: AddUserType) => {
  const [name, setName] = useState<string>('')
  const [age, setAge] = useState<number>(0)


  const nameChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.currentTarget.value)
  }
  const ageChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setAge(e.currentTarget.valueAsNumber)
  }
  const addUser = (name: string, age: number) => {
    const newUser = { id: v1(), name, age }
    props.setUsers([newUser, ...props.users])
    setName('')
    setAge(0)
  }
  return (
    <div>
    <p>
      <span>Name</span>
      <input
        value={name}
        onChange={nameChangeHandler}
        type="text"
      />
    </p>
    <p>
      <span>Age</span>
      <input
        value={age}
        onChange={ageChangeHandler}
        type="number"
      />
    </p>
    <p>
      Add user
      <button onClick={() => addUser(name, age)}>+</button>
    </p>
  </div>
  )
}