import { createSelector } from 'reselect';

const selectShop = state => state.shop;

export const selectCollections = createSelector(
	[selectShop],
	shop => shop.collections
);

export const selectCollectionsForPreview = createSelector(
	[selectCollections],
	collections => Object.keys(collections).map(key => collections[key])
)

export const selectCollection = collectionUrlParam =>
	createSelector(
		[selectCollections],
		collections => collections[collectionUrlParam]
	);

export const selectCollectionItem = (itemName, collectionUrlParam) => {
	return createSelector(
		[selectCollection(collectionUrlParam)],
		collection => collection.items.find(item => item.name === itemName)
	)
}