import './supportList.css';

function SupportList() {
    return (
        <div className="support">
            <div className="support-title">Support</div>
            <div className="support-list">
                <div className="support-list-item">
                    <div className="support-item-cover" />
                    <div className="support-item-container">
                        <div className="support-item-title">Help Azar to continue his study</div>
                        {/* <div className="support-item-description">Telegram</div> */}
                        <div className="item-progressbar">
                            <div className="item-progressbar-line" />
                        </div>
                        <div className="item-statblock">
                            <div className="item-statblock-item">
                                <div className="item-statblock-item-title">Goal</div>
                                <div className="item-statblock-item-description"><b>9000</b> TON</div>
                            </div>
                            <div className="item-statblock-item">
                                <div className="item-statblock-item-title">Collected</div>
                                <div className="item-statblock-item-description"><b>6000</b> TON</div>
                            </div>
                            <div className="item-statblock-item">
                                <div className="item-statblock-item-title">Remaining</div>
                                <div className="item-statblock-item-description"><b>3000</b> TON</div>
                            </div>
                        </div>
                        <hr />
                        <div className="item-buttons">
                            <button className="item-button">
                                <span>Donate</span>
                                <div className="item-button-logo" />
                            </button>
                            <button className="item-button">i</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SupportList;