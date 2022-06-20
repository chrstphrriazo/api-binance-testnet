import { Component, OnInit } from "@angular/core";
import { OrderBookService } from "../services/order-book.service";

@Component({
  selector: 'app-order-book',
  templateUrl: './order-book.component.html',
  styleUrls: ['./order-book.component.css']
})
export class OrderBook implements OnInit {

  public orderbookData: any;

  constructor(private orderbookservice: OrderBookService) {

  }

  ngOnInit(): void {
    this.orderbookservice.getOrderBook().subscribe((data: any) => {
      this.orderbookData = (data.bids.slice(0, 5));
      console.log('orderbookDataax', (data))
      console.log('orderbookDataa', (this.orderbookData))
    })
  }
}
