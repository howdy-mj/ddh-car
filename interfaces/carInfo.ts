export interface CarInfoProps {
  accidentHistory: boolean;
  fixedHistory: string;
  maker: string;
  foreignCar: boolean;
  pictures: PictureProps[];
  price: string;
}

interface PictureProps {
  image: any;
  preview: string | ArrayBuffer;
}
