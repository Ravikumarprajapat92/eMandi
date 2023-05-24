import { Images } from "../../utils/constants/images"

const StatBar = () => {
    const stat = [
        {name: "Mustard Oil", place: 'Alwar', price: '878.68', statusPrice: '-1.04', marketStatus: 'down'},
        {name: "Mustard Seed", place: 'Alwar', price: '878.68', statusPrice: '-1.04', marketStatus: 'down'},
        {name: "Mustard Seed", place: 'Alwar', price: '878.68', statusPrice: '-1.04', marketStatus: 'down'},
        {name: "29mm Cotton", place: 'Khadi', price: '878.68', statusPrice: '-1.09', marketStatus: 'up'},
    ]
  return (
    <div className="stat-container">
        <div className="container">
        <div className="row">
            <div className="col-lg-2 d-flex align-items-center">
                <span className="spotHeading">SPOT:</span>
                <span className="spotValue">eMandi</span>
            </div>
            <div className="col-11 col-lg-9 row stat-data-container">
                {stat.map(el => 
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3" >
                        <div className="d-flex justify-content-between font-bold">
                            <span className="bold">{el.name}</span>
                            <span>{el.price}</span>
                        </div>
                        <div className="d-flex justify-content-between">
                            <span>{el.place}</span>
                            <span style={el.marketStatus == 'up'?{color: 'green'}:{color: 'red'}}><img className="mx-2" src={el.marketStatus == 'up'?Images.polygon2: Images.polygon1}/>{el.statusPrice}</span>
                        </div>
                    </div>
                )}
            </div>
            <div className="col-1 d-flex align-items-center">
                <img src={Images.vector}/>
            </div>
        </div>
        </div>
    </div>
  )
}

export default StatBar