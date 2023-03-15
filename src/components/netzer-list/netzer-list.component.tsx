import EmptyBox from '../../assets/EmptyBox.svg';
import { usePagination } from '../../hooks/usePagination';
import { FONT_SIZE } from '../../theme/typography.constant';

import React, { ReactNode, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { Animated, Dimensions, ListRenderItem, RefreshControl, StyleSheet, View } from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import { NetzerListEmpty } from '../netzer-list-empty/netzer-list-empty.component';
import { NetzerLoading } from '../netzer-loading/netzert-loading.component';
import { NetzerText } from '../netzer-text';
import { useDispatch, useSelector } from 'react-redux';
import { ThemeContext, ThemeI } from '../../context/theme/theme-context';

interface ListDataProps {
    title?: string;
    renderItem: ListRenderItem<any> | null | undefined
    parameters?: any
    isLoadingSelector: any
    countSelector: any
    dataSelector: any
    horizontal?: boolean
    loadDataAction: any
    loadMoreDataAction?: any
    PAGE_SIZE?: number
    props?: any
    EmptySection?: ReactNode
    skeletonComponent?: ReactNode | (() => JSX.Element)
}
const defaultParams = {}

const windowHeight = Dimensions.get('window').height;

export const NetzerList = ({
    title,
    countSelector,
    dataSelector,
    isLoadingSelector,
    renderItem,
    PAGE_SIZE = 20,
    loadDataAction,
    loadMoreDataAction,
    parameters = defaultParams,
    horizontal = false,
    props,
    skeletonComponent,
    EmptySection
}: ListDataProps) => {
    const dispatch = useDispatch();
    const { theme } = useContext(ThemeContext);
    const styles = useMemo(() => stylesComponent(theme), [theme])

    const data = useSelector(dataSelector);
    const isLoading = useSelector(isLoadingSelector);
    const count: number = useSelector(countSelector);

    const [isLoadingMore, setIsLoadingMore] = useState<boolean>(false);
    const { page, setPage, shouldLoadMore } = usePagination(count!, PAGE_SIZE);

    const loadData = useCallback(() => {
        dispatch(loadDataAction(0, PAGE_SIZE, parameters));
    }, [PAGE_SIZE, dispatch, loadDataAction, parameters]);

    const loadMoreData = useCallback((pag: number, size: number) => {
        dispatch(loadMoreDataAction(pag, size, setIsLoadingMore, parameters));
    }, [dispatch, loadMoreDataAction, parameters]);

    useEffect(() => {
        loadData();
    }, [loadData]);

    const _onEndReached = useCallback(() => {
        if (shouldLoadMore) {
            loadMoreData?.(page + 1, 10);
            setPage((prev) => prev + 1);
        }
    }, [shouldLoadMore, loadMoreData, page, setPage]);

    const keyExtractor = useCallback((item, index) => item.item?.id ?? `${item}_${index}`, []);

    return (
        <View>
            {
                isLoading ?
                    <SkeletonPlaceholder borderRadius={5}>
                        <SkeletonPlaceholder.Item width={150} height={10} borderRadius={20} marginTop={20} marginLeft={10} />
                    </SkeletonPlaceholder>
                    :
                    title && <NetzerText style={styles.title} text={title} />
            }
            <Animated.FlatList
                data={isLoading ? [...Array(10)].map((_, i) => i) : data as any}
                renderItem={isLoading ? skeletonComponent : renderItem}
                refreshing={isLoading as boolean}
                refreshControl={<RefreshControl refreshing={isLoading as boolean} />}
                horizontal={horizontal}
                initialNumToRender={PAGE_SIZE}
                stickyHeaderHiddenOnScroll
                onEndReachedThreshold={0.5}
                ListFooterComponent={isLoadingMore ? <NetzerLoading /> : null}
                keyExtractor={keyExtractor}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                pagingEnabled
                ListEmptyComponent={
                    <View style={{ ...styles.emptyContainer, height: windowHeight - (windowHeight * 0.50) }}>
                        {EmptySection ? EmptySection : <NetzerListEmpty Image={EmptyBox} text="No hay nada para mostrar" />}
                    </View>
                }
                {...loadMoreDataAction && { onEndReached: _onEndReached }}
                {...props}
            />
        </View>
    );
};

const stylesComponent = (theme: ThemeI) => StyleSheet.create({
    title: {
        fontSize: FONT_SIZE.LARGE,
        fontWeight: '700',
        marginTop: 20,
        color: theme.colors.text
    },
    emptyContainer: {
        height: 250,
        justifyContent: "center"
    }
});
