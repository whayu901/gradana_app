import React, { useEffect } from 'react';
import { View, SafeAreaView, Text } from "react-native";
import { DataTable } from 'react-native-paper';
import { useDispatch, useSelector } from "react-redux";

import { getTable } from '../../redux/actions';
import styles from './styles'

const Table = () => {

  const dispatch = useDispatch();
  const tableType = useSelector(state => state.Table);

  useEffect(() => {
    dispatch(getTable(1));
  }, [])

  const _currentPage = () => {
    dispatch(getTable(tableType.page - 1))
  }

  const _nextPage = () => {
    dispatch(getTable(tableType.page + 1))
  }

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <DataTable>
          <DataTable.Header>
            <DataTable.Title>Name</DataTable.Title>
            <DataTable.Title numeric>Age</DataTable.Title>
            <DataTable.Title numeric>Salary</DataTable.Title>
          </DataTable.Header>

          {tableType.dataTable.map((data, k) => (
            <DataTable.Row key={k}>
              <DataTable.Cell>{data.employee_name}</DataTable.Cell>
              <DataTable.Cell numeric>{data.employee_age}</DataTable.Cell>
              <DataTable.Cell numeric>{data.employee_salary}</DataTable.Cell>
            </DataTable.Row>
          ))}
          <View
            style={styles.pagination}>
            <Text style={{ color: tableType.page !== 1 ? "red" : "grey" }}
              onPress={() => { tableType.page !== 1 ? _currentPage() : null }}>Prev</Text>
            <Text>{tableType.page} of 8</Text>
            <Text style={{ color: "red" }} onPress={() => _nextPage()}>Next</Text>
          </View>
        </DataTable>
      </View>
    </SafeAreaView>
  );
};

export default Table;