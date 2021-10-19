import React, { Component } from 'react'

export const DataContext = React.createContext();

export class DataProvider extends Component {

    state = {
        products: [
            {
                "_id": "1",
                "title": "Book Mockup #01",
                "src": "https://i.pinimg.com/564x/53/79/2e/53792eefbcbf2c3744f9bcce053592fc.jpg",
                "description": "MockUp ยังไงให้ดูดี",
                "content": "หนังสือเริ่มนี้จะเล่าถึงการ mock up และ จะบอกวิธีการ mock up แบบง่ายๆและแบบadvance",
                "price": 330,
                "count": 1
            },
            {
                "_id": "2",
                "title": "Book Mockup #02",
                "src": "https://i.pinimg.com/564x/70/f9/41/70f941bcffa89f408a86f3f86f024784.jpg",
                "description": "MockUp ยังไงให้ดูดี",
                "content": "หนังสือเริ่มนี้จะเล่าถึงการ mock up และ จะบอกวิธีการ mock up แบบง่ายๆและแบบadvance",
                "price": 200,
                "count": 1
            },
            {
                "_id": "3",
                "title": "Book Mockup #03",
                "src": "https://i.pinimg.com/564x/d7/76/38/d776388570d4806abd0aece25ef4d6d0.jpg",
                "description": "MockUp ยังไงให้ดูดี",
                "content": "หนังสือเริ่มนี้จะเล่าถึงการ mock up และ จะบอกวิธีการ mock up แบบง่ายๆและแบบadvance",
                "price": 500,
                "count": 1
            },
            {
                "_id": "4",
                "title": "Book Mockup #04",
                "src": "https://i.pinimg.com/564x/85/20/18/85201841d3cdbb628a99b2ccd64b2c14.jpg",
                "description": "MockUp ยังไงให้ดูดี",
                "content": "หนังสือเริ่มนี้จะเล่าถึงการ mock up และ จะบอกวิธีการ mock up แบบง่ายๆและแบบadvance",
                "price": 350,
                "count": 1
            },
            {
                "_id": "5",
                "title": "Book Mockup #05",
                "src": "https://i.pinimg.com/564x/11/fe/bc/11febc987770ea15a75c156102b4e3e7.jpg",
                "description": "MockUp ยังไงให้ดูดี",
                "content": "หนังสือเริ่มนี้จะเล่าถึงการ mock up และ จะบอกวิธีการ mock up แบบง่ายๆและแบบadvance",
                "price": 150,
                "count": 1
            },
            {
                "_id": "6",
                "title": "Book Mockup #06",
                "src": "https://i.pinimg.com/564x/11/0f/82/110f82c1f432ef0c094ab2aa48b9a145.jpg",
                "description": "MockUp ยังไงให้ดูดี",
                "content": "หนังสือเริ่มนี้จะเล่าถึงการ mock up และ จะบอกวิธีการ mock up แบบง่ายๆและแบบadvance",
                "price": 150,
                "count": 1
            }
        ],
        cart: [],
        total: 0
        
    };

    addCart = (id) =>{
        const {products, cart} = this.state;
        const check = cart.every(item =>{
            return item._id !== id
        })
        if(check){
            const data = products.filter(product =>{
                return product._id === id
            })
            this.setState({cart: [...cart,...data]})
        }else{
            alert("The product has been added to cart.")
        }
    };

    reduction = id =>{
        const { cart } = this.state;
        cart.forEach(item =>{
            if(item._id === id){
                item.count === 1 ? item.count = 1 : item.count -=1;
            }
        })
        this.setState({cart: cart});
        this.getTotal();
    };

    increase = id =>{
        const { cart } = this.state;
        cart.forEach(item =>{
            if(item._id === id){
                item.count += 1;
            }
        })
        this.setState({cart: cart});
        this.getTotal();
    };

    removeProduct = id =>{
        if(window.confirm("Do you want to delete this product?")){
            const {cart} = this.state;
            cart.forEach((item, index) =>{
                if(item._id === id){
                    cart.splice(index, 1)
                }
            })
            this.setState({cart: cart});
            this.getTotal();
        }
       
    };

    getTotal = ()=>{
        const{cart} = this.state;
        const res = cart.reduce((prev, item) => {
            return prev + (item.price * item.count);
        },0)
        this.setState({total: res})
    };
    
    componentDidUpdate(){
        localStorage.setItem('dataCart', JSON.stringify(this.state.cart))
        localStorage.setItem('dataTotal', JSON.stringify(this.state.total))
    };

    componentDidMount(){
        const dataCart = JSON.parse(localStorage.getItem('dataCart'));
        if(dataCart !== null){
            this.setState({cart: dataCart});
        }
        const dataTotal = JSON.parse(localStorage.getItem('dataTotal'));
        if(dataTotal !== null){
            this.setState({total: dataTotal});
        }
    }
   

    render() {
        const {products, cart,total} = this.state;
        const {addCart,reduction,increase,removeProduct,getTotal} = this;
        return (
            <DataContext.Provider 
            value={{products, addCart, cart, reduction,increase,removeProduct,total,getTotal}}>
                {this.props.children}
            </DataContext.Provider>
        )
    }
}


