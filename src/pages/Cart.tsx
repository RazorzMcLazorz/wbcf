import React, { Component } from 'react'
import AppBar from '../components/appBar'
import Footer from '../components/Footer'
import Typography from '@material-ui/core/Typography'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'

interface IAllItems {
  label: string
  price: number
}

const allItemsInCart: IAllItems[] = [
  { label: 'Item 1', price: 12 },
  { label: 'Item 2', price: 16 },
  { label: 'Item 3', price: 121 },
  { label: 'Item 4', price: 1212 },
  { label: 'Item 5', price: 132 },
  { label: 'Item 6', price: 22 },
  { label: 'Item 7', price: 72 }
]

export default class Cart extends Component {
  countTotal(items: IAllItems[]) {
    let total = 0
    items.forEach(item => (total = total + item.price))
    return total
  }

  render() {
    return (
      <div className='cart'>
        <AppBar dontHide />
        <div className='cartBody'>
          <Typography variant='h2'>Your Cart</Typography>
          <TableContainer component={Paper} className='tableContainer'>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Item</TableCell>
                  <TableCell align='right' size='small'>
                    Price $$
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {allItemsInCart.map(item => (
                  <TableRow>
                    <TableCell>{item.label}</TableCell>
                    <TableCell align='right' size='small'>
                      ${item.price}
                    </TableCell>
                  </TableRow>
                ))}
                <TableRow>
                  <TableCell></TableCell>
                  <TableCell align='right' size='small'>
                    Total: ${this.countTotal(allItemsInCart)}
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </div>
        <Footer />
      </div>
    )
  }
}
