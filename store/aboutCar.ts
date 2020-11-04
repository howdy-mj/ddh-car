import { configure, makeAutoObservable } from 'mobx';
import { CarInfoProps } from '../interfaces/carInfo';

configure({
  enforceActions: 'never',
  reactionRequiresObservable: true,
});

class RegisterCar {
  constructor(carInfo: CarInfoProps) {
    makeAutoObservable(carInfo);
  }

  get result() {
    return carInfo;
  }

  hasAccident(yesOrNo) {
    carInfo.accidentHistory = yesOrNo;
  }

  selectMaker(name) {
    carInfo.maker = name;
  }

  addPictures({ image, preview }) {
    if (carInfo.pictures[0].image === null) {
      carInfo.pictures = [{ image, preview }];
    } else {
      carInfo.pictures.push({ image, preview });
    }
  }

  reset() {
    carInfo.accidentHistory = true;
    carInfo.fixedHistory = '';
    carInfo.maker = '현대';
    carInfo.foreignCar = false;
    carInfo.pictures = [{ image: null, preview: null }];
    carInfo.price = '';
  }
}

const carInfo = {
  accidentHistory: true,
  fixedHistory: '',
  maker: '현대',
  foreignCar: false,
  pictures: [{ image: null, preview: null }],
  price: '',
};

export const registerCarStore = new RegisterCar(carInfo);
