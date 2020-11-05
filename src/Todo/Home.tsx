import React from 'react'
import { View, Text, Button, FlatList } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { addTask, deleteTask } from './actions';

export default function Home() {
  const getData = useSelector((state: any) => state);
  const dispatch = useDispatch();
  console.log(getData);

  return (
    <View style={{flex: 1, justifyContent: 'space-around', alignItems: 'center'}}>
      {/* <Text style={{marginTop: 100}}>My name is {getData.user.name}.</Text> */}
      <FlatList
        data={getData.todos}
        renderItem={({item, index}) => <Text key={index}>{item.title}</Text>}
      />
      <View style={{flexDirection: 'row'}}>
        <Button
          onPress={() => dispatch(deleteTask("0"))}
          title="deleteName"
        />
        <Button
          onPress={() => dispatch(addTask("カバヤ"))}
          title="setName"
        />
      </View>
      {/* ストアは、以下の様なJSONで記述されています。combine reducerのキーにuserを使ったのでuserプロパティの中に、stateが保存されます。 */}
      {/* stor のstateを取り出すにはgetStateメソッドを使います。JSON.stringifyで文字列へと変換しています。 */}
      <Text style={{marginBottom: 100}}>現在のstore: {JSON.stringify(getData)}</Text>
    </View>
  )
}