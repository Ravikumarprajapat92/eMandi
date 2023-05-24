import { Images } from "../../utils/constants/images"

const EMandiTv = () => {
    return (
        <div className="emandi-tv-container container">
            <div className="d-flex align-items-center justify-content-between mb-5">
                <span className="d-flex align-items-center"><h3 className="d-flex align-items-center mb-0"><span className="title-icon mr-3"></span>eMandi TV</h3> <span className="mx-4">|  Commodity vyapari ka favourite TV channel</span></span>
                <h5 className="text-success">View All</h5>
            </div>
            <div className="d-flex align-items-end">
                <div id="carouselExampleInterval" className="carousel slide carousel-card" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active rounded-4" data-bs-interval="2000">
                            <img src={Images.vid1} style={{objectFit: 'cover'}} height="225px" className="d-block w-100 rounded-4" alt="sadsa" />
                        </div>
                        <div className="carousel-item rounded-4">
                            <img src={Images.farmer2} style={{objectFit: 'cover'}} height="225px" className="d-block w-100 rounded-4" alt="asdas" />
                        </div>
                    </div>
                </div>
                <div>
                    <button className="btn ecash-btn mx-2" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                       <img src={Images.leftArrow}/>
                    </button>
                    <button className="btn ecash-btn mx-2" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                    <img src={Images.rightArrow}/>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default EMandiTv