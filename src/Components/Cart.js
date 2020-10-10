import React from 'react';

 function Cart() {
    render() {
      return (
        <section className="main__summary">
          <h3>NEW GREENLEAF 2018</h3>
            < Summary selected={this.props.selected} />
            < Total selected={this.props.selected} />
        </section>
      )
    }
}

export default Cart;