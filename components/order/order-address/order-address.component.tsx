import React from 'react';
import { StyleSheet, View } from 'react-native';

import { NetzerKeyValueText } from '##component/netzer-key-value-text/netzer-key-value-text.component';
import { TAddress } from '#types';

interface OrderAddressProp {
  address: TAddress;
}

export const OrderAddress: React.FC<OrderAddressProp> = ({ address: { address, references } }: OrderAddressProp) => {
  return (
    <View style={styles.container}>
      <NetzerKeyValueText header="Direccion" value={address} />
      <NetzerKeyValueText header="Referencia" value={references || 'N/A'} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {}
});
