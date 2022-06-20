import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class OrderBookService {

  constructor(private http: HttpClient) {

  }

  getOrderBook() {
    return this.http.get(
      'https://testnet.binance.vision/api/v3/depth?symbol=BTCUSDT'
    );
  }
}
