let itemName= "Book";
    let itemQty = 3;
    let per_itemPrice = 200;
    let total_price = per_itemPrice * itemQty;
    let itemPrice = per_itemPrice * itemQty;
    let disPrice =  itemPrice * 0.15;
    
    let netPrice = itemPrice-disPrice;
    
       console.log(`Item Name : ${itemName}`);
       console.log(`Item Quantity : ${itemQty}`);

       console.log(`Per Item Price: ${per_itemPrice}`);
       console.log(`Item Price Without Discount: ${total_price}`);
       console.log(`Discounted Price : ${disPrice}`);
       console.log(`Total Price of Items: ${netPrice}`);
       