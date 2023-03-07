import React, { useState,useContext } from 'react';
import {UserContext} from '../App'
export default function PhoneHandle() {
    const [phoneNumber, setPhoneNumber] = useState('');
    const {state,setState}=useContext(UserContext)
    function handleSubmit(event) {
      event.preventDefault();
      console.log('Phone number is: ', phoneNumber);
    }
  
    function formatPhoneNumber(event) {
      let formattedNumber = event.target.value;
      // Remove non-digit characters from the phone number
      formattedNumber = formattedNumber.replace(/\D/g, '');
      if (formattedNumber.length < 10) {
        formattedNumber = formattedNumber.replace(/(\d{2})(\d{3})(\d{2})(\d{2})/, '$1-$2-$3-$4');
        state.phoneNumber=formattedNumber
        setState({...state})
      } else if (formattedNumber.length === 11) {
        formattedNumber = formattedNumber.replace(/^(\d{2})(\d{3})(\d{2})(\d{2})/, '$1-$2-$3-$4');
        state.phoneNumber=formattedNumber
        setState({...state})
      } else {
        state.phoneNumber=formattedNumber
        setState({...state})
      }
    }
    
    return (
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          id="phone-number"
          name="phone-number"
          value={state.phoneNumber}
          onChange={formatPhoneNumber}
        />
       
      </form>
    );
  }