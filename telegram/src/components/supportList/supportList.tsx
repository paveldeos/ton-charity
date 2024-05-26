import { useNavigate } from 'react-router-dom';
import './supportList.css';

function SupportList() {
    const navigate = useNavigate();

    return (
        <div className="support">
            <div className="support-title">Support</div>
            <div className="support-list">
                <div className="support-list-item">
                    <div className="support-item-cover" />
                    <div className="support-item-container">
                        <div className="support-item-warning">Test / not a real campaign</div>
                        <div className="support-item-title">Help Azar to continue his study</div>
                        {/* <div className="support-item-description">Telegram</div> */}
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
                        <div className="item-buttons">
                            <button onClick={() => navigate('/donate')} className="item-button-donate">
                                <span>Donate</span>
                                <div className="item-button-logo" />
                            </button>
                            <button className="item-button-info"></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SupportList;