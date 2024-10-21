import React, { useState } from 'react';
import MaskedInput from 'react-text-mask';

interface MaskedTextBoxProps {
  mask: Array<string | RegExp>;
  placeholder?: string;
}

const MaskedTextBox: React.FC<MaskedTextBoxProps> = ({ mask, placeholder }) => {
  const [value, setValue] = useState<string>('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <div style={{ marginBottom: '16px' }}>
      <MaskedInput
        mask={mask}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        style={{
          border: '1px solid #d9d9d9',
          borderRadius: '4px',
          padding: '8px',
          width: '100%',
          boxSizing: 'border-box',
          outline: 'none',
          transition: 'border-color 0.3s',
        }}
        onFocus={(e) => (e.currentTarget.style.borderColor = '#40a9ff')}
        onBlur={(e) => (e.currentTarget.style.borderColor = '#d9d9d9')}
      />
      <p>Вы ввели: {value}</p>
    </div>
  );
};

export default MaskedTextBox;
