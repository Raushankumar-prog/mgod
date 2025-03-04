import Image from 'next/image';

const ISMP = () => {
    return ( 
        <div>
              <section className="max-w-6xl mx-auto py-12 text-center">
                    <h2 className="text-3xl font-semibold text-center mb-8 neon-text">
                      Integrated Social Media Platforms
                    </h2>
                    <div className="flex flex-wrap justify-center gap-10">
                      {/* Example Logos - Replace with actual logos and paths */}
                      <div className="w-20 h-20 relative">
                        <Image src="/facebook-logo.svg" alt="Facebook" fill sizes="100%"  />
                      </div>
                      <div className="w-20 h-20 relative">
                        <Image src="/instagram-logo.svg" alt="Instagram" fill sizes="100%" />
                      </div>
                      <div className="w-20 h-20 relative">
                        <Image src="/twitter-logo.svg" alt="Twitter" fill sizes="100%" />
                      </div>
                      <div className="w-20 h-20 relative">
                        <Image src="/linkedin-logo.svg" alt="LinkedIn" fill sizes="100%" />
                      </div>
                      <div className="w-20 h-20 relative">
                        <Image src="/youtube-logo.svg" alt="YouTube" fill sizes="100%" />
                      </div>
                      <div className="w-20 h-20 relative">
                        <Image src="/tiktok-logo.svg" alt="TikTok" fill sizes="100%" />
                      </div>
                      {/* Add more logos here */}
                    </div>
                  </section>
        </div>
     );
}
 
export default ISMP;