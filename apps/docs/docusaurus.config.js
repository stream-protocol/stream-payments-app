const config = {
    title: 'Shopify <> StreamPay',
    tagline: 'Enable Solana powered Payments on Shopify',
    favicon: 'img/favicon.ico',
    url: 'https://shopifydocs.solanapay.com',
    baseUrl: '/',
    organizationName: 'stream-protocol',
    projectName: 'stream-payments-app',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    i18n: {
        defaultLocale: 'en',
        locales: ['en'],
    },
    presets: [
        [
            '@docusaurus/preset-classic',
            {
                docs: {
                    sidebarPath: require.resolve('./sidebars.js'),
                    routeBasePath: '/',
                },
                blog: false,
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            },
        ],
    ],

    themeConfig: {
        navbar: {
            title: 'StreamPayments App',
            logo: {
                alt: 'StreamPay Logo',
                src: 'img/logo.png',
            },
            items: [
                {
                    href: 'https://github.com/stream-protocol/stream-payments-app',
                    label: 'GitHub',
                    position: 'right',
                },
            ],
        },
        colorMode: {
            defaultMode: 'dark',
            disableSwitch: false,
            respectPrefersColorScheme: false,
        },
    },
    markdown: {
        mermaid: true,
    },
    themes: ['@docusaurus/theme-mermaid'],
};

module.exports = config;
