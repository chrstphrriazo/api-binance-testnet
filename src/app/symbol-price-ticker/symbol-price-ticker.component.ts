import { Component, OnInit } from "@angular/core";
import { SymbolPriceTickerService } from "../services/symbol-price-ticker.service";

@Component({
  selector: 'app-symbol-price-ticker',
  templateUrl: './symbol-price-ticker.component.html',
  styleUrls: ['./symbol-price-ticker.component.css']
})
export class SymbolPriceTicker implements OnInit {
  public sptData: any;

  constructor(private symbolpricetickerservice: SymbolPriceTickerService) {

  }

  ngOnInit(): void {
    this.symbolpricetickerservice.getSymbolPriceTicker().subscribe((data: any) => {
      this.sptData = data;
      console.log('data', (this.sptData.slice(0, 5)));
      console.log(this.sptData);
    })
  }
}
