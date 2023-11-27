import { GraphCommerceConfig } from '../../src/generated/config'
import { findPlugins } from '../../src/interceptors/findPlugins'

const projectRoot = `${process.cwd()}/examples/magento-graphcms`

it('finds plugins', () => {
  const fakeconfig = {
    googleRecaptchaKey: '123',
    googleAnalyticsId: '123',
  } as GraphCommerceConfig

  const [plugins, errors] = findPlugins(fakeconfig, projectRoot)
  const disabled = plugins.filter((p) => !p.enabled)
  const enabled = plugins.filter((p) => p.enabled)

  expect(errors).toMatchInlineSnapshot(`[]`)

  expect(enabled).toMatchInlineSnapshot(`
    [
      {
        "component": "AddProductsToCartForm",
        "enabled": true,
        "exported": "@graphcommerce/magento-product",
        "ifConfig": "googleAnalyticsId",
        "plugin": "@graphcommerce/googleanalytics/plugins/GaAddProductsToCartForm",
      },
      {
        "component": "CartStartCheckout",
        "enabled": true,
        "exported": "@graphcommerce/magento-cart",
        "ifConfig": "googleAnalyticsId",
        "plugin": "@graphcommerce/googleanalytics/plugins/GaCartStartCheckout",
      },
      {
        "component": "CartStartCheckoutLinkOrButton",
        "enabled": true,
        "exported": "@graphcommerce/magento-cart",
        "ifConfig": "googleAnalyticsId",
        "plugin": "@graphcommerce/googleanalytics/plugins/GaCartStartCheckoutLinkOrButton",
      },
      {
        "component": "FramerNextPages",
        "enabled": true,
        "exported": "@graphcommerce/framer-next-pages",
        "ifConfig": "googleAnalyticsId",
        "plugin": "@graphcommerce/googleanalytics/plugins/GaFramerNextPages",
      },
      {
        "component": "PaymentMethodButton",
        "enabled": true,
        "exported": "@graphcommerce/magento-cart-payment-method",
        "ifConfig": "googleAnalyticsId",
        "plugin": "@graphcommerce/googleanalytics/plugins/GaPaymentMethodButton",
      },
      {
        "component": "PaymentMethodContextProvider",
        "enabled": true,
        "exported": "@graphcommerce/magento-cart-payment-method",
        "ifConfig": "googleAnalyticsId",
        "plugin": "@graphcommerce/googleanalytics/plugins/GaPaymentMethodContextProvider",
      },
      {
        "component": "ProductListItem",
        "enabled": true,
        "exported": "@graphcommerce/magento-product",
        "ifConfig": "googleAnalyticsId",
        "plugin": "@graphcommerce/googleanalytics/plugins/GaProductListItem",
      },
      {
        "component": "ProductListItemsBase",
        "enabled": true,
        "exported": "@graphcommerce/magento-product",
        "ifConfig": "googleAnalyticsId",
        "plugin": "@graphcommerce/googleanalytics/plugins/GaProductListItemsBase",
      },
      {
        "component": "RemoveItemFromCartFab",
        "enabled": true,
        "exported": "@graphcommerce/magento-cart-items/RemoveItemFromCart/RemoveItemFromCartFab",
        "ifConfig": "googleAnalyticsId",
        "plugin": "@graphcommerce/googleanalytics/plugins/GaRemoveItemFromCart",
      },
      {
        "component": "ShippingMethodForm",
        "enabled": true,
        "exported": "@graphcommerce/magento-cart-shipping-method",
        "ifConfig": "googleAnalyticsId",
        "plugin": "@graphcommerce/googleanalytics/plugins/GaShippingMethodForm",
      },
      {
        "component": "UpdateItemQuantity",
        "enabled": true,
        "exported": "@graphcommerce/magento-cart-items/UpdateItemQuantity/UpdateItemQuantity",
        "ifConfig": "googleAnalyticsId",
        "plugin": "@graphcommerce/googleanalytics/plugins/GaUpdateItemQuantity",
      },
      {
        "component": "ProductPageMeta",
        "enabled": true,
        "exported": "@graphcommerce/magento-product",
        "ifConfig": "googleAnalyticsId",
        "plugin": "@graphcommerce/googleanalytics/plugins/GaViewItem",
      },
      {
        "component": "ApolloErrorAlert",
        "enabled": true,
        "exported": "@graphcommerce/ecommerce-ui",
        "ifConfig": "googleRecaptchaKey",
        "plugin": "@graphcommerce/googlerecaptcha/plugins/GrecaptchaApolloErrorAlert",
      },
      {
        "component": "ApolloErrorFullPage",
        "enabled": true,
        "exported": "@graphcommerce/ecommerce-ui",
        "ifConfig": "googleRecaptchaKey",
        "plugin": "@graphcommerce/googlerecaptcha/plugins/GrecaptchaApolloErrorFullPage",
      },
      {
        "component": "ApolloErrorSnackbar",
        "enabled": true,
        "exported": "@graphcommerce/ecommerce-ui",
        "ifConfig": "googleRecaptchaKey",
        "plugin": "@graphcommerce/googlerecaptcha/plugins/GrecaptchaApolloErrorSnackbar",
      },
      {
        "component": "GraphQLProvider",
        "enabled": true,
        "exported": "@graphcommerce/graphql",
        "ifConfig": "googleRecaptchaKey",
        "plugin": "@graphcommerce/googlerecaptcha/plugins/GrecaptchaGraphQLProvider",
      },
      {
        "enabled": true,
        "exported": "@graphcommerce/graphql/config",
        "func": "graphqlConfig",
        "plugin": "@graphcommerce/graphcms-ui/plugins/hygraphGraphqlConfig",
      },
      {
        "component": "PaymentMethodContextProvider",
        "enabled": true,
        "exported": "@graphcommerce/magento-cart-payment-method",
        "plugin": "@graphcommerce/magento-payment-included/plugins/AddIncludedMethods",
      },
      {
        "component": "GraphQLProvider",
        "enabled": true,
        "exported": "@graphcommerce/graphql",
        "plugin": "@graphcommerce/magento-wishlist/plugins/MagentoWishlistGraphqlProvider",
      },
      {
        "component": "GraphQLProvider",
        "enabled": true,
        "exported": "@graphcommerce/graphql",
        "plugin": "@graphcommerce/magento-cart/plugins/MagentoCartGraphqlProvider",
      },
      {
        "component": "GraphQLProvider",
        "enabled": true,
        "exported": "@graphcommerce/graphql",
        "plugin": "@graphcommerce/magento-customer/plugins/MagentoCustomerGraphqlProvider",
      },
      {
        "enabled": true,
        "exported": "@graphcommerce/graphql/config",
        "func": "graphqlConfig",
        "plugin": "@graphcommerce/magento-store/plugins/magentoStoreGraphqlConfig",
      },
      {
        "enabled": true,
        "exported": "@graphcommerce/graphql/config",
        "func": "graphqlConfig",
        "plugin": "@graphcommerce/magento-graphql/plugins/magentoGraphqlConfig",
      },
    ]
  `)
  expect(disabled).toMatchInlineSnapshot(`
    [
      {
        "component": "AddProductsToCartForm",
        "enabled": false,
        "exported": "@graphcommerce/magento-product",
        "ifConfig": "demoMode",
        "plugin": "./plugins/EnableCrosssellsPlugin",
      },
      {
        "component": "ProductListItem",
        "enabled": false,
        "exported": "@graphcommerce/magento-product",
        "ifConfig": "demoMode",
        "plugin": "@graphcommerce/demo-magento-graphcommerce/plugins/demo/DemoProductListItem",
      },
      {
        "component": "ProductListItemConfigurable",
        "enabled": false,
        "exported": "@graphcommerce/magento-product-configurable",
        "ifConfig": "demoMode",
        "plugin": "@graphcommerce/demo-magento-graphcommerce/plugins/demo/DemoProductListItemConfigurable",
      },
      {
        "component": "ProductListItemsBase",
        "enabled": false,
        "exported": "@graphcommerce/magento-product",
        "ifConfig": "demoMode",
        "plugin": "@graphcommerce/demo-magento-graphcommerce/plugins/demo/DemoProductListItemsBase",
      },
      {
        "component": "RowLinks",
        "enabled": false,
        "exported": "@graphcommerce/next-ui/Row/RowLinks/RowLinks",
        "ifConfig": "demoMode",
        "plugin": "@graphcommerce/demo-magento-graphcommerce/plugins/demo/DemoRowLinks",
      },
      {
        "component": "FramerNextPages",
        "enabled": false,
        "exported": "@graphcommerce/framer-next-pages",
        "ifConfig": "googleTagmanagerId",
        "plugin": "@graphcommerce/googletagmanager/plugins/GtagFramerNextPages",
      },
      {
        "component": "CartFab",
        "enabled": false,
        "exported": "@graphcommerce/magento-cart",
        "ifConfig": "compare",
        "plugin": "@graphcommerce/magento-compare/plugins/AddCompareFabNextToCart",
      },
      {
        "component": "ProductPageAddToCartActionsRow",
        "enabled": false,
        "exported": "@graphcommerce/magento-product",
        "ifConfig": "compare",
        "plugin": "@graphcommerce/magento-compare/plugins/AddCompareToProductPage",
      },
      {
        "component": "GraphQLProvider",
        "enabled": false,
        "exported": "@graphcommerce/graphql",
        "ifConfig": "compare",
        "plugin": "@graphcommerce/magento-compare/plugins/AddCompareTypePolicies",
      },
      {
        "component": "ProductListItem",
        "enabled": false,
        "exported": "@graphcommerce/magento-product",
        "ifConfig": "compare",
        "plugin": "@graphcommerce/magento-compare/plugins/CompareAbleProductListItem",
      },
    ]
  `)
})
