import React from 'react';
import './ListBook.css'
import BookCard from './../../Components/BookCard/BookCard';
import Fab from './../../Components/Fab/Fab';
import { Fragment } from 'react';

class ListBook extends React.Component {
    state = {
        listCard : [
            {bookName:"Buku Kutu", bookPrice:1, sold:2},
            {bookName:"Buku Dewasa", bookPrice:99, sold:28},
            {bookName:"Buku Utang", bookPrice:0, sold:2}
        ]
    }

    handleBuyingBook = (key)=> {
        let temp = [...this.state.listCard];
        temp[key].sold += 1;
        this.setState({listCard: temp});
    }

    addNewBook = ()=>{
        let newListCard = [...this.state.listCard];
        newListCard.push(
            {
                bookName : prompt("Masukkan Nama Buku : "),
                bookPrice : prompt("Masukkan Harga Buku : "),
                sold : 0
            }
        );

        if(newListCard[newListCard.length-1].bookName!=null && newListCard[newListCard.length-1].bookPrice!=null) this.setState({listCard : newListCard});
    }

    render() {
        return (
            <Fragment>
                <div id={this.props.id} className="ListBook">
                    { (() => this.state.listCard.map((book, i) => <BookCard key={"Card" + (i + 1).toString()} bookName={book.bookName} bookPrice={book.bookPrice} sold={book.sold} onClickBook={()=>this.handleBuyingBook(i)}/>))()}
                </div>
                <Fab onclick={this.addNewBook}/>
            </Fragment>
        )
    }
}

export default ListBook;