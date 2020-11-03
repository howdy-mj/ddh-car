import React from 'react';
import { extendObservable } from 'mobx';
import { CarInfoProps } from '@interfaces/carInfo';

let carInfo = <CarInfoProps>{
  accidentHistory: true,
  fixedHistory: '',
  maker: '현대',
  foreignCar: false,
  pictures: [{ image: null, preview: null }],
  price: '',
};

class RegisterCar {
  constructor() {
    extendObservable(this, carInfo);
  }

  get result() {
    return carInfo;
  }

  selectMaker(name) {
    carInfo.maker = name;
  }

  addPictures(file, preview) {
    carInfo.pictures.push(file, preview);
  }
}

export const registerCarStore = new RegisterCar();
