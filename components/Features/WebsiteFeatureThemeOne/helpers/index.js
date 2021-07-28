export const currencyFormatter = (number) => {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',

    // These options are needed to round to whole numbers if that's what you want.
    // minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
    // maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
  });
  return formatter.format(number);
};

export const uniqueCategoryTitlesFromCards = (cardsData) => {
  const categories = {};
  cardsData.forEach((res) => {
    res.category.forEach((cat) => {
      categories[cat.title] = cat;
    });
  });
  return categories;
};
export const uniqueCategorySlugsFromCards = (cardsData) => {
  const categories = {};
  cardsData.forEach((res) => {
    res.category.forEach((cat) => {
      categories[cat.slug] = cat;
    });
  });
  return categories;
};

export const uniqueProductIdsFromCards = (cardsData) => {
  const cardsMapped = {};
  cardsData.forEach((res) => {
    cardsMapped[res.id] = res;
  });
  return cardsMapped;
};

export const totalQuantity = (products) =>
  products.reduce((total, amount) => total + amount, 0);

export const calcTotalPrice = (cart, cards) => {
  const eachProductTotalValue = Object.keys(cart).map(
    (res) => cards[res].price * cart[res]
  );
  return eachProductTotalValue.reduce((total, amount) => total + amount, 0);
};
