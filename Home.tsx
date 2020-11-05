import React from 'react'
import { View, Text, Button } from 'react-native'
import { setName, deleteName } from './redux'
import {store} from './redux'
import { useSelector, useDispatch } from 'react-redux'

export default function Home() {
  const getData = useSelector((state: any) => state);
  const dispatch = useDispatch();
  console.log(getData);

  return (
    <View style={{flex: 1, justifyContent: 'space-around', alignItems: 'center'}}>
      <Text style={{marginTop: 100}}>My name is {getData.user.name}.</Text>
      <View style={{flexDirection: 'row'}}>
        <Button
          onPress={() => dispatch(deleteName())}
          title="deleteName"
        />
        <Button
          onPress={() => dispatch(setName("カバヤ"))}
          title="setName"
        />
      </View>
      {/* ストアは、以下の様なJSONで記述されています。combine reducerのキーにuserを使ったのでuserプロパティの中に、stateが保存されます。 */}
      {/* stor のstateを取り出すにはgetStateメソッドを使います。JSON.stringifyで文字列へと変換しています。 */}
      <Text style={{marginBottom: 100}}>現在のstore: {JSON.stringify(store.getState())}</Text>
    </View>
  )
}