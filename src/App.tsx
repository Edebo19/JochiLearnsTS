import { storeData } from "./components/Storedata"
import "./App.css"
const App = () => {

  const storeInfo : storeData ={
    storeDetails:{
      storeName: "Jochi Stores",
      storeAddress:"14th Avenue",
      storeEmail:"jochistores@gmail.com"
    },
    userDetails:{
      fullname: "Suliton Olalere",
      dateOfBirth: "14th October, 2000",
      email: "sulitonolalere@gmail.com",
      Gender:"Male" 
  },
  orderDetails:{
      itemBought: "Televisom",
      itemPrice: 1440000,
      isSuccessful: true
  },
  vendorDetails:{
      vendorName: "Okelemu Peace Edebo",
      vendorEmail:"okelemupeaceedebo@gmail.com",
      vendorPhoneNumber: 9078976545,
      vendorGender:  "Female"
  }
  }
  return (
    <div className="store-card-holder">
      <div className="store-card">
        <h3>{storeInfo.storeDetails.storeName}</h3>
        <p>Customer {storeInfo.userDetails.fullname} bought {storeInfo.orderDetails.itemBought} at {storeInfo.orderDetails.itemPrice} and the success status is {storeInfo.orderDetails.isSuccessful}.
      The vendor that sold the item is {storeInfo.vendorDetails.vendorName} and can be contacted on email via {storeInfo.vendorDetails.vendorEmail} and on telephone via {storeInfo.vendorDetails.vendorPhoneNumber}.

      Thank you for visiting {storeInfo.storeDetails.storeName}. <br/> Have any complaints or enjoyed our services, send a mail via {storeInfo.storeDetails.storeEmail} to leave a review!</p>
      </div>
    </div>
  )
}

export default App