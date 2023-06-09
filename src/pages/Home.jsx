import React from 'react';
import Layout from '../components/Layout';
import HomeCategory from '../components/HomeCategory';
import products from '../utils/products.json';

class Home extends React.Component {
    constructor(){
        super();
        this.state = {
            categories: [],
            categoryNames: []
        };
    }

    componentDidMount() {
      const categories = Object.values(products);
      const categoryNames = Object.keys(products);
      
      this.setState({categories, categoryNames})
    }

    render() {
    return(
        <div>
            {/* Tot ce este pus intre <Layout> si </Layout> va reprezenta props.children in cadrul componentei Layout.*/}
            <Layout>
            <div className="container">
             <div className="row">
             {
                this.state.categories.map((category, index) =>{
                    return (
                        <HomeCategory 
                         key={index}
                         image={category.image}
                         title={category.name}
                         description={category.description}
                         routename={this.state.categoryNames[index]}
                        />
                    )
                })
             }
            </div>
        </div>
                
            </Layout>
        </div>
    );
   }

    
}

export default Home;