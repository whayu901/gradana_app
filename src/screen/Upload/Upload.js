import React, { useState } from 'react';
import { View, Text, SafeAreaView, Button, ImageBackground, TouchableOpacity } from 'react-native';
import ImagePicker from 'react-native-image-picker';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from './styles';

const Upload = () => {

  const [image, setImage] = useState(null);
  const options = {
    title: "Pilih Gambar",
    takePhotoButtonTitle: "Ambil Photo",
    chooseFromLibraryButtonTitle: "Pilih Gallery"
  }

  const _chooseImage = () => {
    ImagePicker.showImagePicker(options, (response) => {
      const source = { uri: 'data:image/jpeg;base64,' + response.data };
      setImage(source)

    });
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Button title="Pilih Gambar" onPress={() => _chooseImage()} style={{ width: "30%" }} />
        {image ?
          <ImageBackground style={styles.image} source={image}>
            <TouchableOpacity style={styles.deleteIcon} onPress={() => setImage(null)}>
              <Icon size={40} name="delete" color={"red"} />
            </TouchableOpacity>
          </ImageBackground>
          :
          <Text>Tidak ada gambar</Text>

        }
      </View>
    </SafeAreaView>
  );
};

export default Upload;