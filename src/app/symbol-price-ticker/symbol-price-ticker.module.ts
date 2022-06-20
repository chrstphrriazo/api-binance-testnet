import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { SymbolPriceTickerService } from "../services/symbol-price-ticker.service";
import { SymbolPriceTicker } from "./symbol-price-ticker.component";

@NgModule({
  declarations: [SymbolPriceTicker],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [SymbolPriceTicker],
  providers: [SymbolPriceTickerService]
})
export class SymbolPriceTickerModule {

}
