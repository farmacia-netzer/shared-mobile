import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// import ImageViewer from 'react-native-image-zoom-viewer';
// import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { LARGE_MARGIN } from '##theme/dimensions.constant';

interface OrderPrescriptionProp {
  prescriptions: string[];
}

export const OrderPrescription: React.FC<OrderPrescriptionProp> = ({ prescriptions }: OrderPrescriptionProp) => {
  console.log('🚀 | prescriptions', prescriptions);

  // const { top } = useSafeAreaInsets();
  // const imgs = [...prescriptions, ...prescriptions, ...prescriptions];
  // const imgs2 = [
  //   { url: imgs[0], height: 350, width: 350 },
  //   { url: imgs[1], height: 350, width: 350 },
  //   { url: imgs[2], height: 350, width: 350 }
  // ];

  // const [isModalVisible, setIsModalVisible] = useState(false);
  // const [selectedImage, setSelectedImage] = useState(-1);

  // const onToggle = useCallback(() => {
  //   setIsModalVisible((isVisible) => !isVisible);
  // }, []);

  // const onClick = useCallback(
  //   (index: number) => {
  //     setSelectedImage(index);
  //     onToggle();
  //   },
  //   [onToggle]
  // );

  // const renderHeader = useCallback(() => {
  //   return (
  //     <View style={styles.closeButton}>
  //       <Pressable accessibilityRole="button" onPress={onToggle}>
  //         <Text
  //           style={{
  //             ...styles.closeText,
  //             marginTop: styles.closeText.marginTop + top
  //           }}
  //         >
  //           Cerrar
  //         </Text>
  //       </Pressable>
  //     </View>
  //   );
  // }, [onToggle, top]);

  return (
    <View style={styles.container}>
      <Text>Prescriptions</Text>

      {/* {selectedImage > -1 && isModalVisible && (
        <Modal visible={isModalVisible} transparent={false}>
          {/* <ImageViewer
            enableSwipeDown={true}
            onCancel={onToggle}
            renderHeader={renderHeader}
            index={selectedImage}
            imageUrls={imgs2}
          /> 
        </Modal>
      )} 

      {/* <HorizontalSlider onItemClick={onClick} images={imgs} /> */}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {},
  closeButton: {
    display: 'flex',
    flexDirection: 'row-reverse'
  },
  closeText: {
    color: '#fff',
    marginTop: LARGE_MARGIN,
    marginRight: LARGE_MARGIN
  }
});
