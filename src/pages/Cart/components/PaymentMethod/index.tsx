 
import { Bank, CreditCard, CurrencyDollar, Money } from "phosphor-react";
import {
  CartPaymentMethod,
  CartPaymentMethodHeader,
  CartPaymentMethodHeaderText,
  PaymentButton,
  PaymentMethods,
} from "./styles";
import { useState } from "react";



export function PaymentMethod() {
  const [creditCardStatus, setCreditCardStatus] = useState(false);
  const [debitCardStatus, setDebitCardStatus] = useState(false);
  const [moneyStatus, setMoneyStatus] = useState(false);
  let selectedButton

  function handleSelectPaymentMethod(paymentMethod: string){
    clearPaymentMethod()

    if(paymentMethod === 'CreditCard') {
      setCreditCardStatus(true)
      selectedButton = 'Cartão de Crédito'
      console.log(selectedButton)
    }

    if(paymentMethod === 'DebitCard') {
      setDebitCardStatus(true)
      selectedButton = 'Cartão de Débito'
      console.log(selectedButton)
    }

    if(paymentMethod === 'Money') {
      setMoneyStatus(true)
      selectedButton = 'Dinheiro'
      console.log(selectedButton)
    }
  }

  function clearPaymentMethod(){
    selectedButton = ''
    setCreditCardStatus(false) 
    setDebitCardStatus(false)
    setMoneyStatus(false)
  }

  return (
    <CartPaymentMethod>
      <CartPaymentMethodHeader>
        <CurrencyDollar size={28} />

        <CartPaymentMethodHeaderText>
          <h2>Pagamento</h2>
          <p>
            O pagamento é feito na entrega. Escolha a forma que deseja pagar
          </p>
        </CartPaymentMethodHeaderText>
      </CartPaymentMethodHeader>

      <PaymentMethods>
        <PaymentButton
          $isActive={creditCardStatus}
          onClick={() => handleSelectPaymentMethod('CreditCard')}>
          <CreditCard size={20} /> <p>CARTÃO DE CRÉDITO </p>
        </PaymentButton>
        <PaymentButton
          $isActive={debitCardStatus}
          onClick={() => handleSelectPaymentMethod("DebitCard")}>
          <Bank size={20} /> <p>CARTÃO DE DÉBITO</p>
        </PaymentButton>
        <PaymentButton 
          $isActive={moneyStatus}
          onClick={() => handleSelectPaymentMethod("Money")}>
          <Money size={20} /> <p>DINHEIRO</p>
        </PaymentButton>
      </PaymentMethods>
    </CartPaymentMethod>
  );
}
