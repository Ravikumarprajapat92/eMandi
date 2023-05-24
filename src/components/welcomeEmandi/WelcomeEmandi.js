import { Images } from "../../utils/constants/images"

const WelcomeEmandi = () => {
    return (
        <div className="welcome-container">
            <div className="text-center">
                <h3>Origo eMandi  में आपका स्वागत है  - India’s first Mandi on the cloud</h3>
                <h5 style={{ color: '#757575' }}>BUY  SELL  ANYTIME ANYWHERE</h5>
            </div>
            <div className="container welcome-card-conmtainer">
                <div className="row">
                    <div className="col-6 col-lg-3 mb-4 mb-lg-0">
                        <div class="card border-0 shadow">
                            <div class="card-body p-4">
                            <small className="d-flex align-items-center pb-3" style={{color: '#757575'}}><span className="title-icon"></span>Instant Cash</small>
                            <h3 className="py-2"><small className="text-success">e</small>Cash</h3>
                            <p>Get <b>Instant Cash</b> for your Commodity Supplies</p>
                            <img src={Images.group1}/>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 col-lg-3 mb-4 mb-lg-0">
                        <div class="card border-0 shadow">
                            <div class="card-body p-4">
                            <small className="d-flex align-items-center pb-3" style={{color: '#757575'}}><span className="title-icon"></span>Commodity Trends</small>
                            <h3 className="py-2"><small className="text-success">e</small>Research</h3>
                            <p>Get insights to <b>Market Trends</b> and <b>Research Reports</b></p>
                            <img src={Images.group2}/>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 col-lg-3">
                        <div class="card border-0 shadow">
                            <div class="card-body p-4">
                            <small className="d-flex align-items-center pb-3" style={{color: '#757575'}}><span className="title-icon"></span>Instant Cash</small>
                            <h3 className="py-2"><small className="text-success">e</small>Cash</h3>
                            <p>Get <b>Instant Cash</b> for your Commodity Supplies</p>
                            <img src={Images.group3}/>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 col-lg-3">
                        <div class="card border-0 shadow">
                            <div class="card-body p-4">
                            <small className="d-flex align-items-center pb-3" style={{color: '#757575'}}><span className="title-icon"></span>Instant Cash</small>
                            <h3 className="py-2"><small className="text-success">e</small>Cash</h3>
                            <p>Get <b>Instant Cash</b> for your Commodity Supplies</p>
                            <img src={Images.group4}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WelcomeEmandi