import React from 'react'
import "./Refund-policy.css"
import { Link } from 'react-router-dom'
function Refund_policy() {
  return (
    <div>
      <h2 id='rph2'> Refund Policy</h2>
      <div className='rpdiv'>
        <p><b>REFUND POLICY</b></p>
        <p>We do not provide refunds only <b>store credit</b> is provided.However, refunds may be allowed in exceptional casesif there is any fault at our end.</p>
        <p>Changes in order for instance; size change, article change, addition/removal of article etc can be made within <b>48 hours (2 days)</b> from the day the order is placed.</p>
        <p><b>Cancellation</b></p>
        <p>In order to cancel the order, please fill out the cancellation form here: <Link href="">(click here)</Link></p>
        <p>Order can be cancelled within <b>48 hours (2 day)</b> of the order placement. Cancelling order after <b>48 hours (2 day)</b> will result in cancellation fees of <b>3%</b> of the paid amount, with the amount refunded to the original mode of payment. The amount will be processed in <b>14-18 working days.</b> Store credit will be provided to the orders cancelled with no genuine reason. (i.e., change of mind, don’t require order anymore, changes in order)</p>
        <p><b>Return</b></p>
        <p> To initiate a return request, you have to fill the form at <Link href="">(click here)</Link>. Please note that returns will need to be sent to the address you are provided when your return is accepted.</p>
        <p>We will notify you once we’ve received and inspected your return, and let you know if the refund was approved or not. If approved, you’ll be automatically refunded on your original payment or credit voucher within <b>14 business days.</b> Please remember it can take some time for your bank or credit card company to process and post the refund too.</p>
        <p>Items/Articles ordered in our sale and discount sections will not be entertained for refund or exchange.</p>
        <p>To be eligible for a return, your item must be in the same condition that you received it, unworn or unused, with tags, and in its original packaging. You’ll also need the receipt or proof of purchase.</p>
        <p>In order to return the package, our team willl provide you with the instructions on how and where to send your package. Items sent back to us without first requesting a return will not be accepted.</p>
        <p>Baroque has a right to reject a return request found misusing of our generous return policy or a product received with missing tags and other components</p>
        <p><b> Damages and issues</b></p>
        <p> In case of any damaged or incorrect item, the concern must be raised within 48 hours to our customer care team for further assistance or else the complain cannot be accepted.</p>
        <p><b> Exceptions / non-returnable items</b></p>
        <p>Certain types of items cannot be returned, like customized articles(custom sizearticles), and service charges (such as priority stitching). Please get in touch if you have questions or concerns about your specific item.</p>
        <p> Unfortunately, we cannot accept returns on sale items or gift cards.</p>
        <p><i> *Baroque reserves the right to reject return request found misusing of our return policy or a product received with missing tags and other components.</i></p>
      </div>

    </div>
  )
}

export default Refund_policy
