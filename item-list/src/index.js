import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
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

	constructor(props) {
		super(props);
		this.handleTextChange = this.handleTextChange.bind(this);
		this.handleInStockChange = this.handleInStockChange.bind(this);
	}

    handleTextChange(e) {
    	this.props.onSearchTextChange(e.target.value);
    }
    handleInStockChange(e){
		this.props.onIntockChange(e.target.checked);
		console.log(e.target.checked)
	}

    render() {
        return (<div>
            <div>
                <input type='text' placeholder='Search...' onChange={this.handleTextChange} />
            </div>
            <div>
                <input type='checkbox' onChange={this.handleInStockChange} checked={this.props.isStockOnly}/> Only show products in stock
            </div>
        </div>)
    }
}

class ProductTableBody extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filterText: '',
            inStockOnly: false
        }
        this.onSearchTextChange = this.onSearchTextChange.bind(this);
        this.onInStockChange = this.onInStockChange.bind(this);
    }

    onSearchTextChange(text){
		this.setState({filterText:text});
	}
	onInStockChange(inStock){
		console.log(inStock)
		this.setState({inStockOnly:inStock});
	}

    render() {
        return (
            <div>
                <SearchBar
                    filterText={this.state.filterText}
                    isStockOnly={this.state.isStockOnly}
					onSearchTextChange={this.onSearchTextChange}
					onIntockChange={this.onInStockChange}
                />
                <ProductTable
                    products={PRODUCTS}
                    filterText={this.state.filterText}
                    isStockOnly={this.state.inStockOnly}
                />
            </div>
        )
    }
}

class ProductTable extends Component {
    render() {

        const filterText = this.props.filterText;
        const isStockOnly = this.props.isStockOnly;

		console.log(this.props.isStockOnly+'[3')

        const rows = [];
        let lastCategory = null;
        this.props.products.forEach((item) => {
            if (item.name.indexOf(filterText) === -1) {
                return;
            }
            if (isStockOnly && !item.stocked) {
                return;
            }
            if (item.category !== lastCategory) {
                rows.push(<ProductCategoryRow category={item.category}>
                </ProductCategoryRow>)
                lastCategory = item.category;
            }
            rows.push(<ProductRow title={item.name} price={item.price}></ProductRow>)
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