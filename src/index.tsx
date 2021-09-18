import { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import { Root } from './root'
import reportWebVitals from './reportWebVitals'

ReactDOM.render(
	<StrictMode>
		<Root />
	</StrictMode>,
	document.getElementById('root'),
);

reportWebVitals()
