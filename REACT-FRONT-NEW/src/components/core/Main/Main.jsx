// import Footer from "./Footer";
// import Header from "./Header";
// import NewBook from "./NewBook";

import LogOut from "./LogOut"
import ActualUser from "./ActualUser"

const Main = () => {
  return (
        <>
        <body>

        {/* <Header/>
        <NewBook/> */}
          <div className="container-list">
              <h2 className="container-list-titlebooks">My SCI FI Collection</h2>
              <div id="booksList"></div>
              <h2 className="container-list-titleauthors">My inlove authors</h2>
              <div id="authorsList"></div>      
          </div>   
        {/* <Footer/>        */}          
        <ActualUser />
        <LogOut/>
        </body>
        </>
  )
}

export default Main
