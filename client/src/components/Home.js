import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import Chatbot from './Chatbot'

const Home=()=>{
    return(
        <div>
            <nav class="navbar navbar-expand-lg">
            <div class="container-fluid" style={{backgroundColor:"#192841",}}>
                <Chatbot/>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRHlxVwS8JynktGFnCQ30V02GlRFrWInQP2g&s" alt="" style={{minWidth:"50px",borderRadius:"50%",padding:"10px 5px",width:"70px"}} />
                <a className="navbar-brand me-auto px-3" href="#" style={{color:"white",fontSize:"max(15px,3vw)"}}>Jaldhaara</a>
                {/* <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#">Link</a>
                    </li>
                    <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Dropdown
                    </a>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">Action</a></li>
                        <li><a class="dropdown-item" href="#">Another action</a></li>
                        <li><hr class="dropdown-divider"></li>
                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link disabled" aria-disabled="true">Disabled</a>
                    </li>
                </ul>
                <form class="d-flex" role="search">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                    <button class="btn btn-outline-success" type="submit">Search</button>
                </form>
                </div> */}
            </div>
            </nav>

            <div class="container my-4">
                <form class="d-flex" role="search">
                    <div class="input-group">
                        <input class="form-control" type="search" placeholder="Enter Company Name" aria-label="Search"/>
                        <span class="input-group-text"><i class="fas fa-search"></i></span>
                    </div>
                </form>
            </div>

            <div style={{textAlign:"center"}}>
                <footer style={{position:"absolute",bottom:"0px",backgroundColor:"#192841",color:"white",width:"100%",fontSize:"max(15px,1.5vw)"}}>
                <p>&copy; 2024 Jaldhaara Foundation. All rights reserved.</p>
                <p>Contact: contact@jaldhaara.org</p>
                </footer>
            </div>
        </div>
    )
}


export default Home