import React, { useState, useMemo } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

const DATA = Array.from({ length: 100 }, (_, i) => ({ id: i, value: i }));

const SolutionFlatList = () => {
  const [data, setData] = useState(DATA);
  const [counter, setCounter] = useState(0);

  const memoizedStyles = useMemo(() => {
    return data.map((item) => (
      {
        backgroundColor: item.value % 2 === 0 ? 'lightblue' : 'lightcoral',
      }
    ));
  }, [data]);

  const renderItem = ({ item, index }) => (
    <View style={[styles.item, memoizedStyles[index]]}>
      <Text>{item.value}</Text>
    </View>
  );

  const handleUpdate = () => {
    const updatedData = DATA.map(item => ({...item, value: item.value + counter }));
    setData(updatedData);
    setCounter(counter+1);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
      <Text onPress={handleUpdate}>Update Data</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});

export default SolutionFlatList;