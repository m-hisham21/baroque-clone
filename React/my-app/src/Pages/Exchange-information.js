import React from 'react'
import "./Exchange-information.css"
import { Link } from 'react-router-dom'
function Exchange_information() {
  return (
    <div>
      <h2 id='erh1'>Exchange & Refund</h2> 
      <div className='erdiv'>
        <span><b>Exchanges</b></span>
        <p><b><i>Within Pakistan</i></b></p>
        <p>We have Link <b>10-day</b> Exchange policy starting from the order delivery date. The Exchange can be</p>
        <p>nitiated using the online form:  <Link className='aa' href="">(click here)</Link> </p>
        <p>To be eligible for the exchange the products should be:</p>
        <ul>
          <li>Bought from Baroque online store with Invoice</li>
          <li>Unused and in original state as delivered</li>
          <li>With original packing with labels attached</li>
        </ul>
        <p>To prevent any delays, please attach clear images of the products you are returning to us.</p>
        <p>Articles bought in sale cannot be exchanged or returned unless faulty.</p>
        <p>Exchange or Return is not valid on Dupattas and Shawls unless defective.</p>
        <p>Exchanges will be processed at the original item price, not the sale price.</p>
        <p>The customer will be responsible for paying for the return shipping costs charged at the time of sending the article back and <b>PKR 500</b> will be charged at the time of delivery for the exchange article.</p>
        <p>In case of any damaged OR missing item, the concern must be raised within <b>48 hours (2 days)</b> to our customer care team for further assistance or else the complain cannot be accepted.</p>
        <p>We will not be responsible for the items that are delivered domestically and then shipped internationally to Link third party.</p>
        <p>All exchanges are subject to item availability. if the item is no longer available, Link coupon code will be issued for online use within <b>12 months</b>. shipping charges will not be reimbursed.</p>
        <p>Online exchange processing takes approximately <b>7-10 days</b> after verification.</p>
        <p><i>*Baroque reserves the right to reject exchange request found misusing of our exchange policy or Link product received with missing tags and not in the correct condition.</i></p>

        <div>
          <span><b>Exchange Procedure</b></span>
          <p>In order to complain/ exchange the article, please fill out the complain/exchange form <Link className='aa' href="">(click here)</Link></p>
          <p>Customers will be required to ship the items back for exchange to the address provided by our team.</p>
          <p>In case of Link faulty/incorrect item delivered to you, the return shipping cost will be reimbursed as an online credit voucher.</p>
          <p>In case of Link faulty/incorrect item delivered to you, the return shipping cost will be reimbursed as an online credit voucher</p>
          <p>Credit voucher or your desired exchange item will only be provided once the we have received your returned items.</p>
          <p>Please Check our <Link className='aa' href="">Refund Policy</Link> for information regarding Refunds.</p>
        </div>

      </div>
      


    </div>
  )
}

export default Exchange_information
