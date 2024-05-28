import NavBar from './layouts/NavBar';
import {Link} from "react-router-dom";
import Devices from "./multi-screens.png";
import Desktop from "./desktop.png";

function App() {

  return (
    <>
      <NavBar />
      <section className={"home-intro"}>
        <div className={"container"}>
            <div className={"row"} style={{height: "75vh"}}>
                <h1 className={"title"}>
                    My React Portfolio
                </h1>
                <div className={"btn-wrapper"}>
                    <Link to={"#!"} className={"btn btn-primary"}>get started</Link>
                    <Link to={"#!"} className={"btn btn-secondary"}>get started</Link>
                </div>
            </div>
        </div>
      </section>
      <main className={"container"} style={{marginTop: "70px", marginBottom: "70px"}}>
          <div className={"row mb-4 justify-content-center mb-5 text-center"}>
              <div className={"col-lg-10"}>
                  <h2 className={"display-5 text-center mb-1 fw-bold"}>Web Development</h2>
                  <p className={"lead text-center mb-4"}>
                      Making web apps with Scss, JavaScript, and React libraries. Responsive pages created with my own
                      styles and axios used for an api call to a fake api.
                  </p>
              </div>
              <div className={"col-lg-3 mb-3"}>
                  <Link to={"https://stephenbrooks714.github.io/weather_app/"} target={"_blank"}>
                      <div className={"card"}>
                          <div className={"card-image"} style={{marginTop: "-65px"}}>
                              <i className="fa-solid fa-bolt-lightning"></i>
                          </div>
                          <h3 className={"card-title"}>WeatherApp</h3>
                          <p className={"card-text"}>
                              Weather app built with Html, Css, JavaScript & Axios.
                          </p>
                      </div>
                  </Link>
              </div>
              <div className={"col-lg-3 mb-3"}>
                  <Link to={"https://stephenbrooks714.github.io/calculator-with-js/"} target={"_blank"}>
                      <div className={"card"}>
                          <div className={"card-image"} style={{marginTop: "-65px"}}>
                              <i className="fa-solid fa-calculator"></i>
                          </div>
                          <h3 className={"card-title"}>CalculatorApp</h3>
                          <p className={"card-text"}>
                              IOS calculator app built with Html, Css, JavaScript.
                          </p>
                      </div>
                  </Link>
              </div>
              <div className={"col-lg-3 mb-3"}>
                  <Link to={"https://stephenbrooks714.github.io/ToDoApp/"} target={"_blank"}>
                      <div className={"card"}>
                          <div className={"card-image"} style={{marginTop: "-65px"}}>
                              <i className="fa-solid fa-list"></i>
                          </div>
                          <h3 className={"card-title"}>To-Do App</h3>
                          <p className={"card-text"}>
                              A to do app using Html, Css, JavaScript for front-end.
                          </p>
                      </div>
                  </Link>
              </div>
              <div className={"col-lg-3 mb-3"}>
                  <Link to={"https://stephenbrooks714.github.io/checkout-page/"} target={"_blank"}>
                      <div className={"card"}>
                          <div className={"card-image"} style={{marginTop: "-65px"}}>
                              <i className="fa-solid fa-cart-shopping"></i>
                          </div>
                          <h3 className={"card-title"}>CheckOut</h3>
                          <p className={"card-text"}>
                              A checkout page made with Html, Css, JavaScript code.
                          </p>
                      </div>
                  </Link>
              </div>
          </div>
          <div className={"row mb-3"}>
              <div className={"col-lg-6 mb-2"}>
                  <h4 className={"display-1"}>Reactive web apps</h4>
              </div>
              <div className={"col-lg-6 mb-2"}>
                  <img src={Devices} className={"img-fluid"} alt={"Reactive web apps"}/>
              </div>
          </div>
          <div className={"row justify-content-center align-items-center"}>
              <div className={"col-lg-5 mb-3"}>
                  <img src={Desktop} className={"img-fluid"} alt={"Dynamic web apps"}/>
              </div>
              <div className={"col-lg-7 mb-3"}>
                  <h5 className={"display-4 fw-bold"}>Dynamic web apps</h5>
                  <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus consequatur in nam pariatur sint! Amet aut in ipsum laboriosam magnam maiores mollitia non obcaecati quisquam vitae! Aperiam numquam rem similique.
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere nobis quaerat repudiandae, sapiente soluta sunt voluptatem. Accusamus aut consequatur dignissimos eius, fuga nemo nobis quaerat quasi, quod repellendus tenetur unde!
                  </p>
              </div>
          </div>
      </main>
    </>
  );
}

export default App;
