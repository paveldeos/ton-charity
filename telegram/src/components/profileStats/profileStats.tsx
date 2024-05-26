import './profileStats.css';

function ProfileStats() {
    return (
        <div className="profile-stats">
            <div className="profile-stats-donated">
                <h3>Total donated by me:</h3>
                <div className="profile-stats-donated-amount">
                    <span>1400</span>
                    <div className='ton-logo' />
                </div>
            </div>
            <div className="profile-stats-history">
                <div className="profile-stats-history-header">
                    <h3>Donation history</h3>
                    <div className="link">
                        Show more
                    </div>
                </div>
                <div className="profile-stats-history-item">
                    <span>Help victims of 9/11</span>
                    <div className="item-value">
                        <span>300</span>
                        <div className="ton-logo" />
                    </div>
                </div>
                <div className="profile-stats-history-item">
                    <span>Help to save pandas</span>
                    <div className="item-value">
                        <span>50</span>
                        <div className="ton-logo" />
                    </div>
                </div>
                <div className="profile-stats-history-item">
                    <span>Help to kill Putin</span>
                    <div className="item-value">
                        <span>900</span>
                        <div className="ton-logo" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileStats;