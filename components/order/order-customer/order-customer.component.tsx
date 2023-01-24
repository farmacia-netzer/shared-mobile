import React from 'react';
import { StyleSheet, View } from 'react-native';

import { TProfile } from '#types';
import { NetzerKeyValueText } from '##component/netzer-key-value-text/netzer-key-value-text.component';

interface OrderCustomerProp {
  profile: TProfile;
}

export const OrderCustomer: React.FC<OrderCustomerProp> = ({ profile: { fullName, cellphone } }: OrderCustomerProp) => {
  return (
    <View style={styles.container}>
      <NetzerKeyValueText header="Nombre" value={fullName} />
      <NetzerKeyValueText header="Celular" value={cellphone} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {}
});
