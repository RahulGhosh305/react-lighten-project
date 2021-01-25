import {Helmet} from "react-helmet";

// files
import '../style/css/style.css';
import '../style/css/bootstrap.min.css';

// Route
import AppRoute from './route.jsx';

function App() {
  return (
    <div>
      <Helmet>
        {/* basic */}
        <meta charset="utf-8"/>
        <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
        {/* mobile metas */}
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <meta name="viewport" content="initial-scale=1, maximum-scale=1"/>
        {/* site metas */}
        <meta name="keywords" content=""/>
        <meta name="description" content=""/>
        <meta name="author" content=""/>
        {/* font-awesome */}
        <link rel="stylesheet" href="https://netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css"></link>
      </Helmet>

      <AppRoute />

    </div>
  );
}

export default App;
