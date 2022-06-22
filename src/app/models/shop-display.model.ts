import { ShopItem } from './shop-item.model';

export class ShopCategory {
  categoryId: number;
  categoryName: string;
  items: ShopItem[];
}

export class ShopGroups {
  sugested: ShopCategory[];
  aquired: ShopCategory[];
}
