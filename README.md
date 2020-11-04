## 실행 방법

```bash
# 설치
npm install
# or
yarn

# 실행
npm run dev
# or
yarn dev
```

## 코드 설명

- 제플린에는 `pt` 단위로 되어있지만, 웹이기 때문에 `px`기준으로 개발하였습니다.
- 여러 차례 사용해야하는 것은 `components` 폴더에 만들었으며 오로지 view만 담당합니다.
- 페이지는 하나이기 때문에 `pages/index`만 있으며, 해당 내용은 `layout/information`에 있습니다.
- 중고차 정보는 `store/aboutCar`에서 다루도록 작성했습니다.
- 가이드에 mobx-react가 없어서 mobx로만 진행했습니다. 그러다보니, mobx의 state가 바뀔 때 re-render 하는 법을 찾지 못해 클릭했을 때 바로 업데이트가 되지 않습니다. (때문에 현재 화면이 제대로 작동하지 않습니다)
- decorator는 현재 공식으로 지원하는 것이 아니라 사용하지 않았습니다.

```ts
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
```

## 질문

1. mobx

- 공식문서에서 class 컴포넌트로 만들고 있는데(MobX core), 함수형이 사용되지 않는 이유가 궁금합니다.
- mobx 코드가 생각보다 직관적이지 않은 것 같습니다. redux 대신 mobx를 사용하는 가장 큰 이유가 속도와 불변성 때문인지, 혹은 next.js에서 성능이 더 좋은지 궁금합니다.

2. 데이터 넘기기

- `store/aboutCar`처럼, 모든 정보를 RegisterCar에 넣고 서버로 전송하려 했는데, 더 좋은 방법이 무엇인지 궁금합니다.

3. 기타

- PWA를 react가 아니라 next에서 개발하는 이유는 SEO 때문인지, 다른 이유가 있는지 궁금합니다.
