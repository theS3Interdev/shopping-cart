//import Data from './data';

import Header from './components/header';
import Main from './components/main';
import Basket from './components/basket';

function App() {
	return (
		<div>
			<Header />
			<div className="row">
				<Main />
				<Basket />
			</div>
		</div>
	);
}

export default App;
