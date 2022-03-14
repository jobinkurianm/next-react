export interface ICard {
  id: string;
  photoUrL: string;
  title: string;
  price: any;
  isSelected?: boolean;
}

export interface ICardProps {
  id: string;
  items: ICard[];
  title: string;
  isSelected?: boolean;
}
export interface IPopup {
  isOpen: boolean;
  msg: string;
}
