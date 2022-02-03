import { useEffect, useState } from 'react';
import { useFormContext } from 'react-hook-form';

const Photo = () => {
  const { register, watch } = useFormContext();
  const [image, setImage] = useState('');
  const uploaded = watch('photo');

  useEffect(() => {
    if (!uploaded || uploaded.length === 0) return;
    readImageUploaded(uploaded[0]);
  }, [uploaded]);

  const readImageUploaded = file => {
    const reader = new FileReader();
    reader.onload = e => {
      // attach event
      setImage(e.target.result);
      //e.target is reader which is an instacnce of filereader
    };
    reader.readAsDataURL(file); // trigger the event
  };

  const handleChange = e => {
    readImageUploaded(e.target.files[0]);
  };
  return (
    <>
      {image && (
        <div className="w-max h-max">
          <img src={image} alt="user profile" />
        </div>
      )}
      <label htmlFor={'photo'} className="text-sm font-semibold">
        {'Photo'}
      </label>
      <input
        {...register('photo', { onChange: handleChange })}
        type="file"
        id="photo"
        accept="image/png, image/jpeg"
      />
    </>
  );
};

export default Photo;
