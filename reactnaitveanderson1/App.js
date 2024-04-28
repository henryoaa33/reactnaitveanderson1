import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const CalculatorComponent = () => {
  const [a, setA] = useState('');
  const [b, setB] = useState('');
  const [operation, setOperation] = useState('');
  const [result, setResult] = useState('');

  const handleCalculate = () => {
    const numA = parseFloat(a);
    const numB = parseFloat(b);

    switch (operation) {
      case '1':
        setResult(`Resultado: ${numA + numB}`);
        break;
      case '2':
        setResult(`Resultado: ${numA - numB}`);
        break;
      case '3':
        setResult(`Resultado: ${numA * numB}`);
        break;
      case '4':
        if (numB > 0) {
          setResult(`Resultado: ${numA / numB}`);
        } else {
          setResult('Error: b debe ser mayor que cero');
        }
        break;
      default:
        setResult('Operación no válida');
    }
  };

  return (
    <View>
      <TextInput
        placeholder="Ingrese a"
        value={a}
        onChangeText={setA}
        keyboardType="numeric"
      />
      <TextInput
        placeholder="Ingrese b"
        value={b}
        onChangeText={setB}
        keyboardType="numeric"
      />
      <TextInput
        placeholder="Ingrese operation (1-4)"
        value={operation}
        onChangeText={setOperation}
        keyboardType="numeric"
      />
      <Button title="Calcular" onPress={handleCalculate} />
      <Text>{result}</Text>
    </View>
  );
};

export default CalculatorComponent;
