import React, { useCallback } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { transformAmount } from '##common/index';
import { LARGE_MARGIN, MEDIUM_SPACING, NORMAL_MARGIN, NORMAL_PADDING } from '##theme/dimensions.constant';
import { FONT_SIZE } from '##theme/typography.constant';
import { Payment, PaymentStatus, TOrderSummary } from '##types/order.type';
import { NetzerCheckbox } from '##component/netzer-checkbox';
import { updatePayment } from '##redux/slices/order.slice';
import { useDispatch } from '##redux/store';
import { ScrollView } from 'react-native-gesture-handler';

interface OrderPaymentProp {
  orderId: string;
  payments: Payment[];
  summary: TOrderSummary;
}

const Pay = ({ orderId, id, amount, method, checked }) => {
  const dispatch = useDispatch();

  const onClick = useCallback(() => {
    if (checked) return;
    dispatch(updatePayment(orderId, id));
  }, [dispatch, checked, orderId, id]);

  return (
    <NetzerCheckbox
      readOnly={checked}
      label={`${method} ${transformAmount(amount)}`}
      value={checked}
      onChange={onClick}
      relyExternalState={true}
      labelContainerStyle={styles.labelContainerStyle}
    />
  );
};

export const OrderPayment: React.FC<OrderPaymentProp> = ({
  orderId,
  payments,
  summary: { total }
}: OrderPaymentProp) => {
  return (
    <View style={styles.container}>
      <View style={styles.paymentHeader}>
        <Text style={styles.total}>{transformAmount(total)}</Text>
        <Text style={styles.totalSubText}>Total a pagar</Text>
      </View>

      <View style={styles.paymentSection}>
        <Text style={styles.paymentTitle}>Formas de pago</Text>

        <ScrollView>
          {payments.map(({ id, amount, method, status, statusDescription }: Payment) => (
            <View key={id} style={styles.paymentRow}>
              <Pay
                orderId={orderId}
                id={id}
                amount={amount}
                checked={status === PaymentStatus.SUCCESS || status === PaymentStatus.PROCESSED}
                method={method}
              />
              <Text style={styles.statusDescription}>{statusDescription}</Text>
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: '100%'
  },
  paymentHeader: {
    marginTop: 150
  },
  total: {
    color: '#4961DC',
    fontSize: FONT_SIZE.XXLARGE + FONT_SIZE.XLARGE,
    textAlign: 'center'
  },
  totalSubText: {
    color: '#4961DC',
    textAlign: 'center',
    fontSize: FONT_SIZE.LARGE
  },
  paymentTitle: {
    fontSize: FONT_SIZE.MEDIUM,
    marginBottom: NORMAL_MARGIN,
    fontWeight: '400',
    lineHeight: 20
  },
  payButton: {
    padding: NORMAL_PADDING,
    backgroundColor: 'red'
  },
  paymentSection: {
    marginTop: MEDIUM_SPACING
  },
  paymentRow: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  text: {
    marginLeft: LARGE_MARGIN,
    fontSize: FONT_SIZE.LARGE
  },
  labelContainerStyle: {
    marginTop: 3
  },
  statusDescription: {
    marginTop: NORMAL_MARGIN + 5
  }
});
