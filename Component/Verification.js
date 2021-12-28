import React, {useState} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';

function Verification({navigation}) {
  const CELL_COUNT = 4;

  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  return (
    <View style={{flex: 1, backgroundColor: '#FFF'}}>
      <Text
        style={{
          fontSize: 30,
          fontWeight: 'bold',
          marginTop: 30,
          marginLeft: 20,
        }}>
        Verification
      </Text>
      <View style={style.container}>
        <Image
          source={require('../assets/verification.png')}
          style={(style.logoImage, {width: 100, height: 100})}
        />
        <Text style={{fontSize: 20}}>Verification Code</Text>
        <CodeField
          ref={ref}
          {...props}
          // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
          value={value}
          onChangeText={setValue}
          cellCount={CELL_COUNT}
          rootStyle={style.codeFieldRoot}
          keyboardType="number-pad"
          textContentType="oneTimeCode"
          renderCell={({index, symbol, isFocused}) => (
            <Text
              key={index}
              style={[style.cell, isFocused && style.focusCell]}
              onLayout={getCellOnLayoutHandler(index)}>
              {symbol || (isFocused ? <Cursor /> : null)}
            </Text>
          )}
        />
        <Text style={{marginTop: 20, fontSize: 19}}>Check the sms</Text>
        <Text style={{marginTop: 15, fontSize: 19}}>
          Messagge to get a verification code
        </Text>
      </View>

      <TouchableOpacity
        style={style.btn}
        onPress={() => navigation.navigate('Profile')}>
        <View style={style.button}>
          <Text style={style.buttonText}>Continue</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 50,
  },
  codeFieldRoot: {marginTop: 20},
  cell: {
    width: 40,
    height: 40,
    lineHeight: 38,
    fontSize: 24,
    borderWidth: 2,
    borderColor: '#00000030',
    textAlign: 'center',
  },
  focusCell: {
    borderColor: '#000',
  },
  buttton: {
    // marginBottom: 2,
    borderRadius: 6,
    width: 60,
  },
  btn: {
    marginTop: 60,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
    borderRadius: 15,
    borderColor: '#FFF',
    borderWidth: 1,
    // marginTop: 20,
    padding: 18,
    backgroundColor: '#ebb134',
  },
});

export default Verification;
