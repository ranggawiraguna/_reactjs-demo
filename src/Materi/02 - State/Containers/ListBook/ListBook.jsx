import React from 'react';
import './ListBook.css'
import BookCard from './../../Components/BookCard/BookCard';

class ListBook extends React.Component {
  state = {
      listCard : [
          {bookName:"Buku Kutu", bookPrice:1, sold:2},
          {bookName:"Buku Dewasa", bookPrice:99, sold:28},
          {bookName:"Buku Utang", bookPrice:0, sold:2}
      ]
  }

  render(){
      return (
          <div id={this.props.id} className="ListBook">
              {(()=>this.state.listCard.map((book,i)=><BookCard key={"Card"+(i+1).toString()} bookName={book.bookName} bookPrice={book.bookPrice} sold={book.sold}/>))()}
          </div>
      )
  }
}

export default ListBook;