import { getServerSiteConfig } from '@/lib/config-server'
import Link from 'next/link'

export async function generateMetadata() {
    return {
        title: 'Terms of Service',
    }
}

export default function TermsPage() {
    const config = getServerSiteConfig()

    return (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <h1 className="font-heading font-bold text-4xl mb-8">Terms of Service</h1>
            <div className="prose dark:prose-invert max-w-none">
                <p>Last updated: {new Date().toLocaleDateString()}</p>
                <h3>1. Terms</h3>
                <p>
                    By accessing the website at <Link href="/">{config.site.base_url}</Link>, you are agreeing to be bound by these terms of service, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
                </p>
                <h3>2. Use License</h3>
                <p>
                    Permission is granted to temporarily download one copy of the materials (information or software) on {config.site.name}'s website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
                </p>
                <ul>
                    <li>modify or copy the materials;</li>
                    <li>use the materials for any commercial purpose, or for any public display (commercial or non-commercial);</li>
                    <li>attempt to decompile or reverse engineer any software contained on {config.site.name}'s website;</li>
                    <li>remove any copyright or other proprietary notations from the materials; or</li>
                    <li>transfer the materials to another person or "mirror" the materials on any other server.</li>
                </ul>
                <p>
                    This license shall automatically terminate if you violate any of these restrictions and may be terminated by {config.site.name} at any time. Upon terminating your viewing of these materials or upon the termination of this license, you must destroy any downloaded materials in your possession whether in electronic or printed format.
                </p>
                <h3>3. Disclaimer</h3>
                <p>
                    The materials on {config.site.name}'s website are provided on an 'as is' basis. {config.site.name} makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
                </p>
                <h3>4. Limitations</h3>
                <p>
                    In no event shall {config.site.name} or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on {config.site.name}'s website, even if {config.site.name} or a {config.site.name} authorized representative has been notified orally or in writing of the possibility of such damage. Because some jurisdictions do not allow limitations on implied warranties, or limitations of liability for consequential or incidental damages, these limitations may not apply to you.
                </p>
                <h3>5. Accuracy of materials</h3>
                <p>
                    The materials appearing on {config.site.name}'s website could include technical, typographical, or photographic errors. {config.site.name} does not warrant that any of the materials on its website are accurate, complete or current. {config.site.name} may make changes to the materials contained on its website at any time without notice. However {config.site.name} does not make any commitment to update the materials.
                </p>
            </div>
        </div>
    )
}
