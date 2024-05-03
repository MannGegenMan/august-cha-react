import React from 'react';
import Button from '../Buttons/Button';
import {useTelegram} from "../../hooks/useTelegram";

const Header = () => {
    const {user, tg, onClose} = useTelegram();

    return (
        <div className={'header'}>
            <Button onClick={onClose}>Закрыть</Button>
            <span className={'username'}>
                {user?.username}
            </span>
        </div>
    );
};

export default Header;