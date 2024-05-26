import './donationPage.css';

function DonationPage() {

    return (
        <div className="donation-page">
            <div className="donation-list-item">
                <div className="donation-item-container">
                    <div className="donation-item-warning">Test / not a real campaign</div>
                    <div className="donation-item-title">Help Azar to continue his study</div>
                    {/* <div className="donation-item-description">Telegram</div> */}
                    <div className="item-progressbar">
                        <div className="item-progressbar-line" />
                        -
                    </div>
                    <div className="item-statblock">
                        <div className="item-statblock-item">
                            <div className="item-statblock-item-title">Goal</div>
                            <div className="item-statblock-item-value"><b>9000</b> TON</div>
                        </div>
                        <div className="item-statblock-item">
                            <div className="item-statblock-item-title">Collected</div>
                            <div className="item-statblock-item-value"><b>6000</b> TON</div>
                        </div>
                        <div className="item-statblock-item">
                            <div className="item-statblock-item-title">Remaining</div>
                            <div className="item-statblock-item-value"><b>3000</b> TON</div>
                        </div>
                    </div>
                    <hr color='#EAECF0' />
                    <div className="item-input-label">Set amount</div>
                    <input type="string" placeholder="10 TON" className="item-input" />
                    <div className="item-buttons">
                        <button className="item-button-donate">
                            <span>Donate</span>
                            <div className="item-button-logo" />
                        </button>
                        <button className="item-button-info"></button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DonationPage;