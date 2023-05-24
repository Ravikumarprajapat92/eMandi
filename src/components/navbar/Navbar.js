import { Images } from "../../utils/constants/images"

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg nav-background py-3">
            <div className="container">
                <a className="navbar-brand" href="/#"><img width={'100px'} src={Images.darkLogo}/></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                    <div className="offcanvas-header">
                        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body">
                        <ul className="navbar-nav justify-content-end align-items-center flex-grow-1 pe-3">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/#">About Us</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="/#">eCash</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/#">eHedge</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/#">eSPOT</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/#">eResearch</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/#">Contact Us</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/#"><img src={Images.user}/></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar