import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-deliver',
  templateUrl: './deliver.component.html',
  styleUrls: ['./deliver.component.css']
})
export class DeliverComponent implements OnInit {
p:number=1
  constructor( private Route:Router) { }

  ngOnInit(): void {
  }
  menuItems:any=[
    {"id":1,"Title":"Don Bacon","Price":"$24.1","image":"../../assets/paneer.jpg"  },
    {"id":2,"Title":"Carne","Price":"$26.3","image":"../../assets/pepperoni-pizza.jpg"  },
    {"id":3,"Title":"Cheese pizza","Price":"$60.1","image":"../../assets/paneer.jpg"  },
    {"id":4,"Title":"Mix Pizza","Price":"$50.3","image":"../../assets/pepperoni-pizza.jpg"  }
  ]
  DeletefromCart(id:any)
  {
    if(localStorage.getItem('mycart')!=undefined)
    {
   let jsonData=localStorage.getItem('mycart');
   let arr=JSON.parse(jsonData ||'{}');
   if(arr.includes(id))
   {
    this.menuItems.pop();
    localStorage.setItem('mycart',JSON.stringify(this.menuItems))
    alert("product Removed From cart ")
   }
   else{
   arr.push(id);
   localStorage.setItem('mycart',JSON.stringify(arr))
   alert("product Deleted ")
   }
    }
    else
    {
      
    }
  }
};

