import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { OrderBookService } from "../services/order-book.service";
import { SymbolPriceTickerService } from "../services/symbol-price-ticker.service";
import { OrderBook } from "./order-book.component";

@NgModule({
  declarations: [OrderBook],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [OrderBook],
  providers: [OrderBookService]
})
export class OrderBookModule {

}
