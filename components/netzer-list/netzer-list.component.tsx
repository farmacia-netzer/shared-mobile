import { FlatList, ListRenderItem, RefreshControl, StyleSheet } from 'react-native';
import React, { useCallback, useEffect, useState } from 'react';
// import { NetzerLoadingIndicator } from './loading-indicator/loading-indicator.component';

interface NetzerListProps {
  data: any[];
  size?: number;
  count?: number;
  isLoading?: boolean;
  renderItem: ListRenderItem<any>;
  EmptyState?: React.ReactElement;
  horizontal?: boolean;
  allowRefresh?: boolean;
  onEndReached?(page: number, size: number): void;
}

export const NetzerList: React.FC<NetzerListProps> = ({
  data,
  count,
  renderItem,
  onEndReached,
  EmptyState,
  size = 20,
  horizontal = false,
  isLoading = false,
  allowRefresh = true
}: NetzerListProps) => {
  const [page, setPage] = useState(0);
  const [refreshing] = useState(false);

  useEffect(() => {}, [page]);

  const loadMore = count / size > page + 1;
  const keyExtractor = useCallback((item, index) => item?.id ?? `${item}_${index}`, []);
  // const renderFooter = useCallback(() => loadMore && <NetzerLoadingIndicator />, [loadMore]);

  const _onEndReached = useCallback(() => {
    if (loadMore) {
      onEndReached?.(page + 1, size);
      setPage((prev) => prev + 1);
    }
  }, [loadMore, onEndReached, page, size]);

  const onRefresh = useCallback(() => {
    onEndReached?.(page, size);
  }, [onEndReached, page, size]);

  return (
    <FlatList
      data={data}
      numColumns={1}
      refreshing={isLoading}
      horizontal={horizontal}
      renderItem={renderItem}
      initialNumToRender={20}
      stickyHeaderHiddenOnScroll
      onEndReachedThreshold={0.3}
      keyExtractor={keyExtractor}
      ListEmptyComponent={EmptyState}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.container}
      {...(onEndReached && { onEndReached: _onEndReached })}
      {...(allowRefresh && { refreshControl: <RefreshControl refreshing={refreshing} onRefresh={onRefresh} /> })}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1
  }
});
