import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navigation from "./components/Navigation";

import BestViewPage from "./Pages/BestPage/BestViewPage";
import BrandPages from "./Pages/BrandsPage/BrandsPage";
import Home from "./Pages/Home";
import BrandInfo from "./Pages/Sub_Sections/BrandInfo";
import MyPage from "./Pages/MyPages/MyPage";
function Bransome() {
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/brand" component={BrandPages} />
        <Route path="/best20" exact component={BestViewPage} />
        <Route path="/brandinfo/:id" component={BrandInfo} />
        <Route path="/mypage" component={MyPage} />
      </Switch>
    </Router>
  );
}
export default Bransome;
