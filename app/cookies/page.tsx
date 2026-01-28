import { getServerSiteConfig } from '@/lib/config-server'

export async function generateMetadata() {
    return {
        title: 'Cookie Policy',
    }
}

export default function CookiesPage() {
    const config = getServerSiteConfig()

    return (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <h1 className="font-heading font-bold text-4xl mb-8">Cookie Policy</h1>
            <div className="prose dark:prose-invert max-w-none">
                <p>Last updated: {new Date().toLocaleDateString()}</p>
                <p>
                    This is the Cookie Policy for {config.site.name}, accessible from {config.site.base_url}.
                </p>
                <h3>What Are Cookies</h3>
                <p>
                    As is common practice with almost all professional websites this site uses cookies, which are tiny files that are downloaded to your computer, to improve your experience. This page describes what information they gather, how we use it and why we sometimes need to store these cookies. We will also share how you can prevent these cookies from being stored however this may downgrade or 'break' certain elements of the sites functionality.
                </p>
                <h3>How We Use Cookies</h3>
                <p>
                    We use cookies for a variety of reasons detailed below. Unfortunately in most cases there are no industry standard options for disabling cookies without completely disabling the functionality and features they add to this site. It is recommended that you leave on all cookies if you are not sure whether you need them or not in case they are used to provide a service that you use.
                </p>
                <h3>Disabling Cookies</h3>
                <p>
                    You can prevent the setting of cookies by adjusting the settings on your browser (see your browser Help for how to do this). Be aware that disabling cookies will affect the functionality of this and many other websites that you visit. Disabling cookies will usually result in also disabling certain functionality and features of this site. Therefore it is recommended that you do not disable cookies.
                </p>
                <h3>The Cookies We Set</h3>
                <ul>
                    <li>
                        <strong>Site preferences cookies:</strong> In order to provide you with a great experience on this site we provide the functionality to set your preferences for how this site runs when you use it. In order to remember your preferences we need to set cookies so that this information can be called whenever you interact with a page is affected by your preferences.
                    </li>
                    <li>
                        <strong>Third Party Cookies:</strong> In some special cases we also use cookies provided by trusted third parties. The following section details which third party cookies you might encounter through this site.
                        <ul>
                            {config.analytics.google_analytics && <li>This site uses Google Analytics which is one of the most widespread and trusted analytics solution on the web for helping us to understand how you use the site and ways that we can improve your experience. These cookies may track things such as how long you spend on the site and the pages that you visit so we can continue to produce engaging content.</li>}
                            {config.ads.google_adsense && <li>The Google AdSense service we use to serve advertising uses a DoubleClick cookie to serve more relevant ads across the web and limit the number of times that a given ad is shown to you.</li>}
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    )
}
