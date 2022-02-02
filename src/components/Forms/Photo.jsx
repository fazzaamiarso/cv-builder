import { useEffect, useState } from 'react';
import { useController, useFormContext } from 'react-hook-form';

const Photo = () => {
  const { control } = useFormContext();
  const { field } = useController({ control, name: 'photo' });
  const [image, setImage] = useState('');

  useEffect(() => {
    if (field.value) setImage(field.value);
  }, [field]);

  const readImageUploaded = file => {
    const reader = new FileReader();
    reader.onload = e => {
      // attach event
      setImage(e.target); //e.target is reader which is an instacnce of filereader
      field.onChange(e.target);
    };
    reader.readAsDataURL(file); // trigger the event
  };

  const handleChange = e => {
    readImageUploaded(e.target.files[0]);
  };
  return (
    <>
      <div className="w-max h-max">
        <img src={image.result} alt="user profile" />
      </div>
      <label htmlFor={'photo'} className="text-sm font-semibold">
        {'Photo'}
      </label>
      <input
        value={image.name}
        type="file"
        id="photo"
        accept="image/png, image/jpeg"
        onChange={handleChange}
      />
    </>
  );
};

export default Photo;
