import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { TOrderSummary, TPaymentDetail } from '#types';

interface OrderPaymentSummaryProp {
  summary: TOrderSummary;
  paymentDetail: TPaymentDetail;
}

export const OrderPaymentSummary: React.FC<OrderPaymentSummaryProp> = ({
  summary: { total, subTotal, discount, itbis },
  paymentDetail: { isMissingPayment, pending }
}: OrderPaymentSummaryProp) => {
  return (
    <View style={styles.container}>
      <Text>itbis {itbis}</Text>
      <Text>total {total}</Text>
      <Text>subTotal {subTotal}</Text>
      <Text>discount {discount}</Text>
      <Text>discount {discount}</Text>
      <Text>isMissingPayment {isMissingPayment ? 'Si' : 'No'}</Text>
      <Text>pending {pending}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {}
});
