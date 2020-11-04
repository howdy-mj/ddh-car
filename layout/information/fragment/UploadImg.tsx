import React, { FC, useState } from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import store from '@store/index';

const UploadImg: FC = () => {
  const { registerCarStore } = store;
  // const [uploadImg, setUploadImg] = useState<
  //   { image: any; preview: string | ArrayBuffer }[]
  // >([
  //   {
  //     image: null,
  //     preview: null,
  //   },
  // ]);
  // const handleFile = (e) => {
  //   e.preventDefault();
  //   let reader = new FileReader();
  //   let file = e.target.files[0];

  //   reader.onloadend = () => {
  //     if (uploadImg[0].image === null) {
  //       setUploadImg([{ image: file, preview: reader.result }]);
  //     } else {
  //       setUploadImg([...uploadImg, { image: file, preview: reader.result }]);
  //     }
  //   };
  //   reader.readAsDataURL(file);
  // };

  const handleFile = (e: any) => {
    e.preventDefault();
    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      registerCarStore.addPictures({ image: file, preview: reader.result });
    };
    reader.readAsDataURL(file);
  };

  // autorun(() => console.log(`pictures! ${registerCarStore.result.pictures}`));

  return (
    <Wrap>
      <UploadForm>
        <UploadLabel htmlFor="uploadFile">
          <Image src="/images/plus.png" alt="add" width={30} height={30} />
        </UploadLabel>
        <UploadInput
          type="file"
          id="uploadFile"
          accept="image/*"
          onChange={handleFile}
          multiple
        />
      </UploadForm>
      {/* {uploadImg[0].image !== null &&
        uploadImg.map((img) => {
          return (
            <Preview key={img.image.name} src={img.preview} alt="preview" />
          );
        })} */}
      {registerCarStore.result.pictures[0].image !== null &&
        registerCarStore.result.pictures.map((img) => {
          return (
            <Preview key={img.image.name} src={img.preview} alt="preview" />
          );
        })}
    </Wrap>
  );
};

export default UploadImg;

const Wrap = styled.div`
  display: flex;
  width: 34rem;
  overflow: auto;
`;

const UploadForm = styled.form`
  width: 11.5rem;
  height: 11.5rem;
  background-color: rgba(34, 148, 227, 0.17);
  border-radius: 1rem;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const UploadLabel = styled.label`
  padding: 4rem;
  cursor: pointer;
`;

const UploadInput = styled.input`
  position: absolute;
  width: 0;
  height: 0;
  padding: 0;
  border: 0;
`;

const Preview = styled.img`
  display: inline-block;
  min-width: 11.5rem;
  height: 11.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 1rem;
  object-fit: center;
  margin: 0 1rem;

  &:last-child {
    margin-right: 0;
  }
`;
