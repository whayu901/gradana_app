import React, { useState, useEffect } from 'react';
import {
  View,
  SafeAreaView,
  Dimensions,
  Text,
  ScrollView,
  Alert,
} from 'react-native';
import { TextInput, Button, Portal, Dialog } from 'react-native-paper';
import DatePicker from 'react-native-datepicker';
import { useDispatch, useSelector } from 'react-redux';
import { Picker } from '@react-native-community/picker';

import {
  PostDataList,
  getProvince,
  getDistrict,
  getVillage,
  getConstituency,
} from '../../redux/actions';
import styles from './styles';

const Form = () => {
  const inputData = {
    firstname: '',
    lastName: '',
    date: new Date(),
    province: '',
    district: '',
    constituency: '',
    village: '',
    salary: '',
  };
  const [data, setData] = useState(inputData);
  const [openModal, setOpenModal] = useState(false);
  const dispatch = useDispatch();
  const formType = useSelector((state) => state.Form);

  useEffect(() => {
    dispatch(getProvince());
  }, [dispatch]);

  const _handleSubmit = () => {
    if (
      data.firstname === '' ||
      data.lastName === '' ||
      data.province === '' ||
      data.district === '' ||
      data.constituency === '' ||
      data.village === '' ||
      data.salary === ''
    ) {
      Alert.alert('Form masih ada yang kosong');
    } else {
      dispatch(
        PostDataList(data, () => {
          setOpenModal(true);
        }),
      );
    }
  };

  const _closeModal = () => {
    setOpenModal(false);
    setData(inputData);
  };

  const _getDistrict = (id) => {
    dispatch(getDistrict(id));
    setData({ ...data, province: id });
  };

  const _getConstituency = (id) => {
    dispatch(getConstituency(id));
    setData({ ...data, district: id });
  };

  const _getVillage = (id) => {
    dispatch(getVillage(id));
    setData({ ...data, constituency: id });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flex: 1 }}>
        <ScrollView>
          <View style={styles.input}>
            <TextInput
              label="First Name"
              mode="outlined"
              onChangeText={(text) => setData({ ...data, firstname: text })}
              value={data.firstname}
            />
          </View>
          <View style={styles.input}>
            <TextInput
              label="Last Name"
              mode="outlined"
              onChangeText={(text) => setData({ ...data, lastName: text })}
              value={data.lastName}
            />
          </View>
          <View style={styles.input}>
            <Text style={styles.label}>Date Of Birth</Text>
            <DatePicker
              style={{ width: '100%' }}
              date={data.date}
              mode="date"
              is24Hour={true}
              onDateChange={(date) => setData({ ...data, date })}
              confirmBtnText="Confirm"
              cancelBtnText="Cancel"
            />
          </View>
          <View style={styles.input}>
            <Text style={styles.label}>Province</Text>
            <Picker
              onValueChange={(prov) => _getDistrict(prov)}
              selectedValue={data.province}
              style={{
                width: Dimensions.get('window').width - 30,
                marginLeft: 20,
                marginRight: 20,
              }}>
              {formType.dataProvince.map((e, k) => (
                <Picker.Item key={k} label={e.label} value={e.value} />
              ))}
            </Picker>
          </View>
          <View style={styles.input}>
            <Text style={styles.label}>District</Text>
            {formType.dataDistrict ? (
              <Picker
                onValueChange={(disct) => _getConstituency(disct)}
                selectedValue={data.district}
                style={{
                  width: Dimensions.get('window').width - 30,
                  marginLeft: 20,
                  marginRight: 20,
                }}>
                {formType.dataDistrict.map((e, k) => (
                  <Picker.Item key={k} label={e.label} value={e.value} />
                ))}
              </Picker>
            ) : (
                <Picker
                  style={{
                    width: Dimensions.get('window').width - 30,
                    marginLeft: 20,
                    marginRight: 20,
                  }}
                  onValueChange={(disct) => setData({ ...data, district: disct })}
                  selectedValue={data.district}>
                  <Picker.Item label={'Select Option'} value="" />
                </Picker>
              )}
          </View>
          <View style={styles.input}>
            <Text style={styles.label}>Constituency</Text>
            {formType.dataConstitusi ? (
              <Picker
                onValueChange={(constituency) => _getVillage(constituency)}
                selectedValue={data.constituency}
                style={{
                  width: Dimensions.get('window').width - 30,
                  marginLeft: 20,
                  marginRight: 20,
                }}>
                {formType.dataConstitusi.map((e, k) => (
                  <Picker.Item key={k} label={e.label} value={e.value} />
                ))}
              </Picker>
            ) : (
                <Picker
                  style={{
                    width: Dimensions.get('window').width - 30,
                    marginLeft: 20,
                    marginRight: 20,
                  }}
                  onValueChange={(disct) =>
                    setData({ ...data, constituency: disct })
                  }
                  selectedValue={data.constituency}>
                  <Picker.Item label={'Select Option'} value="" />
                </Picker>
              )}
          </View>
          <View style={styles.input}>
            <Text style={styles.label}>Village</Text>
            {formType.dataVillage ? (
              <Picker
                onValueChange={(village) => setData({ ...data, village })}
                selectedValue={data.village}
                style={{
                  width: Dimensions.get('window').width - 30,
                  marginLeft: 20,
                  marginRight: 20,
                }}>
                {formType.dataVillage.map((e, k) => (
                  <Picker.Item key={k} label={e.label} value={e.value} />
                ))}
              </Picker>
            ) : (
                <Picker
                  style={{
                    width: Dimensions.get('window').width - 30,
                    marginLeft: 20,
                    marginRight: 20,
                  }}
                  onValueChange={(disct) => setData({ ...data, village: disct })}
                  selectedValue={data.village}>
                  <Picker.Item label={'Select Option'} value="" />
                </Picker>
              )}
          </View>
          <View style={styles.input}>
            <TextInput
              label="Employee Salary"
              mode="outlined"
              keyboardType="numeric"
              onChangeText={(text) => setData({ ...data, salary: text })}
              value={data.salary}
            />
          </View>
        </ScrollView>
        <View style={styles.btnSubmit}>
          <Button
            mode="contained"
            style={{ borderRadius: 15 }}
            onPress={() => _handleSubmit()}>
            Submit
          </Button>
        </View>
      </View>
      <Portal>
        <Dialog visible={openModal} onDismiss={() => _closeModal()}>
          <Dialog.Title>Berhasil</Dialog.Title>
          <Dialog.Content>
            <Text style={{ fontWeight: 'bold' }}>{formType.postList}</Text>
            <View style={{ marginTop: 15 }}>
              <Text> nama Depan: {JSON.stringify(data.firstname)}</Text>
            </View>
          </Dialog.Content>
        </Dialog>
      </Portal>
    </SafeAreaView>
  );
};

export default Form;
