import { DividendDto } from './dividend.dto';

export class ShowTickerInfoDto {
  [x: string]: any;
  id: number;

  shortName: string;

  longName: string;

  symbol: string;

  currentPrice: number;

  dividends: DividendDto[];
}
