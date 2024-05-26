import { TonConnectButton } from '@tonconnect/ui-react';
import './header.css';

function Header() {
    return (
        <div className="header">
            <div className="user">
                <div className="avatar"></div>
                <div className="name">Vitaliy</div>
            </div>
            <TonConnectButton className='ton-connect'/>
        </div>
    );
}

export default Header;