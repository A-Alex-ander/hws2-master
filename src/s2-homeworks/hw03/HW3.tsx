import React, { useState } from 'react'
import { v1 } from 'uuid'
import s2 from '../../s1-main/App.module.css'
import GreetingContainer from './GreetingContainer'

/*
* 1 - описать тип UserType
* 2 - указать нужный тип в useState с users
* 3 - дописать типы и логику функции pureAddUserCallback и проверить её тестами
* 4 - в файле GreetingContainer.tsx дописать типизацию пропсов
* 5 - в файле GreetingContainer.tsx указать нужные типы в useState с name и error
* 6 - в файле GreetingContainer.tsx дописать тип и логику функции setNameCallback
* 7 - в файле GreetingContainer.tsx дописать логику функций pureAddUser, pureOnBlur, pureOnEnter и проверить их тестами
* 8 - в файле GreetingContainer.tsx вычислить количество добавленных и имя последнего (totalUsers, lastUserName)
* 9 - в файле Greeting.tsx дописать типизацию пропсов
* 10 - в файле Greeting.tsx вычислить inputClass в зависимости от наличия ошибки
* 11 - сделать стили в соответствии с дизайном
* */

// types
export type UserType = {
    _id: string // need to fix any
    name: string // need to fix any
}

export const pureAddUserCallback = (name: string, setUsers:(users:UserType[])=>void, users: UserType[]) => { // need to fix any
    const newId =v1();
    const user = {
        _id:newId,
        name:name
    }
    setUsers([...users,user])
    // need to fix
    // нужно создать новый объект соответствующий типу UserType
    // не забыть   сгенеририовать _id и вставить пришедший в функцию name
    //засетайЮзеров([...старые users, и наш новый user])
}

const HW3 = () => {
    const [users, setUsers] = useState<UserType[]>([
        {name: "Oliver", _id: "1"},
        {name: "Sophia", _id: "2"},
        {name: "Liam", _id: "3"},
        {name: "Ava", _id: "4"},
        {name: "Noah", _id: "5"}
    ]) // need to fix any

    const addUserCallback = (name: string) => { // need to fix any
        pureAddUserCallback(name, setUsers, users)
    }

    return (
        <div id={'hw3'}>
            <div className={s2.hwTitle}>Homework #3</div>
            {/*для автоматической проверки дз (не менять)*/}

            <div className={s2.hw}>
                <GreetingContainer
                    users={users}
                    addUserCallback={addUserCallback}
                />
            </div>
        </div>
    )
}

export default HW3
