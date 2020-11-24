import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
	Component
} from 'react'

class SearchBar extends Component {
	render() {
		return (<div>
			<h2>SearchBar</h2>
		</div>)
	}
}

class ProductTableBody extends Component {
	render() {
		return (
			<div>
			<SearchBar/>
			<ProductTable/>
			<ProductTable/>
			</div>
		)
	}
}
class ProductTable extends Component {
	render() {
		return (<div>
			<ProductCategoryRow/>
			<ProductRow/>
			<ProductRow/>
		</div>)
	}
}
class ProductCategoryRow extends Component {
	render() {
		return (<div>
			<h3>PCR</h3>
		</div>)
	}
}
class ProductRow extends Component {
	render() {
		return (<div>
			<h3>PR</h3>
		</div>)
	}
}

ReactDOM.render(
	<React.StrictMode>
	<ProductTableBody />
  	</React.StrictMode>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();