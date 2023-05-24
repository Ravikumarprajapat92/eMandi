import { Images } from "../../utils/constants/images"

const ECash = () => {
    return (
        <div className="container ecash-container">
            <div className="ecash-img-conainer">
                <img src={Images.farmer1} className="ecash-img" />
                <img src={Images.farmer2} className="ecash-img" />
                <div className="ecash-ribbion-bottom row m-0 py-2">
                    <div className="col-6 col-md-3 d-flex align-items-center">
                        <img src={Images.home} />
                        <sapn className="mx-2">
                            Zero Collateral
                        </sapn>
                    </div>
                    <div className="col-6 col-md-3 d-flex align-items-center">
                        <img src={Images.piggi} />
                        <sapn className="mx-2">

                            Starting from 0.7% (15 days)
                        </sapn>
                    </div>
                    <div className="col-6 col-md-3 d-flex align-items-center">
                        <img src={Images.thumbUp} />
                        <sapn className="mx-2">

                            Minimum Documentation
                        </sapn>
                    </div>
                    <div className="col-6 col-md-3 d-flex align-items-center">
                        <img src={Images.handHeart} />
                        <sapn className="mx-2">
                            Dedicated Relationship Manager
                        </sapn>
                    </div>
                </div>
                <div className="ecash-text-container text-white text-center">
                    <div className="d-inline-block">
                        <h3 className="text-bold"><small className="text-success">e</small>Cash</h3>
                        <p className="mb-0">Instant Cash for your Commodity Supplies</p>
                        <hr className="yellow-line" />
                    </div>
                    <h2>Get Limit for your Supplies upto ₹2 Crores
                        with <span style={{ color: '#FDE96C' }}>Mandi Cash</span> <button className="btn ecash-btn"><img src={Images.rightArrow}/></button></h2>
                </div>
            </div>
        </div>
    )
}

export default ECash