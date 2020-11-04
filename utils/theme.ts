export const size = {
  // 기본이 모바일 뷰(400px 이하)로 가정
  largest: '75em', // 1200px
  large: '56.25em', // 900px
  medium: '37.5em', // 600px
  small: '31.25em', // 500px
  smallest: '25em', // 400px
};

const theme = {
  // colors
  azure: 'rgb(34, 148, 227)',
  greyishBrown: 'rgb(68, 68, 68)',
  brownGrey: 'rgb(150, 150, 150)',
  brownishGrey: 'rgb(102, 102, 102)',

  // responsive
  over500: `only screen and (min-width: ${size.small})`,
  tablet: `only screen and (min-width: ${size.medium})`,
  laptop: `only screen and (min-width: ${size.large})`,
  desktop: `only screen and (min-width: ${size.largest})`,
};

export default theme;
