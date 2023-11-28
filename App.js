import React, { useState } from 'react';
import './App.css';

const Calculator = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleClick = (value) => {
    if (value === '=') {
      try {
        setResult(eval(input).toString());
      } catch (error) {
        setResult('Geçersiz İfade');
      }
    } else if (value === 'C') {
      setInput('');
      setResult('');
    } else {
      setInput((prevInput) => prevInput + value);
    }
  };

// eslint-disable-next-line


  return (
    <div>
      <input type="text" value={input} readOnly />
      <div>
        <button onClick={() => handleClick('7')}>7</button>
        <button onClick={() => handleClick('8')}>8</button>
        <button onClick={() => handleClick('9')}>9</button>
        <button onClick={() => handleClick('/')}>/</button>
      </div>
      <div>
        <button onClick={() => handleClick('4')}>4</button>
        <button onClick={() => handleClick('5')}>5</button>
        <button onClick={() => handleClick('6')}>6</button>
        <button onClick={() => handleClick('*')}>*</button>
      </div>
      <div>
        <button onClick={() => handleClick('1')}>1</button>
        <button onClick={() => handleClick('2')}>2</button>
        <button onClick={() => handleClick('3')}>3</button>
        <button onClick={() => handleClick('-')}>-</button>
      </div>
      <div>
        <button onClick={() => handleClick('0')}>0</button>
        <button onClick={() => handleClick('+')}>+</button>
        <button onClick={() => handleClick('=')}>=</button>
        <button onClick={() => handleClick('C')}>C</button>
      </div>
      <h4>Result: {result}</h4>
    </div>
  );
};

export default Calculator;

/**
 * useState fonksiyonu, React bileşenlerinde durum tutmamızı sağlar. Bu durumlar, input ve result adında iki durumu yönetmek için kullanılıyor. input, kullanıcının hesaplamak istediği ifadeyi tutar, result ise bu ifadenin sonucunu tutar.

handleClick fonksiyonu, butonlara tıklandığında çalışacak olan fonksiyondur. Butonların değerlerine göre farklı işlemler yapar:

Rakam butonlarına tıklandığında, ilgili rakam input durumuna eklenir.
Operatör butonları (+, -, *, /) tıklandığında, ilgili operatör input durumuna eklenir.
"=" butonuna tıklandığında, eval fonksiyonu kullanılarak input ifadesi hesaplanır ve result durumuna sonuç atanır. try-catch bloğu, geçersiz ifadelerin kontrolünü sağlar.
"C" butonuna tıklandığında, input ve result durumları sıfırlanır, hesap makinesi sıfırlanmış olur.
Render işlevi, kullanıcı arayüzünü oluşturur. Input alanı, kullanıcının girdiğini gösterir. Butonlar, kullanıcıya tıklama seçenekleri sunar. Sonuç (result) alanı ise hesaplamanın sonucunu gösterir.

Bu hesap makinesi, kullanıcının rakamları ve basit matematiksel operatörleri (+, -, *, /) kullanarak hesaplamalar yapmasına izin verir. Kullanıcı herhangi bir rakam veya operatöre tıkladığında, bu değerler input durumuna eklenir. "=" tuşuna basıldığında, input ifadesi eval fonksiyonu ile değerlendirilir ve sonuç result durumuna atanır. "C" butonu ise tüm girdiyi ve sonucu sıfırlar, hesap makinesini temizler.
 */