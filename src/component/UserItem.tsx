import React, {FC} from 'react';
import {IUser} from "../types/types";

interface UserItemProps {
    user: IUser;
}
const UserItem: FC<UserItemProps> = ({user}) => {
    return (
        <div style={{padding: 15, border: '2px solid orange'}}>
            {user.id}. {user.name} в городе {user.address.city} проживает по адрессу {user.address.street}
        </div>
    );
};

export default UserItem;