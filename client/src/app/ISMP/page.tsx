import Image from 'next/image';
import img2 from "@/components/assest/2.png";

const ISMP = () => {
    return ( 
        <div>
              <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto py-16 px-6">
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
        </div>
     );
}
 
export default ISMP;