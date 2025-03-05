import Image from 'next/image';
import img2 from "@/components/assest/2.png";

const ISMP = () => {
    return ( 
        <div className="max-w-7xl mx-auto py-16 px-6">
            <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="max-w-lg space-y-6">
                    <h1 className="text-3xl font-bold leading-tight">
                        Trusted Partnerships & Integrations Across Leading Platforms
                    </h1>
                    <p className="text-gray-300">
                        Our platform builds and maintains strong network partnerships and
                        integrations to help you unify your customer touchpoints and keep
                        pace with changes in the social landscape.
                    </p>
                </div>
                <div>
                    <Image src={img2} alt="Trusted Partnerships" width={500} height={500} className="rounded-lg shadow-lg" />
                </div>
            </div>

            <section className="mt-12">
                <h2 className="text-2xl font-semibold">Social Media Platforms & User Statistics</h2>
                <table className="w-full mt-6 border-collapse border border-gray-700">
                    <thead>
                        <tr className="bg-gray-800 text-white">
                            <th className="p-3 border border-gray-700">Platform</th>
                            <th className="p-3 border border-gray-700">User Base</th>
                            <th className="p-3 border border-gray-700">API Cost</th>
                            <th className="p-3 border border-gray-700">Main Countries</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="border border-gray-700">
                            <td className="p-3 border border-gray-700">Facebook</td>
                            <td className="p-3 border border-gray-700">2.9 Billion</td>
                            <td className="p-3 border border-gray-700">Varies (Free & Paid Plans)</td>
                            <td className="p-3 border border-gray-700">USA, India, Brazil, Indonesia</td>
                        </tr>
                        <tr className="border border-gray-700">
                            <td className="p-3 border border-gray-700">Instagram</td>
                            <td className="p-3 border border-gray-700">1.4 Billion</td>
                            <td className="p-3 border border-gray-700">Paid</td>
                            <td className="p-3 border border-gray-700">USA, India, Brazil, UK</td>
                        </tr>
                        <tr className="border border-gray-700">
                            <td className="p-3 border border-gray-700">TikTok</td>
                            <td className="p-3 border border-gray-700">1.7 Billion</td>
                            <td className="p-3 border border-gray-700">Paid</td>
                            <td className="p-3 border border-gray-700">China, USA, Indonesia, Mexico</td>
                        </tr>
                        <tr className="border border-gray-700">
                            <td className="p-3 border border-gray-700">Twitter (X)</td>
                            <td className="p-3 border border-gray-700">450 Million</td>
                            <td className="p-3 border border-gray-700">Paid</td>
                            <td className="p-3 border border-gray-700">USA, Japan, India, UK</td>
                        </tr>
                        <tr className="border border-gray-700">
                            <td className="p-3 border border-gray-700">LinkedIn</td>
                            <td className="p-3 border border-gray-700">930 Million</td>
                            <td className="p-3 border border-gray-700">Paid</td>
                            <td className="p-3 border border-gray-700">USA, India, UK, Canada</td>
                        </tr>
                        <tr className="border border-gray-700">
                            <td className="p-3 border border-gray-700">Reddit</td>
                            <td className="p-3 border border-gray-700">430 Million</td>
                            <td className="p-3 border border-gray-700">Paid</td>
                            <td className="p-3 border border-gray-700">USA, Canada, UK, Australia</td>
                        </tr>
                        <tr className="border border-gray-700">
                            <td className="p-3 border border-gray-700">YouTube</td>
                            <td className="p-3 border border-gray-700">2.5 Billion</td>
                            <td className="p-3 border border-gray-700">Paid</td>
                            <td className="p-3 border border-gray-700">USA, India, Brazil, Japan</td>
                        </tr>
                        <tr className="border border-gray-700">
                            <td className="p-3 border border-gray-700">Pinterest</td>
                            <td className="p-3 border border-gray-700">445 Million</td>
                            <td className="p-3 border border-gray-700">Paid</td>
                            <td className="p-3 border border-gray-700">USA, Germany, France, UK</td>
                        </tr>
                        <tr className="border border-gray-700">
                            <td className="p-3 border border-gray-700">Odnoklassniki</td>
                            <td className="p-3 border border-gray-700">71 Million</td>
                            <td className="p-3 border border-gray-700">Paid</td>
                            <td className="p-3 border border-gray-700">Russia, Ukraine, Kazakhstan</td>
                        </tr>
                        <tr className="border border-gray-700">
                            <td className="p-3 border border-gray-700">VKontakte</td>
                            <td className="p-3 border border-gray-700">100 Million</td>
                            <td className="p-3 border border-gray-700">Paid</td>
                            <td className="p-3 border border-gray-700">Russia, Belarus, Ukraine</td>
                        </tr>
                    </tbody>
                </table>
            </section>
        </div>
     );
}
 
export default ISMP;