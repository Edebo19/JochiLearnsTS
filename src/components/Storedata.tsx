export interface storeData {
    storeDetails:{
        storeName: string,
        storeAddress:string,
        storeEmail:string
    },
    userDetails:{
        fullname: string,
        dateOfBirth: string,
        email: string,
        Gender:"Male" | "Female"
    },
    orderDetails:{
        itemBought: string,
        itemPrice: number,
        isSuccessful: boolean
    },
    vendorDetails:{
        vendorName: string,
        vendorEmail:string,
        vendorPhoneNumber: number,
        vendorGender: "Male" | "Female"
    }
}