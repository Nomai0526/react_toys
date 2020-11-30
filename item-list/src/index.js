import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
    Component
} from 'react'

const PRODUCTS = [
	{category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
	{category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
	{category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
	{category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
	{category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
	{category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
];

class SearchBar extends Component {
    render() {
        return (<div>
			<div>
            <input type='text' placeholder='Search...'/>
			</div>
			<div>
				<input type='radio' /> Only show products in stock
			</div>
        </div>)
    }
}

class ProductTableBody extends Component {
    render() {
        return (
            <div>
                <SearchBar/>
                <ProductTable products={PRODUCTS} />
            </div>
        )
    }
}

class ProductTable extends Component {
    render() {
		const rows = [];
		let lastCategory = null;
		this.props.products.forEach((item)=>{
			if(item.category!==lastCategory){
				rows.push(<ProductCategoryRow category={item.category}>
				</ProductCategoryRow>)
				lastCategory=item.category;
			}
			rows.push(<ProductRow title={item.category} price={item.price}></ProductRow>)
		})


        return (<div>
			<table>
				<thead>
					<th>Name</th>
					<th>Price</th>
				</thead>
				<tbody>
				{rows}
				</tbody>
			</table>

            <ProductCategoryRow/>
            <ProductRow/>
            <ProductRow/>
        </div>)
    }
}

class ProductCategoryRow extends Component {
    render() {
        return (<div>
            <h3>{this.props.category}</h3>
        </div>)
    }
}

class ProductRow extends Component {
    render() {
        return (<div>
            <table>
				<tr>
					<td>{this.props.title}</td>
					<td>{this.props.price}</td>
				</tr>
			</table>
        </div>)
    }
}

ReactDOM.render(
    <React.StrictMode>
        <ProductTableBody/>
    </React.StrictMode>,
    document.getElementById('root')
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();