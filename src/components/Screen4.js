import React, { useState } from "react";
import CurrenyApi from "./CurrenyApi";
import InputBox from "./InputBox";

function Screen4() {
    const [amount,setAmount] =useState(0)
    const [from,setFrom] =useState("usd")
    const [to,setTo] =useState("pkr")
    const [convertedAmount,setConvertedAmount] =useState(0)

    const currencyInfo = CurrenyApi(from)
    const option =Object.keys(currencyInfo)

    const convert=()=>{
        setConvertedAmount(amount*currencyInfo[to])
    }

    const swap=()=>{
        setFrom(to)
        setTo(from)
        setConvertedAmount(amount)
        setAmount(convertedAmount)
    }
  return (
    <div
      className="w-full h-screen flex justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/259165/pexels-photo-259165.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`
      }}
    >
      <div className="w-full max-w-md mx-auto border border-gray-600 rounded-lg backdrop-blur-sm bg-white/30 p-4">
      <form onSubmit={(e)=> {
        e.preventDefault();
        convert();
      }}>
        <div className="w-full mb-1">
            <InputBox 
            label="from"
            amount={amount} 
            currencyOption={option}
            onCurrencyChange={(currency)=> setFrom(currency)}
            onAmountChange={(amount)=> setAmount(amount)}
            selectedCurrency={from}
            />
        </div>

        <div className="relative w-full h-1.5 ">
            <button className="absolute left-1/2 translate-x-1/2 -translate-y-1/2
            border-2 border-white rounded-md bg-blue-600 text-white p-0.5" 
            type="button"
            onClick={swap}> 
            Swap</button>
        </div>
        <div className="w-full mb-1">
            <InputBox 
            label="to"
            amount={convertedAmount} 
            currencyOption={option}
            onCurrencyChange={(currency)=> setTo(currency)}
            selectedCurrency={to}
            amountDisable //if nothing is passed with boolen by defualt it's true
            />
        </div>
        <button 
        type="submit"
        className="bg-blue-600 w-full px-3 py-3 rounded-lg"
        > Convert {from} to {to}</button>
      </form>
      </div>
    </div>
  );
}

export default Screen4;
