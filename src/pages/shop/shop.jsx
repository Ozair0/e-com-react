import React from "react";
import ShopData from './shop.data';
import PrevCollection from '../../components/prev-collection/prev';
class ShopPage extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            collections:ShopData
        }
    }

    render() {
        const {collections} = this.state;
        return (
            <div className='shop-page'>
                {
                    collections.map(({id, ...collection}) => (
                        <PrevCollection key={id} {...collection}/>
                    ))
                }
            </div>
        );
    }

}

export default ShopPage;