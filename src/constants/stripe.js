const STRIPE_PUBLISHABLE =
  process.env.NODE_ENV === 'production'
    ? 'pk_live_MY_PUBLISHABLE_KEY'
    : 'pk_test_AXHfSXKtUAQRGim9e5FX2jQv';

export default STRIPE_PUBLISHABLE;
