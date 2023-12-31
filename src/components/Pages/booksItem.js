import React, {Component} from 'react';
import ItemDetails, {Field} from '../itemDetails';
import gotService from '../../services/gotService';






export default class BooksItem extends Component {
    gotService = new gotService();

    

    
    render () {

        return (
            <ItemDetails
                itemId={this.props.bookId}
                getData={this.gotService.getBooks}>
                <Field field='numberOfPages' label='Number of pages' />
                <Field field='publiser' label='Publisher'/>
                <Field field='released' label='Released'/>
            </ItemDetails>
        )
    }
}