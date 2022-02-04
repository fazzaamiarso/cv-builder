import { useEffect, useState } from 'react';
import { useFormContext } from 'react-hook-form';

const Photo = () => {
  const {
    register,
    watch,
    formState: { errors },
  } = useFormContext();
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
        <div className="w-max-[400px] h-max-[400px]">
          <img src={image} alt="user profile" />
        </div>
      )}
      <label htmlFor={'photo'} className="text-sm font-semibold" hidden>
        {'Photo'}
      </label>
      <input
        {...register('photo', {
          onChange: handleChange,
          required: 'Please provide an image',
        })}
        type="file"
        id="photo"
        accept="image/png, image/jpeg"
        className="mt-4"
      />
      {errors.photo && (
        <span className="text-xs text-red-500" role="alert">
          {errors.photo.message}
        </span>
      )}
    </>
  );
};

export default Photo;
